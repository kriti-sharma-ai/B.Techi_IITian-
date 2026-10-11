import type { SkillNotes } from "../../types";

// Text lessons for "Financial Statement Analysis and Valuation". Indian conventions:
// Ind AS statements, ₹ crore, financial year April–March.

export const financialAnalysisNotes: SkillNotes = {
  skill: "financial-analysis-valuation",
  quickLabel: "Formulas",
  lessons: [
    {
      lecture: "Annual report walkthrough",
      blocks: [
        {
          kind: "table",
          title: "Where to find what in an Indian annual report",
          head: ["Section", "Read it for"],
          rows: [
            ["Chairman's / MD's letter", "Management's story and priorities (optimistic by design)"],
            ["Management Discussion & Analysis (MD&A)", "Segment performance, industry view, risks"],
            ["Standalone vs consolidated statements", "Use **consolidated**: it includes subsidiaries"],
            ["Notes to accounts", "The real detail: debt terms, revenue breakdown, contingent liabilities"],
            ["Related party transactions", "Money moving between the company and promoters' entities"],
            ["Auditor's report", "Any qualification, emphasis of matter or key audit matter"],
            ["Corporate governance report", "Board independence, promoter pledging, remuneration"],
          ],
        },
        {
          kind: "points",
          items: [
            "Download reports from the company's investor-relations page or the BSE/NSE filings. Also read the latest **quarterly results** and **earnings-call transcript** for recent context.",
            "Read three years side by side. A single year tells you almost nothing; trends tell you everything.",
            "Indian companies report in the April–March financial year: **FY26** means April 2025 to March 2026.",
          ],
        },
        {
          kind: "traps",
          items: ["Adjusted or \"underlying\" profit figures in presentations are management's own definitions. Reconcile them to the audited statements."],
        },
      ],
    },
    {
      lecture: "Linking the three statements",
      blocks: [
        {
          kind: "table",
          head: ["Statement", "Answers", "Covers"],
          rows: [
            ["Profit & loss (income statement)", "Did we make money?", "A period (the year)"],
            ["Balance sheet", "What do we own and owe?", "A point in time (31 March)"],
            ["Cash flow statement", "Where did cash actually come from and go?", "A period"],
          ],
        },
        {
          kind: "formulas",
          items: [
            { label: "Accounting equation", f: "Assets = Liabilities + Equity" },
            { label: "Retained earnings", f: "Closing = Opening + Profit after tax − Dividends" },
            { label: "Cash from operations", f: "PAT + non-cash expenses (D&A) − increase in working capital" },
            { label: "Fixed assets", f: "Closing = Opening + Capex − Depreciation − Disposals" },
            { label: "Cash", f: "Closing = Opening + CFO + CFI + CFF" },
          ],
        },
        {
          kind: "example",
          q: "A company books ₹100 cr of sales on credit in March; none is collected by 31 March. What happens on each statement?",
          steps: [
            "P&L: revenue +₹100 cr (accrual accounting).",
            "Balance sheet: trade receivables +₹100 cr.",
            "Cash flow: CFO shows the profit but subtracts the ₹100 cr increase in receivables, so cash is unchanged.",
          ],
          answer: "Profit up, receivables up, cash unchanged",
        },
        {
          kind: "tip",
          text: "Profit is an opinion; cash is a fact. If profit grows for years but cash from operations doesn't, find out why.",
        },
      ],
    },
    {
      lecture: "Profitability and returns",
      blocks: [
        {
          kind: "formulas",
          items: [
            { label: "Gross margin", f: "[[Revenue − COGS // Revenue]]" },
            { label: "EBITDA margin", f: "[[EBITDA // Revenue]]" },
            { label: "Net margin", f: "[[PAT // Revenue]]" },
            { label: "ROE", f: "[[PAT // Average shareholders' equity]]" },
            { label: "ROCE", f: "[[EBIT // Capital employed]]", note: "Capital employed = Equity + Debt (or Total assets − Current liabilities)." },
            { label: "DuPont", f: "ROE = Net margin × Asset turnover × Equity multiplier", note: "= [[PAT // Sales]] × [[Sales // Assets]] × [[Assets // Equity]]" },
            { label: "Asset turnover", f: "[[Revenue // Average total assets]]" },
          ],
        },
        {
          kind: "example",
          q: "Two companies both have 20% ROE. A: net margin 10%, asset turnover 1.0, equity multiplier 2.0. B: net margin 4%, turnover 2.5, multiplier 2.0. What does DuPont tell you?",
          steps: ["A: 10% × 1.0 × 2.0 = 20% (pricing power, like a branded consumer company).", "B: 4% × 2.5 × 2.0 = 20% (volume and efficiency, like a retailer)."],
          answer: "Same ROE, different engines: A from margins, B from asset turnover",
        },
        {
          kind: "traps",
          items: [
            "High ROE driven by high debt (equity multiplier) is riskier than ROE from margins or turnover.",
            "Compare margins only within an industry. A 6% net margin is excellent for a grocer and weak for a software firm.",
          ],
        },
      ],
    },
    {
      lecture: "Liquidity and leverage",
      blocks: [
        {
          kind: "formulas",
          items: [
            { label: "Current ratio", f: "[[Current assets // Current liabilities]]" },
            { label: "Quick ratio", f: "[[Current assets − Inventory // Current liabilities]]" },
            { label: "Debtor days", f: "[[Trade receivables // Revenue]] × 365" },
            { label: "Inventory days", f: "[[Inventory // COGS]] × 365" },
            { label: "Creditor days", f: "[[Trade payables // COGS]] × 365" },
            { label: "Cash conversion cycle", f: "Debtor days + Inventory days − Creditor days" },
            { label: "Debt-to-equity", f: "[[Total debt // Shareholders' equity]]" },
            { label: "Net debt / EBITDA", f: "[[Debt − Cash // EBITDA]]", note: "Years of operating profit needed to repay debt. Above ~3× deserves scrutiny for most industries." },
            { label: "Interest coverage", f: "[[EBIT // Interest expense]]", note: "Below ~2× is a warning sign." },
          ],
        },
        {
          kind: "example",
          q: "Receivables ₹150 cr, revenue ₹900 cr; inventory ₹120 cr, COGS ₹600 cr; payables ₹100 cr. Cash conversion cycle?",
          steps: ["Debtor days = 150/900 × 365 ≈ 61.", "Inventory days = 120/600 × 365 = 73.", "Creditor days = 100/600 × 365 ≈ 61.", "CCC = 61 + 73 − 61."],
          answer: "≈ 73 days",
        },
        {
          kind: "traps",
          items: ["Rising debtor days with rising revenue can mean the company is buying growth with easy credit, or booking sales that won't be collected."],
        },
      ],
    },
    {
      lecture: "Ratio quiz",
      blocks: [
        {
          kind: "example",
          title: "Question 1",
          q: "PAT ₹80 cr, opening equity ₹380 cr, closing equity ₹420 cr. ROE?",
          steps: ["Average equity = (380 + 420) / 2 = 400.", "ROE = 80 / 400."],
          answer: "20%",
        },
        {
          kind: "example",
          title: "Question 2",
          q: "EBIT ₹60 cr, interest ₹25 cr. Interest coverage, and is it comfortable?",
          steps: ["60 / 25 = 2.4×."],
          answer: "2.4×: thin; a 30–40% drop in EBIT would put it under 2×",
        },
        {
          kind: "example",
          title: "Question 3",
          q: "Net margin rose from 8% to 11% but cash from operations fell. Name two things to check.",
          steps: ["Working capital: did receivables or inventory balloon?", "One-offs: did other income or an asset sale boost profit?"],
          answer: "Working-capital build-up and one-off gains",
        },
        {
          kind: "example",
          title: "Question 4",
          q: "Company X: debt ₹500 cr, cash ₹200 cr, EBITDA ₹150 cr. Net debt/EBITDA?",
          steps: ["Net debt = 500 − 200 = 300.", "300 / 150."],
          answer: "2.0×",
        },
      ],
    },
    {
      lecture: "Time value of money",
      blocks: [
        {
          kind: "formulas",
          items: [
            { label: "Future value", f: "FV = PV × (1 + r)^{n}" },
            { label: "Present value", f: "PV = [[FV // (1 + r)^{n}]]" },
            { label: "PV of an annuity", f: "PV = C × [[1 − (1 + r)^{−n} // r]]" },
            { label: "Perpetuity", f: "PV = [[C // r]]" },
            { label: "Growing perpetuity", f: "PV = [[C_{1} // r − g]]  (r > g)" },
            { label: "CAGR", f: "[[End // Start]]^{1/n} − 1" },
            { label: "Rule of 72", f: "years to double ≈ [[72 // rate %]]" },
          ],
        },
        {
          kind: "code",
          title: "Excel equivalents",
          code: `=FV(rate, nper, pmt, [pv])
=PV(rate, nper, pmt, [fv])
=NPV(rate, cashflows_from_year_1) + cashflow_year_0
=XNPV(rate, cashflows, dates)      ' irregular dates
=IRR(cashflows)  /  =XIRR(cashflows, dates)
=PMT(rate/12, months, -loan)       ' EMI`,
        },
        {
          kind: "example",
          q: "What's ₹1,00,000 received in 5 years worth today at a 10% discount rate?",
          steps: ["PV = 1,00,000 / 1.1^{5} = 1,00,000 / 1.6105."],
          answer: "≈ ₹62,092",
        },
        {
          kind: "traps",
          items: ["Excel's `NPV` assumes the first cash flow is one period away. Add the year-0 cash flow separately."],
        },
      ],
    },
    {
      lecture: "DCF step by step",
      blocks: [
        {
          kind: "formulas",
          items: [
            { label: "Free cash flow to firm", f: "FCFF = EBIT × (1 − t) + D&A − Capex − ΔNWC" },
            { label: "WACC", f: "[[E // D + E]] × k_{e} + [[D // D + E]] × k_{d} × (1 − t)" },
            { label: "Cost of equity (CAPM)", f: "k_{e} = r_{f} + β × (equity risk premium)" },
            { label: "Terminal value", f: "TV = [[FCFF_{n} × (1 + g) // WACC − g]]" },
            { label: "Enterprise value", f: "EV = Σ [[FCFF_{t} // (1 + WACC)^{t}]] + [[TV // (1 + WACC)^{n}]]" },
            { label: "Equity value", f: "EV − Net debt (− minority interest)" },
            { label: "Value per share", f: "[[Equity value // Diluted shares]]" },
          ],
        },
        {
          kind: "table",
          title: "The steps",
          head: ["Step", "Do", "Sanity check"],
          rows: [
            ["1", "Forecast revenue and margins for 5–10 years", "Growth fades toward the industry's; margins within history"],
            ["2", "Forecast capex and working capital", "Capex ≥ D&A for a growing company"],
            ["3", "Compute FCFF each year", "Compare with history"],
            ["4", "Estimate WACC", "Use Indian risk-free (10-year G-sec) and a market-implied premium"],
            ["5", "Terminal value with g ≤ long-run nominal GDP growth", "TV usually 60–80% of EV; much more means the forecast years do little"],
            ["6", "Discount, bridge to equity, divide by shares", "Compare with market price and multiples"],
          ],
        },
        {
          kind: "example",
          q: "FCFF in year 5 is ₹100 cr, terminal growth 5%, WACC 11%. Terminal value at year 5, and its present value?",
          steps: ["TV = 100 × 1.05 / (0.11 − 0.05) = 105 / 0.06 = ₹1,750 cr.", "PV = 1,750 / 1.11^{5} = 1,750 / 1.685."],
          answer: "TV ₹1,750 cr; PV ≈ ₹1,039 cr",
        },
        {
          kind: "traps",
          items: [
            "Value is extremely sensitive to WACC − g. Moving g from 5% to 6% here raises TV from ₹1,750 cr to ₹2,120 cr. Always show a WACC × g sensitivity table.",
            "Discounting FCFF (firm cash flows) uses WACC; discounting FCFE (equity cash flows) uses the cost of equity. Don't mix them.",
          ],
        },
      ],
    },
    {
      lecture: "Multiples",
      blocks: [
        {
          kind: "table",
          head: ["Multiple", "Formula", "Good for"],
          rows: [
            ["P/E", "Price ÷ EPS", "Profitable, stable companies; quick market comparison"],
            ["EV/EBITDA", "Enterprise value ÷ EBITDA", "Comparing companies with different debt levels"],
            ["EV/Sales", "EV ÷ Revenue", "Early-stage or loss-making companies"],
            ["P/B", "Price ÷ Book value per share", "Banks and NBFCs"],
            ["PEG", "P/E ÷ EPS growth %", "Adjusting P/E for growth"],
          ],
        },
        {
          kind: "points",
          items: [
            "Pick 5–8 **truly comparable** peers: same industry, similar size, growth and margins. Use the median, not the mean.",
            "Use forward (next 12 months) earnings for growing companies; trailing for stable ones. Be consistent across peers.",
            "Multiples and DCF should roughly agree. If they don't, find out which assumption explains the gap.",
          ],
        },
        {
          kind: "example",
          q: "Peers trade at a median 14× EV/EBITDA. Your company: EBITDA ₹200 cr, net debt ₹400 cr, 10 crore shares. Implied value per share?",
          steps: ["EV = 14 × 200 = ₹2,800 cr.", "Equity = 2,800 − 400 = ₹2,400 cr.", "Per share = 2,400 / 10."],
          answer: "₹240",
        },
        {
          kind: "traps",
          items: ["Don't pair an enterprise-value numerator with an equity denominator (EV/PAT) or vice versa (Price/EBITDA)."],
        },
      ],
    },
    {
      lecture: "Value a listed company",
      blocks: [
        {
          kind: "points",
          title: "Brief",
          items: [
            "Pick one listed Indian company in an industry you understand. Download three years of annual reports and the latest quarterly results.",
            "Write a 2–3 page equity note: business overview, ratio analysis (DuPont + working capital + leverage), a 5-year DCF, a peer multiples table, and a valuation range with a clear view (undervalued / fair / overvalued) and the key risk.",
            "Include a WACC × terminal-growth sensitivity table and a one-line \"what would make me wrong\".",
          ],
        },
        {
          kind: "table",
          title: "Checklist",
          head: ["Section", "Must include"],
          rows: [
            ["Business", "How the company makes money, in two sentences a friend would understand"],
            ["History", "Revenue, EBITDA margin, ROCE, CFO/PAT for three years"],
            ["DCF", "Explicit assumptions with reasons; TV share of EV stated"],
            ["Multiples", "5+ peers, median used, chosen multiple justified"],
            ["View", "Range, not a single number; main risk named"],
          ],
        },
        {
          kind: "tip",
          text: "This is a learning exercise, not investment advice, and your note should say so. Interviewers love seeing one, especially for finance and consulting roles.",
        },
      ],
    },
  ],
  recap: [
    "Read consolidated statements, three years side by side, starting with the notes.",
    "Profit is an opinion, cash is a fact: compare PAT with cash from operations every year.",
    "Decompose ROE with DuPont to see whether margins, turnover or debt drive it.",
    "A DCF is FCFF discounted at WACC plus a terminal value; always show a WACC × g sensitivity.",
    "Use multiples from truly comparable peers, and check that DCF and multiples tell a consistent story.",
  ],
};
