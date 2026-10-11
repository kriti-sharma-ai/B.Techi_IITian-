import type { SkillNotes } from "../../types";

// Text lessons for "Generative AI for Business Professionals". Tool-agnostic on purpose:
// the patterns work in ChatGPT, Claude, Gemini, Copilot or an API.

export const genaiNotes: SkillNotes = {
  skill: "genai-for-business",
  quickLabel: "Prompts",
  lessons: [
    {
      lecture: "Tokens, context and limits",
      blocks: [
        {
          kind: "points",
          items: [
            "A large language model (LLM) predicts the next piece of text, one **token** at a time. A token is a word fragment: in English, roughly ¾ of a word on average. Hindi and other Indic scripts usually take more tokens per word.",
            "The **context window** is everything the model can see at once: your instructions, pasted documents, the chat so far, and its own reply. Anything outside it doesn't exist for the model.",
            "Models have a **knowledge cutoff**. Without a search or document tool, they don't know last week's news, your company's numbers or today's prices.",
            "Output is **sampled**, so the same prompt can give different answers. Lower temperature (in API or settings) makes it more consistent.",
          ],
        },
        {
          kind: "table",
          head: ["Limit", "What it looks like", "Workaround"],
          rows: [
            ["Context length", "Ignores details from a long document's middle", "Ask about one section at a time; quote the relevant part"],
            ["Knowledge cutoff", "Confident but outdated facts", "Give it the source, or use a tool with web search, and check citations"],
            ["Arithmetic", "Small calculation slips in long answers", "Ask it to use code or a spreadsheet; verify totals"],
            ["Consistency", "Different answer each run", "Fix the format, give examples, lower temperature"],
          ],
        },
        {
          kind: "traps",
          items: ["Pasting confidential data into a consumer chatbot may send it to a third party. Check your organisation's approved tools and data rules first."],
        },
      ],
    },
    {
      lecture: "Where AI helps and where it fails",
      blocks: [
        {
          kind: "table",
          head: ["Strong at", "Weak at"],
          rows: [
            ["First drafts: emails, reports, job descriptions", "Facts it wasn't given (it may invent them)"],
            ["Summarising and restructuring text you provide", "Exact citations, page numbers, legal references"],
            ["Explaining a concept at different levels", "Precise maths over many steps without tools"],
            ["Writing and explaining code, SQL, formulas", "Knowing your company context unless told"],
            ["Brainstorming options and counter-arguments", "Judgement calls that need accountability"],
            ["Classifying and extracting from messy text", "Recent events without search"],
          ],
        },
        {
          kind: "points",
          items: [
            "**Hallucination** is fluent, confident, wrong output. It's most likely when you ask for specifics the model doesn't have: a statistic, a quote, a URL, a case name.",
            "A useful mental model: a very fast, well-read intern on their first day. Great output with clear instructions and context; needs review before anything goes to a customer.",
          ],
        },
        {
          kind: "tip",
          text: "Use AI where **checking is cheaper than creating**. Reviewing a draft email takes 30 seconds; verifying 40 invented statistics takes longer than researching them yourself.",
        },
      ],
    },
    {
      lecture: "Anatomy of a great prompt",
      blocks: [
        {
          kind: "table",
          head: ["Part", "What to write", "Example"],
          rows: [
            ["Role & audience", "Who's writing, for whom", "\"You're a financial analyst writing for a non-finance CEO.\""],
            ["Task", "One clear verb", "\"Summarise the attached quarterly results.\""],
            ["Context", "What the model can't know", "\"We're a D2C skincare brand; Q2 is usually our weakest quarter.\""],
            ["Constraints", "Length, tone, must/never", "\"Under 150 words. No jargon. Don't speculate beyond the data.\""],
            ["Format", "Exact shape of the output", "\"Three bullets, then one sentence of recommendation.\""],
            ["Examples", "One or two samples of good output", "\"Here's last quarter's summary in the style we like: …\""],
          ],
        },
        {
          kind: "code",
          title: "A reusable prompt template",
          code: `You are a {role} helping {audience}.

Task: {one sentence}

Context:
- {fact 1}
- {fact 2}

Material:
"""
{pasted text or data}
"""

Requirements:
- Length: {limit}
- Tone: {tone}
- If the material doesn't contain the answer, say "Not in the source" instead of guessing.

Output format:
{exact structure}`,
        },
        {
          kind: "points",
          items: [
            "Put long material between clear delimiters (`\"\"\"` or tags like `<report>…</report>`) so instructions and content don't blur.",
            "Ask for the reasoning or assumptions **separately** from the final answer when the task is analytical.",
            "Iterate: treat the first reply as a draft and give specific feedback (\"shorter, and lead with the risk\") instead of starting over.",
          ],
        },
        {
          kind: "traps",
          items: ["\"Make it better\" gives random changes. Say what better means: shorter, more formal, more specific, more numbers."],
        },
      ],
    },
    {
      lecture: "Structured outputs",
      blocks: [
        {
          kind: "points",
          items: [
            "When the output feeds a spreadsheet, a database or code, ask for a **fixed structure**: a table, CSV, or JSON with named fields.",
            "Most AI APIs can enforce a JSON schema (\"structured outputs\"), so every reply parses. In chat tools, give the schema and an example.",
          ],
        },
        {
          kind: "code",
          title: "Extracting fields from customer reviews",
          code: `For each review below, return one JSON object per line with exactly these fields:
{"review_id": string, "sentiment": "positive" | "neutral" | "negative",
 "topic": "delivery" | "quality" | "price" | "support" | "other",
 "refund_requested": true | false, "quote": string (≤ 15 words, copied from the review)}

Reviews:
"""
R101: Arrived two days late and the box was crushed. Want my money back.
R102: Good serum, a bit pricey for the size.
"""`,
        },
        {
          kind: "points",
          items: [
            "Closed lists of allowed values (`\"delivery\" | \"quality\" | …`) make results countable. Free-text categories come back in 40 spellings.",
            "Ask for a short **quote** from the source for each classification: it makes spot-checking fast.",
            "Run a sample of 30 by hand, compare with the AI's labels, and only then scale to 10,000.",
          ],
        },
        {
          kind: "traps",
          items: ["Without enforcement, models sometimes wrap JSON in prose or code fences. Ask for \"only the JSON, no explanation\" and validate before loading."],
        },
      ],
    },
    {
      lecture: "Prompt clinic",
      blocks: [
        {
          kind: "example",
          title: "Fix 1",
          q: "Weak prompt: \"Write a LinkedIn post about our new product.\" What's missing?",
          steps: [
            "No audience, product details, goal, tone or length.",
            "Better: \"Write a LinkedIn post (max 120 words) announcing [product], a [one-line description], for HR heads at Indian mid-size companies. Goal: demo sign-ups. Tone: confident, no hype words like 'revolutionary'. End with a question. Key facts: [3 bullets].\"",
          ],
          answer: "Add audience, facts, goal, tone, length and a call to action",
        },
        {
          kind: "example",
          title: "Fix 2",
          q: "Weak prompt: \"Analyse this sales data.\" (with a pasted table)",
          steps: [
            "\"Analyse\" has no target. State the decision.",
            "Better: \"I need to decide which two regions get extra sales staff next quarter. From the table, rank regions by revenue growth and by revenue per salesperson, show the calculation, and flag any region where the data looks incomplete.\"",
          ],
          answer: "Tie the analysis to a decision and ask for calculations you can check",
        },
        {
          kind: "example",
          title: "Fix 3",
          q: "The model keeps inventing statistics in a market-overview draft. What do you change?",
          steps: [
            "Provide the sources you trust and restrict it to them.",
            "Add: \"Use only figures from the material below. Where you'd want a figure we don't have, write [DATA NEEDED] instead.\"",
          ],
          answer: "Ground it in supplied sources and give it an explicit way to say \"unknown\"",
        },
        {
          kind: "tip",
          text: "Keep a personal prompt library: every prompt that worked well, with a note of what it's for. Reusing is faster than rewriting.",
        },
      ],
    },
    {
      lecture: "Research and summarisation",
      blocks: [
        {
          kind: "table",
          title: "Summary types",
          head: ["Need", "Prompt shape"],
          rows: [
            ["Executive summary", "\"3 bullets: what happened, why it matters, what we should do\""],
            ["Faithful digest", "\"Summarise each section in 2 sentences, quoting key numbers exactly\""],
            ["Comparison", "\"Table comparing documents A and B on price, terms, risks and deadlines\""],
            ["Critical read", "\"List the 5 weakest claims in this report and what evidence would test them\""],
            ["Meeting notes → actions", "\"Extract decisions, owners and due dates as a table; mark anything ambiguous\""],
          ],
        },
        {
          kind: "points",
          items: [
            "For research with AI search tools, ask for **sources with links**, open the important ones, and confirm the claim is actually on the page.",
            "Prefer primary sources (company filings, government data, the original study) over articles that summarise them.",
            "Ask \"what would change this conclusion?\" to surface weak spots before your manager does.",
          ],
        },
        {
          kind: "traps",
          items: ["Summaries lose nuance: \"may reduce costs in some settings\" becomes \"reduces costs\". For anything you'll quote, read the original sentence."],
        },
      ],
    },
    {
      lecture: "Data analysis with AI",
      blocks: [
        {
          kind: "points",
          items: [
            "AI assistants that can **run code** (data-analysis modes in chat tools, notebooks with AI help, Copilot in Excel) are far more reliable with numbers than models that only write text.",
            "Workflow: describe the data → ask for a plan → let it run code step by step → read the code → check one number by hand.",
            "Great uses: writing pandas/SQL/Excel formulas, explaining an error, cleaning messy columns, drafting charts, and turning results into a narrative.",
          ],
        },
        {
          kind: "code",
          title: "Prompt for an analysis assistant",
          code: `Attached: orders_2026.csv (order_id, order_date, city, category, revenue, discount).

1. Show df.info() and the number of missing values per column. Don't clean yet.
2. Propose a cleaning plan and wait for my OK.
3. Then compute monthly revenue by category and plot it.
4. Tell me the three biggest changes, with the numbers, and anything that looks like a data error.
Show the code for every step.`,
        },
        {
          kind: "traps",
          items: [
            "An AI can quietly drop rows, mis-parse dates (day/month swaps are common with Indian date formats) or average averages. Ask it to print row counts after every step.",
            "Never paste personal data (names, phone numbers, Aadhaar, salaries) into tools your organisation hasn't approved. Anonymise first.",
          ],
        },
      ],
    },
    {
      lecture: "Responsible AI checklist",
      blocks: [
        {
          kind: "table",
          head: ["Check", "Ask yourself"],
          rows: [
            ["Privacy", "Does this include personal or confidential data? Is the tool approved for it? India's DPDP Act 2023 applies to personal data."],
            ["Accuracy", "Have I verified every fact, number and citation that will leave my desk?"],
            ["Bias", "Could this output treat a group unfairly (hiring, lending, pricing)? Did I test with varied examples?"],
            ["Transparency", "Would the reader expect to be told AI was involved? Does policy require disclosure?"],
            ["Accountability", "Is a named human responsible for the final decision?"],
            ["IP and copyright", "Am I reproducing someone else's protected work or logo?"],
            ["Security", "Could pasted text contain instructions that hijack an AI agent (prompt injection)?"],
          ],
        },
        {
          kind: "points",
          items: [
            "Keep humans in the loop for decisions about people: hiring, firing, credit, medical or legal outcomes.",
            "Log what you used AI for in important work. If a problem appears later, you'll know where to look.",
          ],
        },
      ],
    },
    {
      lecture: "Automate a weekly report",
      blocks: [
        {
          kind: "points",
          title: "Brief",
          items: [
            "Pick a report someone makes by hand every week: sales summary, support ticket digest, social media metrics.",
            "Design an AI-assisted workflow that cuts the time by at least half while keeping a human review step.",
            "Deliverable: a one-page workflow diagram, the prompts you use, a before/after time estimate, and a sample output.",
          ],
        },
        {
          kind: "table",
          title: "A workflow that works",
          head: ["Step", "Who", "How"],
          rows: [
            ["1. Pull data", "Automated", "Export or scheduled query to a sheet"],
            ["2. Compute numbers", "Formulas or code", "Deterministic; never let the model do the arithmetic from text"],
            ["3. Draft narrative", "AI", "Template prompt fed the computed table"],
            ["4. Review", "Human", "Check every number against step 2; edit tone"],
            ["5. Send", "Human", "Email or Slack, with the data link"],
          ],
        },
        {
          kind: "tip",
          text: "The pattern that holds up: **numbers from code, words from AI, judgement from you.**",
        },
      ],
    },
  ],
  recap: [
    "LLMs predict text from what's in their context; give them the facts and they'll stop inventing them.",
    "A good prompt has role, task, context, constraints, format and an example.",
    "Ask for structured output when results feed a sheet or code, and validate a sample by hand.",
    "Let code do the arithmetic; let AI write and explain.",
    "Check privacy, accuracy, bias and accountability before AI output leaves your desk.",
  ],
};
