import type { QualifierMock } from "../../types";

// Business Data Management: IIT Madras BS End Term papers (3 papers, 71 questions).
// Questions, options and answer keys are reproduced from the official question papers.
// Figures, code and maths typeset as images are in public/pyq/<slug>/, embedded inline as
// ![Figure](src#WxH). Range answers are stored as midpoint ± tolerance.
// Generated from the paper PDFs; edit with care.

export const bdmEndTermPapers: QualifierMock[] = [
  {
    slug: "bdm-end-term-aug-2025-an",
    title: "BDM End Term · 31 Aug 2025 (AN)",
    description: "End Term paper from the May 2025 term, afternoon session on 31 Aug 2025, with the official answer key.",
    difficulty: "Standard",
    durationMin: 90,
    endTerm: {
      date: "2025-08-31",
      session: "AN",
      term: "May 2025"
    },
    sections: [
      {
        subjectSlug: "business-data-management",
        title: "Business Data Management",
        short: "BDM",
        questions: [
          {
            id: "bdm-end-term-aug-2025-an-q1",
            type: "mcq",
            marks: 1,
            prompt: "What happens to the demand curve when consumer income increases for a normal good?",
            options: [
              "Shifts to the left",
              "Shifts to the right",
              "Remains unchanged",
              "Becomes steeper"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "bdm-end-term-aug-2025-an-q2",
            type: "mcq",
            marks: 1,
            prompt: "Which Excel function would you use to find a value in the first column of a table and return a value from a specified column?",
            options: [
              "INDEX",
              "MATCH",
              "VLOOKUP",
              "HLOOKUP"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "bdm-end-term-aug-2025-an-q3",
            type: "mcq",
            marks: 1,
            prompt: "Which of the following is primarily used as a surrogate indicator?",
            options: [
              "Direct sales data",
              "Number of vehicle registrations to estimate automobile market size",
              "Customer survey responses",
              "Company financial statements"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "bdm-end-term-aug-2025-an-q4",
            type: "mcq",
            marks: 1,
            prompt: "A niche market strategy focuses on:",
            options: [
              "Broad customer segments with general needs",
              "Specific customer groups with specialized needs",
              "Mass production for cost efficiency",
              "Geographic expansion"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "bdm-end-term-aug-2025-an-q5",
            type: "mcq",
            marks: 1,
            prompt: "For a company facing declining market share, which strategy would be most appropriate?",
            options: [
              "Maintain current pricing",
              "Reduce marketing spend",
              "Analyze competitors and differentiate offerings",
              "Exit the market immediately"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "bdm-end-term-aug-2025-an-q6",
            type: "mcq",
            marks: 1,
            prompt: "ABC Analysis primarily categorizes inventory based on:",
            options: [
              "Physical size of items",
              "Alphabetical order",
              "Annual monetary usage/value",
              "Storage location"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "bdm-end-term-aug-2025-an-q7",
            type: "mcq",
            marks: 1,
            prompt: "Which is NOT a benefit of implementing an ERP system?",
            options: [
              "Improved data accuracy",
              "Increased data redundancy",
              "Better process efficiency",
              "Enhanced business visibility"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "bdm-end-term-aug-2025-an-q8",
            type: "mcq",
            marks: 1,
            prompt: "For analyzing seasonal sales patterns, which approach is most effective?",
            options: [
              "Maintain constant inventory levels",
              "Adjust inventory based on historical seasonal trends",
              "Ignore seasonal variations",
              "Focus only on peak season data"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "bdm-end-term-aug-2025-an-q9",
            type: "mcq",
            marks: 1,
            prompt: "In an A/B test for a mobile app redesign, the control group should receive:",
            options: [
              "The new app design",
              "The current/original app design",
              "A mix of old and new designs",
              "No app access"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "bdm-end-term-aug-2025-an-q10",
            type: "mcq",
            marks: 1,
            prompt: "A document outlining job requirements, budget, and skills needed is called:",
            options: [
              "Job Description",
              "Indent",
              "Appraisal Form",
              "Performance Review"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "bdm-end-term-aug-2025-an-q11",
            type: "mcq",
            marks: 1,
            prompt: "When should A/B testing ideally be conducted?",
            options: [
              "After full deployment to all users",
              "Before developing the solution",
              "Before full deployment to validate changes",
              "Only during system maintenance"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "bdm-end-term-aug-2025-an-q12",
            type: "mcq",
            marks: 1,
            prompt: "E-commerce platforms use scarcity nudges by:",
            options: [
              "Showing unlimited stock availability",
              "Displaying 'Only 3 left in stock' messages",
              "Hiding product information",
              "Removing time limits on offers"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "bdm-end-term-aug-2025-an-q13",
            type: "mcq",
            marks: 1,
            prompt: "If a company identifies a strong seasonal pattern in sales data, the optimal inventory approach is to:",
            options: [
              "Keep inventory constant all year",
              "Increase inventory uniformly",
              "Adjust safety stock and reorder levels based on seasonal forecasts",
              "Eliminate safety stock entirely"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "bdm-end-term-aug-2025-an-q14",
            type: "mcq",
            marks: 2,
            passage: "Smartphone Sales Analysis (Units in thousands):\n\n![Figure](/pyq/bdm-end-term-aug-2025-an/q14-passage-1.webp#575x116)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Which brand has the highest total annual revenue?",
            options: [
              "Samsing",
              "Orange",
              "TwoPlus",
              "Ziome"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "bdm-end-term-aug-2025-an-q15",
            type: "mcq",
            marks: 1,
            passage: "Smartphone Sales Analysis (Units in thousands):\n\n![Figure](/pyq/bdm-end-term-aug-2025-an/q14-passage-1.webp#575x116)\n\nBased on the above data, answer the given subquestions.",
            prompt: "What is Orange's market share by revenue?",
            options: [
              "18.5%",
              "21.2%",
              "32.0%",
              "36.4%"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "bdm-end-term-aug-2025-an-q16",
            type: "numerical",
            marks: 2,
            passage: "TechCorp Manufacturing Data for March 2024:\nWeek 1: Planned 500 units, Produced 480 units, Defects 24\nWeek 2: Planned 520 units, Produced 500 units, Defects 20\nWeek 3: Planned 480 units, Produced 465 units, Defects 18\nWeek 4: Planned 550 units, Produced 530 units, Defects 25\nBased on the above data, answer the given subquestions.",
            prompt: "Calculate the overall Quality percentage for March (in %)",
            answer: 95.5,
            tolerance: 0.5,
            explanation: "Official answer key accepts any value from 95 to 96."
          },
          {
            id: "bdm-end-term-aug-2025-an-q17",
            type: "mcq",
            marks: 2,
            passage: "TechCorp Manufacturing Data for March 2024:\nWeek 1: Planned 500 units, Produced 480 units, Defects 24\nWeek 2: Planned 520 units, Produced 500 units, Defects 20\nWeek 3: Planned 480 units, Produced 465 units, Defects 18\nWeek 4: Planned 550 units, Produced 530 units, Defects 25\nBased on the above data, answer the given subquestions.",
            prompt: "Which week had the best Performance percentage?",
            options: [
              "Week 1",
              "Week 2",
              "Week 3",
              "Week 4"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "bdm-end-term-aug-2025-an-q18",
            type: "numerical",
            marks: 2,
            passage: "TechCorp Manufacturing Data for March 2024:\nWeek 1: Planned 500 units, Produced 480 units, Defects 24\nWeek 2: Planned 520 units, Produced 500 units, Defects 20\nWeek 3: Planned 480 units, Produced 465 units, Defects 18\nWeek 4: Planned 550 units, Produced 530 units, Defects 25\nBased on the above data, answer the given subquestions.",
            prompt: "What is the average Availability assuming 8-hour shifts with 0.5 hours lost time per day? (in %)",
            answer: 93.7,
            tolerance: 0.5,
            explanation: "Official answer key accepts any value from 93.2 to 94.2."
          },
          {
            id: "bdm-end-term-aug-2025-an-q19",
            type: "mcq",
            marks: 2,
            prompt: "For the given data, which formula correctly calculates total sales for 'Electronics' category sold by 'John'?\nData Range A2:C10 contains:\nColumn A: Salesperson names\nColumn B: Category\nColumn C: Sales amount",
            options: [
              "=SUMIFS(C2:C10,A2:A10,\"John\",B2:B10,\"Electronics\")",
              "=SUMIF(A2:A10,\"John\",C2:C10)+SUMIF(B2:B10,\"Electronics\",C2:C10)",
              "=VLOOKUP(\"John\",A2:C10,3,FALSE)",
              "=COUNTIFS(A2:A10,\"John\",B2:B10,\"Electronics\")"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "bdm-end-term-aug-2025-an-q20",
            type: "mcq",
            marks: 2,
            prompt: "E-commerce A/B Test Results:\nVersion A (Control): 1000 visitors, 50 purchases, Avg order value Rs.1,200\nVersion B (Treatment): 1000 visitors, 65 purchases, Avg order value Rs.1,150\nWhich metric shows improvement in Version B?",
            options: [
              "Conversion rate only",
              "Average order value only",
              "Both conversion rate and total revenue",
              "Neither metric improved"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "bdm-end-term-aug-2025-an-q21",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/bdm-end-term-aug-2025-an/q21-1.webp#575x303)",
            options: [
              "Priya > Raj > Nina > Sam",
              "Priya > Sam >Raj >Nina",
              "Sam > Priya > Raj > Nina",
              "Nina > Priya > Raj > Sam"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "bdm-end-term-aug-2025-an-q22",
            type: "numerical",
            marks: 2,
            prompt: "DigitalPay earns revenue as follows:\n- 2.5% transaction fee on all payments\n- 15% annual interest on credit transactions\n- 8% loss rate on credit (unpaid amounts)\nMarch transactions:\nDebit payments: Rs.10,00,000\nCredit payments: Rs.5,00,000\nCredit defaults: Rs.40,000\nCalculate net profit for March:",
            answer: 40550,
            explanation: ""
          }
        ]
      }
    ]
  },
  {
    slug: "bdm-end-term-apr-2025-fn",
    title: "BDM End Term · 13 Apr 2025 (FN)",
    description: "End Term paper from the January 2025 term, forenoon session on 13 Apr 2025, with the official answer key.",
    difficulty: "Standard",
    durationMin: 90,
    endTerm: {
      date: "2025-04-13",
      session: "FN",
      term: "January 2025"
    },
    sections: [
      {
        subjectSlug: "business-data-management",
        title: "Business Data Management",
        short: "BDM",
        questions: [
          {
            id: "bdm-end-term-apr-2025-fn-q1",
            type: "mcq",
            marks: 1,
            prompt: "What does the law of demand state?",
            options: [
              "As the price of a good increases, the quantity demanded decreases",
              "As the price of a good decreases, the quantity demanded decreases",
              "As the price of a good increases, the quantity supplied decreases",
              "As the price of a good decreases, the quantity supplied increases"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "bdm-end-term-apr-2025-fn-q2",
            type: "mcq",
            marks: 1,
            prompt: "Which function would you use to count the number of cells that meet a specific condition?",
            options: [
              "COUNT",
              "COUNTA",
              "COUNTIF",
              "COUNTSUM"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "bdm-end-term-apr-2025-fn-q3",
            type: "mcq",
            marks: 1,
            prompt: "In a saturated smartphone market where 70% of current users express interest in upgrading their phones in the next two months, and the no. of new smartphone users remain unchanged, what should companies/manufacturers prioritize?",
            options: [
              "Expand distribution channels to reach untapped geographic regions.",
              "Focus on females as their target customers.",
              "Invest in research and development to create innovative features for new customers.",
              "Develop targeted upgrade incentives and promotions for current users looking to replace their old devices"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "bdm-end-term-apr-2025-fn-q4",
            type: "mcq",
            marks: 1,
            prompt: "What does the Days of Sales of Inventory indicate?",
            options: [
              "The average number of days required by a company to turn its inventory into sales.",
              "The number of days when inventory is zero in a year",
              "Total number of days when inventory sales is zero due to lack of inventory",
              "The average number of inventory stockout days in a month"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "bdm-end-term-apr-2025-fn-q5",
            type: "mcq",
            marks: 1,
            prompt: "Which of the following factors is most critical in determining the market potential for a new product ?",
            options: [
              "The size of the target market and percentage of potential customers interested in the product.",
              "Historical sale data of unrelated products.",
              "Cost of production and distribution.",
              "Current market share of existing products."
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "bdm-end-term-apr-2025-fn-q6",
            type: "mcq",
            marks: 1,
            prompt: "Which metric is most important to monitor during an A/B test?",
            options: [
              "Total number of users tested in the experiment",
              "Uptime of the system",
              "Key performance indicators (KPIs) specific to the experiment",
              "Model training time"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "bdm-end-term-apr-2025-fn-q7",
            type: "mcq",
            marks: 1,
            prompt: "Arrange the following steps while working with unstructured data in a ranking modelling: I. Normalizing\nII. Preprocessing\nIII. Ranking\nIV. Composite score",
            options: [
              "I -> II -> III -> IV",
              "II -> I -> IV -> III",
              "I -> II -> I -> IV -> III",
              "I -> II -> I -> III -> IV"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "bdm-end-term-apr-2025-fn-q8",
            type: "mcq",
            marks: 1,
            prompt: "If a FinTech company wants to cut down losses, which of the following should they do?",
            options: [
              "Decrease approval cutoff of credit score",
              "Increase interest rate",
              "Increase approval limit for loans",
              "Increase approval cutoff of credit score",
              "Give more loans"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "bdm-end-term-apr-2025-fn-q9",
            type: "mcq",
            marks: 2,
            prompt: "PayBuddy conducted an A/B test to understand if their new Funding Instrument recommendation strategy works well. Following are the details of the control and treatment groups. From the given table, which of the following statements are true?\ni. Value of Credit transactions increased with the new recommendation strategy\nii. Value of Debit transactions increased with the new recommendation strategy\niii. Value of both Credit and Debit transactions increased with the new recommendation strategy iv. Value of Credit transactions decreased with the new recommendation strategy\nv. Value of Debit transactions decreased with the new recommendation strategy\n\n![Figure](/pyq/bdm-end-term-apr-2025-fn/q9-1.webp#511x105)",
            options: [
              "Both (i) & (v)",
              "Only (iii)",
              "Only (i)",
              "Both (ii) & (iv)",
              "Only (v)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "bdm-end-term-apr-2025-fn-q10",
            type: "mcq",
            marks: 2,
            prompt: "PePhone is a FinTech firm that processes payments. Following are sources of revenue for the company – 3.5% of transaction amount as transaction fee from merchant for all types of transactions (credit and debit), 18% p.a. interest on credit transactions and incurs a loss of credit if not paid back. Calculate the overall profit for the company based on the below table – (Assume payback of credit in a year)\nNote: Declined transactions will not get credit but customers will complete the payment through PePhone using their bank details.\n\n![Figure](/pyq/bdm-end-term-apr-2025-fn/q10-1.webp#575x194)",
            options: [
              "– 211.0",
              "– 192.72",
              "–131.94",
              "– 162.18"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "bdm-end-term-apr-2025-fn-q11",
            type: "multi",
            marks: 1,
            prompt: "Which of the following conditions can use the concept of \"weighted average\" to analyse expenditure data?",
            options: [
              "By considering importance of expenditure categories",
              "By considering the population size of different regions",
              "By adjusting for inflation over time",
              "By analyzing the impact of income levels on expenditure"
            ],
            answer: [
              0,
              1
            ],
            explanation: ""
          },
          {
            id: "bdm-end-term-apr-2025-fn-q12",
            type: "multi",
            marks: 2,
            prompt: "In Excel, the SUBTOTAL function is used to perform calculations on a filtered range of data. Which of the following statements about the SUBTOTAL function is correct?",
            options: [
              "SUBTOTAL can only calculate the sum of a range and ignores hidden rows in the filtered data.",
              "SUBTOTAL can perform various calculations, including sum, average, count, and more, and it ignores rows hidden by filters.",
              "SUBTOTAL performs calculations only on rows that are manually hidden, not those hidden by filters.",
              "SUBTOTAL can calculate results based on data in any worksheet, regardless of whether the data is visible or hidden."
            ],
            answer: [
              0,
              1
            ],
            explanation: ""
          },
          {
            id: "bdm-end-term-apr-2025-fn-q13",
            type: "mcq",
            marks: 1,
            passage: "Based on the sample data given answer the subquestions.\n\n![Figure](/pyq/bdm-end-term-apr-2025-fn/q13-passage-1.webp#404x126)",
            prompt: "Determine the percentage change in total revenue when income increases from Rs 15000 to Rs 25000.",
            options: [
              "41.2%",
              "42%",
              "42.5%",
              "41.8%"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "bdm-end-term-apr-2025-fn-q14",
            type: "mcq",
            marks: 1,
            passage: "Based on the sample data given answer the subquestions.\n\n![Figure](/pyq/bdm-end-term-apr-2025-fn/q13-passage-1.webp#404x126)",
            prompt: "What is the type of goods based on the given table?",
            options: [
              "Normal Goods",
              "Inferior Goods",
              "Luxury Goods",
              "None of these"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "bdm-end-term-apr-2025-fn-q15",
            type: "mcq",
            marks: 2,
            passage: "Based on following data, answer the given subquestions:\n\n![Figure](/pyq/bdm-end-term-apr-2025-fn/q15-passage-1.webp#575x267)",
            prompt: "The total revenue of the firm is:",
            options: [
              "67125",
              "66895",
              "65285",
              "67565"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "bdm-end-term-apr-2025-fn-q16",
            type: "mcq",
            marks: 2,
            passage: "Based on following data, answer the given subquestions:\n\n![Figure](/pyq/bdm-end-term-apr-2025-fn/q15-passage-1.webp#575x267)",
            prompt: "In terms of sales trend, which product has a continuously increasing trend?",
            options: [
              "Gadget X",
              "Widget A",
              "Widget C",
              "Gadget Q"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "bdm-end-term-apr-2025-fn-q17",
            type: "mcq",
            marks: 1,
            passage: "Based on following data, answer the given subquestions:\n\n![Figure](/pyq/bdm-end-term-apr-2025-fn/q15-passage-1.webp#575x267)",
            prompt: "What percentage of total revenue do Widgets contribute?",
            options: [
              "30.1%",
              "42.4%",
              "25.6%",
              "35.5%"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "bdm-end-term-apr-2025-fn-q18",
            type: "numerical",
            marks: 1,
            passage: "Based on the data in the table, Calculate the missing values X1, X2, X3 & X4 and answer the given subquestions.\n\n![Figure](/pyq/bdm-end-term-apr-2025-fn/q18-passage-1.webp#575x128)",
            prompt: "X1:",
            answer: 1,
            explanation: ""
          },
          {
            id: "bdm-end-term-apr-2025-fn-q19",
            type: "numerical",
            marks: 1,
            passage: "Based on the data in the table, Calculate the missing values X1, X2, X3 & X4 and answer the given subquestions.\n\n![Figure](/pyq/bdm-end-term-apr-2025-fn/q18-passage-1.webp#575x128)",
            prompt: "X2:",
            answer: 180,
            explanation: ""
          },
          {
            id: "bdm-end-term-apr-2025-fn-q20",
            type: "numerical",
            marks: 1.5,
            passage: "Based on the data in the table, Calculate the missing values X1, X2, X3 & X4 and answer the given subquestions.\n\n![Figure](/pyq/bdm-end-term-apr-2025-fn/q18-passage-1.webp#575x128)",
            prompt: "X3 (in%):",
            answer: 83.25,
            tolerance: 0.25,
            explanation: "Official answer key accepts any value from 83 to 83.5."
          },
          {
            id: "bdm-end-term-apr-2025-fn-q21",
            type: "numerical",
            marks: 1.5,
            passage: "Based on the data in the table, Calculate the missing values X1, X2, X3 & X4 and answer the given subquestions.\n\n![Figure](/pyq/bdm-end-term-apr-2025-fn/q18-passage-1.webp#575x128)",
            prompt: "X4 (in%):",
            answer: 65.375,
            tolerance: 0.375,
            explanation: "Official answer key accepts any value from 65 to 65.75."
          },
          {
            id: "bdm-end-term-apr-2025-fn-q22",
            type: "mcq",
            marks: 1,
            passage: "Match the following\n\n![Figure](/pyq/bdm-end-term-apr-2025-fn/q22-passage-1.webp#575x192)\n\nBased on the above data, answer the given subquestions.",
            prompt: "A form created by HR that outlines the budgetary details, skills and capabilities required etc.",
            options: [
              "Appraisal",
              "Indent",
              "Employee referral",
              "None of these"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "bdm-end-term-apr-2025-fn-q23",
            type: "mcq",
            marks: 1,
            passage: "Match the following\n\n![Figure](/pyq/bdm-end-term-apr-2025-fn/q22-passage-1.webp#575x192)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Organization source talent by asking their existing employees to recommend candidates from their existing networks.",
            options: [
              "Appraisal",
              "Indent",
              "Employee referral",
              "None of these"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "bdm-end-term-apr-2025-fn-q24",
            type: "mcq",
            marks: 1,
            passage: "Match the following\n\n![Figure](/pyq/bdm-end-term-apr-2025-fn/q22-passage-1.webp#575x192)\n\nBased on the above data, answer the given subquestions.",
            prompt: "The process of evaluating an employee’s current and/or past performance",
            options: [
              "Appraisal",
              "Indent",
              "Employee referral",
              "None of these"
            ],
            answer: 0,
            explanation: ""
          }
        ]
      }
    ]
  },
  {
    slug: "bdm-end-term-dec-2024-an",
    title: "BDM End Term · 22 Dec 2024 (AN)",
    description: "End Term paper from the September 2024 term, afternoon session on 22 Dec 2024, with the official answer key.",
    difficulty: "Standard",
    durationMin: 90,
    endTerm: {
      date: "2024-12-22",
      session: "AN",
      term: "September 2024"
    },
    sections: [
      {
        subjectSlug: "business-data-management",
        title: "Business Data Management",
        short: "BDM",
        questions: [
          {
            id: "bdm-end-term-dec-2024-an-q1",
            type: "mcq",
            marks: 1,
            prompt: "In the context of economic flow, what do firms provide to households in exchange for labour?",
            options: [
              "Services",
              "Capital",
              "Wages",
              "Goods"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "bdm-end-term-dec-2024-an-q2",
            type: "mcq",
            marks: 1,
            prompt: "Which Excel function can be used to search for a certain value from another table and retrieve a reference value based on the original table data?",
            options: [
              "SUM",
              "IF",
              "LINEST",
              "VLOOKUP"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "bdm-end-term-dec-2024-an-q3",
            type: "mcq",
            marks: 1,
            prompt: "Which of the following is NOT a government source of economic data mentioned in the segment?",
            options: [
              "Economic Census",
              "Periodic Labour Force Survey (PLFS)",
              "Purchasing Managers' Index (PMI)",
              "National Sample Survey"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "bdm-end-term-dec-2024-an-q4",
            type: "mcq",
            marks: 1,
            prompt: "What implication does a bimodal distribution in household transportation expenditure data point to?",
            options: [
              "Most households spend a similar amount on transportation",
              "There are two distinct groups of households based on transportation spending",
              "Transportation expenditure is evenly distributed across all households",
              "There is a negative correlation between income and transportation spending"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "bdm-end-term-dec-2024-an-q5",
            type: "mcq",
            marks: 1,
            prompt: "Which of the following factors is most critical in determining the market potential for a new product?",
            options: [
              "The size of the target market and percentage of potential customers interested in the product.",
              "Historical sale data of unrelated products.",
              "Cost of production and distribution.",
              "Current market share of existing products."
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "bdm-end-term-dec-2024-an-q6",
            type: "mcq",
            marks: 1,
            prompt: "What does the Days of Sales of Inventory indicate?",
            options: [
              "The average number of days required by a company to turn its inventory into sales.",
              "The number of days when inventory is zero in a year",
              "Total number of days when inventory sales is zero due to lack of inventory",
              "The average number of inventory stockout days in a month"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "bdm-end-term-dec-2024-an-q7",
            type: "mcq",
            marks: 1,
            prompt: "Which of the following scenarios can be best expressed through a Bar chart?",
            options: [
              "Comparing expenditure trends of students.",
              "Comparing no. of scooter owners, no of bike owners vis- a- vis no of car owners.",
              "Showing relationship between temperature and time of the day.",
              "Analyzing correlation between no. of hours students study and their scores in exam"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "bdm-end-term-dec-2024-an-q8",
            type: "mcq",
            marks: 1,
            prompt: "Which of the following is typically NOT performed when using a pivot table in data analysis ?",
            options: [
              "Filtering data to display only specific records.",
              "Creating new records in the original dataset.",
              "Grouping data by categories or fields to analyze trends and patterns.",
              "Summarizing data by aggregating values, such as sum, count, or average."
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "bdm-end-term-dec-2024-an-q9",
            type: "mcq",
            marks: 1,
            prompt: "Swyft, a new taxi aggregator platform has developed a new recommendation engine called “TinSage?” and they want to test the recommendation engine by doing an A/B test. Can you identify the test and control groups?",
            options: [
              "Test: Random recommendation; Control: TinSage recommendation",
              "Test: Old model recommendation; Control: TinSage recommendation",
              "Test: TinSage recommendation; Control: Old model recommendation",
              "Test: Old model recommendation; Control: Random recommendation"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "bdm-end-term-dec-2024-an-q10",
            type: "mcq",
            marks: 1,
            prompt: "What is the primary goal of an A/B test?",
            options: [
              "Test the scalability of a model",
              "Compare two or more versions of a product or model to identify the best performer",
              "Measure hardware resource utilization",
              "Validate the hypothesis using historical data"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "bdm-end-term-dec-2024-an-q11",
            type: "mcq",
            marks: 1,
            prompt: "How do online payment companies make money?",
            options: [
              "Interest from loans/credit",
              "Transaction fees (a small cut from the transaction)",
              "Monthly subscription",
              "Both Interest from loans/credit and transaction fees",
              "Ads"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "bdm-end-term-dec-2024-an-q12",
            type: "mcq",
            marks: 1,
            prompt: "A form created by HR that outlines the budgetary details, skills and capabilities required etc. is called",
            options: [
              "Indent",
              "Job Description",
              "Employee Referral",
              "Appraisal"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "bdm-end-term-dec-2024-an-q13",
            type: "mcq",
            marks: 2,
            prompt: "Consider the following dataset:\n\n![Figure](/pyq/bdm-end-term-dec-2024-an/q13-1.webp#575x138)\n\nComposite Score= Sum of all criteria on the same scale\nRank the above candidates and choose the correct ranking from the below options",
            options: [
              "Partha > Akanksha > Lavanya > Siva",
              "Akanksha > Lavanya > Siva> Partha",
              "Partha < Akanksha < Lavanya < Siva",
              "Akanksha < Lavanya < Siva< Partha"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "bdm-end-term-dec-2024-an-q14",
            type: "mcq",
            marks: 2,
            prompt: "PePhone is a FinTech firm that processes payments. Following are sources of revenue for the company – 3.5% of transaction amount as transaction fee from merchant for all types of transactions (credit and debit), 18% p.a. interest on credit transactions and incurs a loss of credit if not paid back. Calculate the overall profit for the company based on the below table – (Assume payback of credit in a year)\nNote: Declined transactions will not get credit but customers will complete the payment through PePhone using their bank details.\n\n![Figure](/pyq/bdm-end-term-dec-2024-an/q14-1.webp#575x195)",
            options: [
              "–167.50",
              "– 211.0",
              "– 197.74",
              "– 162.18"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "bdm-end-term-dec-2024-an-q15",
            type: "mcq",
            marks: 1,
            passage: "Based on the sample data answer the given subquestions.\n\n![Figure](/pyq/bdm-end-term-dec-2024-an/q15-passage-1.webp#333x243)",
            prompt: "What is the market share of Product B as a percentage of total sale amount?",
            options: [
              "17.5",
              "16.2",
              "18.2",
              "19.3"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "bdm-end-term-dec-2024-an-q16",
            type: "mcq",
            marks: 1,
            passage: "Based on the sample data answer the given subquestions.\n\n![Figure](/pyq/bdm-end-term-dec-2024-an/q15-passage-1.webp#333x243)",
            prompt: "What percentage of total market share do products C and E hold together?",
            options: [
              "29.8%",
              "44%",
              "39.8%",
              "49.1%"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "bdm-end-term-dec-2024-an-q17",
            type: "mcq",
            marks: 1,
            passage: "Company HiringSoft wants to recruit Software Engineers for its new project. The hiring manager was tasked with choosing the appropriate hiring channel. The manager collected previous hiring data (provided in the table below) to help narrow down the appropriate channel. All channels advertised for the vacant positions on the same day.\n\n![Figure](/pyq/bdm-end-term-dec-2024-an/q17-passage-1.webp#575x260)\n\nBased on the above data, answer the given subquestions",
            prompt: "If the hiring manager has to go only with the parameter, cost per candidate selected, which would be the most appropriate channel?",
            options: [
              "Direct Company Website",
              "Print Ads",
              "Employee Referrals",
              "Social and Professional Media"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "bdm-end-term-dec-2024-an-q18",
            type: "mcq",
            marks: 1,
            passage: "Company HiringSoft wants to recruit Software Engineers for its new project. The hiring manager was tasked with choosing the appropriate hiring channel. The manager collected previous hiring data (provided in the table below) to help narrow down the appropriate channel. All channels advertised for the vacant positions on the same day.\n\n![Figure](/pyq/bdm-end-term-dec-2024-an/q17-passage-1.webp#575x260)\n\nBased on the above data, answer the given subquestions",
            prompt: "Which channel has the worst selection success rate? The Selection success rate is defined as the no. of candidates selected to the no. of applications shortlisted.",
            options: [
              "Hiring Portals",
              "Social and Professional Media",
              "Print Ads",
              "Employee Referrals"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "bdm-end-term-dec-2024-an-q19",
            type: "mcq",
            marks: 2,
            passage: "Based on following data, answer the given subquestions:\n\n![Figure](/pyq/bdm-end-term-dec-2024-an/q19-passage-1.webp#575x201)",
            prompt: "The total revenue of the firm is:",
            options: [
              "97290",
              "98390",
              "96480",
              "97560"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "bdm-end-term-dec-2024-an-q20",
            type: "mcq",
            marks: 2,
            passage: "Based on following data, answer the given subquestions:\n\n![Figure](/pyq/bdm-end-term-dec-2024-an/q19-passage-1.webp#575x201)",
            prompt: "What is the ratio of Widget sale to that of Gadget Sales?",
            options: [
              "0.51",
              "0.42",
              "0.35",
              "0.67"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "bdm-end-term-dec-2024-an-q21",
            type: "mcq",
            marks: 1,
            passage: "Based on following data, answer the given subquestions:\n\n![Figure](/pyq/bdm-end-term-dec-2024-an/q19-passage-1.webp#575x201)",
            prompt: "Which product has a linearly increasing trend of sales",
            options: [
              "Accessory V",
              "Widget G",
              "Accessory U",
              "Gadget K"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "bdm-end-term-dec-2024-an-q22",
            type: "numerical",
            marks: 1.25,
            passage: "Based on the data in the table, Calculate the missing values X1, X2, X3 & X4\n\n![Figure](/pyq/bdm-end-term-dec-2024-an/q22-passage-1.webp#575x109)",
            prompt: "Enter the value X1 _________",
            answer: 1,
            explanation: ""
          },
          {
            id: "bdm-end-term-dec-2024-an-q23",
            type: "numerical",
            marks: 1.25,
            passage: "Based on the data in the table, Calculate the missing values X1, X2, X3 & X4\n\n![Figure](/pyq/bdm-end-term-dec-2024-an/q22-passage-1.webp#575x109)",
            prompt: "Enter the value X2 __________",
            answer: 180,
            explanation: ""
          },
          {
            id: "bdm-end-term-dec-2024-an-q24",
            type: "numerical",
            marks: 1.25,
            passage: "Based on the data in the table, Calculate the missing values X1, X2, X3 & X4\n\n![Figure](/pyq/bdm-end-term-dec-2024-an/q22-passage-1.webp#575x109)",
            prompt: "Enter the value X3 __________",
            answer: 83.25,
            tolerance: 0.25,
            explanation: "Official answer key accepts any value from 83 to 83.5."
          },
          {
            id: "bdm-end-term-dec-2024-an-q25",
            type: "numerical",
            marks: 1.25,
            passage: "Based on the data in the table, Calculate the missing values X1, X2, X3 & X4\n\n![Figure](/pyq/bdm-end-term-dec-2024-an/q22-passage-1.webp#575x109)",
            prompt: "Enter the value X4 __________",
            answer: 65.375,
            tolerance: 0.375,
            explanation: "Official answer key accepts any value from 65 to 65.75."
          }
        ]
      }
    ]
  }
];
