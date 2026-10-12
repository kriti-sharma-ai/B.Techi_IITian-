import type { ReactNode } from "react";
import Link from "next/link";
import { CONTACT_EMAIL, SITE_URL, YOUTUBE_URL } from "@/lib/utils";

// Copy for the footer pages. The legal pages describe what the code actually
// does (lib/store.ts, lib/supabase/sync.ts, supabase/schema.sql); update them,
// and LEGAL_UPDATED, whenever that changes.

export const LEGAL_UPDATED = "12 October 2026";

export type InfoPage = {
  title: string;
  description: string;
  /** Shown as "Last updated" on legal pages. */
  updated?: string;
  body: ReactNode;
  cta?: { label: string; href: string };
};

const Mail = ({ subject }: { subject?: string }) => (
  <a href={`mailto:${CONTACT_EMAIL}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`}>{CONTACT_EMAIL}</a>
);

const SITE = SITE_URL.replace(/^https?:\/\//, "");

export const PAGES: Record<string, InfoPage> = {
  about: {
    title: "About BTechi",
    description: "A structured academic platform where students learn, practise and prepare.",
    body: (
      <>
        <p>
          BTechi started as the <a href={YOUTUBE_URL} target="_blank" rel="noopener me">BTechi IITian YouTube channel</a>: AI,
          automation, tech and education explained simply. This platform is the next step, starting with the IIT Madras BS
          in Data Science and Applications and the BS in Management and Data Science.
        </p>
        <p>
          Instead of hunting through WhatsApp groups, Telegram channels and random Drive links, students get one
          structured place: Level → Course → Week → Topic, with notes, videos, books, practice and previous-year
          questions mapped to every topic.
        </p>
        <h2>What you'll find here</h2>
        <ul>
          <li>
            <strong>Courses</strong> organised week by week, from Foundation to Degree level.
          </li>
          <li>
            <strong>Previous-year questions</strong> for quizzes and end terms, which you can attempt in an exam-style
            portal and check against the answer keys.
          </li>
          <li>
            <strong>Practice</strong> sets with an explanation for every answer.
          </li>
          <li>
            <strong>Notes, videos and books</strong>, linked from the topic they belong to.
          </li>
          <li>
            <strong>Qualifier prep</strong>: mock exams and quick-revision notes.
          </li>
          <li>
            <strong>Progress tracking</strong>: bookmarks, completed topics and attempt history, saved to your account.
          </li>
        </ul>
        <h2>Free to use</h2>
        <p>
          BTechi is free. You can browse and practise without an account; signing up just keeps your progress safe
          across devices.
        </p>
        <h2>Not an official IIT Madras website</h2>
        <p>
          BTechi is an independent student resource. We are not affiliated with, endorsed by or run by IIT Madras.
          Always check deadlines, syllabus and rules on the official portal. See our <Link href="/disclaimer">Disclaimer</Link>.
        </p>
      </>
    ),
    cta: { label: "Explore programs", href: "/programs" },
  },

  contact: {
    title: "Contact",
    description: "Questions, feedback or partnership ideas.",
    body: (
      <>
        <p>We read every message and usually reply within 2–3 working days.</p>
        <h2>Problem with a resource?</h2>
        <p>
          The fastest route is the <strong>Report</strong> button on the resource itself (wrong answer, broken
          download, wrong syllabus, copyright issue and so on). It goes straight to our moderators' queue, and you
          don't need an account to use it.
        </p>
        <h2>Email</h2>
        <p>
          For everything else, write to <Mail />. To help us respond quickly, put one of these in the subject line:
        </p>
        <ul>
          <li>
            <strong>Account</strong>: sign-in problems, changing your email, deleting your account.
          </li>
          <li>
            <strong>Privacy</strong>: a request about your personal data (see the <Link href="/privacy">Privacy Policy</Link>).
          </li>
          <li>
            <strong>Copyright</strong>: a takedown request (see the <Link href="/copyright">Copyright policy</Link>).
          </li>
          <li>
            <strong>Grievance</strong>: a formal complaint (see the <Link href="/terms#grievances">Terms</Link>).
          </li>
          <li>
            <strong>Feedback</strong> or <strong>Partnership</strong>: ideas, collaborations, sponsorships.
          </li>
        </ul>
        <p>
          Please don't send passwords or answer-sheet screenshots that show other students' personal details. We will
          never ask for your password.
        </p>
        <h2>YouTube</h2>
        <p>
          You can also reach us through comments and community posts on the{" "}
          <a href={YOUTUBE_URL} target="_blank" rel="noopener me">BTechi IITian YouTube channel</a>.
        </p>
      </>
    ),
  },

  contribute: {
    title: "Contribute",
    description: "Help build the library: notes, questions, past papers and corrections.",
    body: (
      <>
        <p>
          BTechi gets better every time a student fixes a mistake or shares something useful. Here's how you can help.
        </p>
        <h2>Ways to contribute</h2>
        <ul>
          <li>
            <strong>Report mistakes.</strong> Spotted a wrong answer key or a broken link? Use the Report button on the
            resource. This is the single most useful thing you can do.
          </li>
          <li>
            <strong>Share notes and question banks.</strong> Contributor accounts can upload resources and submit
            questions. Email <Mail subject="Contributor access" /> from your account email to request contributor access.
          </li>
          <li>
            <strong>Send past papers.</strong> If you have a paper we're missing, email it to us with the course, exam
            (Quiz 1, Quiz 2 or End Term) and term.
          </li>
          <li>
            <strong>Request a course.</strong> Missing a program, level or subject? Tell us. We prioritise what students
            ask for most.
          </li>
        </ul>
        <h2>Before you submit</h2>
        <ul>
          <li>Only share work you wrote yourself, or material you have the right to share.</li>
          <li>Don't upload paid course material, copyrighted textbooks or anything from an ongoing exam.</li>
          <li>Remove personal details (roll numbers, phone numbers, email addresses) from screenshots and scans.</li>
          <li>Every answer needs a short explanation of <em>why</em> it's correct.</li>
        </ul>
        <p>
          Every contribution is reviewed by a moderator before it goes live, and we may edit it for accuracy and
          formatting. By submitting, you give BTechi permission to publish it as described in our{" "}
          <Link href="/terms#your-content">Terms of Use</Link>. Where you'd like credit, we'll credit you.
        </p>
      </>
    ),
    cta: { label: "Create an account", href: "/signup" },
  },

  privacy: {
    title: "Privacy Policy",
    description: "What we collect, why we collect it, and the choices you have.",
    updated: LEGAL_UPDATED,
    body: (
      <>
        <p>
          This policy explains how BTechi ("BTechi", "we", "us") handles personal data when you use {SITE} (the
          "Service"). We've tried to keep it short and specific to what the Service actually does. It is written with
          India's Digital Personal Data Protection Act, 2023 and the Information Technology Act, 2000 in mind.
        </p>

        <h2>The short version</h2>
        <ul>
          <li>You can use most of BTechi without an account. As a guest, your progress stays in your browser.</li>
          <li>If you sign up, we store your account details and learning progress so they sync across devices.</li>
          <li>We don't show ads, we don't use third-party analytics or advertising trackers, and we never sell your data.</li>
          <li>You can ask us to export or delete your data at any time.</li>
        </ul>

        <h2>What we collect</h2>
        <h3>Account information</h3>
        <p>When you create an account we collect:</p>
        <ul>
          <li>your name and email address;</li>
          <li>your password, which our authentication provider stores in hashed form (we can't see it);</li>
          <li>your university, program and level, if you choose them at sign-up.</li>
        </ul>
        <p>
          If you sign in with Google, GitHub or LinkedIn, that provider shares your name, email address and profile
          picture URL with us (GitHub also shares your username). We don't get access to your password, contacts,
          connections, repositories or any other data in those accounts.
        </p>
        <h3>Learning progress</h3>
        <p>To power your dashboard, bookmarks and practice history, we store:</p>
        <ul>
          <li>topics you mark complete and videos you've watched;</li>
          <li>bookmarks and saved resources;</li>
          <li>questions you attempt and whether you got them right;</li>
          <li>mock and qualifier attempts and their scores;</li>
          <li>notes you download and the courses and topics you recently visited;</li>
          <li>your study profile (your level and the courses you're taking this term).</li>
        </ul>
        <p>
          As a guest, this lives only in your browser's local storage. When you sign in, it is saved to your account
          and any guest progress in that browser is merged in. When you sign out, the copy in that browser is cleared.
        </p>
        <h3>Reports and messages</h3>
        <p>
          If you report a resource, we store the reason and any details you type, plus your account ID if you're signed
          in. If you email us, we keep the email and our reply.
        </p>
        <h3>Technical information</h3>
        <p>
          Like any website, our hosting and database providers automatically process technical data such as IP
          address, browser type, and request times, to deliver pages, keep the Service secure and diagnose errors. We
          don't use this to build profiles of you.
        </p>

        <h2 id="cookies">Cookies and local storage</h2>
        <p>We only use storage that the Service needs to work. There are no advertising or tracking cookies.</p>
        <ul>
          <li>
            <strong>Sign-in session</strong> (local storage): keeps you signed in.
          </li>
          <li>
            <strong>Progress</strong> (local storage): your bookmarks, attempts and study plan, so the site works
            offline-first and for guests.
          </li>
          <li>
            <strong>Study plan</strong> (<code>btechi-plan</code> cookie): your level and chosen courses, so pages can
            show your courses first.
          </li>
          <li>
            <strong>Preferences</strong> (local storage): light/dark theme, notes text size and revision ticks, and an
            in-progress mock exam, so a refresh doesn't lose your answers.
          </li>
        </ul>
        <p>
          You can clear these at any time from your browser settings. If you block them, signing in and saving
          progress won't work.
        </p>

        <h2>How we use your data</h2>
        <ul>
          <li>to create and secure your account, and to send sign-up confirmation and password-reset emails;</li>
          <li>to save and sync your progress and show your dashboard;</li>
          <li>to show the courses and resources relevant to your level;</li>
          <li>to review reports and fix incorrect or infringing content;</li>
          <li>to understand, in aggregate, which resources are most useful (for example, download counts);</li>
          <li>to respond to your messages, and to comply with the law.</li>
        </ul>
        <p>
          We process this data on the basis of your consent, which you give when you sign up or submit something, and
          you can withdraw it at any time by deleting your account. We don't use your data for automated decisions
          that affect you, and we don't sell it or share it for advertising.
        </p>

        <h2>Who we share it with</h2>
        <p>We share data only with service providers that help us run BTechi, and only for that purpose:</p>
        <ul>
          <li>
            <strong>Supabase</strong>: our database and authentication provider. It stores your account and progress.
          </li>
          <li>
            <strong>Our hosting provider</strong>: serves the website.
          </li>
          <li>
            <strong>Google</strong>: only if you choose "Continue with Google".
          </li>
          <li>
            <strong>GitHub</strong>: only if you choose "Continue with GitHub".
          </li>
          <li>
            <strong>LinkedIn</strong>: only if you choose "Continue with LinkedIn".
          </li>
          <li>
            <strong>YouTube</strong>: videos are embedded from youtube-nocookie.com and only load when you press play. Once
            they do, YouTube's own privacy policy applies.
          </li>
        </ul>
        <p>
          These providers may store data on servers outside India. We may also disclose data if required by law, or to
          protect the rights and safety of our users.
        </p>
        <p>
          Moderators and administrators can see account details (name, email, university, level and sign-in dates) to
          manage the platform and handle reports.
        </p>

        <h2>How long we keep it</h2>
        <ul>
          <li>Account and progress data: for as long as your account exists.</li>
          <li>When you delete your account, we delete your profile and progress within 30 days.</li>
          <li>Reports: kept to maintain content quality; if you delete your account, they are no longer linked to you.</li>
          <li>Emails: kept for up to 2 years, unless you ask us to delete them sooner.</li>
        </ul>

        <h2>Your rights</h2>
        <p>You can ask us to:</p>
        <ul>
          <li>tell you what personal data we hold about you and give you a copy;</li>
          <li>correct or update inaccurate data;</li>
          <li>delete your account and personal data;</li>
          <li>withdraw your consent; and</li>
          <li>nominate someone to exercise these rights on your behalf if you die or become incapacitated.</li>
        </ul>
        <p>
          Email <Mail subject="Privacy request" /> from the email address on your account. We'll respond within 30
          days. If you're not satisfied with our response, you can contact our{" "}
          <Link href="/terms#grievances">Grievance Officer</Link> and, after that, the Data Protection Board of India.
        </p>

        <h2>Security</h2>
        <p>
          Data is sent over HTTPS. Database access is restricted with row-level security, so each account can read and
          write only its own progress. Passwords are hashed by our authentication provider. No system is perfectly
          secure, so please use a strong, unique password. If we become aware of a breach affecting your data, we will
          notify you and the authorities as the law requires.
        </p>

        <h2>Children</h2>
        <p>
          BTechi is meant for students preparing for undergraduate programs, most of whom are 17 or older. If you're
          under 18, please use BTechi with your parent or guardian's consent; you can also use it as a guest without
          creating an account. If you believe a child has given us personal data without that consent, contact us and
          we'll delete it.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          If we change this policy, we'll update the date above. For significant changes, we'll also notify signed-in
          users on the site or by email before they take effect.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy: <Mail subject="Privacy" />.
        </p>
      </>
    ),
  },

  terms: {
    title: "Terms of Use",
    description: "The rules for using BTechi.",
    updated: LEGAL_UPDATED,
    body: (
      <>
        <p>
          These terms govern your use of {SITE} (the "Service"), run by BTechi ("we", "us"). By using the Service or
          creating an account, you agree to them and to our <Link href="/privacy">Privacy Policy</Link>. If you don't
          agree, please don't use the Service.
        </p>

        <h2>1. The Service</h2>
        <p>
          BTechi is a free study platform with course material, previous-year questions, practice, mock exams and
          progress tracking. It is an independent resource and is <strong>not affiliated with or endorsed by IIT
          Madras</strong> or any other institution (see the <Link href="/disclaimer">Disclaimer</Link>). We may add,
          change or remove features and content at any time.
        </p>

        <h2>2. Your account</h2>
        <ul>
          <li>Give accurate information when you sign up, and keep your password private.</li>
          <li>You're responsible for activity on your account. Tell us promptly if you think it's been compromised.</li>
          <li>One person per account. Don't create accounts for others or share yours.</li>
          <li>If you're under 18, you need your parent or guardian's consent to create an account.</li>
        </ul>

        <h2>3. Acceptable use</h2>
        <p>When using BTechi, you agree not to:</p>
        <ul>
          <li>use the Service to cheat in any live exam, quiz or assessment, or share questions from an ongoing exam;</li>
          <li>copy, scrape, resell or republish BTechi content commercially, or mirror the site;</li>
          <li>upload material you don't have the right to share, including paid course content or copyrighted books;</li>
          <li>upload anything unlawful, obscene, defamatory, hateful, harassing or that invades someone's privacy;</li>
          <li>impersonate anyone, or misrepresent your connection with any person or institution;</li>
          <li>upload malware, or try to break, overload or gain unauthorised access to the Service or other accounts;</li>
          <li>use bots or automated tools to access the Service, other than standard search-engine crawlers.</li>
        </ul>
        <p>
          This includes the content prohibited by Rule 3(1)(b) of the Information Technology (Intermediary Guidelines
          and Digital Media Ethics Code) Rules, 2021.
        </p>

        <h2 id="your-content">4. Content you submit</h2>
        <p>
          You keep ownership of notes, questions and other material you submit. By submitting it, you give BTechi a
          non-exclusive, worldwide, royalty-free licence to host, review, edit for accuracy and formatting, display and
          distribute it on the Service. You confirm you have the right to grant this licence. You can ask us to remove
          your contribution at any time; we'll do so within a reasonable time.
        </p>
        <p>
          All submissions are reviewed before publishing. We may decline or remove any content at our discretion.
        </p>

        <h2>5. Our content</h2>
        <p>
          BTechi's original content (explanations, notes, practice questions, the site design and software) belongs to
          BTechi or its contributors. You may use it for your personal, non-commercial study, and you may share links to
          it. Previous-year papers and third-party materials belong to their respective owners and are provided for
          educational reference; see our <Link href="/copyright">Copyright policy</Link>.
        </p>

        <h2>6. Accuracy</h2>
        <p>
          We work hard to keep answers and material correct, but mistakes happen. The Service is provided "as is" and
          "as available", without warranties of any kind. Always check against official course material, and use the
          Report button if you spot an error. Your exam results are your own responsibility.
        </p>

        <h2>7. Third-party links and embeds</h2>
        <p>
          The Service links to and embeds third-party content such as YouTube videos and publisher pages. We don't
          control them and aren't responsible for their content or practices.
        </p>

        <h2>8. Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, BTechi won't be liable for any indirect or consequential loss, or for
          loss of data, marks or opportunities, arising from your use of the Service. Because the Service is free, our
          total liability for any claim is limited to ₹1,000.
        </p>

        <h2>9. Suspension and termination</h2>
        <p>
          You can stop using BTechi and ask us to delete your account at any time. We may suspend or remove accounts
          that break these terms, and remove content that does. Where reasonable, we'll tell you why.
        </p>

        <h2 id="grievances">10. Grievances</h2>
        <p>
          In line with the Information Technology Act, 2000 and the rules made under it, you can raise a complaint about
          content on the Service, or about how we handle your data, with our Grievance Officer:
        </p>
        <p>
          <strong>Grievance Officer, BTechi</strong>
          <br />
          Email: <Mail subject="Grievance" />
        </p>
        <p>
          We'll acknowledge your complaint within 24 hours and aim to resolve it within 15 days. Please include a link
          to the content concerned and the reason for your complaint.
        </p>

        <h2>11. Changes</h2>
        <p>
          We may update these terms. We'll change the date above, and for significant changes we'll notify signed-in
          users. Continuing to use the Service after a change means you accept the updated terms.
        </p>

        <h2>12. Governing law</h2>
        <p>
          These terms are governed by the laws of India. Any dispute will be subject to the jurisdiction of the courts
          of India.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms: <Mail subject="Terms" />.
        </p>
      </>
    ),
  },

  copyright: {
    title: "Copyright Policy",
    description: "How we handle third-party content and takedown requests.",
    updated: LEGAL_UPDATED,
    body: (
      <>
        <p>
          BTechi respects the rights of authors, publishers and creators, and we expect our users to do the same. This
          page explains how third-party content appears on BTechi and how to ask us to remove something.
        </p>

        <h2>How we use third-party content</h2>
        <ul>
          <li>
            <strong>Videos</strong> are embedded from YouTube using its standard player, never downloaded or
            re-uploaded. Views count towards the creator's channel.
          </li>
          <li>
            <strong>Books</strong> are linked to the publisher or to free editions the author hosts. We do not host
            copyrighted books without permission.
          </li>
          <li>
            <strong>Previous-year questions</strong> are reproduced for students' private study, research and exam
            preparation, with the source and term shown on each paper. Solutions and explanations are written by
            BTechi or its contributors.
          </li>
          <li>
            <strong>Contributed notes</strong> are submitted by students who confirm they have the right to share them,
            and are reviewed before publishing.
          </li>
        </ul>

        <h2>Requesting removal</h2>
        <p>
          If you believe content on BTechi infringes your copyright, you can either use <strong>Report → Copyright
          issue</strong> on the resource, or email <Mail subject="Copyright takedown" /> with:
        </p>
        <ol>
          <li>your name and contact details;</li>
          <li>the work you own (or a link to it);</li>
          <li>the link(s) to the content on BTechi you believe infringes it;</li>
          <li>a statement that you believe in good faith that the use isn't authorised by you, your agent or the law;</li>
          <li>a statement that the information is accurate and that you're the owner or authorised to act for them.</li>
        </ol>
        <p>
          We'll acknowledge your request within 24 hours. Where the request is valid, we'll remove or disable access to
          the content, normally within 36 hours, and let the contributor know.
        </p>

        <h2>If your content was removed</h2>
        <p>
          If something you contributed was removed and you believe that was a mistake (for example, you own it or have
          permission), email us with the details and we'll review it.
        </p>

        <h2>Repeat infringement</h2>
        <p>We may close the accounts of users who repeatedly upload infringing material.</p>

        <h2>Using BTechi content</h2>
        <p>
          BTechi's original notes, explanations and practice questions are for personal, non-commercial study. Linking
          to them is always welcome. Please don't copy them to other websites, apps or paid courses without our
          written permission. See the <Link href="/terms">Terms of Use</Link>.
        </p>
      </>
    ),
  },

  disclaimer: {
    title: "Disclaimer",
    description: "BTechi is an independent study resource.",
    updated: LEGAL_UPDATED,
    body: (
      <>
        <h2>Not affiliated with IIT Madras</h2>
        <p>
          BTechi is an independent, student-focused platform. It is <strong>not affiliated with, endorsed by,
          sponsored by or run by</strong> the Indian Institute of Technology Madras or its BS programs. "IIT Madras",
          course names and course codes are used only to describe which course a resource relates to; they belong to
          their respective owners.
        </p>

        <h2>Always check official sources</h2>
        <p>
          Syllabus, deadlines, eligibility, grading formulas, exam patterns and fees can change. For anything that
          affects your enrolment or grades, rely on the official IIT Madras BS website, the student portal and official
          emails. Where BTechi shows grading formulas or calculators, they are estimates only.
        </p>

        <h2>Accuracy of answers</h2>
        <p>
          Answer keys and explanations are prepared carefully, and corrected when students report errors, but they
          may still contain mistakes. If you find one, please use the <strong>Report</strong> button so everyone
          benefits.
        </p>

        <h2>Academic integrity</h2>
        <p>
          BTechi is for learning and exam preparation. Don't use it during a live quiz or exam, or to share questions
          from an ongoing assessment. Doing so may break your institution's honour code and our{" "}
          <Link href="/terms">Terms of Use</Link>.
        </p>

        <h2>External content</h2>
        <p>
          Videos, books and links to other websites are provided for convenience. Their creators are responsible for
          their content, and we don't endorse any views expressed in them.
        </p>
      </>
    ),
  },

  blog: {
    title: "Blog",
    description: "Study strategies, exam guides and platform updates.",
    body: <p>We're working on our first posts. Check back soon.</p>,
    cta: { label: "Explore subjects meanwhile", href: "/subjects" },
  },

  "study-guides": {
    title: "Study guides",
    description: "Step-by-step guides for every semester.",
    body: (
      <p>
        Study guides are coming soon. For now, practise any course with real previous-year questions and the official
        answer keys.
      </p>
    ),
    cta: { label: "Start practising", href: "/practice" },
  },
};
