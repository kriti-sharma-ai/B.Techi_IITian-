# BTechi: User and System Flows

Diagrams are Mermaid; they render on GitHub and in most Markdown viewers.

---

## 1. Site map (launch build)

```mermaid
flowchart TD
    Home["/ Home"] --> Exam["/exam Exam Portal"]
    Home --> Qual["/qualifier Qualifier Pack"]
    Home --> Prac["/practice Practice"]
    Home --> PYQ["/pyqs PYQs"]
    Home --> Blog["/blog Blog"]

    Qual --> Mock["/qualifier/[mock] Mock exam"]
    Qual --> Cheat["/qualifier/notes Cheat sheets"]
    Cheat --> Sheet["/qualifier/notes/[sheet]"]

    Prac --> Session["/practice/session"]
    Prac --> PExam["/practice/exam"]

    PYQ --> Level["/pyqs/[level]"] --> Course["/pyqs/[level]/[course]"]
    PYQ --> Sheets["/pyqs/sheets Printable sheets"]

    Home --> Auth["/login · /signup · /reset-password"]
    Auth --> Dash["/dashboard"]
    Dash --> Saved["/saved"]
    Dash --> Profile["/profile Study profile"]

    Home -.-> Admin["/admin CMS (role-gated)"]

    subgraph Off["Off at launch (NEXT_PUBLIC_SECTIONS)"]
        Programs["/programs"] --> Subjects["/subjects/[course]"] --> Topic["/subjects/[course]/[topic]"]
        Notes["/notes"]
        Videos["/videos"]
        Books["/books"]
        Skills["/skills"]
        Search["/search"]
    end
```

## 2. Core journey: sit a mock exam (guest or signed in)

```mermaid
flowchart TD
    A[Land on Home] --> B{CTA}
    B -->|Start a mock exam| C["/exam"]
    B -->|Practise PYQs| P["/practice"]
    C --> D[Pick exam: End Term · Quiz 1 · Quiz 2 · Qualifier]
    D --> E[Pick year paper or random mock]
    E --> F[Combine 1-4 subjects]
    F --> G[Instructions screen]
    G --> H[Exam portal: timer, palette, calculator]
    H --> I{Answer / mark for review / next}
    I --> H
    H -->|Submit or timer hits zero| J[Grade against official answer key]
    J --> K[Result: score per section + overall, review each answer]
    K --> L{Signed in?}
    L -->|Yes| M[Attempt saved to account, shown on Dashboard]
    L -->|No| N[Save-progress prompt]
    N -->|Sign up| O[Create account, merge guest progress] --> M
    N -->|Not now| Q[Progress kept locally in this browser]
```

### Exam portal question states

```mermaid
stateDiagram-v2
    [*] --> NotVisited
    NotVisited --> NotAnswered: open question
    NotAnswered --> Answered: choose / type answer
    NotAnswered --> Marked: mark for review
    Answered --> AnsweredMarked: mark for review
    Marked --> AnsweredMarked: answer
    AnsweredMarked --> Answered: unmark
    Answered --> NotAnswered: clear response
    Answered --> [*]: submit
    AnsweredMarked --> [*]: submit (counted)
    NotAnswered --> [*]: submit (unattempted)
```

## 3. Qualifier Pack

```mermaid
flowchart TD
    A["/qualifier"] --> B[See syllabus: weeks 1-4 of Maths 1, Stats 1, CT, English 1]
    A --> C[Open cheat sheet] --> C2[Formulas, rules, traps · print]
    A --> D{Choose mock}
    D -->|Single subject| E[One-section mock]
    D -->|Full 4-course| F[Four-section mock]
    E --> G[Exam portal]
    F --> G
    G --> H[Score each course]
    H --> I{Every course >= 40 AND average >= 50?}
    I -->|Yes| J[Result: Clears the cutoff]
    I -->|No| K[Result: Not yet - shows which course / average fell short]
    K --> L[Suggest cheat sheet + Drill on weak course]
    J --> M[Suggest another paper]
```

## 4. Practice

```mermaid
flowchart TD
    A["/practice"] --> B[Filters: course, week, topic, difficulty, question type]
    B --> C{Mode}
    C -->|Quick practice| Q[10 questions]
    C -->|Drill| R[15 questions]
    C -->|Every question| S[All matching questions]
    C -->|Full test| T[A whole paper]
    C -->|Mock exam| U[Timed, exam portal]
    Q & R & S & T --> V["/practice/session"]
    U --> W["/practice/exam"]
    V --> X[Answer, then Why? explanation]
    X --> V
    V --> Y[Summary: score + weak topics]
    W --> Y
    Y --> Z[Practise weak topics again]
    Z --> B
```

Passage-based questions are drawn as one block so a passage is never split.

## 5. Onboarding and study profile

```mermaid
flowchart TD
    A["/signup"] --> B[Email + password via Supabase Auth]
    B --> C[Merge guest progress from this browser]
    C --> D[Study profile: pick level]
    D --> E[Pick enrolled courses]
    E --> F[Saved to account + mirrored to btechi-plan cookie]
    F --> G[Exam, Practice and PYQ lists scoped to these courses]
    G --> H["/dashboard: attempts, scores, saved items"]
```

Login: `/login` → `/dashboard`. Forgot password: `/reset-password` → email link → new password → `/login`.

## 6. Content publishing (Admin CMS)

```mermaid
flowchart LR
    A[Contributor uploads note / video / book / question] --> B[Draft]
    B -->|Submit| C[Pending review]
    C -->|Moderator: publish| D[Published]
    C -->|Moderator: request changes + note| E[Changes requested]
    E -->|Contributor edits + resubmits| C
    D -->|Moderator: unpublish| F[Unpublished]
    D --> G[Site revalidates immediately]
```

```mermaid
flowchart TD
    R[Anyone clicks the flag button] --> S[Report saved to reports table]
    S --> T["/admin/reports"]
    T --> U{Moderator}
    U -->|Fix| V[Edit resource or answer key]
    U -->|Flag| W[Mark outdated / unverified]
    U -->|Dismiss| X[Close report]
```

## 7. System flow

```mermaid
flowchart LR
    subgraph Browser
        UI[Next.js pages + client components]
        Store[lib/store.ts: progress, bookmarks, attempts]
    end
    subgraph Vercel
        RSC[Server components]
        SA[Server actions: admin/actions.ts]
        Files["/api/files/[id]"]
    end
    subgraph Supabase
        Auth[Auth]
        DB[(Postgres + RLS)]
        Bucket[(Storage: resources, private)]
    end

    UI --> RSC
    RSC -->|published_content via lib/cms.ts| DB
    RSC -->|seed merged in lib/content.ts| RSC
    Store <-->|lib/supabase/sync.ts| DB
    UI --> Auth
    UI --> SA --> DB
    UI --> Files -->|signed URL 1h read / 5m download| Bucket
    Files -->|log download| DB
```

- Every read runs under Row Level Security; roles live in `profiles.role`.
- Pages revalidate every 5 minutes, or immediately on publish.
- The `/admin` gate in the browser only decides what to show; the database decides what is allowed.

## 8. Navigation

| Desktop top nav | Resources menu | Account menu |
|---|---|---|
| Practice · Exam Portal · Qualifier Pack (+ Programs, Skills, Search when on) | Cheat sheets · Blog (+ Notes, Videos, Books when on) | Dashboard · Saved · Study profile · Theme toggle |

On mobile the same destinations move to a slide-in drawer and a bottom navigation bar.
