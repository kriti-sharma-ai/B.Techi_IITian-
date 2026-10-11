import type { SkillNotes } from "../../types";

// Text lessons for "Excel for Business". Formulas are for Microsoft 365 Excel; Google Sheets
// supports nearly all of them (XLOOKUP, FILTER, UNIQUE, LET), with differences noted.

export const excelNotes: SkillNotes = {
  skill: "excel-for-business",
  quickLabel: "Formulas",
  lessons: [
    {
      lecture: "Cell references done right",
      blocks: [
        {
          kind: "table",
          head: ["Reference", "When copied", "Use for"],
          rows: [
            ["`A2`", "Row and column both shift", "Row-by-row calculations"],
            ["`$A$2`", "Never shifts", "A single input: tax rate, exchange rate"],
            ["`$A2`", "Column fixed, row shifts", "Lookup key in column A, copied across"],
            ["`A$2`", "Row fixed, column shifts", "Header row values, copied down"],
          ],
        },
        {
          kind: "points",
          items: [
            "Press **F4** while the cursor is on a reference to cycle through `A2 → $A$2 → A$2 → $A2`.",
            "Better than `$B$1`: give the cell a **name**. Select it, type `GST_Rate` in the Name Box (left of the formula bar), press Enter. Now write `=C2*(1+GST_Rate)`.",
            "Keep every assumption (rates, targets, growth) in one clearly labelled **Inputs** area. Formulas should point at inputs, never contain hard-coded numbers.",
          ],
        },
        {
          kind: "example",
          q: "A multiplication grid: row 1 holds 1–10 in B1:K1, column A holds 1–10 in A2:A11. What single formula in B2 can be copied to the whole grid?",
          steps: ["The column header must stay in row 1: `B$1`.", "The row header must stay in column A: `$A2`."],
          answer: "`=$A2*B$1`",
        },
        {
          kind: "traps",
          items: [
            "A hard-coded number inside a formula (`=C2*1.18`) is the most common model error. When GST changes, you'll miss one.",
            "Copying a formula with relative references to the wrong place gives a plausible but wrong number. Spot-check with **Ctrl + [** (jump to precedents).",
          ],
        },
      ],
    },
    {
      lecture: "IF, IFS and logical tests",
      blocks: [
        {
          kind: "formulas",
          items: [
            { label: "Two outcomes", f: "`=IF(C2>=40, \"Pass\", \"Fail\")`" },
            { label: "Several bands", f: "`=IFS(C2>=90,\"A\", C2>=75,\"B\", C2>=40,\"C\", TRUE,\"F\")`", note: "`TRUE` as the last test is the catch-all." },
            { label: "All must hold", f: "`=IF(AND(B2=\"Pune\", C2>5000), \"Priority\", \"\")`" },
            { label: "Any may hold", f: "`=IF(OR(D2=\"Gold\", E2>10), \"Loyal\", \"\")`" },
            { label: "Count with a condition", f: "`=COUNTIFS(B:B, \"Pune\", C:C, \">5000\")`" },
            { label: "Sum with conditions", f: "`=SUMIFS(C:C, B:B, \"Pune\", D:D, \">=\"&DATE(2026,1,1))`", note: "The sum range comes first in SUMIFS, last in SUMIF." },
            { label: "Average with a condition", f: "`=AVERAGEIFS(C:C, B:B, \"Pune\")`" },
            { label: "Catch errors", f: "`=IFERROR(C2/D2, 0)`", note: "Use sparingly: it also hides errors you'd want to see." },
          ],
        },
        {
          kind: "tip",
          text: "For bands (tax slabs, commission tiers), a small lookup table plus `XLOOKUP(..., match_mode -1)` is easier to update than a nested IF.",
        },
        {
          kind: "traps",
          items: [
            "Text in conditions needs quotes; operators with a cell need joining: `\">\"&F1`, not `\">F1\"`.",
            "IFS returns `#N/A` if no test is TRUE. End with `TRUE, \"default\"`.",
          ],
        },
      ],
    },
    {
      lecture: "XLOOKUP and INDEX/MATCH",
      blocks: [
        {
          kind: "formulas",
          items: [
            { label: "Basic lookup", f: "`=XLOOKUP(A2, Products[ID], Products[Price])`" },
            { label: "With a fallback", f: "`=XLOOKUP(A2, Products[ID], Products[Price], \"Not found\")`" },
            { label: "Approximate (slab)", f: "`=XLOOKUP(B2, Slabs[From], Slabs[Rate], , -1)`", note: "match_mode −1: exact or the next smaller value. The slab table needs ascending lower bounds." },
            { label: "Return several columns", f: "`=XLOOKUP(A2, Emp[ID], Emp[[Name]:[Dept]])`", note: "Spills into adjacent cells." },
            { label: "Last match", f: "`=XLOOKUP(A2, Orders[Cust], Orders[Date], , 0, -1)`", note: "search_mode −1 searches from the bottom." },
            { label: "INDEX/MATCH", f: "`=INDEX(Products[Price], MATCH(A2, Products[ID], 0))`", note: "Works in every Excel version. The 0 means exact match." },
            { label: "Two-way lookup", f: "`=INDEX(Grid, MATCH(row_key, RowIDs, 0), MATCH(col_key, ColIDs, 0))`" },
          ],
        },
        {
          kind: "table",
          title: "Why XLOOKUP replaced VLOOKUP",
          head: ["", "VLOOKUP", "XLOOKUP"],
          rows: [
            ["Look left", "✗", "✓"],
            ["Default match", "Approximate (dangerous)", "Exact"],
            ["Insert a column", "Breaks the column number", "✓ unaffected"],
            ["Not-found value", "Needs IFERROR", "Built in"],
          ],
        },
        {
          kind: "traps",
          items: [
            "`#N/A` from a lookup that \"should\" match usually means a trailing space or a number stored as text. Fix with `TRIM()` or `VALUE()`.",
            "Lookups return the **first** match. If IDs repeat, you're silently getting one of several rows.",
          ],
        },
      ],
    },
    {
      lecture: "Tables and structured references",
      blocks: [
        {
          kind: "points",
          items: [
            "Click inside your data and press **Ctrl + T** to make it an Excel **Table**. Name it on the Table Design tab (e.g. `Sales`).",
            "Tables grow automatically: new rows are included in every formula, chart and pivot that uses them. No more `A2:A1000` ranges that miss row 1001.",
            "Formulas use names instead of addresses: `=SUM(Sales[Revenue])`, and `=[@Qty]*[@Price]` inside the table (`@` = this row). A calculated column fills itself down.",
          ],
        },
        {
          kind: "formulas",
          title: "Dynamic arrays that pair well with tables",
          items: [
            { label: "Unique list", f: "`=SORT(UNIQUE(Sales[City]))`" },
            { label: "Filter rows", f: "`=FILTER(Sales, (Sales[City]=\"Pune\")*(Sales[Revenue]>5000), \"None\")`", note: "`*` means AND, `+` means OR inside FILTER." },
            { label: "Top 5 by revenue", f: "`=TAKE(SORTBY(Sales, Sales[Revenue], -1), 5)`" },
            { label: "Summary in one formula", f: "`=GROUPBY(Sales[City], Sales[Revenue], SUM)`", note: "GROUPBY and PIVOTBY are in current Microsoft 365, not older versions." },
            { label: "Name intermediate steps", f: "`=LET(r, Sales[Revenue], c, Sales[Cost], SUM(r-c)/SUM(r))`" },
          ],
        },
        {
          kind: "traps",
          items: [
            "`#SPILL!` means something is blocking the cells a dynamic array needs. Clear the cells below or to the right.",
            "Merged cells and blank header names stop you creating a table. Unmerge and give every column a unique header.",
          ],
        },
      ],
    },
    {
      lecture: "Pivot tables",
      blocks: [
        {
          kind: "points",
          items: [
            "Insert → PivotTable, pick your Table as the source. Then drag fields into four areas: **Rows** (groups down), **Columns** (groups across), **Values** (what to calculate), **Filters**.",
            "Right-click a value → **Summarize Values By** to switch Sum/Count/Average; **Show Values As → % of Grand Total** or **% of Column Total** for shares.",
            "Right-click a date in Rows → **Group** → Months and Years for monthly trends.",
            "Add **Slicers** (PivotTable Analyze → Insert Slicer) for clickable filters that managers actually use.",
            "Data changed? **Refresh** (Alt + F5). Pivots don't update on their own.",
          ],
        },
        {
          kind: "table",
          title: "Which layout answers which question",
          head: ["Question", "Rows", "Columns", "Values"],
          rows: [
            ["Revenue by region", "Region", "", "Sum of Revenue"],
            ["Monthly revenue by category", "Order date (months)", "Category", "Sum of Revenue"],
            ["Orders per sales rep", "Rep", "", "Count of Order ID"],
            ["Region share of total", "Region", "", "Revenue as % of Grand Total"],
          ],
        },
        {
          kind: "formulas",
          items: [{ label: "Pull a pivot value", f: "`=GETPIVOTDATA(\"Revenue\", $A$3, \"Region\", \"South\")`", note: "Stays correct when the pivot's layout changes, unlike a plain cell reference." }],
        },
        {
          kind: "traps",
          items: [
            "Numbers stored as text show up as **Count** instead of Sum. Convert the source column to numbers.",
            "A blank row in the source data cuts the pivot range short. Using a Table as the source avoids this.",
          ],
        },
      ],
    },
    {
      lecture: "Charts that tell a story",
      blocks: [
        {
          kind: "table",
          head: ["Message", "Chart"],
          rows: [
            ["Change over time", "Line (column chart for ≤ 12 periods)"],
            ["Compare categories", "Horizontal bar, sorted largest first"],
            ["Part of a whole (≤ 5 parts)", "Stacked bar or 100% bar; pie only for 2–3 slices"],
            ["Relationship between two numbers", "Scatter"],
            ["How a total built up", "Waterfall (Insert → Waterfall)"],
            ["Actual vs target", "Bar with a target line, or bullet chart"],
          ],
        },
        {
          kind: "points",
          items: [
            "Put the **conclusion** in the chart title: \"South grew 24% while other regions were flat\", not \"Revenue by region\".",
            "Delete what doesn't help: gridlines, borders, 3-D effects, the legend if you can label lines directly.",
            "Highlight the one bar or line that matters in a strong colour; make the rest grey.",
            "Bars must start at zero. Lines may start elsewhere if the change is the story, but label the axis clearly.",
          ],
        },
        {
          kind: "tip",
          text: "Build one chart well, then right-click → **Save as Template**. Every future chart starts clean.",
        },
      ],
    },
    {
      lecture: "Model layout and conventions",
      blocks: [
        {
          kind: "table",
          title: "Sheet structure",
          head: ["Sheet", "Contains"],
          rows: [
            ["Cover", "Purpose, author, version, a short guide"],
            ["Inputs", "Every assumption, one per row, with units and source"],
            ["Calculations", "Revenue build, costs, schedules (capex, debt, working capital)"],
            ["Outputs", "Income statement, balance sheet, cash flow, key ratios, charts"],
            ["Checks", "Balance-sheet check, cash check, error flags"],
          ],
        },
        {
          kind: "table",
          title: "Colour code (the banking standard)",
          head: ["Font colour", "Means"],
          rows: [
            ["Blue", "Hard-coded input you may change"],
            ["Black", "Formula"],
            ["Green", "Link to another sheet"],
            ["Red", "Warning or check"],
          ],
        },
        {
          kind: "points",
          items: [
            "Time runs **left to right**, one column per year, with the same column meaning the same year on every sheet.",
            "One formula per row, copied across. If a row needs a different formula in one year, split it into two rows.",
            "No hard-coded numbers in formulas, no circular references unless deliberate and controlled, no merged cells.",
          ],
        },
        {
          kind: "tip",
          text: "Add a **Checks** row that must equal zero (assets − liabilities − equity). Format it red when it isn't. You'll catch errors the moment you make them.",
        },
      ],
    },
    {
      lecture: "Income statement",
      blocks: [
        {
          kind: "formulas",
          items: [
            { label: "Revenue", f: "Volume × Price  (or prior-year revenue × (1 + growth))" },
            { label: "Gross profit", f: "Revenue − Cost of goods sold" },
            { label: "EBITDA", f: "Gross profit − Operating expenses (employee, rent, marketing, other)" },
            { label: "EBIT", f: "EBITDA − Depreciation & amortisation" },
            { label: "PBT", f: "EBIT − Interest expense + Other income" },
            { label: "PAT (net income)", f: "PBT − Tax  (Tax = PBT × tax rate if PBT > 0)" },
            { label: "Margins", f: "Each line ÷ Revenue", note: "Forecast costs as % of revenue unless you know better." },
          ],
        },
        {
          kind: "example",
          q: "Revenue ₹500 cr, COGS 60% of revenue, opex ₹80 cr, D&A ₹20 cr, interest ₹10 cr, tax 25%. Find PAT.",
          steps: ["Gross profit = 500 − 300 = 200.", "EBITDA = 200 − 80 = 120.", "EBIT = 120 − 20 = 100.", "PBT = 100 − 10 = 90.", "Tax = 22.5, PAT = 90 − 22.5."],
          answer: "₹67.5 cr",
        },
        {
          kind: "traps",
          items: [
            "Tax on a loss isn't negative tax in a simple model. Use `=MAX(0, PBT*rate)`.",
            "Interest depends on debt, which depends on cash, which depends on interest: a circular reference. Calculate interest on **opening** debt balance to break the loop.",
          ],
        },
      ],
    },
    {
      lecture: "Balance sheet and cash flow",
      blocks: [
        {
          kind: "table",
          title: "How the three statements link",
          head: ["From", "To", "Link"],
          rows: [
            ["Income statement: PAT", "Cash flow", "Starting line of cash from operations"],
            ["Income statement: D&A", "Cash flow", "Added back (non-cash expense)"],
            ["Balance sheet: change in working capital", "Cash flow", "Increase in receivables/inventory uses cash; increase in payables provides cash"],
            ["Capex schedule", "Cash flow (investing) and balance sheet (fixed assets)", "Closing PP&E = Opening + Capex − D&A"],
            ["Cash flow: closing cash", "Balance sheet", "Cash on the asset side"],
            ["PAT − dividends", "Balance sheet", "Closing retained earnings = Opening + PAT − Dividends"],
          ],
        },
        {
          kind: "formulas",
          items: [
            { label: "Cash from operations", f: "PAT + D&A − Increase in working capital" },
            { label: "Free cash flow", f: "Cash from operations − Capex" },
            { label: "Closing cash", f: "Opening cash + CFO + CFI + CFF" },
            { label: "Receivables", f: "Revenue × [[Debtor days // 365]]" },
            { label: "Inventory", f: "COGS × [[Inventory days // 365]]" },
            { label: "Payables", f: "COGS × [[Creditor days // 365]]" },
            { label: "The check", f: "Total assets − (Liabilities + Equity) = 0" },
          ],
        },
        {
          kind: "traps",
          items: [
            "If the balance sheet doesn't balance, the error is almost always in the cash flow: a balance-sheet item that changed without a matching cash-flow line.",
            "An **increase** in receivables is a **negative** cash-flow adjustment. Sign errors here are the classic mistake.",
          ],
        },
      ],
    },
    {
      lecture: "Scenario analysis",
      blocks: [
        {
          kind: "points",
          items: [
            "Sensitivity: change **one** input and watch an output. Scenario: change **several** inputs together into a consistent story (base, bull, bear).",
            "Keep scenarios on the Inputs sheet as columns: Base, Upside, Downside. A selector cell picks which one the model uses.",
          ],
        },
        {
          kind: "formulas",
          items: [
            { label: "Scenario switch", f: "`=CHOOSE($C$2, D5, E5, F5)`", note: "C2 holds 1, 2 or 3 (use Data Validation to make it a dropdown)." },
            { label: "Or by name", f: "`=XLOOKUP($C$2, $D$4:$F$4, D5:F5)`" },
            { label: "One-variable table", f: "Data → What-If Analysis → Data Table, column input = growth rate" },
            { label: "Two-variable table", f: "Same menu, row input = growth, column input = margin" },
            { label: "Goal Seek", f: "Data → What-If → Goal Seek: set PAT to 100 by changing price" },
          ],
        },
        {
          kind: "example",
          q: "Your base case has 12% growth and 18% EBITDA margin. What two-way table would you show a CFO worried about a slowdown?",
          steps: ["Rows: growth 4%, 8%, 12%, 16%.", "Columns: margin 14%, 16%, 18%, 20%.", "Output: EBITDA or valuation in each cell; highlight the base case."],
          answer: "Growth × margin data table around the base case",
        },
        {
          kind: "traps",
          items: ["Data Tables recalculate the whole model for every cell and slow big workbooks. Set calculation to **Automatic except for data tables** while building."],
        },
      ],
    },
    {
      lecture: "Build your model",
      blocks: [
        {
          kind: "points",
          title: "Brief",
          items: [
            "Build a 5-year forecast model for a listed Indian company you know (a retailer, FMCG or IT services firm works well). Take three years of history from its annual report.",
            "Inputs sheet: revenue growth, gross margin, opex % of revenue, D&A, capex % of revenue, debtor/inventory/creditor days, tax rate, dividend payout.",
            "Outputs: income statement, balance sheet, cash flow, and five ratios (revenue growth, EBITDA margin, ROE, net debt/EBITDA, FCF).",
            "Add a scenario switch with base/upside/downside and one two-way data table.",
          ],
        },
        {
          kind: "table",
          title: "Self-review checklist",
          head: ["Check", "Pass if"],
          rows: [
            ["Balance check", "Zero in every forecast year"],
            ["No hard-codes", "Ctrl + ~ shows formulas: no numbers typed inside formulas outside Inputs"],
            ["Consistent columns", "Column F means the same year on every sheet"],
            ["Sanity", "Margins and growth stay within ranges the company has actually achieved"],
            ["Readable", "Someone else can change one input and understand what moved"],
          ],
        },
        {
          kind: "tip",
          text: "Write a one-paragraph investment view on the Cover sheet. A model that ends in an opinion is a portfolio piece; one that doesn't is an exercise.",
        },
      ],
    },
  ],
  recap: [
    "Inputs live in one place, in blue; formulas reference them by name or absolute reference.",
    "XLOOKUP with an exact match is the default lookup; INDEX/MATCH when you need older-version compatibility.",
    "Turn data into Tables (Ctrl + T) so formulas, pivots and charts grow with the data.",
    "Pivot tables answer most \"by X\" questions in seconds; refresh them when the data changes.",
    "In a three-statement model, cash flow links the income statement to the balance sheet, and the balance check must be zero.",
    "Show scenarios as consistent stories and sensitivities as tables around the base case.",
  ],
};
