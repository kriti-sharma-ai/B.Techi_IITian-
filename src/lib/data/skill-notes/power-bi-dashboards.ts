import type { SkillNotes } from "../../types";

// Text lessons for "Power BI Dashboards for Decision-Makers".

export const powerBiNotes: SkillNotes = {
  skill: "power-bi-dashboards",
  quickLabel: "DAX",
  lessons: [
    {
      lecture: "Desktop vs Service",
      blocks: [
        {
          kind: "table",
          head: ["", "Power BI Desktop", "Power BI Service (app.powerbi.com)"],
          rows: [
            ["What it is", "Free Windows app for building", "Cloud site for sharing and collaboration"],
            ["You do", "Connect data, Power Query, model, DAX, design reports", "Publish, share, schedule refresh, dashboards, apps, row-level security roles"],
            ["Cost", "Free", "Sharing needs Pro or Premium Per User licences (or Fabric capacity)"],
            ["On a Mac", "Not available: use a Windows VM or cloud PC", "Works in any browser; you can also build reports there"],
          ],
        },
        {
          kind: "points",
          items: [
            "The normal workflow: build in **Desktop** → **Publish** to a workspace in the **Service** → share as an **App** or embed in Teams/SharePoint.",
            "A **report** is multi-page and interactive. A **dashboard** (Service only) is a single page of tiles pinned from reports. Most people say \"dashboard\" and mean report.",
            "A **semantic model** (formerly *dataset*) is the data plus relationships and measures. Several reports can share one model, so a KPI is defined once.",
          ],
        },
        {
          kind: "traps",
          items: ["Free users can't view content shared from a Pro workspace. Check licences before promising a rollout."],
        },
      ],
    },
    {
      lecture: "Your first report",
      blocks: [
        {
          kind: "points",
          items: [
            "Home → **Get data** → Excel workbook → pick the sheet or table → **Transform data** (always, even if it looks clean) → Close & Apply.",
            "Three views on the left: **Report** (canvas), **Table** (see the data), **Model** (relationships).",
            "Click a visual type, then tick fields or drag them into the visual's wells: Axis/X, Values/Y, Legend.",
            "Every visual filters every other one on the page by default. Click a bar and watch the rest update: that's cross-filtering.",
          ],
        },
        {
          kind: "table",
          title: "A first page that works",
          head: ["Position", "Visual", "Fields"],
          rows: [
            ["Top row", "4 Card visuals", "Revenue, Orders, Avg order value, Customers"],
            ["Middle left", "Line chart", "Month × Revenue"],
            ["Middle right", "Bar chart (sorted)", "Category × Revenue"],
            ["Bottom", "Table", "Top 10 products with revenue and margin"],
            ["Side", "Slicers", "Region, Year"],
          ],
        },
        {
          kind: "traps",
          items: [
            "Dragging a numeric column to Values creates an **implicit** sum. Fine for exploring; for anything shared, write an explicit measure (lesson on measures).",
            "Dates auto-expand into Year/Quarter/Month/Day hierarchies. Turn off *Auto date/time* (File → Options) once you have a proper date table.",
          ],
        },
      ],
    },
    {
      lecture: "Power Query transformations",
      blocks: [
        {
          kind: "points",
          items: [
            "Power Query records every cleaning step in **Applied Steps**. Refresh tomorrow's file and the same steps run again: no manual cleaning ever twice.",
            "Each step is M code (View → Advanced Editor), but you can do almost everything from the ribbon.",
          ],
        },
        {
          kind: "table",
          title: "The transformations you'll use weekly",
          head: ["Task", "Where"],
          rows: [
            ["Fix data types", "Column header icon (do this early and deliberately)"],
            ["Remove blank/error rows", "Home → Remove Rows"],
            ["Split \"City, State\"", "Transform → Split Column → By Delimiter"],
            ["Trim and clean text", "Transform → Format → Trim / Clean"],
            ["Unpivot month columns into rows", "Select ID columns → Transform → Unpivot Other Columns"],
            ["Combine 12 monthly files", "Get data → Folder → Combine & Transform"],
            ["Lookup from another table", "Home → Merge Queries (a join)"],
            ["Stack tables", "Home → Append Queries"],
            ["Conditional column", "Add Column → Conditional Column"],
          ],
        },
        {
          kind: "code",
          title: "A typical step in M",
          code: `= Table.AddColumn(#"Changed Type", "Margin", each [Revenue] - [Cost], type number)`,
        },
        {
          kind: "tip",
          text: "Unpivoting wide spreadsheets (Jan, Feb, Mar… as columns) into long tables (Month, Value) is the single biggest quality jump for Excel-sourced data.",
        },
        {
          kind: "traps",
          items: ["Renaming a column in the source file breaks later steps that refer to it by name. Keep source headers stable or rename in one early step."],
        },
      ],
    },
    {
      lecture: "Star schemas",
      blocks: [
        {
          kind: "points",
          items: [
            "A **star schema** has one **fact table** in the middle (events with numbers: sales lines, transactions) and **dimension tables** around it (descriptions: Date, Product, Customer, Store).",
            "Relationships run **one-to-many** from each dimension (one product) to the fact (many sales of it), with the filter flowing from dimension to fact.",
            "Slicers and axes use **dimension** columns; measures aggregate **fact** columns. Follow this and DAX becomes simple.",
          ],
        },
        {
          kind: "table",
          head: ["Table", "Type", "Key columns"],
          rows: [
            ["Sales", "Fact", "DateKey, ProductKey, CustomerKey, Qty, Revenue, Cost"],
            ["Date", "Dimension", "Date, Year, Quarter, Month, MonthName, Weekday"],
            ["Product", "Dimension", "ProductKey, Name, Category, Brand"],
            ["Customer", "Dimension", "CustomerKey, Name, City, Segment"],
          ],
        },
        {
          kind: "code",
          title: "A date table in DAX",
          code: `Date =
ADDCOLUMNS (
    CALENDAR ( DATE ( 2023, 1, 1 ), DATE ( 2026, 12, 31 ) ),
    "Year", YEAR ( [Date] ),
    "Month", FORMAT ( [Date], "MMM" ),
    "MonthNo", MONTH ( [Date] ),
    "Quarter", "Q" & QUARTER ( [Date] )
)`,
          note: "Then Table tools → **Mark as date table**, and sort Month by MonthNo.",
        },
        {
          kind: "traps",
          items: [
            "One big flat table works for small data but makes time intelligence and multi-fact models painful.",
            "Avoid bi-directional relationships unless you know why you need one. They create ambiguous filter paths and wrong totals.",
          ],
        },
      ],
    },
    {
      lecture: "Calculated columns vs measures",
      blocks: [
        {
          kind: "table",
          head: ["", "Calculated column", "Measure"],
          rows: [
            ["Computed", "Once per row, at refresh", "On the fly, for each cell of a visual"],
            ["Stored", "Yes (uses memory)", "No"],
            ["Context", "Row context", "Filter context"],
            ["Use for", "Slicing/grouping (Age band, Margin %, category flags)", "Numbers to aggregate: totals, ratios, YoY"],
          ],
        },
        {
          kind: "code",
          code: `-- Calculated column (in Sales): a value per row
Line Margin = Sales[Revenue] - Sales[Cost]

-- Measures: aggregate in whatever context the visual provides
Revenue = SUM ( Sales[Revenue] )
Cost = SUM ( Sales[Cost] )
Margin % = DIVIDE ( [Revenue] - [Cost], [Revenue] )
Orders = DISTINCTCOUNT ( Sales[OrderID] )
Avg Order Value = DIVIDE ( [Revenue], [Orders] )`,
        },
        {
          kind: "points",
          items: [
            "Ratios must be measures. A calculated **Margin %** column summed across rows gives nonsense like 1,840%.",
            "Use `DIVIDE(a, b)` instead of `a / b`: it returns blank instead of an error when b is 0.",
            "Keep measures in a dedicated empty table (Enter data → name it `_Measures`) so they're easy to find.",
          ],
        },
      ],
    },
    {
      lecture: "CALCULATE demystified",
      blocks: [
        {
          kind: "points",
          items: [
            "Every cell in a visual has a **filter context**: the filters from its row/column labels, slicers and page filters.",
            "`CALCULATE(expression, filters…)` evaluates the expression in a **modified** filter context. It's the only way to change filters inside a measure, which is why it's in most useful measures.",
            "A filter argument on a column **replaces** existing filters on that column. Wrap it in `KEEPFILTERS` to intersect instead.",
          ],
        },
        {
          kind: "code",
          code: `South Revenue = CALCULATE ( [Revenue], Customer[Region] = "South" )

Online Revenue = CALCULATE ( [Revenue], Sales[Channel] = "Online" )

-- Remove a filter: share of all categories
Revenue All Categories = CALCULATE ( [Revenue], REMOVEFILTERS ( Product[Category] ) )
Category Share = DIVIDE ( [Revenue], [Revenue All Categories] )

-- Filter with a measure condition: needs FILTER over a table
Revenue Big Customers =
CALCULATE ( [Revenue], FILTER ( VALUES ( Customer[CustomerKey] ), [Revenue] > 100000 ) )`,
        },
        {
          kind: "example",
          q: "A matrix shows Region rows. In the *West* row, what does `CALCULATE([Revenue], Customer[Region] = \"South\")` show?",
          steps: ["The filter argument replaces the existing filter on Customer[Region].", "So every row shows South's revenue."],
          answer: "South's revenue, in every row",
        },
        {
          kind: "traps",
          items: ["Calling a measure inside a row context (e.g. in a calculated column or inside SUMX) triggers **context transition**: the current row becomes a filter. Powerful, and the cause of most \"why is this number weird\" moments."],
        },
      ],
    },
    {
      lecture: "Time intelligence",
      blocks: [
        {
          kind: "code",
          code: `Revenue YTD = TOTALYTD ( [Revenue], 'Date'[Date] )

-- Indian financial year ends 31 March
Revenue FYTD = TOTALYTD ( [Revenue], 'Date'[Date], "3/31" )

Revenue PY = CALCULATE ( [Revenue], SAMEPERIODLASTYEAR ( 'Date'[Date] ) )
Revenue YoY % = DIVIDE ( [Revenue] - [Revenue PY], [Revenue PY] )

Revenue PM = CALCULATE ( [Revenue], DATEADD ( 'Date'[Date], -1, MONTH ) )

Revenue 3M Rolling =
CALCULATE ( [Revenue], DATESINPERIOD ( 'Date'[Date], MAX ( 'Date'[Date] ), -3, MONTH ) )`,
        },
        {
          kind: "points",
          items: [
            "Time-intelligence functions need a **marked date table** with one row per day and no gaps, related to the fact table.",
            "Put the Date table's columns (Year, Month) on visuals, never the fact table's date column.",
            "The `\"3/31\"` year-end argument handles the April–March financial year most Indian companies report in.",
          ],
        },
        {
          kind: "traps",
          items: [
            "If the current month is incomplete, YoY looks like a collapse. Compare to the same number of days last year, or show only complete months.",
            "Quick measures generate time-intelligence DAX for you, but read what they produce before trusting it.",
          ],
        },
      ],
    },
    {
      lecture: "DAX quiz",
      blocks: [
        {
          kind: "example",
          title: "Question 1",
          q: "Why does a calculated column `Margin % = DIVIDE(Sales[Revenue]-Sales[Cost], Sales[Revenue])` give wrong totals in a visual?",
          steps: ["The column computes a % per row.", "The visual then sums those percentages."],
          answer: "Ratios must be measures: `DIVIDE([Revenue]-[Cost], [Revenue])`",
        },
        {
          kind: "example",
          title: "Question 2",
          q: "Write a measure for each product's share of its category's revenue.",
          steps: ["Keep the category filter, remove the product filter.", "`DIVIDE([Revenue], CALCULATE([Revenue], REMOVEFILTERS(Product[Name])))`"],
          answer: "REMOVEFILTERS on the product column only",
        },
        {
          kind: "example",
          title: "Question 3",
          q: "`SAMEPERIODLASTYEAR` returns blank everywhere. What's the most likely cause?",
          steps: ["Time intelligence needs a continuous date table, marked as such, related to the fact table, and used on the visual's axis."],
          answer: "Missing or unmarked date table (or the visual uses the fact table's date column)",
        },
        {
          kind: "example",
          title: "Question 4",
          q: "Revenue = SUMX(Sales, Sales[Qty] * Sales[Price]). Why SUMX and not SUM?",
          steps: ["SUM takes one column.", "SUMX iterates rows, computing the expression per row, then sums."],
          answer: "There's no stored revenue column; SUMX multiplies per row first",
        },
      ],
    },
    {
      lecture: "Layout and colour",
      blocks: [
        {
          kind: "points",
          items: [
            "Design for the **one question** the page answers. Write it at the top. If a visual doesn't help answer it, move it to another page.",
            "People read top-left first: put the headline KPIs there, trend in the middle, detail at the bottom.",
            "Use a grid: View → Gridlines and Snap to grid. Align edges; equal spacing does more for polish than any theme.",
            "Use one accent colour for what matters and greys for everything else. Reserve red/green for good/bad, and never as the only signal (colour-blind users).",
            "Card visuals should show context: the value, vs target or last year, and the direction.",
          ],
        },
        {
          kind: "table",
          title: "Common fixes",
          head: ["Problem", "Fix"],
          rows: [
            ["Too many visuals (12+ on a page)", "Split into Overview and Drill-down pages; add drill-through"],
            ["Pie with 9 slices", "Sorted bar chart"],
            ["Numbers like 12345678.91", "Display units (₹12.3M or ₹1.23 Cr) and 1 decimal"],
            ["Slicers everywhere", "Move to a filter pane or a collapsible panel"],
          ],
        },
        {
          kind: "tip",
          text: "Before publishing, test the page on a laptop screen at 100% zoom and in the Power BI mobile layout. That's how executives will see it.",
        },
      ],
    },
    {
      lecture: "Sales dashboard project",
      blocks: [
        {
          kind: "points",
          title: "Brief",
          items: [
            "Build a two-page sales report for a regional sales head, from any retail dataset with orders, products, customers and dates.",
            "Page 1 (Overview): Revenue, Margin %, Orders, AOV as cards with YoY; monthly trend vs last year; revenue by region and category.",
            "Page 2 (Drill-down): product table with conditional formatting, a top-N filter, and a drill-through page for a single customer.",
            "Model: star schema, a marked date table with financial year columns, all KPIs as explicit measures in a `_Measures` table.",
          ],
        },
        {
          kind: "table",
          title: "Review checklist",
          head: ["Area", "Standard"],
          rows: [
            ["Model", "One-to-many relationships, single direction, no unused columns"],
            ["Measures", "No implicit measures in visuals; DIVIDE everywhere"],
            ["Design", "Question in the title, aligned grid, one accent colour"],
            ["Story", "A text box with three findings and one recommendation"],
          ],
        },
        {
          kind: "tip",
          text: "Publish to the web only with public data. For your portfolio, a 60-second screen recording plus screenshots works with any dataset.",
        },
      ],
    },
  ],
  recap: [
    "Clean and reshape in Power Query once; every refresh repeats the steps.",
    "Model as a star: facts in the middle, dimensions around, one-to-many relationships.",
    "Aggregations and ratios are measures; columns are for slicing.",
    "CALCULATE changes the filter context; it's behind almost every useful measure.",
    "Time intelligence needs a marked, continuous date table (use \"3/31\" for the Indian financial year).",
    "Design each page around one question, with KPIs top-left and one accent colour.",
  ],
};
