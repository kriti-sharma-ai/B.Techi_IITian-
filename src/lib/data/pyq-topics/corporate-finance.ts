import type { PyqTopicTags } from "../../types";

// 25 past-paper questions in 5 topics, 0 repeated question types.
// Tagged once from every question (text and figures); question ids match the paper data.

export const corporateFinanceTopics: PyqTopicTags = {
  "topics": [
    {
      "slug": "macro-interest-rates",
      "title": "GDP, inflation & interest rates",
      "summary": "Nominal vs real GDP, GDP deflator, CPI inflation, real rates and intertemporal budget slope",
      "ids": [
        "corporate-finance-quiz-1-oct-2025-an-q5",
        "corporate-finance-quiz-1-oct-2025-an-q9",
        "corporate-finance-quiz-1-oct-2025-an-q15",
        "corporate-finance-quiz-1-oct-2025-an-q17",
        "corporate-finance-quiz-1-oct-2025-an-q18",
        "corporate-finance-quiz-1-oct-2025-an-q22"
      ]
    },
    {
      "slug": "time-value-of-money",
      "title": "Time value: compounding & annuities",
      "summary": "Doubling time, continuous compounding, annualised returns, annuities, EMIs and perpetuities",
      "ids": [
        "corporate-finance-quiz-1-oct-2025-an-q2",
        "corporate-finance-quiz-1-oct-2025-an-q3",
        "corporate-finance-quiz-1-oct-2025-an-q12",
        "corporate-finance-quiz-1-oct-2025-an-q16",
        "corporate-finance-quiz-1-oct-2025-an-q19",
        "corporate-finance-quiz-1-oct-2025-an-q24"
      ]
    },
    {
      "slug": "capital-budgeting-valuation",
      "title": "Capital budgeting & stock valuation",
      "summary": "Payback, IRR payoffs, profitability index, project choice and the Gordon growth model",
      "ids": [
        "corporate-finance-quiz-1-oct-2025-an-q4",
        "corporate-finance-quiz-1-oct-2025-an-q6",
        "corporate-finance-quiz-1-oct-2025-an-q11",
        "corporate-finance-quiz-1-oct-2025-an-q13",
        "corporate-finance-quiz-1-oct-2025-an-q14"
      ]
    },
    {
      "slug": "bonds-pricing-risk",
      "title": "Bonds: yield, duration & risk",
      "summary": "Zero-coupon yields, simple duration, price change with rates, bond features and default pools",
      "ids": [
        "corporate-finance-quiz-1-oct-2025-an-q1",
        "corporate-finance-quiz-1-oct-2025-an-q7",
        "corporate-finance-quiz-1-oct-2025-an-q8",
        "corporate-finance-quiz-1-oct-2025-an-q20",
        "corporate-finance-quiz-1-oct-2025-an-q23"
      ]
    },
    {
      "slug": "yield-curve",
      "title": "Yield curve & term structure",
      "summary": "Shape of the yield curve, implied forward rates and short vs long-term bonds",
      "ids": [
        "corporate-finance-quiz-1-oct-2025-an-q10",
        "corporate-finance-quiz-1-oct-2025-an-q21",
        "corporate-finance-quiz-1-oct-2025-an-q25"
      ]
    }
  ],
  "repeats": []
};
