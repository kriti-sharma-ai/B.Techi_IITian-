import type { QualifierMock } from "../../types";

// Business Analytics: IIT Madras BS End Term papers (3 papers, 96 questions).
// Questions, options and answer keys are reproduced from the official question papers.
// Figures, code and maths typeset as images are in public/pyq/<slug>/, embedded inline as
// ![Figure](src#WxH). Range answers are stored as midpoint ± tolerance.
// Generated from the paper PDFs; edit with care.

export const baEndTermPapers: QualifierMock[] = [
  {
    slug: "ba-end-term-aug-2025-fn",
    title: "BA End Term · 31 Aug 2025 (FN)",
    description: "End Term paper from the May 2025 term, forenoon session on 31 Aug 2025, with the official answer key.",
    difficulty: "Standard",
    durationMin: 90,
    endTerm: {
      date: "2025-08-31",
      session: "FN",
      term: "May 2025"
    },
    sections: [
      {
        subjectSlug: "business-analytics",
        title: "Business Analytics",
        short: "BA",
        questions: [
          {
            id: "ba-end-term-aug-2025-fn-q1",
            type: "numerical",
            marks: 1,
            passage: "The Following Comprehension and Related Questions are Purely Hypothetical\nMiloBurgers, a fast-food restaurant sells two types of products: “Double Cheese Veggy” (DCV) burgers and “Cheese Veggy” (CV) burgers. The DCV uses 0.5Kg of cheese and the CV uses only 0.2kg of cheese. The restaurant starts the day with 200Kg of cheese but may order more at an additional cost of ₹25 per Kg to cover the delivery cost. Any surplus cheese at the end of the day is donated to charity. MiloBurgers sells a DCV for ₹100 and a CV for ₹80. All in all, MiloBurgers does not expect to sell more than 900 items in total during a day and the owner wants to maximizes the profit for the coming day. Assume that whatever combination is made (a solution to the problem) can be sold. Given this information, answer the given subquestions.",
            prompt: "How many decision variables are present in the standard form of the primal, if the given problem is formulated as a Linear Programming Problem?",
            answer: 4,
            explanation: ""
          },
          {
            id: "ba-end-term-aug-2025-fn-q2",
            type: "numerical",
            marks: 1,
            passage: "The Following Comprehension and Related Questions are Purely Hypothetical\nMiloBurgers, a fast-food restaurant sells two types of products: “Double Cheese Veggy” (DCV) burgers and “Cheese Veggy” (CV) burgers. The DCV uses 0.5Kg of cheese and the CV uses only 0.2kg of cheese. The restaurant starts the day with 200Kg of cheese but may order more at an additional cost of ₹25 per Kg to cover the delivery cost. Any surplus cheese at the end of the day is donated to charity. MiloBurgers sells a DCV for ₹100 and a CV for ₹80. All in all, MiloBurgers does not expect to sell more than 900 items in total during a day and the owner wants to maximizes the profit for the coming day. Assume that whatever combination is made (a solution to the problem) can be sold. Given this information, answer the given subquestions.",
            prompt: "How many decision variables are present in the Dual form (which is formulated based on the standard form of the primal) if the given problem is formulated as Linear Programming Problem?",
            answer: 2,
            explanation: ""
          },
          {
            id: "ba-end-term-aug-2025-fn-q3",
            type: "numerical",
            marks: 1,
            passage: "The Following Comprehension and Related Questions are Purely Hypothetical\nMiloBurgers, a fast-food restaurant sells two types of products: “Double Cheese Veggy” (DCV) burgers and “Cheese Veggy” (CV) burgers. The DCV uses 0.5Kg of cheese and the CV uses only 0.2kg of cheese. The restaurant starts the day with 200Kg of cheese but may order more at an additional cost of ₹25 per Kg to cover the delivery cost. Any surplus cheese at the end of the day is donated to charity. MiloBurgers sells a DCV for ₹100 and a CV for ₹80. All in all, MiloBurgers does not expect to sell more than 900 items in total during a day and the owner wants to maximizes the profit for the coming day. Assume that whatever combination is made (a solution to the problem) can be sold. Given this information, answer the given subquestions.",
            prompt: "If the restaurant decides to make 450 DCVs and 450 CVs, then what is the value of the objective function for the linear program which is in the standard form of the primal? [Note: Enter your answer in decimal rounded to two decimal places. For example, if your answer is 1.235 then enter the answer as “1.24”]",
            answer: 78125,
            explanation: ""
          },
          {
            id: "ba-end-term-aug-2025-fn-q4",
            type: "numerical",
            marks: 1,
            passage: "The Following Comprehension and Related Questions are Purely Hypothetical\nMiloBurgers, a fast-food restaurant sells two types of products: “Double Cheese Veggy” (DCV) burgers and “Cheese Veggy” (CV) burgers. The DCV uses 0.5Kg of cheese and the CV uses only 0.2kg of cheese. The restaurant starts the day with 200Kg of cheese but may order more at an additional cost of ₹25 per Kg to cover the delivery cost. Any surplus cheese at the end of the day is donated to charity. MiloBurgers sells a DCV for ₹100 and a CV for ₹80. All in all, MiloBurgers does not expect to sell more than 900 items in total during a day and the owner wants to maximizes the profit for the coming day. Assume that whatever combination is made (a solution to the problem) can be sold. Given this information, answer the given subquestions.",
            prompt: "If the restaurant decides to make 450 DCVs and 450 CVs, then how many decision variables in the Dual form (which is formulated based on the standard form of the primal) will have a value of “0”, if the given problem is formulated as Linear Programming Problem?",
            answer: 0,
            explanation: ""
          },
          {
            id: "ba-end-term-aug-2025-fn-q5",
            type: "mcq",
            marks: 1,
            passage: "The Following Comprehension and Related Questions are Purely Hypothetical\nMiloBurgers, a fast-food restaurant sells two types of products: “Double Cheese Veggy” (DCV) burgers and “Cheese Veggy” (CV) burgers. The DCV uses 0.5Kg of cheese and the CV uses only 0.2kg of cheese. The restaurant starts the day with 200Kg of cheese but may order more at an additional cost of ₹25 per Kg to cover the delivery cost. Any surplus cheese at the end of the day is donated to charity. MiloBurgers sells a DCV for ₹100 and a CV for ₹80. All in all, MiloBurgers does not expect to sell more than 900 items in total during a day and the owner wants to maximizes the profit for the coming day. Assume that whatever combination is made (a solution to the problem) can be sold. Given this information, answer the given subquestions.",
            prompt: "If the restaurant decides to make 450 DCVs and 450 CVs, then which of the following option is correct",
            options: [
              "The restaurant will order more cheese in addition to the cheese available in stock",
              "The restaurant will not order more cheese and will completely consume the available cheese",
              "The restaurant will donate some cheese to charity as it has surplus",
              "Cannot say as more information is required"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "ba-end-term-aug-2025-fn-q6",
            type: "numerical",
            marks: 2,
            passage: "The Following Comprehension and Related Questions are Purely Hypothetical\nA company has collected data on the average monthly electricity consumed for air conditioning (dependent variable) relative to (i) Average ambient temperature of the month, (ii) Total number of working days in the month and (iii) Average number of employees who have worked in that month. This data is provided in Table-1. Additionally, the correlation matrix for the different variables in Table-1 is provided in Figure-1. Given this information, answer the given subquestions.\n\n![Figure](/pyq/ba-end-term-aug-2025-fn/q6-passage-1.webp#575x532)",
            prompt: "What is the total variability in the dependent variable? [Note: Enter your answer in decimal rounded to two decimal places. For example, if your answer is 1.235 then enter the answer as “1.24”]",
            answer: 3902,
            tolerance: 2,
            explanation: "Official answer key accepts any value from 3900 to 3904."
          },
          {
            id: "ba-end-term-aug-2025-fn-q7",
            type: "numerical",
            marks: 2,
            passage: "The Following Comprehension and Related Questions are Purely Hypothetical\nA company has collected data on the average monthly electricity consumed for air conditioning (dependent variable) relative to (i) Average ambient temperature of the month, (ii) Total number of working days in the month and (iii) Average number of employees who have worked in that month. This data is provided in Table-1. Additionally, the correlation matrix for the different variables in Table-1 is provided in Figure-1. Given this information, answer the given subquestions.\n\n![Figure](/pyq/ba-end-term-aug-2025-fn/q6-passage-1.webp#575x532)",
            prompt: "What is the expected percentage inflation (increase) in the standard error of the beta value corresponding to “Average Number of Employees who have Worked” due to “Total Number of Working Days” if a model with only these two variables is built for predicting “Average Electricity Consumed”? [Note: Enter your answer in “PERCENTAGE” rounded to two decimal places without the percentage symbol. For example, if your answer is 1.235% then enter the answer as “1.24”]",
            answer: 11.25,
            tolerance: 0.25,
            explanation: "Official answer key accepts any value from 11 to 11.5."
          },
          {
            id: "ba-end-term-aug-2025-fn-q8",
            type: "multi",
            marks: 1,
            passage: "The Following Comprehension and Related Questions are Purely Hypothetical\nA company has collected data on the average monthly electricity consumed for air conditioning (dependent variable) relative to (i) Average ambient temperature of the month, (ii) Total number of working days in the month and (iii) Average number of employees who have worked in that month. This data is provided in Table-1. Additionally, the correlation matrix for the different variables in Table-1 is provided in Figure-1. Given this information, answer the given subquestions.\n\n![Figure](/pyq/ba-end-term-aug-2025-fn/q6-passage-1.webp#575x532)",
            prompt: "Based on the expected percentage inflation (increase) in the standard error of the beta value corresponding to “Average Number of Employees who have Worked” due to “Total Number of Working Days” if a model with only these two variables is built for predicting “Average Electricity Consumed”, which of the following statements is/are TRUE (choose all that is applicable)?",
            options: [
              "The t-statistic corresponding to the “Beta value of Average Number of Employees who have Worked” will increase. Hence, the corresponding NULL HYPOTHESIS will be REJECT",
              "The t-statistic corresponding to the “Beta value of Average Number of Employees who have Worked” will increase. Hence, the corresponding NULL HYPOTHESIS will NOT BE REJECTED",
              "The t-statistic corresponding to the “Beta value of Total Number of Working Days” will increase. Hence, the corresponding NULL HYPOTHESIS will be REJECT",
              "The t-statistic corresponding to the “Beta value of Total Number of Working Days” will increase. Hence, the corresponding NULL HYPOTHESIS will NOT be REJECT"
            ],
            answer: [
              1,
              3
            ],
            explanation: ""
          },
          {
            id: "ba-end-term-aug-2025-fn-q9",
            type: "multi",
            marks: 1,
            prompt: "The computed p-value of a chi-square goodness-of-fit test is 0.167. Then, which of the following statements are TRUE",
            options: [
              "At a 5% level of significance, the null hypothesis is rejected",
              "At a 5% level of significance, the null hypothesis is not-rejected",
              "At a 10% level of significance, the null hypothesis is rejected",
              "At a 10% level of significance, the null hypothesis is not-rejected",
              "At a 5% level of significance, the alternative hypothesis is rejected",
              "At a 5% level of significance, the alternative hypothesis is not-rejected",
              "At a 10% level of significance, the alternative hypothesis is rejected",
              "At a 10% level of significance, the alternative hypothesis is not-rejected",
              "Cannot conclude only based on the P-value and Significance Level. Need the computed Chi-Square value as well."
            ],
            answer: [
              1,
              3
            ],
            explanation: ""
          },
          {
            id: "ba-end-term-aug-2025-fn-q10",
            type: "mcq",
            marks: 1,
            prompt: "Say you build a multiple regression model using 6 independent variables and 20 data points. This is called Model-1. The R-Square for Model-1 is 94%. You then decide to add four more variables (such that the sample size is still 20) to the model and develop a new model called Model-2. The R- Squared for Model-2 is 95%. Then which of the following statements is/are TRUE?",
            options: [
              "Model-1 is better as it has lower R-Squared",
              "Model-1 is better as it has lower Adjusted R-Square",
              "Model-1 is better as it has higher Adjusted R-Square",
              "Model-2 is better as it has higher R-Square",
              "Model-2 is better as it has lower Adjusted R-Square",
              "Model-2 is better as it has higher Adjusted R-Square",
              "None of these"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "ba-end-term-aug-2025-fn-q11",
            type: "mcq",
            marks: 1.5,
            prompt: "The Following Question is Purely Hypothetical\nYour family is seeking an alliance for you and has found three matrimonial services “X”, “Y” and “Z”. Assume that the enrolment in the matrimonial services is mutually exclusive. A market survey indicates that 40% of total enrolments are in “X”, 35% are in “Y” and the remaining are in “Z”. The market survey also indicates that 25% of registrations in “X” find a suitable match, 40% in “Y” find a suitable match, and 30% in “Z” find a suitable match. Recently, your family has heard the news that a relative “P” has not found a suitable match after enrolling in one of the matrimonial services. Then which matrimonial service would you suspect “P” to have enrolled in?",
            options: [
              "Z",
              "Y",
              "X",
              "Cannot say as I am already married (This is not the correct answer to this question. Just relax, think and choose from the other three)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "ba-end-term-aug-2025-fn-q12",
            type: "numerical",
            marks: 1,
            passage: "The Following Comprehension and Related Questions are Purely Hypothetical\nA manufacturer produces lenses for sunglasses. In a given day, a total of 100 products were produced. Products produced can have anywhere between no scratches to 3 scratches. From past experience, it is seen that the lenses break if it has more than 3 scratches. Broken lenses are not included in the 100 units which are provided to you. On examining the 100 units, the below Table- 2 on the products with scratches is determined. Based on the production lot of 100 units (given sample), you are asked to check if the “Number of Scratches on produced lenses” follows a Poisson Distribution. Given this information, answer the given subquestions.\n\n![Figure](/pyq/ba-end-term-aug-2025-fn/q12-passage-1.webp#538x180)",
            prompt: "What would be the mean of the distribution, if you want to check the hypothesis “The number of scratches on a produced lens follows a Poisson Distribution”? [Note: Enter your answer rounded to two decimal places. For example, if your answer is 1.235 then enter the answer as “1.24”]",
            answer: 1.4,
            tolerance: 0.1,
            explanation: "Official answer key accepts any value from 1.3 to 1.5."
          },
          {
            id: "ba-end-term-aug-2025-fn-q13",
            type: "mcq",
            marks: 0.5,
            passage: "The Following Comprehension and Related Questions are Purely Hypothetical\nA manufacturer produces lenses for sunglasses. In a given day, a total of 100 products were produced. Products produced can have anywhere between no scratches to 3 scratches. From past experience, it is seen that the lenses break if it has more than 3 scratches. Broken lenses are not included in the 100 units which are provided to you. On examining the 100 units, the below Table- 2 on the products with scratches is determined. Based on the production lot of 100 units (given sample), you are asked to check if the “Number of Scratches on produced lenses” follows a Poisson Distribution. Given this information, answer the given subquestions.\n\n![Figure](/pyq/ba-end-term-aug-2025-fn/q12-passage-1.webp#538x180)",
            prompt: "Which of the following is the correct PMF formula for a Poisson Distribution?",
            options: [
              "![Figure](/pyq/ba-end-term-aug-2025-fn/q13-opt1-1.webp#153x34)",
              "![Figure](/pyq/ba-end-term-aug-2025-fn/q13-opt2-1.webp#81x34)",
              "![Figure](/pyq/ba-end-term-aug-2025-fn/q13-opt3-1.webp#60x31)",
              "![Figure](/pyq/ba-end-term-aug-2025-fn/q13-opt4-1.webp#167x35)",
              "![Figure](/pyq/ba-end-term-aug-2025-fn/q13-opt5-1.webp#153x39)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "ba-end-term-aug-2025-fn-q14",
            type: "numerical",
            marks: 0.5,
            passage: "The Following Comprehension and Related Questions are Purely Hypothetical\nA manufacturer produces lenses for sunglasses. In a given day, a total of 100 products were produced. Products produced can have anywhere between no scratches to 3 scratches. From past experience, it is seen that the lenses break if it has more than 3 scratches. Broken lenses are not included in the 100 units which are provided to you. On examining the 100 units, the below Table- 2 on the products with scratches is determined. Based on the production lot of 100 units (given sample), you are asked to check if the “Number of Scratches on produced lenses” follows a Poisson Distribution. Given this information, answer the given subquestions.\n\n![Figure](/pyq/ba-end-term-aug-2025-fn/q12-passage-1.webp#538x180)",
            prompt: "How many (count) of degrees of freedom will be presented for the computed test statistic for this problem if you want to check the hypothesis “The number of scratcheson a produced lens follows a Poisson Distribution”?",
            answer: 2,
            explanation: ""
          },
          {
            id: "ba-end-term-aug-2025-fn-q15",
            type: "numerical",
            marks: 3,
            passage: "The Following Comprehension and Related Questions are Purely Hypothetical\nA manufacturer produces lenses for sunglasses. In a given day, a total of 100 products were produced. Products produced can have anywhere between no scratches to 3 scratches. From past experience, it is seen that the lenses break if it has more than 3 scratches. Broken lenses are not included in the 100 units which are provided to you. On examining the 100 units, the below Table- 2 on the products with scratches is determined. Based on the production lot of 100 units (given sample), you are asked to check if the “Number of Scratches on produced lenses” follows a Poisson Distribution. Given this information, answer the given subquestions.\n\n![Figure](/pyq/ba-end-term-aug-2025-fn/q12-passage-1.webp#538x180)",
            prompt: "What is the value of the computed test statistic for the test to be performed if you want to check the hypothesis “The number of scratches on a produced lens follows a Poisson Distribution”? [Note: Enter your answer rounded to two decimal places. For example, if your answer is 1.235 then enter the answer as “1.24”]",
            answer: 5.35,
            tolerance: 0.15,
            explanation: "Official answer key accepts any value from 5.2 to 5.5."
          },
          {
            id: "ba-end-term-aug-2025-fn-q16",
            type: "multi",
            marks: 1,
            passage: "The Following Comprehension and Related Questions are Purely Hypothetical\nA manufacturer produces lenses for sunglasses. In a given day, a total of 100 products were produced. Products produced can have anywhere between no scratches to 3 scratches. From past experience, it is seen that the lenses break if it has more than 3 scratches. Broken lenses are not included in the 100 units which are provided to you. On examining the 100 units, the below Table- 2 on the products with scratches is determined. Based on the production lot of 100 units (given sample), you are asked to check if the “Number of Scratches on produced lenses” follows a Poisson Distribution. Given this information, answer the given subquestions.\n\n![Figure](/pyq/ba-end-term-aug-2025-fn/q12-passage-1.webp#538x180)",
            prompt: "Based on the computed test statistic for the test to be performed, using Figure-2, at a significance level of 10% what will be concluded (choose all that are correct)?\n\n![Figure](/pyq/ba-end-term-aug-2025-fn/q16-1.webp#575x318)",
            options: [
              "Reject the Null Hypothesis",
              "Do not Reject the Null Hypothesis",
              "Reject the Alternative Hypothesis",
              "Do not Reject the Alternative Hypothesis",
              "Accept the Null Hypothesis",
              "Accept the Alternative Hypothesis"
            ],
            answer: [
              0
            ],
            explanation: ""
          },
          {
            id: "ba-end-term-aug-2025-fn-q17",
            type: "numerical",
            marks: 1,
            passage: "Assume that you have trained a logistic regression model on a training dataset containing features X1 and X2. The coefficients obtained and threshold are given in Table 1.\n\n![Figure](/pyq/ba-end-term-aug-2025-fn/q17-passage-1.webp#322x148)\n\nPredict the target variable (y_pred) in the test dataset (Table 2) using the available information.\n\n![Figure](/pyq/ba-end-term-aug-2025-fn/q17-passage-2.webp#243x453)\n\nBased on the available information, answer the given subquestions:",
            prompt: "What is the accuracy of the logistic regression model?\n[Note: Enter your answer in decimal rounded to four decimal places. For example, if your answer is 0.635450, then enter the answer as “63.5450”]",
            answer: 57.15,
            tolerance: 0.05,
            explanation: "Official answer key accepts any value from 57.1 to 57.2."
          },
          {
            id: "ba-end-term-aug-2025-fn-q18",
            type: "numerical",
            marks: 1.5,
            passage: "Assume that you have trained a logistic regression model on a training dataset containing features X1 and X2. The coefficients obtained and threshold are given in Table 1.\n\n![Figure](/pyq/ba-end-term-aug-2025-fn/q17-passage-1.webp#322x148)\n\nPredict the target variable (y_pred) in the test dataset (Table 2) using the available information.\n\n![Figure](/pyq/ba-end-term-aug-2025-fn/q17-passage-2.webp#243x453)\n\nBased on the available information, answer the given subquestions:",
            prompt: "What is the precision of class 1?\n[Note: Enter your answer in decimal rounded to four decimal places. For example, if your answer is 0.635450, then enter the answer as “63.5450”]",
            answer: 66.68,
            tolerance: 0.03,
            explanation: "Official answer key accepts any value from 66.65 to 66.71."
          },
          {
            id: "ba-end-term-aug-2025-fn-q19",
            type: "numerical",
            marks: 1.5,
            passage: "Assume that you have trained a logistic regression model on a training dataset containing features X1 and X2. The coefficients obtained and threshold are given in Table 1.\n\n![Figure](/pyq/ba-end-term-aug-2025-fn/q17-passage-1.webp#322x148)\n\nPredict the target variable (y_pred) in the test dataset (Table 2) using the available information.\n\n![Figure](/pyq/ba-end-term-aug-2025-fn/q17-passage-2.webp#243x453)\n\nBased on the available information, answer the given subquestions:",
            prompt: "What is the recall of class 1?\n[Note: Enter your answer in decimal rounded to four decimal places. For example, if your answer is 0.635450, then enter the answer as “63.5450”]",
            answer: 50,
            explanation: ""
          },
          {
            id: "ba-end-term-aug-2025-fn-q20",
            type: "numerical",
            marks: 1.5,
            passage: "Assume that you have trained a logistic regression model on a training dataset containing features X1 and X2. The coefficients obtained and threshold are given in Table 1.\n\n![Figure](/pyq/ba-end-term-aug-2025-fn/q17-passage-1.webp#322x148)\n\nPredict the target variable (y_pred) in the test dataset (Table 2) using the available information.\n\n![Figure](/pyq/ba-end-term-aug-2025-fn/q17-passage-2.webp#243x453)\n\nBased on the available information, answer the given subquestions:",
            prompt: "What is the precision of class 0?\n[Note: Enter your answer in decimal rounded to four decimal places. For example, if your answer is 0.635450, then enter the answer as “63.5450”]",
            answer: 50,
            explanation: ""
          },
          {
            id: "ba-end-term-aug-2025-fn-q21",
            type: "numerical",
            marks: 1.5,
            passage: "Assume that you have trained a logistic regression model on a training dataset containing features X1 and X2. The coefficients obtained and threshold are given in Table 1.\n\n![Figure](/pyq/ba-end-term-aug-2025-fn/q17-passage-1.webp#322x148)\n\nPredict the target variable (y_pred) in the test dataset (Table 2) using the available information.\n\n![Figure](/pyq/ba-end-term-aug-2025-fn/q17-passage-2.webp#243x453)\n\nBased on the available information, answer the given subquestions:",
            prompt: "What is the recall of class 0?\n[Note: Enter your answer in decimal rounded to four decimal places. For example, if your answer is 0.635450, then enter the answer as “63.5450”]",
            answer: 66.68,
            tolerance: 0.03,
            explanation: "Official answer key accepts any value from 66.65 to 66.71."
          },
          {
            id: "ba-end-term-aug-2025-fn-q22",
            type: "multi",
            marks: 1.5,
            passage: "Assume that you have trained a logistic regression model on a training dataset containing features X1 and X2. The coefficients obtained and threshold are given in Table 1.\n\n![Figure](/pyq/ba-end-term-aug-2025-fn/q17-passage-1.webp#322x148)\n\nPredict the target variable (y_pred) in the test dataset (Table 2) using the available information.\n\n![Figure](/pyq/ba-end-term-aug-2025-fn/q17-passage-2.webp#243x453)\n\nBased on the available information, answer the given subquestions:",
            prompt: "What is the correct interpretation of the coefficient β1? (Select all that apply)",
            options: [
              "If the X1 increases by 1 unit, the log of odds of the positive outcome increases by 0.6 assuming X2 to be constant.",
              "If the X1 increases by 1 unit, the odds of the positive increase by 82% (e ^(0.6)= 1.82) assuming X2 to be constant.",
              "Higher values of X1 are associated with an increased likelihood of the positive outcome",
              "None of these"
            ],
            answer: [
              0,
              1,
              2
            ],
            explanation: ""
          },
          {
            id: "ba-end-term-aug-2025-fn-q23",
            type: "multi",
            marks: 1.5,
            passage: "Assume that you have trained a logistic regression model on a training dataset containing features X1 and X2. The coefficients obtained and threshold are given in Table 1.\n\n![Figure](/pyq/ba-end-term-aug-2025-fn/q17-passage-1.webp#322x148)\n\nPredict the target variable (y_pred) in the test dataset (Table 2) using the available information.\n\n![Figure](/pyq/ba-end-term-aug-2025-fn/q17-passage-2.webp#243x453)\n\nBased on the available information, answer the given subquestions:",
            prompt: "What is the correct interpretation of the coefficient β2? (Select all that apply)",
            options: [
              "If the X2 increases by 1 unit, the log of odds decreases by 0.65, assuming X1 to be constant.",
              "If the X2 increases by 1 unit, the odds decrease by 48% (e^(−0.65) ≈ 0.52), assuming X1 to be constant.",
              "Higher values of X2 are associated with a decreased likelihood of the positive outcome.",
              "None of these"
            ],
            answer: [
              0,
              1,
              2
            ],
            explanation: ""
          },
          {
            id: "ba-end-term-aug-2025-fn-q24",
            type: "numerical",
            marks: 2,
            passage: "There are six business units. There are two outputs and one input under consideration. You are solving the optimization problem for business unit 3, and you find that the efficiency is 0.9. You see that the dual variables corresponding to the constraints of business units 2 and 5 are non- zero, and the dual variables corresponding to the constraints of other units are zero. The dual variables corresponding to the constraints of business units 2 and 5 are 0.55 and 0.35, respectively. Based on Table 4, answers the given subquestions.\nHint: At every step, round off your answers to 4 decimal places.\n\n![Figure](/pyq/ba-end-term-aug-2025-fn/q24-passage-1.webp#289x106)",
            prompt: "How much will the Output 1 in HCU 3?\n[Note: Enter your answer in decimal rounded to four decimal places. For example, if your answer is 1000.63545, then enter the answer as “1000.6355”]",
            answer: 6916.5,
            tolerance: 1.5,
            explanation: "Official answer key accepts any value from 6915 to 6918."
          },
          {
            id: "ba-end-term-aug-2025-fn-q25",
            type: "numerical",
            marks: 2,
            passage: "There are six business units. There are two outputs and one input under consideration. You are solving the optimization problem for business unit 3, and you find that the efficiency is 0.9. You see that the dual variables corresponding to the constraints of business units 2 and 5 are non- zero, and the dual variables corresponding to the constraints of other units are zero. The dual variables corresponding to the constraints of business units 2 and 5 are 0.55 and 0.35, respectively. Based on Table 4, answers the given subquestions.\nHint: At every step, round off your answers to 4 decimal places.\n\n![Figure](/pyq/ba-end-term-aug-2025-fn/q24-passage-1.webp#289x106)",
            prompt: "How much will the Output 2 in HCU 3?\n[Note: Enter your answer in decimal rounded to four decimal places. For example, if your answer is 1000.63545, then enter the answer as “1000.6355”]",
            answer: 27.7,
            tolerance: 0.2,
            explanation: "Official answer key accepts any value from 27.5 to 27.9."
          },
          {
            id: "ba-end-term-aug-2025-fn-q26",
            type: "mcq",
            marks: 1.5,
            passage: "We are interested in understanding the efficiency of 5 Sales Offices. Each of the Sales Offices has an approved budget and a team size for achieving a fixed target of 10,00,000. As a Business Analyst, you must formulate a DEA problem using Linear programming for the Sales Office 2. Answer the given subquestions using the Table below.\n\n![Figure](/pyq/ba-end-term-aug-2025-fn/q26-passage-1.webp#279x154)",
            prompt: "What is the objective function?",
            options: [
              "![Figure](/pyq/ba-end-term-aug-2025-fn/q26-opt1-1.webp#292x31)",
              "![Figure](/pyq/ba-end-term-aug-2025-fn/q26-opt2-1.webp#288x27)",
              "![Figure](/pyq/ba-end-term-aug-2025-fn/q26-opt3-1.webp#200x23)",
              "![Figure](/pyq/ba-end-term-aug-2025-fn/q26-opt4-1.webp#203x31)",
              "![Figure](/pyq/ba-end-term-aug-2025-fn/q26-opt5-1.webp#106x25)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "ba-end-term-aug-2025-fn-q27",
            type: "mcq",
            marks: 1.5,
            passage: "We are interested in understanding the efficiency of 5 Sales Offices. Each of the Sales Offices has an approved budget and a team size for achieving a fixed target of 10,00,000. As a Business Analyst, you must formulate a DEA problem using Linear programming for the Sales Office 2. Answer the given subquestions using the Table below.\n\n![Figure](/pyq/ba-end-term-aug-2025-fn/q26-passage-1.webp#279x154)",
            prompt: "What is the type constraint?",
            options: [
              "![Figure](/pyq/ba-end-term-aug-2025-fn/q27-opt1-1.webp#256x30)",
              "![Figure](/pyq/ba-end-term-aug-2025-fn/q27-opt2-1.webp#274x25)",
              "![Figure](/pyq/ba-end-term-aug-2025-fn/q27-opt3-1.webp#278x26)",
              "![Figure](/pyq/ba-end-term-aug-2025-fn/q27-opt4-1.webp#106x23)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "ba-end-term-aug-2025-fn-q28",
            type: "multi",
            marks: 1.5,
            passage: "We are interested in understanding the efficiency of 5 Sales Offices. Each of the Sales Offices has an approved budget and a team size for achieving a fixed target of 10,00,000. As a Business Analyst, you must formulate a DEA problem using Linear programming for the Sales Office 2. Answer the given subquestions using the Table below.\n\n![Figure](/pyq/ba-end-term-aug-2025-fn/q26-passage-1.webp#279x154)",
            prompt: "Which of them is not a constraint for the LP problem pertaining to Sales Office 2? (Select all that apply)",
            options: [
              "![Figure](/pyq/ba-end-term-aug-2025-fn/q28-opt1-1.webp#366x28)",
              "![Figure](/pyq/ba-end-term-aug-2025-fn/q28-opt2-1.webp#370x26)",
              "![Figure](/pyq/ba-end-term-aug-2025-fn/q28-opt3-1.webp#356x24)",
              "![Figure](/pyq/ba-end-term-aug-2025-fn/q28-opt4-1.webp#370x28)",
              "![Figure](/pyq/ba-end-term-aug-2025-fn/q28-opt5-1.webp#368x27)",
              "![Figure](/pyq/ba-end-term-aug-2025-fn/q28-opt6-1.webp#107x25)"
            ],
            answer: [
              5
            ],
            explanation: ""
          },
          {
            id: "ba-end-term-aug-2025-fn-q29",
            type: "numerical",
            marks: 1,
            passage: "You are in the process of selecting an ideal car when a lot of options are available. For example, the three brands that have been on top of your mind are: Maruti, Hyundai, and Volkswagen. Similarly, there are 2 engine options that are highly efficient: 1000 CC and 1500 CC. Lastly, the type of automatic gearbox is another important variable in deciding the ideal car. There are 3 gearbox options available: AMT, AT and DSC. Also, assume that Maruti is the least preferred brand, and assume AMT is the least preferred gearbox. Based on the inputs available, you build a regression model, and the coefficients are given below in Figure 1.\n\n![Figure](/pyq/ba-end-term-aug-2025-fn/q29-passage-1.webp#575x461)\n\nBased on the above data, answer the given subquestions.",
            prompt: "What is the part worth to customers if he/she upgrades from Maruti to Volkswagen?\n[Note: Enter your answer in decimal rounded to four decimal places. For example, if your answer is 1000.63545, then enter the answer as “1000.6355”]",
            answer: 1.833,
            tolerance: 0.001,
            explanation: "Official answer key accepts any value from 1.832 to 1.834."
          },
          {
            id: "ba-end-term-aug-2025-fn-q30",
            type: "numerical",
            marks: 2,
            passage: "You are in the process of selecting an ideal car when a lot of options are available. For example, the three brands that have been on top of your mind are: Maruti, Hyundai, and Volkswagen. Similarly, there are 2 engine options that are highly efficient: 1000 CC and 1500 CC. Lastly, the type of automatic gearbox is another important variable in deciding the ideal car. There are 3 gearbox options available: AMT, AT and DSC. Also, assume that Maruti is the least preferred brand, and assume AMT is the least preferred gearbox. Based on the inputs available, you build a regression model, and the coefficients are given below in Figure 1.\n\n![Figure](/pyq/ba-end-term-aug-2025-fn/q29-passage-1.webp#575x461)\n\nBased on the above data, answer the given subquestions.",
            prompt: "How much is the weightage provided by the customer for the Brand?\n[Note: Enter your answer in decimal rounded to four decimal places. For example, if your answer is 0.635450, then enter the answer as “63.5450”]",
            answer: 20.37,
            tolerance: 0.02,
            explanation: "Official answer key accepts any value from 20.35 to 20.39."
          },
          {
            id: "ba-end-term-aug-2025-fn-q31",
            type: "numerical",
            marks: 2,
            passage: "You are in the process of selecting an ideal car when a lot of options are available. For example, the three brands that have been on top of your mind are: Maruti, Hyundai, and Volkswagen. Similarly, there are 2 engine options that are highly efficient: 1000 CC and 1500 CC. Lastly, the type of automatic gearbox is another important variable in deciding the ideal car. There are 3 gearbox options available: AMT, AT and DSC. Also, assume that Maruti is the least preferred brand, and assume AMT is the least preferred gearbox. Based on the inputs available, you build a regression model, and the coefficients are given below in Figure 1.\n\n![Figure](/pyq/ba-end-term-aug-2025-fn/q29-passage-1.webp#575x461)\n\nBased on the above data, answer the given subquestions.",
            prompt: "How much is the weightage provided by the customer for the Engine?\n[Note: Enter your answer in decimal rounded to four decimal places. For example, if your answer is 0.635450, then enter the answer as “63.5450”]",
            answer: 25.93,
            tolerance: 0.03,
            explanation: "Official answer key accepts any value from 25.9 to 25.96."
          },
          {
            id: "ba-end-term-aug-2025-fn-q32",
            type: "numerical",
            marks: 2,
            passage: "You are in the process of selecting an ideal car when a lot of options are available. For example, the three brands that have been on top of your mind are: Maruti, Hyundai, and Volkswagen. Similarly, there are 2 engine options that are highly efficient: 1000 CC and 1500 CC. Lastly, the type of automatic gearbox is another important variable in deciding the ideal car. There are 3 gearbox options available: AMT, AT and DSC. Also, assume that Maruti is the least preferred brand, and assume AMT is the least preferred gearbox. Based on the inputs available, you build a regression model, and the coefficients are given below in Figure 1.\n\n![Figure](/pyq/ba-end-term-aug-2025-fn/q29-passage-1.webp#575x461)\n\nBased on the above data, answer the given subquestions.",
            prompt: "How much is the weightage provided by the customer for the Gearbox?\n[Note: Enter your answer in decimal rounded to four decimal places. For example, if your answer is 0.635450, then enter the answer as “63.5450”]",
            answer: 53.7,
            tolerance: 0.05,
            explanation: "Official answer key accepts any value from 53.65 to 53.75."
          }
        ]
      }
    ]
  },
  {
    slug: "ba-end-term-apr-2025-fn",
    title: "BA End Term · 13 Apr 2025 (FN)",
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
        subjectSlug: "business-analytics",
        title: "Business Analytics",
        short: "BA",
        questions: [
          {
            id: "ba-end-term-apr-2025-fn-q1",
            type: "multi",
            marks: 1,
            prompt: "Which of the following distributions is/are not symmetric in nature (choose all that are applicable)?",
            options: [
              "Standard Normal distribution",
              "Standard Binomial distribution",
              "Uniform distribution",
              "Poisson distribution"
            ],
            answer: [
              3
            ],
            explanation: ""
          },
          {
            id: "ba-end-term-apr-2025-fn-q2",
            type: "multi",
            marks: 1,
            prompt: "Which of the following is/are required to build an empirical distribution? (choose all that are applicable)",
            options: [
              "PDF or PMF",
              "Sample data",
              "Summary Statistics",
              "None of these"
            ],
            answer: [
              0,
              1,
              2
            ],
            explanation: ""
          },
          {
            id: "ba-end-term-apr-2025-fn-q3",
            type: "multi",
            marks: 1,
            prompt: "Given the Chisquare table in Figure-2, what is the conclusion from the test at a 95% significance level? (choose all that may be applicable)\n\n![Figure](/pyq/ba-end-term-apr-2025-fn/q3-1.webp#575x397)",
            options: [
              "REJECT the NULL HYPOTHESIS and conclude that the number of defects FOLLOWS a poisson distribution",
              "DO NOT REJECT the NULL HYPOTHESIS and conclude that the number of defects FOLLOWS a poisson distribution",
              "REJECT the NULL HYPOTHESIS and conclude that the number of defects DOES NOT FOLLOW a poisson distribution",
              "DO NOT REJECT the NULL HYPOTHESIS and conclude that the number of defects DOES NOT FOLLOW a poisson distribution",
              "REJECT the ALTERNATIVE HYPOTHESIS and conclude that the number of defects FOLLOWS a poisson distribution",
              "DO NOT REJECT the ALTERNATIVE HYPOTHESIS and conclude that the number of defects FOLLOWS a poisson distribution",
              "REJECT the ALTERNATIVE HYPOTHESIS and conclude that the number of defects DOES NOT FOLLOW a poisson distribution",
              "DO NOT REJECT the ALTERNATIVE HYPOTHESIS and conclude that the number of defects DOES NOT FOLLOW a poisson distribution"
            ],
            answer: [
              2
            ],
            explanation: ""
          },
          {
            id: "ba-end-term-apr-2025-fn-q4",
            type: "multi",
            marks: 1.5,
            prompt: "If the attribute values in the conjoint analysis is a continuous variable and the data is collected in a pairwise order, then what approach can be used (choose all that is/are applicable)",
            options: [
              "Optimization approach",
              "Regression approach",
              "Statistical approach",
              "None of these"
            ],
            answer: [
              0
            ],
            explanation: ""
          },
          {
            id: "ba-end-term-apr-2025-fn-q5",
            type: "multi",
            marks: 1.5,
            prompt: "The part worth can be defined as (choose all that may be applicable)",
            options: [
              "Level utilities",
              "The utility for that level of attribute",
              "Utility for separate parts of the products",
              "None of these"
            ],
            answer: [
              0,
              1,
              2
            ],
            explanation: ""
          },
          {
            id: "ba-end-term-apr-2025-fn-q6",
            type: "mcq",
            marks: 1,
            prompt: "In Figure-3 the customer wants to decide between the products O1 & O2, and x denotes the coordinates of the ideal product. Which of the following is/are true?\n\n![Figure](/pyq/ba-end-term-apr-2025-fn/q6-1.webp#379x319)",
            options: [
              "Customers will prefer O1 when d2>d1",
              "Customers will prefer O2 when d1<d2",
              "Both Customers will prefer O1 when d2>d1 & Customers will prefer O2 when d1<d2",
              "None of these"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "ba-end-term-apr-2025-fn-q7",
            type: "multi",
            marks: 2,
            prompt: "There are 7 business units and you are using the DEA to compare them. You solve the LP for business unit 5. You find from the constraint expression that business unit 1 has obtained an efficiency of 1 and business unit 2 has obtained an efficiency of 1 with the optimal weights of business unit 5. Which of the following statements is correct? (choose all that is/are applicable)",
            options: [
              "Business unit 5 is inefficient",
              "Business unit 1 is efficient",
              "Business unit 5 is efficient",
              "Business unit 2 is efficient"
            ],
            answer: [
              1,
              3
            ],
            explanation: ""
          },
          {
            id: "ba-end-term-apr-2025-fn-q8",
            type: "multi",
            marks: 2,
            prompt: "In DEA, when can the Linear Programming model be used for calculating the weights of efficiency (weighted outputs/weighted inputs)? (choose all that is/are applicable)",
            options: [
              "After converting the ratio into the linear objective function",
              "After normalizing the denominator",
              "By setting a constraint on the efficiency of all DMUs to be lesser than or equal to 1",
              "None of these"
            ],
            answer: [
              0,
              1,
              2
            ],
            explanation: ""
          },
          {
            id: "ba-end-term-apr-2025-fn-q9",
            type: "numerical",
            marks: 1.5,
            passage: "(The following is a purely imaginary scenario)\nA demand response curve is modelled using linear regression. The partial regression output is given in Figure-1 below. Given this information, answer the subquestions.\n\n![Figure](/pyq/ba-end-term-apr-2025-fn/q9-passage-1.webp#321x251)",
            prompt: "What is the elasticity of the demand response curve at a price of Rs. 50? (Note: Enter the answer rounded to two decimal places. For example, if the answer is “1.234”, then enter it as “1.23”)",
            answer: 0.035,
            tolerance: 0.015,
            explanation: "Official answer key accepts any value from 0.02 to 0.05."
          },
          {
            id: "ba-end-term-apr-2025-fn-q10",
            type: "numerical",
            marks: 0.5,
            passage: "(The following is a purely imaginary scenario)\nA demand response curve is modelled using linear regression. The partial regression output is given in Figure-1 below. Given this information, answer the subquestions.\n\n![Figure](/pyq/ba-end-term-apr-2025-fn/q9-passage-1.webp#321x251)",
            prompt: "What is the market size? (Note: Enter the answer rounded to two decimal places. For example, if the answer is “1.234”, then enter it as “1.23”)",
            answer: 39942,
            explanation: ""
          },
          {
            id: "ba-end-term-apr-2025-fn-q11",
            type: "numerical",
            marks: 0.5,
            passage: "(The following is a purely imaginary scenario)\nA demand response curve is modelled using linear regression. The partial regression output is given in Figure-1 below. Given this information, answer the subquestions.\n\n![Figure](/pyq/ba-end-term-apr-2025-fn/q9-passage-1.webp#321x251)",
            prompt: "What is the satiating price? (Note: Enter the answer rounded to two decimal places. For example, if the answer is “1.234”, then enter it as “1.23”)",
            answer: 1353.5,
            tolerance: 1.5,
            explanation: "Official answer key accepts any value from 1352 to 1355."
          },
          {
            id: "ba-end-term-apr-2025-fn-q12",
            type: "mcq",
            marks: 0.5,
            passage: "(The following is a purely imaginary scenario)\nA demand response curve is modelled using linear regression. The partial regression output is given in Figure-1 below. Given this information, answer the subquestions.\n\n![Figure](/pyq/ba-end-term-apr-2025-fn/q9-passage-1.webp#321x251)",
            prompt: "Based on the elasticity, which of the following statements are TRUE",
            options: [
              "The demand is elastic",
              "The demand is inelastic",
              "The price is elastic",
              "The price is inelastic"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "ba-end-term-apr-2025-fn-q13",
            type: "numerical",
            marks: 1,
            passage: "(The following is a purely imaginary scenario)\nA demand response curve is modelled using linear regression. The partial regression output is given in Figure-1 below. Given this information, answer the subquestions.\n\n![Figure](/pyq/ba-end-term-apr-2025-fn/q9-passage-1.webp#321x251)",
            prompt: "What percentage of the total linear variability in demand is captured by this model (given in figure-1)? (Note: Enter the answer in “percentage rounded to two decimal places without the percentage sign. For example, if the answer is “1.234%”, then enter it as “1.23”)",
            answer: 98.5,
            tolerance: 0.5,
            explanation: "Official answer key accepts any value from 98 to 99."
          },
          {
            id: "ba-end-term-apr-2025-fn-q14",
            type: "numerical",
            marks: 1,
            passage: "(The following is a purely imaginary scenario)\nA survey was conducted among 100 students who participated in all events at IITMs recent “Saarang” event. The students were asked to rate various aspects of their experience on a scale of “-5 to +5”, where “-5” indicates a very negative experience and “+5” indicates a very positive experience. The average student rating for each event was taken across four key parameters: “Event Ambience”, “Fairness of Event Judges”, “Event Conduct”, “Event Prize Money”. The target variable was “Event Performance” which measures the overall performance of each event. Based on the collected data, a correlation matrix as specified in Table-2 is obtained for the independent variables. With this information, answer the given sub-questions\n\n![Figure](/pyq/ba-end-term-apr-2025-fn/q14-passage-1.webp#575x222)",
            prompt: "What would be the R-Square value if a model is built with “Event Conduct” as the independent variable and “Event Prize Money” as the dependent variable? (Note: Enter the answer in percentage rounded to two decimal places without the “%” symbol. For example, if the answer is “1.234%”, then enter it as “1.23”)",
            answer: 26,
            tolerance: 1,
            explanation: "Official answer key accepts any value from 25 to 27."
          },
          {
            id: "ba-end-term-apr-2025-fn-q15",
            type: "numerical",
            marks: 1,
            passage: "(The following is a purely imaginary scenario)\nA survey was conducted among 100 students who participated in all events at IITMs recent “Saarang” event. The students were asked to rate various aspects of their experience on a scale of “-5 to +5”, where “-5” indicates a very negative experience and “+5” indicates a very positive experience. The average student rating for each event was taken across four key parameters: “Event Ambience”, “Fairness of Event Judges”, “Event Conduct”, “Event Prize Money”. The target variable was “Event Performance” which measures the overall performance of each event. Based on the collected data, a correlation matrix as specified in Table-2 is obtained for the independent variables. With this information, answer the given sub-questions\n\n![Figure](/pyq/ba-end-term-apr-2025-fn/q14-passage-1.webp#575x222)",
            prompt: "What would be the Adjusted R-Square value if a model is built between “Fairness of Event Judges” as the independent variable and “Event Ambience” as the dependent variable? (Note: Enter the answer in percentage rounded to two decimal places without the “%” symbol. For example, if the answer is “1.234%”, then enter it as “1.23”)",
            answer: 15.5,
            tolerance: 0.5,
            explanation: "Official answer key accepts any value from 15 to 16."
          },
          {
            id: "ba-end-term-apr-2025-fn-q16",
            type: "numerical",
            marks: 2,
            passage: "(The following is a purely imaginary scenario)\nA survey was conducted among 100 students who participated in all events at IITMs recent “Saarang” event. The students were asked to rate various aspects of their experience on a scale of “-5 to +5”, where “-5” indicates a very negative experience and “+5” indicates a very positive experience. The average student rating for each event was taken across four key parameters: “Event Ambience”, “Fairness of Event Judges”, “Event Conduct”, “Event Prize Money”. The target variable was “Event Performance” which measures the overall performance of each event. Based on the collected data, a correlation matrix as specified in Table-2 is obtained for the independent variables. With this information, answer the given sub-questions\n\n![Figure](/pyq/ba-end-term-apr-2025-fn/q14-passage-1.webp#575x222)",
            prompt: "What will be the percentage increase in the standard error corresponding to the beta value of “Event Ambience”, if a multiple linear regression model where both “Event Ambience” and “Event Price Money” are used as explanatory variables to predict “Event Performance”? (Note: Enter the answer in percentage rounded to two decimal places. For example, if the answer is “1.234%”, then enter it as “1.23”)",
            answer: 19,
            tolerance: 1,
            explanation: "Official answer key accepts any value from 18 to 20."
          },
          {
            id: "ba-end-term-apr-2025-fn-q17",
            type: "numerical",
            marks: 2,
            passage: "There are six business units. There are two outputs and one input under consideration. You are solving the optimization problem for business unit 3, and you find that the efficiency is 0.8. You see that the dual variables corresponding to the constraints of business units 2 and 5 are non- zero, and the dual variables corresponding to the constraints of other units are zero. The dual variables corresponding to the constraints of business units 2 and 5 are 0.5 and 0.3, respectively. Based on Table 6, answers the given sub-questions\n\n![Figure](/pyq/ba-end-term-apr-2025-fn/q17-passage-1.webp#271x118)",
            prompt: "How much will the Output 1 in HCU 3?",
            answer: 8062.5,
            tolerance: 1.5,
            explanation: "Official answer key accepts any value from 8061 to 8064."
          },
          {
            id: "ba-end-term-apr-2025-fn-q18",
            type: "numerical",
            marks: 2,
            passage: "There are six business units. There are two outputs and one input under consideration. You are solving the optimization problem for business unit 3, and you find that the efficiency is 0.8. You see that the dual variables corresponding to the constraints of business units 2 and 5 are non- zero, and the dual variables corresponding to the constraints of other units are zero. The dual variables corresponding to the constraints of business units 2 and 5 are 0.5 and 0.3, respectively. Based on Table 6, answers the given sub-questions\n\n![Figure](/pyq/ba-end-term-apr-2025-fn/q17-passage-1.webp#271x118)",
            prompt: "How much will the Output 2 in HCU 3?",
            answer: 10.75,
            tolerance: 0.25,
            explanation: "Official answer key accepts any value from 10.5 to 11."
          },
          {
            id: "ba-end-term-apr-2025-fn-q19",
            type: "numerical",
            marks: 1,
            passage: "(The following is a purely imaginary scenario)\nMs. Teddy, is the owner of a toy manufacturing company. The company produces its iconic “Teddy Bear” toys in a facility that operates for 8 hours a day, and 20 days in month. Ms. Teddy has recently completed the BA course and wants to see if her manufacturing facility is producing toys where the defects per ship follows a Poisson distribution. Accordingly, she collected data for the past month indicating the number of defects produced in a shift. This is provided in Table-1. Using this information answer the given sub-questions\n\n![Figure](/pyq/ba-end-term-apr-2025-fn/q19-passage-1.webp#340x499)",
            prompt: "How many bins will be present in the frequency table for the statistical test to be conducted? (Note: Enter an INTEGER answer)",
            answer: 6,
            explanation: ""
          },
          {
            id: "ba-end-term-apr-2025-fn-q20",
            type: "numerical",
            marks: 3,
            passage: "(The following is a purely imaginary scenario)\nMs. Teddy, is the owner of a toy manufacturing company. The company produces its iconic “Teddy Bear” toys in a facility that operates for 8 hours a day, and 20 days in month. Ms. Teddy has recently completed the BA course and wants to see if her manufacturing facility is producing toys where the defects per ship follows a Poisson distribution. Accordingly, she collected data for the past month indicating the number of defects produced in a shift. This is provided in Table-1. Using this information answer the given sub-questions\n\n![Figure](/pyq/ba-end-term-apr-2025-fn/q19-passage-1.webp#340x499)",
            prompt: "What is the value of the computed test statistic for the statistical test that is to be performed by Ms. Teddy to very her claim? (Note: Enter the answer rounded to two decimal places. For example, if the answer is “1.234”, then enter it as “1.23”)",
            answer: 590.5,
            tolerance: 1.5,
            explanation: "Official answer key accepts any value from 589 to 592."
          },
          {
            id: "ba-end-term-apr-2025-fn-q21",
            type: "numerical",
            marks: 1,
            passage: "(The following is a purely imaginary scenario)\nMs. Teddy, is the owner of a toy manufacturing company. The company produces its iconic “Teddy Bear” toys in a facility that operates for 8 hours a day, and 20 days in month. Ms. Teddy has recently completed the BA course and wants to see if her manufacturing facility is producing toys where the defects per ship follows a Poisson distribution. Accordingly, she collected data for the past month indicating the number of defects produced in a shift. This is provided in Table-1. Using this information answer the given sub-questions\n\n![Figure](/pyq/ba-end-term-apr-2025-fn/q19-passage-1.webp#340x499)",
            prompt: "How many degrees of freedom is present for the test statistic that is to be conducted by Ms. Teddy? (Note: Enter an INTEGER answer)",
            answer: 4,
            explanation: ""
          },
          {
            id: "ba-end-term-apr-2025-fn-q22",
            type: "numerical",
            marks: 2,
            passage: "(The following is a purely imaginary scenario)\nThe relationship between Demand “D” and Selling Price “P” is given by the equation D(p) = 780 – 9*P. Then answer the given sub-questions.",
            prompt: "If the intention is to maximize the profit, then what is the optimal selling price if the item is going to be made at Rs. 30 per unit? (Note: Enter the answer rounded to two decimal places. For example, if the answer is “1.234”, then enter it as “1.23”)",
            answer: 58.5,
            tolerance: 0.5,
            explanation: "Official answer key accepts any value from 58 to 59."
          },
          {
            id: "ba-end-term-apr-2025-fn-q23",
            type: "numerical",
            marks: 1,
            passage: "(The following is a purely imaginary scenario)\nThe relationship between Demand “D” and Selling Price “P” is given by the equation D(p) = 780 – 9*P. Then answer the given sub-questions.",
            prompt: "What is the maximum profit that can be generated? (Note: Enter the answer rounded to two decimal places. For example, if the answer is “1.234”, then enter it as “1.23”)",
            answer: 20424.5,
            tolerance: 0.5,
            explanation: "Official answer key accepts any value from 20424 to 20425."
          },
          {
            id: "ba-end-term-apr-2025-fn-q24",
            type: "mcq",
            marks: 1,
            passage: "As a Business Analyst, we are trying to find the DMUs that are efficient, where there are 2 outputs (Number of Leads & Sales) and one constant input. Based on the graph given in Figure-4 below, answer the given sub-questions\n\n![Figure](/pyq/ba-end-term-apr-2025-fn/q24-passage-1.webp#563x421)",
            prompt: "Which DMUs are in the economic frontier?",
            options: [
              "(3,2,1)",
              "(3,2,5)",
              "(4,5,2)",
              "(3,4,1)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "ba-end-term-apr-2025-fn-q25",
            type: "mcq",
            marks: 1,
            passage: "As a Business Analyst, we are trying to find the DMUs that are efficient, where there are 2 outputs (Number of Leads & Sales) and one constant input. Based on the graph given in Figure-4 below, answer the given sub-questions\n\n![Figure](/pyq/ba-end-term-apr-2025-fn/q24-passage-1.webp#563x421)",
            prompt: "Which DMUs are the reference units for DMU 2?",
            options: [
              "(5,4)",
              "(4,1)",
              "(3,5)",
              "(3,1)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "ba-end-term-apr-2025-fn-q26",
            type: "mcq",
            marks: 1,
            passage: "As a Business Analyst, we are trying to find the DMUs that are efficient, where there are 2 outputs (Number of Leads & Sales) and one constant input. Based on the graph given in Figure-4 below, answer the given sub-questions\n\n![Figure](/pyq/ba-end-term-apr-2025-fn/q24-passage-1.webp#563x421)",
            prompt: "Which DMUs are the reference units for DMU 5?",
            options: [
              "(1,4)",
              "(1,3)",
              "(3,4)",
              "None of these"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "ba-end-term-apr-2025-fn-q27",
            type: "numerical",
            marks: 1,
            passage: "(The following is a purely imaginary scenario)\nAn insurance company believes that people can be divided into two classes: “Class-1: Those who are accident prone” and “Class-2: Those who are not accident prone”. The company’s statistics show that an accident-prone person will have an accident at sometime within a faxed 1-year period with probability 0.4, whereas this probability decreases to 0.2 for a person who is not accident prone. It is assumed that 30 percent of the human population is accident prone. Given this information, answer the sub-questions",
            prompt: "What is the probability that a new policyholder will have an accident within a year of purchasing a policy? (Note: Enter the answer rounded to two decimal places. For example, if the answer is “1.234”, then enter it as “1.23”)",
            answer: 0.26,
            tolerance: 0.01,
            explanation: "Official answer key accepts any value from 0.25 to 0.27."
          },
          {
            id: "ba-end-term-apr-2025-fn-q28",
            type: "numerical",
            marks: 1,
            passage: "(The following is a purely imaginary scenario)\nAn insurance company believes that people can be divided into two classes: “Class-1: Those who are accident prone” and “Class-2: Those who are not accident prone”. The company’s statistics show that an accident-prone person will have an accident at sometime within a faxed 1-year period with probability 0.4, whereas this probability decreases to 0.2 for a person who is not accident prone. It is assumed that 30 percent of the human population is accident prone. Given this information, answer the sub-questions",
            prompt: "Suppose a new policyholder has an accident within a year of purchasing a policy. Then, what is the probability that the person is accident prone? (Note: Enter the answer rounded to two decimal places. For example, if the answer is “1.234”, then enter it as “1.23”)",
            answer: 0.46,
            tolerance: 0.02,
            explanation: "Official answer key accepts any value from 0.44 to 0.48."
          },
          {
            id: "ba-end-term-apr-2025-fn-q29",
            type: "numerical",
            marks: 2,
            passage: "A fintech company wants to assess the performance of its classification model, which predicts loan approval (positive class) or rejection (negative class). Table 3 presents the data used for model development, while Table 4 provides the estimated coefficients from the logistic regression model. To validate the model, the actual loan decisions made by the fintech company are shown in Table 5.\n\n![Figure](/pyq/ba-end-term-apr-2025-fn/q29-passage-1.webp#462x560)\n\nBased on the provided data, answer the given sub-questions",
            prompt: "What is the precision of class 1?\n(Note: Enter the answer in percentage rounded to two decimal places. For example, if the answer is “10.235%”, then enter it as “10.24”)",
            answer: 33.33,
            tolerance: 0.01,
            explanation: "Official answer key accepts any value from 33.32 to 33.34."
          },
          {
            id: "ba-end-term-apr-2025-fn-q30",
            type: "numerical",
            marks: 2,
            passage: "A fintech company wants to assess the performance of its classification model, which predicts loan approval (positive class) or rejection (negative class). Table 3 presents the data used for model development, while Table 4 provides the estimated coefficients from the logistic regression model. To validate the model, the actual loan decisions made by the fintech company are shown in Table 5.\n\n![Figure](/pyq/ba-end-term-apr-2025-fn/q29-passage-1.webp#462x560)\n\nBased on the provided data, answer the given sub-questions",
            prompt: "What is the sensitivity of the model?\n(Note: Enter the answer in percentage rounded to two decimal places. For example, if the answer is “10.235%”, then enter it as “10.24”)",
            answer: 50,
            tolerance: 0.05,
            explanation: "Official answer key accepts any value from 49.95 to 50.05."
          },
          {
            id: "ba-end-term-apr-2025-fn-q31",
            type: "numerical",
            marks: 2,
            passage: "A fintech company wants to assess the performance of its classification model, which predicts loan approval (positive class) or rejection (negative class). Table 3 presents the data used for model development, while Table 4 provides the estimated coefficients from the logistic regression model. To validate the model, the actual loan decisions made by the fintech company are shown in Table 5.\n\n![Figure](/pyq/ba-end-term-apr-2025-fn/q29-passage-1.webp#462x560)\n\nBased on the provided data, answer the given sub-questions",
            prompt: "What is the specificity of the model?\n(Note: Enter the answer in percentage rounded to two decimal places. For example, if the answer is “10.235%”, then enter it as “10.24”)",
            answer: 50,
            tolerance: 0.05,
            explanation: "Official answer key accepts any value from 49.95 to 50.05."
          },
          {
            id: "ba-end-term-apr-2025-fn-q32",
            type: "multi",
            marks: 1.5,
            passage: "A fintech company wants to assess the performance of its classification model, which predicts loan approval (positive class) or rejection (negative class). Table 3 presents the data used for model development, while Table 4 provides the estimated coefficients from the logistic regression model. To validate the model, the actual loan decisions made by the fintech company are shown in Table 5.\n\n![Figure](/pyq/ba-end-term-apr-2025-fn/q29-passage-1.webp#462x560)\n\nBased on the provided data, answer the given sub-questions",
            prompt: "What is the correct interpretation of the coefficient b1? (Choose that is/are applicable)",
            options: [
              "If the salary increases by 1 unit, the log of odds of the application acceptance increases by 0.04.",
              "If the salary increases by 1 unit, the odds of the application getting accepted increase by 4% (e^(0.4) = 1.04)",
              "None of these"
            ],
            answer: [
              0,
              1
            ],
            explanation: ""
          },
          {
            id: "ba-end-term-apr-2025-fn-q33",
            type: "multi",
            marks: 1.5,
            passage: "A fintech company wants to assess the performance of its classification model, which predicts loan approval (positive class) or rejection (negative class). Table 3 presents the data used for model development, while Table 4 provides the estimated coefficients from the logistic regression model. To validate the model, the actual loan decisions made by the fintech company are shown in Table 5.\n\n![Figure](/pyq/ba-end-term-apr-2025-fn/q29-passage-1.webp#462x560)\n\nBased on the provided data, answer the given sub-questions",
            prompt: "What is the correct interpretation of the coefficient b2? (Choose that is/are applicable)",
            options: [
              "If the age increases by 1 unit, the log of odds of the application acceptance decreases by 0.03.",
              "If the age increases by 1 unit, the odds of the application getting accepted decrease by 3% (e^(-0.03) = 0.97).",
              "None of these"
            ],
            answer: [
              0,
              1
            ],
            explanation: ""
          }
        ]
      }
    ]
  },
  {
    slug: "ba-end-term-dec-2024-an",
    title: "BA End Term · 22 Dec 2024 (AN)",
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
        subjectSlug: "business-analytics",
        title: "Business Analytics",
        short: "BA",
        questions: [
          {
            id: "ba-end-term-dec-2024-an-q1",
            type: "numerical",
            marks: 2,
            prompt: "Two factories “A” and “B” produce radios. Each radio produced at factory-A is defective with probability 0.05, whereas each radio produced at factory-B is defective with probability 0.1. You purchase two radios that were produced in the same factory (which is equally likely to have been either factory-A or factory-B). If the first radio that you check is defective, what is the conditional probability that the second radio is also defective? (Note: Enter your answer in decimals rounded to two decimal places. For example, if your answer is “0.456” then enter it as “0.46”)",
            answer: 0.045,
            tolerance: 0.005,
            explanation: "Official answer key accepts any value from 0.04 to 0.05."
          },
          {
            id: "ba-end-term-dec-2024-an-q2",
            type: "numerical",
            marks: 1.5,
            passage: "Milo’s Survey Services (MSS) specializes in evaluating the reaction of customers to new products. A client has hired MSS to ascertain customer reaction to a recently launched product (Frying Pan). During meeting with the client, MSS agreed to conduct door-to-door personal interviews to obtain responses from households with children and without children. In addition, MSS agreed to conduct both “Daytime” and “Evening time” interviews. Specifically, the client’s contract called for MSS to conduct 1000 interviews under the following quota guidelines\ni. Interview at least 400 households with children\nii. Interview at least 400 households without children\niii. The total number of households interviewed during evening must be at least as great as the number of households interviewed during the day\niv. At least 40% of the interviews for households with children must be conducted during the evening\nv. At least 60% of the interviews for households without children must be conducted during evening\nBecause the interviews for households with children take additional interview time and because evening interviewers are paid more than daytime, the cost varies with type of interview. Based on previous surveys conducted, MSS estimates the interview costs as given in Table-1\n\n![Figure](/pyq/ba-end-term-dec-2024-an/q2-passage-1.webp#517x139)\n\nMSS wanted to conduct the interviews so that the overall cost for conducting the survey is minimized. Given this information, answer the subquestions.",
            prompt: "How many (count of) decision variables are present in the standard form of the primal?",
            answer: 4,
            explanation: ""
          },
          {
            id: "ba-end-term-dec-2024-an-q3",
            type: "numerical",
            marks: 1.5,
            passage: "Milo’s Survey Services (MSS) specializes in evaluating the reaction of customers to new products. A client has hired MSS to ascertain customer reaction to a recently launched product (Frying Pan). During meeting with the client, MSS agreed to conduct door-to-door personal interviews to obtain responses from households with children and without children. In addition, MSS agreed to conduct both “Daytime” and “Evening time” interviews. Specifically, the client’s contract called for MSS to conduct 1000 interviews under the following quota guidelines\ni. Interview at least 400 households with children\nii. Interview at least 400 households without children\niii. The total number of households interviewed during evening must be at least as great as the number of households interviewed during the day\niv. At least 40% of the interviews for households with children must be conducted during the evening\nv. At least 60% of the interviews for households without children must be conducted during evening\nBecause the interviews for households with children take additional interview time and because evening interviewers are paid more than daytime, the cost varies with type of interview. Based on previous surveys conducted, MSS estimates the interview costs as given in Table-1\n\n![Figure](/pyq/ba-end-term-dec-2024-an/q2-passage-1.webp#517x139)\n\nMSS wanted to conduct the interviews so that the overall cost for conducting the survey is minimized. Given this information, answer the subquestions.",
            prompt: "Excluding the non-negativity constraint, how many (count of) constraints are present in the standard form of the primal?",
            answer: 7,
            explanation: ""
          },
          {
            id: "ba-end-term-dec-2024-an-q4",
            type: "numerical",
            marks: 1,
            passage: "Milo’s Survey Services (MSS) specializes in evaluating the reaction of customers to new products. A client has hired MSS to ascertain customer reaction to a recently launched product (Frying Pan). During meeting with the client, MSS agreed to conduct door-to-door personal interviews to obtain responses from households with children and without children. In addition, MSS agreed to conduct both “Daytime” and “Evening time” interviews. Specifically, the client’s contract called for MSS to conduct 1000 interviews under the following quota guidelines\ni. Interview at least 400 households with children\nii. Interview at least 400 households without children\niii. The total number of households interviewed during evening must be at least as great as the number of households interviewed during the day\niv. At least 40% of the interviews for households with children must be conducted during the evening\nv. At least 60% of the interviews for households without children must be conducted during evening\nBecause the interviews for households with children take additional interview time and because evening interviewers are paid more than daytime, the cost varies with type of interview. Based on previous surveys conducted, MSS estimates the interview costs as given in Table-1\n\n![Figure](/pyq/ba-end-term-dec-2024-an/q2-passage-1.webp#517x139)\n\nMSS wanted to conduct the interviews so that the overall cost for conducting the survey is minimized. Given this information, answer the subquestions.",
            prompt: "MSS has decided to conduct 400 interviews for Households with children and 600 interviews for households without children. Moreover, of the 400, 240 are to be conducted in the daytime. Similarly, of the 600 interviews, 360 are going to be conducted in the evening.\nThen, what is the total cost that would be incurred by MSS? (Note: enter your answer in “Rupees” rounded to two decimal places without the “₹” symbol. For example, if your answer is “₹123.456” then enter it as “123.46”)",
            answer: 20320,
            accepts: [
              20320,
              -20320
            ],
            explanation: "Official answer key accepts 20320 or -20320."
          },
          {
            id: "ba-end-term-dec-2024-an-q5",
            type: "numerical",
            marks: 2,
            passage: "Milo’s Survey Services (MSS) specializes in evaluating the reaction of customers to new products. A client has hired MSS to ascertain customer reaction to a recently launched product (Frying Pan). During meeting with the client, MSS agreed to conduct door-to-door personal interviews to obtain responses from households with children and without children. In addition, MSS agreed to conduct both “Daytime” and “Evening time” interviews. Specifically, the client’s contract called for MSS to conduct 1000 interviews under the following quota guidelines\ni. Interview at least 400 households with children\nii. Interview at least 400 households without children\niii. The total number of households interviewed during evening must be at least as great as the number of households interviewed during the day\niv. At least 40% of the interviews for households with children must be conducted during the evening\nv. At least 60% of the interviews for households without children must be conducted during evening\nBecause the interviews for households with children take additional interview time and because evening interviewers are paid more than daytime, the cost varies with type of interview. Based on previous surveys conducted, MSS estimates the interview costs as given in Table-1\n\n![Figure](/pyq/ba-end-term-dec-2024-an/q2-passage-1.webp#517x139)\n\nMSS wanted to conduct the interviews so that the overall cost for conducting the survey is minimized. Given this information, answer the subquestions.",
            prompt: "MSS has decided to conduct 400 interviews for Households with children and 600 interviews for households without children. Moreover, of the 400, 240 are to be conducted in the daytime. Similarly, of the 600 interviews, 360 are going to be conducted in the evening.\nThen, how many (count of) decision variables will have a NON-ZERO VALUE in dual formulation which is obtained based on the standard form of the primal?",
            answer: 2,
            explanation: ""
          },
          {
            id: "ba-end-term-dec-2024-an-q6",
            type: "numerical",
            marks: 1,
            passage: "The BS program coordinators wanted to understand the difficulty level of the BA course. Hence, past learners of the BA course were asked to give a rating (on a scale of 1 to 5, 1 meaning “least difficult” and 5 implying “most difficult”). A total of 200 students (100 male and 100 female) were approached for the survey and the result of the same is provided in Table-2. Given this data, answer the sub-questions.\n\n![Figure](/pyq/ba-end-term-dec-2024-an/q6-passage-1.webp#543x189)",
            prompt: "If the aim is to determine if the difficulty level is independent of gender, then how many male responses would you expect to choose the rating value of “3”? (Note: Enter your answer in decimal value rounded to two decimal places. For example, if your answer is “123.456” then enter it as “123.46”)",
            answer: 17.5,
            tolerance: 0.5,
            explanation: "Official answer key accepts any value from 17 to 18."
          },
          {
            id: "ba-end-term-dec-2024-an-q7",
            type: "numerical",
            marks: 1,
            passage: "The BS program coordinators wanted to understand the difficulty level of the BA course. Hence, past learners of the BA course were asked to give a rating (on a scale of 1 to 5, 1 meaning “least difficult” and 5 implying “most difficult”). A total of 200 students (100 male and 100 female) were approached for the survey and the result of the same is provided in Table-2. Given this data, answer the sub-questions.\n\n![Figure](/pyq/ba-end-term-dec-2024-an/q6-passage-1.webp#543x189)",
            prompt: "If the aim is to determine if the difficulty level is independent of gender, then how many female responses would you expect to choose the rating value of “5”? (Note: Enter your answer in decimal value rounded to two decimal places. For example, if your answer is “123.456” then enter it as “123.46”)",
            answer: 20,
            explanation: ""
          },
          {
            id: "ba-end-term-dec-2024-an-q8",
            type: "numerical",
            marks: 2,
            passage: "The BS program coordinators wanted to understand the difficulty level of the BA course. Hence, past learners of the BA course were asked to give a rating (on a scale of 1 to 5, 1 meaning “least difficult” and 5 implying “most difficult”). A total of 200 students (100 male and 100 female) were approached for the survey and the result of the same is provided in Table-2. Given this data, answer the sub-questions.\n\n![Figure](/pyq/ba-end-term-dec-2024-an/q6-passage-1.webp#543x189)",
            prompt: "If the aim is to find if the difficulty level is independent of gender, then what is the value for the test statistic? (Enter your answer in decimals rounded to two decimal places. Eg: If your answer is 10.256, then enter it as 10.26)",
            answer: 14.75,
            tolerance: 0.25,
            explanation: "Official answer key accepts any value from 14.5 to 15."
          },
          {
            id: "ba-end-term-dec-2024-an-q9",
            type: "numerical",
            marks: 2,
            passage: "The BS program coordinators wanted to understand the difficulty level of the BA course. Hence, past learners of the BA course were asked to give a rating (on a scale of 1 to 5, 1 meaning “least difficult” and 5 implying “most difficult”). A total of 200 students (100 male and 100 female) were approached for the survey and the result of the same is provided in Table-2. Given this data, answer the sub-questions.\n\n![Figure](/pyq/ba-end-term-dec-2024-an/q6-passage-1.webp#543x189)",
            prompt: "Assuming that each difficulty level splits the probability space into equal areas, the general belief is that the level of difficulty across all learners follows a normal distribution. To validate this belief, what is the value of the computed test statistic? (Enter your answer in decimals rounded to two decimal places. Eg: If your answer is 10.256, then enter it as 10.26)",
            answer: 21.5,
            tolerance: 0.5,
            explanation: "Official answer key accepts any value from 21 to 22."
          },
          {
            id: "ba-end-term-dec-2024-an-q10",
            type: "numerical",
            marks: 1,
            passage: "The BS program coordinators wanted to understand the difficulty level of the BA course. Hence, past learners of the BA course were asked to give a rating (on a scale of 1 to 5, 1 meaning “least difficult” and 5 implying “most difficult”). A total of 200 students (100 male and 100 female) were approached for the survey and the result of the same is provided in Table-2. Given this data, answer the sub-questions.\n\n![Figure](/pyq/ba-end-term-dec-2024-an/q6-passage-1.webp#543x189)",
            prompt: "For the hypothesis test focusing on whether the data is distributed normally, how many (count of) degrees of freedoms is present?",
            answer: 2,
            explanation: ""
          },
          {
            id: "ba-end-term-dec-2024-an-q11",
            type: "numerical",
            marks: 1,
            passage: "A doctor is of the opinion that “Blood Pressure (BP)” is affected by “Age” and “Weight”. Based on past data, the correlation between these three variables is identified and provided in Table-3. Then answer the given subquestions.\n\n![Figure](/pyq/ba-end-term-dec-2024-an/q11-passage-1.webp#276x121)",
            prompt: "If a linear regression model is built between “BP” and “Age”, then how much percentage of variability in BP can be explained by Age? (Note: Enter your answer in percentage rounded to two decimal places. Eg: If your answer is “10.256%”, then enter the answer as “10.26”)",
            answer: 48.31,
            tolerance: 0.01,
            explanation: "Official answer key accepts any value from 48.3 to 48.32."
          },
          {
            id: "ba-end-term-dec-2024-an-q12",
            type: "numerical",
            marks: 1,
            passage: "A doctor is of the opinion that “Blood Pressure (BP)” is affected by “Age” and “Weight”. Based on past data, the correlation between these three variables is identified and provided in Table-3. Then answer the given subquestions.\n\n![Figure](/pyq/ba-end-term-dec-2024-an/q11-passage-1.webp#276x121)",
            prompt: "What is the VIF for “Weight” with respect to “Age”? (Note: Enter your answer in decimal rounded to two decimal places. Eg: If your answer is “10.256”, then enter it as “10.26”)",
            answer: 1.35,
            tolerance: 0.05,
            explanation: "Official answer key accepts any value from 1.3 to 1.4."
          },
          {
            id: "ba-end-term-dec-2024-an-q13",
            type: "numerical",
            marks: 1,
            passage: "A logistic model is built to classify three types of animals: “Cat”, “Dog” and “Pig”. The confusion matrix for the model based on 30 samples is presented in Table-4.\n\n![Figure](/pyq/ba-end-term-dec-2024-an/q13-passage-1.webp#323x135)\n\nBased on the above data, answer the given subquestions",
            prompt: "What is the accuracy of the model? (Note: Enter your answer in percentage rounded to two decimal places. Eg: If your answer is “10.256%”, then enter the answer as “10.26”)",
            answer: 46.5,
            tolerance: 0.5,
            explanation: "Official answer key accepts any value from 46 to 47."
          },
          {
            id: "ba-end-term-dec-2024-an-q14",
            type: "numerical",
            marks: 2,
            passage: "A logistic model is built to classify three types of animals: “Cat”, “Dog” and “Pig”. The confusion matrix for the model based on 30 samples is presented in Table-4.\n\n![Figure](/pyq/ba-end-term-dec-2024-an/q13-passage-1.webp#323x135)\n\nBased on the above data, answer the given subquestions",
            prompt: "What is the precision of the model for predicting “Dog”? (Note: Enter your answer in percentage rounded to two decimal places. Eg: If your answer is “10.256%”, then enter the answer as “10.26”)",
            answer: 55.5,
            tolerance: 0.5,
            explanation: "Official answer key accepts any value from 55 to 56."
          },
          {
            id: "ba-end-term-dec-2024-an-q15",
            type: "mcq",
            marks: 1,
            passage: "We are interested in understanding the efficiency of 5 Sales Offices. Each of the Sales Offices has an approved budget and a team size for achieving a fixed target of 20,00,000. As a Business Analyst, you must formulate a DEA problem using Linear programming for the Sales Office 3. Answer subquestions using the Table below.\n\n![Figure](/pyq/ba-end-term-dec-2024-an/q15-passage-1.webp#301x158)",
            prompt: "What is the objective function?",
            options: [
              "![Figure](/pyq/ba-end-term-dec-2024-an/q15-opt1-1.webp#241x25)",
              "![Figure](/pyq/ba-end-term-dec-2024-an/q15-opt2-1.webp#243x24)",
              "![Figure](/pyq/ba-end-term-dec-2024-an/q15-opt3-1.webp#177x23)",
              "![Figure](/pyq/ba-end-term-dec-2024-an/q15-opt4-1.webp#175x22)",
              "![Figure](/pyq/ba-end-term-dec-2024-an/q15-opt5-1.webp#111x22)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "ba-end-term-dec-2024-an-q16",
            type: "mcq",
            marks: 1,
            passage: "We are interested in understanding the efficiency of 5 Sales Offices. Each of the Sales Offices has an approved budget and a team size for achieving a fixed target of 20,00,000. As a Business Analyst, you must formulate a DEA problem using Linear programming for the Sales Office 3. Answer subquestions using the Table below.\n\n![Figure](/pyq/ba-end-term-dec-2024-an/q15-passage-1.webp#301x158)",
            prompt: "What is the type constraint?",
            options: [
              "![Figure](/pyq/ba-end-term-dec-2024-an/q16-opt1-1.webp#220x20)",
              "![Figure](/pyq/ba-end-term-dec-2024-an/q16-opt2-1.webp#228x23)",
              "![Figure](/pyq/ba-end-term-dec-2024-an/q16-opt3-1.webp#230x24)",
              "![Figure](/pyq/ba-end-term-dec-2024-an/q15-opt5-1.webp#111x22)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "ba-end-term-dec-2024-an-q17",
            type: "mcq",
            marks: 1,
            passage: "We are interested in understanding the efficiency of 5 Sales Offices. Each of the Sales Offices has an approved budget and a team size for achieving a fixed target of 20,00,000. As a Business Analyst, you must formulate a DEA problem using Linear programming for the Sales Office 3. Answer subquestions using the Table below.\n\n![Figure](/pyq/ba-end-term-dec-2024-an/q15-passage-1.webp#301x158)",
            prompt: "Which of them is not a constraint for the LP problem pertaining to Sales Office 3?",
            options: [
              "![Figure](/pyq/ba-end-term-dec-2024-an/q17-opt1-1.webp#349x27)",
              "![Figure](/pyq/ba-end-term-dec-2024-an/q17-opt2-1.webp#348x25)",
              "![Figure](/pyq/ba-end-term-dec-2024-an/q17-opt3-1.webp#337x22)",
              "![Figure](/pyq/ba-end-term-dec-2024-an/q17-opt4-1.webp#346x21)",
              "![Figure](/pyq/ba-end-term-dec-2024-an/q17-opt5-1.webp#346x21)",
              "![Figure](/pyq/ba-end-term-dec-2024-an/q17-opt6-1.webp#111x22)"
            ],
            answer: 5,
            explanation: ""
          },
          {
            id: "ba-end-term-dec-2024-an-q18",
            type: "numerical",
            marks: 1.5,
            passage: "There are 5 business units. There are two outputs and one input under consideration. You are solving the optimization problem for business unit 3 and find that the efficiency to be 0.6. You find that the dual variables corresponding to the constraints of business units 2 and 4 are non-zero and the dual variables corresponding to the constraints of other units are zero. The dual variables corresponding to the constraints of business units 2 and 4 are 0.25 and 0.35, respectively. You are given the following table where sales and number of leads are the two outputs.\n\n![Figure](/pyq/ba-end-term-dec-2024-an/q18-passage-1.webp#275x91)\n\nBased on the above data, answer the given subquestions.",
            prompt: "How much will the Output 1 in HCU 3?\nNOTE: For every step performed round off 4 decimal places.",
            answer: 7541.5,
            tolerance: 0.5,
            explanation: "Official answer key accepts any value from 7541 to 7542."
          },
          {
            id: "ba-end-term-dec-2024-an-q19",
            type: "numerical",
            marks: 1.5,
            passage: "There are 5 business units. There are two outputs and one input under consideration. You are solving the optimization problem for business unit 3 and find that the efficiency to be 0.6. You find that the dual variables corresponding to the constraints of business units 2 and 4 are non-zero and the dual variables corresponding to the constraints of other units are zero. The dual variables corresponding to the constraints of business units 2 and 4 are 0.25 and 0.35, respectively. You are given the following table where sales and number of leads are the two outputs.\n\n![Figure](/pyq/ba-end-term-dec-2024-an/q18-passage-1.webp#275x91)\n\nBased on the above data, answer the given subquestions.",
            prompt: "How much will the Output 2 in HCU 3?\nNOTE: For every step performed round off 4 decimal places.",
            answer: 11.18,
            tolerance: 0.05,
            explanation: "Official answer key accepts any value from 11.13 to 11.23."
          },
          {
            id: "ba-end-term-dec-2024-an-q20",
            type: "mcq",
            marks: 1,
            passage: "As a Business Analyst, we are trying to find the DMUs that are efficient, where there are 2 inputs (Team Size & Budget) and one constant output. Based on the graph given below, answer the subquestions\n\n![Figure](/pyq/ba-end-term-dec-2024-an/q20-passage-1.webp#575x341)",
            prompt: "Which DMUs are in the economic frontier?",
            options: [
              "(1,2,4)",
              "(1,3,5)",
              "(1,2,4,5)",
              "(1,3,4)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "ba-end-term-dec-2024-an-q21",
            type: "mcq",
            marks: 1,
            passage: "As a Business Analyst, we are trying to find the DMUs that are efficient, where there are 2 inputs (Team Size & Budget) and one constant output. Based on the graph given below, answer the subquestions\n\n![Figure](/pyq/ba-end-term-dec-2024-an/q20-passage-1.webp#575x341)",
            prompt: "Which DMUs are the reference units for DMU 2?",
            options: [
              "(1,4)",
              "(1,3)",
              "(3,5)",
              "(3,4)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "ba-end-term-dec-2024-an-q22",
            type: "mcq",
            marks: 1,
            passage: "As a Business Analyst, we are trying to find the DMUs that are efficient, where there are 2 inputs (Team Size & Budget) and one constant output. Based on the graph given below, answer the subquestions\n\n![Figure](/pyq/ba-end-term-dec-2024-an/q20-passage-1.webp#575x341)",
            prompt: "Which DMUs are the reference units for DMU 4?",
            options: [
              "(1,4)",
              "(1,3)",
              "(3,5)",
              "(3,4)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "ba-end-term-dec-2024-an-q23",
            type: "numerical",
            marks: 2,
            passage: "The table below contains the details of 6 customers who have applied for a bike loan. Based on the 2 inputs (X1 & X2), the bank must decide whether to provide the bike loan or not. In addition, the actual decision on the loan is provided in the column (Y_act).\n\n![Figure](/pyq/ba-end-term-dec-2024-an/q23-passage-1.webp#270x183)\n\nA senior Business Analyst used logistic regression and computed the below values. Based on the data provided answer the subquestions\n\n![Figure](/pyq/ba-end-term-dec-2024-an/q23-passage-2.webp#152x101)",
            prompt: "What is the accuracy of the logistic regression model? Hint: Round off your answer to two decimal places and if your answer is 0.5543, please enter it as 55.43",
            answer: 33.35,
            tolerance: 0.05,
            explanation: "Official answer key accepts any value from 33.3 to 33.4."
          },
          {
            id: "ba-end-term-dec-2024-an-q24",
            type: "numerical",
            marks: 2,
            passage: "The table below contains the details of 6 customers who have applied for a bike loan. Based on the 2 inputs (X1 & X2), the bank must decide whether to provide the bike loan or not. In addition, the actual decision on the loan is provided in the column (Y_act).\n\n![Figure](/pyq/ba-end-term-dec-2024-an/q23-passage-1.webp#270x183)\n\nA senior Business Analyst used logistic regression and computed the below values. Based on the data provided answer the subquestions\n\n![Figure](/pyq/ba-end-term-dec-2024-an/q23-passage-2.webp#152x101)",
            prompt: "What is the precision of class 1? Hint: Round off your answer to two decimal places and if your answer is 0.5543, please enter it as 55.43",
            answer: 25,
            explanation: ""
          },
          {
            id: "ba-end-term-dec-2024-an-q25",
            type: "numerical",
            marks: 2,
            passage: "The table below contains the details of 6 customers who have applied for a bike loan. Based on the 2 inputs (X1 & X2), the bank must decide whether to provide the bike loan or not. In addition, the actual decision on the loan is provided in the column (Y_act).\n\n![Figure](/pyq/ba-end-term-dec-2024-an/q23-passage-1.webp#270x183)\n\nA senior Business Analyst used logistic regression and computed the below values. Based on the data provided answer the subquestions\n\n![Figure](/pyq/ba-end-term-dec-2024-an/q23-passage-2.webp#152x101)",
            prompt: "What is the sensitivity? Hint: Round off your answer to two decimal places and if your answer is 0.5543, please enter it as 55.43",
            answer: 50,
            explanation: ""
          },
          {
            id: "ba-end-term-dec-2024-an-q26",
            type: "numerical",
            marks: 2,
            passage: "The table below contains the details of 6 customers who have applied for a bike loan. Based on the 2 inputs (X1 & X2), the bank must decide whether to provide the bike loan or not. In addition, the actual decision on the loan is provided in the column (Y_act).\n\n![Figure](/pyq/ba-end-term-dec-2024-an/q23-passage-1.webp#270x183)\n\nA senior Business Analyst used logistic regression and computed the below values. Based on the data provided answer the subquestions\n\n![Figure](/pyq/ba-end-term-dec-2024-an/q23-passage-2.webp#152x101)",
            prompt: "What is the precision of class 0? Hint: Round off your answer to two decimal places and if your answer is 0.5543, please enter it as 55.43",
            answer: 50,
            explanation: ""
          },
          {
            id: "ba-end-term-dec-2024-an-q27",
            type: "numerical",
            marks: 2,
            passage: "The table below contains the details of 6 customers who have applied for a bike loan. Based on the 2 inputs (X1 & X2), the bank must decide whether to provide the bike loan or not. In addition, the actual decision on the loan is provided in the column (Y_act).\n\n![Figure](/pyq/ba-end-term-dec-2024-an/q23-passage-1.webp#270x183)\n\nA senior Business Analyst used logistic regression and computed the below values. Based on the data provided answer the subquestions\n\n![Figure](/pyq/ba-end-term-dec-2024-an/q23-passage-2.webp#152x101)",
            prompt: "What is the specificity? Hint: Round off your answer to two decimal places and if your answer is 0.5543, please enter it as 55.43",
            answer: 25,
            explanation: ""
          },
          {
            id: "ba-end-term-dec-2024-an-q28",
            type: "multi",
            marks: 2,
            prompt: "What is the format of data needed for performing the conjoint analysis using the Statistical or Linear Regression Approach?",
            options: [
              "Consumer Choice Data is Ratings",
              "Value of the attributes are continuous",
              "Consumer Choice Data is Pairwise Comparison",
              "Value of the product attributes are categorical"
            ],
            answer: [
              0,
              3
            ],
            explanation: ""
          },
          {
            id: "ba-end-term-dec-2024-an-q29",
            type: "mcq",
            marks: 1,
            prompt: "The objective function of the linear programming model using pair-wise judgments:",
            options: [
              "Minimize the poorness of fit",
              "Maximize the distance from the ideal point",
              "Minimize the distance from the ideal point",
              "Both Minimize the poorness of fit & Minimize the distance from the ideal point",
              "Both Maximize the distance from the ideal point & Minimize the distance from the ideal point"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "ba-end-term-dec-2024-an-q30",
            type: "mcq",
            marks: 1,
            prompt: "If the attribute values in the conjoint analysis is a continuous variable and the data is collected in a pairwise order, then what approach can be used:",
            options: [
              "Optimization approach",
              "Regression approach",
              "Statistical approach",
              "Optimization approach or Statistical approach"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "ba-end-term-dec-2024-an-q31",
            type: "mcq",
            marks: 2,
            prompt: "In a conjoint problem with 4 products and 2 attributes, how many pair-wise preferences are possible?",
            options: [
              "4",
              "14",
              "10",
              "6"
            ],
            answer: 3,
            explanation: ""
          }
        ]
      }
    ]
  }
];
