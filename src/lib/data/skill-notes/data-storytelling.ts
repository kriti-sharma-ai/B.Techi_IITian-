import type { SkillNotes } from "../../types";

// Text lessons for "Data Storytelling and Visualization".

export const dataStorytellingNotes: SkillNotes = {
  skill: "data-storytelling",
  quickLabel: "Rules",
  lessons: [
    {
      lecture: "How people read charts",
      blocks: [
        {
          kind: "points",
          items: [
            "Readers spend a few seconds on a chart before deciding whether it's worth their time. In those seconds they read the **title**, find the **biggest or brightest** thing, and look for a **comparison**.",
            "We judge **position along a common axis** most accurately, then length, then angle and area, then colour intensity. That's why bar charts beat pie charts for comparisons.",
            "**Pre-attentive attributes** (colour, size, bold, position) are noticed before conscious reading. Use them deliberately on the one thing that matters.",
          ],
        },
        {
          kind: "table",
          title: "Encodings, most to least accurate",
          head: ["Rank", "Encoding", "Chart that uses it"],
          rows: [
            ["1", "Position on a common scale", "Dot plot, bar, line"],
            ["2", "Length", "Bar"],
            ["3", "Angle / slope", "Pie, slope chart"],
            ["4", "Area", "Bubble, treemap"],
            ["5", "Colour intensity", "Heatmap, choropleth map"],
          ],
        },
        {
          kind: "tip",
          text: "Squint test: blur your eyes at the chart. Whatever still stands out is what your audience will see first. Is it the point you want to make?",
        },
      ],
    },
    {
      lecture: "Choosing a chart",
      blocks: [
        {
          kind: "table",
          head: ["You want to show", "Use", "Avoid"],
          rows: [
            ["Change over time", "Line; columns for few periods", "Pie, unordered bars"],
            ["Ranking", "Horizontal bars, sorted", "Vertical bars with long labels"],
            ["Part of a whole", "Stacked 100% bar, or a single bar split into parts", "Pies with more than 3 slices, 3-D anything"],
            ["Distribution", "Histogram, box plot", "Average alone"],
            ["Relationship", "Scatter (+ trend line)", "Two lines on dual axes"],
            ["Before vs after for many items", "Slope chart, dumbbell plot", "Clustered bars with 20 pairs"],
            ["Single headline number", "Big number + comparison", "Gauge charts"],
            ["Geographic pattern", "Map only if location matters", "Maps for data that isn't about place"],
          ],
        },
        {
          kind: "points",
          items: [
            "Start from the **sentence** you want the reader to say afterwards (\"South overtook West in March\"). Then pick the chart that makes that comparison easiest.",
            "When in doubt, a sorted bar chart or a simple line chart is almost never the wrong choice.",
          ],
        },
        {
          kind: "traps",
          items: [
            "Dual-axis charts let the designer make any two lines look correlated by rescaling one axis. Use two aligned charts instead.",
            "A table is better than a chart when people need to look up exact values.",
          ],
        },
      ],
    },
    {
      lecture: "Decluttering",
      blocks: [
        {
          kind: "table",
          title: "Remove, then check nothing was lost",
          head: ["Element", "Usually"],
          rows: [
            ["Chart border, background fill", "Remove"],
            ["Gridlines", "Remove or make very light grey"],
            ["Legend", "Replace with direct labels at the end of lines or on bars"],
            ["Y-axis", "Remove if bars are labelled with values"],
            ["Data labels on every point", "Label only the start, end and key points"],
            ["Decimals", "Round: ₹12.4 Cr, not ₹12,43,56,789.37"],
            ["Diagonal axis labels", "Switch to horizontal bars"],
            ["3-D, shadows, gradients", "Always remove"],
          ],
        },
        {
          kind: "points",
          items: [
            "Every pixel of ink should carry information. Decoration competes with the data for attention.",
            "Use **white space** to group related things and separate unrelated ones.",
            "Align text and charts to a common left edge. Centre-aligned text blocks are slower to read.",
          ],
        },
        {
          kind: "tip",
          text: "Declutter in this order: delete, de-emphasise (grey), then emphasise the one thing that matters.",
        },
      ],
    },
    {
      lecture: "Colour with purpose",
      blocks: [
        {
          kind: "points",
          items: [
            "Default to **grey**. Add one strong colour only where you want the eye to go.",
            "Use colour **consistently** across a deck: if \"South\" is blue on slide 2, it's blue on slide 9.",
            "**Sequential** palettes (light → dark of one hue) for ordered values; **diverging** (two hues meeting at a neutral midpoint) for above/below a target; **categorical** (distinct hues) for unordered groups, at most 5–6.",
            "About 1 in 12 men has some form of colour-vision deficiency, most often red–green. Never rely on red vs green alone: add labels, icons or position.",
          ],
        },
        {
          kind: "table",
          head: ["Situation", "Colour choice"],
          rows: [
            ["Highlight one region among eight", "Seven grey bars, one brand-coloured bar"],
            ["Profit vs loss", "Dark blue vs orange, plus + / − signs"],
            ["Survey: strongly disagree → strongly agree", "Diverging palette centred on neutral"],
            ["Heat of sales by hour", "Sequential single hue"],
          ],
        },
        {
          kind: "traps",
          items: ["Rainbow palettes on ordered data create false boundaries where hues change. Use a single-hue sequential scale."],
        },
      ],
    },
    {
      lecture: "Makeover challenge",
      blocks: [
        {
          kind: "example",
          title: "Makeover 1",
          q: "A 3-D pie chart shows market share for 9 smartphone brands, with a legend and percentages to two decimals. Redesign it.",
          steps: [
            "Message: who leads and how concentrated is the market?",
            "Switch to horizontal bars sorted by share; label each bar directly with a whole-number %.",
            "Group the bottom four into \"Others\". Colour your company's bar; grey the rest.",
            "Title: \"Top 3 brands hold 68% of the market\" (with the real figure).",
          ],
          answer: "Sorted horizontal bars, direct labels, one highlight, takeaway title",
        },
        {
          kind: "example",
          title: "Makeover 2",
          q: "A clustered column chart compares 2025 vs 2026 revenue for 12 product lines. Readers can't tell which lines grew. Redesign it.",
          steps: [
            "The message is change per line, so encode change directly.",
            "Option A: slope chart, one line per product from 2025 to 2026, growers in colour.",
            "Option B: bar chart of % change, sorted, with positive and negative values on either side of zero.",
          ],
          answer: "Show the change itself (slope or %-change bars), not two columns per item",
        },
        {
          kind: "example",
          title: "Makeover 3",
          q: "A line chart has 15 overlapping lines (one per city) and a legend. Redesign it.",
          steps: [
            "Grey all lines; colour only the 1–2 cities that matter to the story, with direct labels.",
            "Or use small multiples: 15 tiny charts on the same scale, arranged in a grid.",
          ],
          answer: "Highlight-and-grey, or small multiples",
        },
      ],
    },
    {
      lecture: "The narrative arc",
      blocks: [
        {
          kind: "table",
          head: ["Part", "What it does", "Example"],
          rows: [
            ["Context", "Where we are, what matters", "\"Repeat customers drive 60% of our revenue.\""],
            ["Complication", "What changed or what's at risk", "\"Since April, the repeat rate fell from 38% to 31%.\""],
            ["Insight", "Why, backed by data", "\"The drop is entirely in customers whose first order was delayed by 3+ days.\""],
            ["Resolution", "What to do, and what it's worth", "\"Fixing delivery in two cities recovers about ₹1.2 Cr a year. We need approval for a second courier partner.\""],
          ],
        },
        {
          kind: "points",
          items: [
            "For busy audiences, flip it: **answer first** (the resolution), then the supporting evidence. This is the pyramid principle.",
            "Every slide gets an **action title**: a full sentence stating that slide's conclusion. Read only the titles in order; they should tell the whole story.",
            "Cut every chart that doesn't support the story into an appendix. Analysis you did isn't automatically analysis they need.",
          ],
        },
        {
          kind: "tip",
          text: "Write the story as five sentences in a text file before opening PowerPoint. If the five sentences don't work, no amount of design will fix the deck.",
        },
      ],
    },
    {
      lecture: "Executive summaries",
      blocks: [
        {
          kind: "code",
          title: "A template that works",
          code: `Subject: Repeat purchase rate down 7 pts — delivery delays in Pune & Jaipur

Bottom line: Adding a second courier in Pune and Jaipur should recover
~₹1.2 Cr/year in repeat revenue. Requesting approval by 30 Oct.

What happened: Repeat rate fell from 38% (Apr) to 31% (Sep).
Why: 90% of the drop is among customers whose first order arrived 3+ days late;
      late deliveries rose from 6% to 19% in two cities after a courier change.
Options: (1) second courier, ₹8 L/yr; (2) penalties on current courier; (3) do nothing.
Recommendation: Option 1, with a 60-day review.
Detail: dashboard link · analysis notebook link`,
        },
        {
          kind: "points",
          items: [
            "The subject line or first sentence should be enough on its own if it's all they read.",
            "Use numbers with context: \"31%, down from 38%\", not \"31%\".",
            "End with a clear **ask**: a decision, a date, an owner.",
          ],
        },
        {
          kind: "traps",
          items: ["Leading with methodology (\"We analysed 2.3 lakh orders using…\") buries the finding. Method goes last, or in the appendix."],
        },
      ],
    },
    {
      lecture: "Present a 5-minute story",
      blocks: [
        {
          kind: "points",
          title: "Brief",
          items: [
            "Take any analysis you've done (a course project, a Kaggle notebook, the Python or SQL capstone) and turn it into a 5-minute talk with at most 5 slides.",
            "Slide 1: the answer and the ask. Slides 2–4: one insight each, one chart each, action titles. Slide 5: recommendation, impact and next steps.",
            "Record yourself on your phone. Watch it once, fix the two worst moments, record again.",
          ],
        },
        {
          kind: "table",
          title: "Rubric",
          head: ["Criterion", "Excellent looks like"],
          rows: [
            ["Clarity", "The main point is stated in the first 20 seconds"],
            ["Evidence", "Each claim has one clear, decluttered chart"],
            ["Titles", "Reading only the slide titles tells the story"],
            ["Delivery", "Speaks to the audience, not the slides; no reading paragraphs"],
            ["Ask", "Ends with a specific decision, owner and date"],
          ],
        },
        {
          kind: "tip",
          text: "Rehearse the first 30 seconds until you could say them half-asleep. A confident start carries the rest.",
        },
      ],
    },
  ],
  recap: [
    "Decide the one sentence you want the audience to remember, then choose the chart that makes it obvious.",
    "Bars and lines on a common axis beat pies, gauges and 3-D.",
    "Declutter, grey everything, then highlight the one thing that matters.",
    "Use action titles: full-sentence conclusions on every slide.",
    "Lead with the answer and end with a specific ask.",
  ],
};
