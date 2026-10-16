import type { QualifierMock } from "../types";

// Statistics I previous-year papers (IIT Madras BS, Foundation, weeks 1–4).
// Questions, options and answer keys are reproduced as they appear in the official
// question papers. Figures and tables are images in public/pyq/<slug>/, embedded
// inline as ![Figure](src#WxH) and rendered by components/qualifier-text.tsx.
// Range answers are stored as midpoint ± tolerance. Generated from the paper PDFs; edit with care.

export const statsPyqPapers: QualifierMock[] = [
  {
    slug: "stats-1-may-2024",
    title: "Stats I · May 2024",
    description: "The May 2024 Statistics I paper with the official answer key.",
    difficulty: "Standard",
    durationMin: 45,
    sections: [
      {
        subjectSlug: "statistics-for-data-science-1",
        title: "Statistics for Data Science I",
        short: "Stats I",
        questions: [
          {
            id: "stats-1-may-2024-q1",
            type: "multi",
            marks: 2,
            prompt: "Figure Q.1 shows the sales distribution of the number of bottles of different types of soft drinks in a shop on a particular day.\n\n![Figure](/pyq/stats-1-may-2024/q1-1.jpg#641x405)\n\nWhich of the following option(s) is/are true?",
            options: [
              "Median of the data will be either “Mountain Dew” or “Mirinda”.",
              "The data is bimodal.",
              "Mode is not defined for the given data.",
              "Median is not defined for the given data."
            ],
            answer: [1, 3],
            explanation: "Coca Cola and Mirinda both have the highest count, 15, so the data has two modes (bimodal). Drink type is a nominal variable with no natural order, so the median is not defined. So options A and C are false."
          },
          {
            id: "stats-1-may-2024-q2",
            type: "multi",
            marks: 2,
            prompt: "Which of the following statement(s) is/are true?",
            options: [
              "Structured data does not follow a predefined format, whereas unstructured data does.",
              "Recording of the data over time comes under Cross Sectional data.",
              "Time (in minutes) taken by a student to reach school from his home is a continuous variable.",
              "Comments on a youtube video comes under the unstructured data."
            ],
            answer: [2, 3],
            explanation: "Time taken in minutes can take any value in a range, so it is continuous. YouTube comments are free text, so they are unstructured. Structured data follows a fixed format (A is reversed), and data recorded over time is time series, not cross-sectional."
          },
          {
            id: "stats-1-may-2024-q3",
            type: "numerical",
            marks: 2,
            passage: "Table Q.1 represents the number of books read by five students in a year.\n![Figure](/pyq/stats-1-may-2024/q3-passage-2.jpg#471x200)\nBased on the above data, answer the given subquestions",
            prompt: "What is the value of x? Enter the answer correct to two decimal places.",
            answer: 0.25,
            tolerance: 0.02,
            explanation: "Kanika read 6 books with relative frequency 0.1, so total books = 6/0.1 = 60. Sunil read 15, so x = 15/60 = 0.25. Official answer key accepts any value from 0.23 to 0.27."
          },
          {
            id: "stats-1-may-2024-q4",
            type: "mcq",
            marks: 3,
            passage: "Table Q.1 represents the number of books read by five students in a year.\n![Figure](/pyq/stats-1-may-2024/q3-passage-2.jpg#471x200)\nBased on the above data, answer the given subquestions",
            prompt: "If the number of books read by Prateek is same as the number of books read by Sonakshi, then find the value of y + z.",
            options: [
              "0.2",
              "0.24",
              "0.4",
              "Insufficient information."
            ],
            answer: 2,
            explanation: "Total = 6/0.1 = 60 books. Prateek + Sonakshi = 60 − 15 − 6 − 15 = 24 (12 each). So y + z = 24/60 = 0.4."
          },
          {
            id: "stats-1-may-2024-q5",
            type: "mcq",
            marks: 2,
            passage: "Amit took a survey of a group of 32 college going students (consisting only of male and female students) to know whether they own a smartphone or not and he got to know the following information.\n(i). There are 3 males who do not own a smartphone.\n(ii). There are total 27 females.\n(iii). There are total 26 students who do not own a smartphone.\nBased on the above information, answer the given subquestions.",
            prompt: "Create a two-way contingency table and find out the number of males in this group who own a smartphone?",
            options: [
              "0",
              "2",
              "3",
              "4"
            ],
            answer: 1,
            explanation: "Total 32 students and 27 are females, so there are 32 − 27 = 5 males. 3 males do not own a smartphone, so 5 − 3 = 2 males own one."
          },
          {
            id: "stats-1-may-2024-q6",
            type: "multi",
            marks: 3,
            passage: "Amit took a survey of a group of 32 college going students (consisting only of male and female students) to know whether they own a smartphone or not and he got to know the following information.\n(i). There are 3 males who do not own a smartphone.\n(ii). There are total 27 females.\n(iii). There are total 26 students who do not own a smartphone.\nBased on the above information, answer the given subquestions.",
            prompt: "Choose the correct option(s) after making a two-way contingency table.",
            options: [
              "There are 40% of the males who do not own a smartphone.",
              "There are 14.81% of the females who own a smartphone.",
              "18.75% of the total students own a smartphone.",
              "We can calculate covariance to find the association between “Gender” and “Ownership of the smartphone”."
            ],
            answer: [1, 2],
            explanation: "Males = 5 (2 own, 3 do not). Students who own = 32 − 26 = 6, so females who own = 6 − 2 = 4. Then 4/27 = 14.81% and 6/32 = 18.75%. Males without a phone = 3/5 = 60%, not 40%. Covariance needs numerical variables, so D is false."
          },
          {
            id: "stats-1-may-2024-q7",
            type: "mcq",
            marks: 3,
            prompt: "Consider the following three statements:\nStatement 1 : Election symbol is a categorical variable.\nStatement 2 : Election symbol has a nominal scale of measurement. Statement 3 : Number of votes received by a candidate is a continuous variable.\nChoose the correct option from the following:",
            options: [
              "Statement-2 and statement-3 both are correct.",
              "Statement-1 and statement-3 both are correct.",
              "Statement-1 and statement-2 both are correct.",
              "All statements are correct."
            ],
            answer: 2,
            explanation: "Election symbol is a label with no order, so it is categorical with a nominal scale. Number of votes is a count (0, 1, 2, …), so it is discrete, not continuous. Statements 1 and 2 are correct."
          },
          {
            id: "stats-1-may-2024-q8",
            type: "mcq",
            marks: 2,
            prompt: "Choose the correct statement from the following:",
            options: [
              "Descriptive statistics is concerned with drawing of conclusions from the sample data.",
              "Inferential statistics is concerned with describing and summarizing the data.",
              "Inferential statistics doesn’t require sample data.",
              "All statements are incorrect."
            ],
            answer: 3,
            explanation: "Drawing conclusions from a sample is inferential statistics, and describing data is descriptive statistics, so A and B swap the meanings. Inferential statistics needs sample data, so C is also false. All statements are incorrect."
          },
          {
            id: "stats-1-may-2024-q9",
            type: "mcq",
            marks: 2,
            prompt: "Consider the following four images of the Scatter plot.\n\n![Figure](/pyq/stats-1-may-2024/q9-3.jpg#620x626)\n\nPlease select the option that will represent the correlation values arranged in ascending order.",
            options: [
              "A < B < C < D",
              "B < C < D < A",
              "B < A < C < D",
              "A < D < C < B"
            ],
            answer: 1,
            explanation: "B is a strong negative trend (most negative). C is a weaker negative trend. D is a moderate positive trend, and A is a strong positive trend (closest to +1). So B < C < D < A."
          },
          {
            id: "stats-1-may-2024-q10",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/stats-1-may-2024/q10-4.jpg#647x63)",
            answer: 9.93,
            tolerance: 0.03,
            explanation: "Sum of x₁ to x₈ = 8 × 6 = 48. Sum of x₈ to x₁₅ = 8 × 13 = 104. x₈ is counted twice, so total = 48 + 104 − 3 = 149. Mean = 149/15 ≈ 9.93. Official answer key accepts any value from 9.90 to 9.96."
          },
          {
            id: "stats-1-may-2024-q11",
            type: "numerical",
            marks: 3,
            prompt: "Find the population covariance between X and Y for the dataset given in Table Q.2.\n\n![Figure](/pyq/stats-1-may-2024/q11-5.jpg#308x110)",
            answer: 0,
            explanation: "Mean of X = 0/6 = 0 and mean of Y = 36/6 = 6. Σxy = −30 − 20 − 15 + 15 + 20 + 30 = 0. Cov = Σxy/6 − x̄ȳ = 0 − 0 = 0."
          },
          {
            id: "stats-1-may-2024-q12",
            type: "numerical",
            marks: 2,
            passage: "The marks (out of 100) scored by Manoj in a semester exam are given as 60, 70, 65, 75, 80. If Nitin has scored 5 marks more than Manoj in each subject.\nBased on the given information, answer the subquestions.",
            prompt: "Find the mean of the marks scored by Nitin.",
            answer: 75,
            explanation: "Manoj's mean = (60 + 70 + 65 + 75 + 80)/5 = 350/5 = 70. Nitin has 5 more in every subject, so his mean = 70 + 5 = 75."
          },
          {
            id: "stats-1-may-2024-q13",
            type: "mcq",
            marks: 4,
            passage: "The marks (out of 100) scored by Manoj in a semester exam are given as 60, 70, 65, 75, 80. If Nitin has scored 5 marks more than Manoj in each subject.\nBased on the given information, answer the subquestions.",
            prompt: "![Figure](/pyq/stats-1-may-2024/q13-6.jpg#358x190)",
            options: [
              "25",
              "50",
              "12.5",
              "Cannot determine"
            ],
            answer: 2,
            explanation: "Manoj's mean = 70. Deviations: −10, 0, −5, 5, 10. Variance = (100 + 0 + 25 + 25 + 100)/5 = 50. Modified marks = 0.5 × marks, so variance = 0.5² × 50 = 12.5."
          },
          {
            id: "stats-1-may-2024-q14",
            type: "numerical",
            marks: 2,
            passage: "The marks (out of 100) scored by Manoj in a semester exam are given as 60, 70, 65, 75, 80. If Nitin has scored 5 marks more than Manoj in each subject.\nBased on the given information, answer the subquestions.",
            prompt: "Calculate the correlation coefficient between the marks scored by Manoj and Nitin.",
            answer: 1,
            explanation: "Nitin's marks = Manoj's marks + 5 for every subject. This is a perfect positive linear relation (adding a constant does not change correlation), so r = 1."
          },
          {
            id: "stats-1-may-2024-q15",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/stats-1-may-2024/q15-passage-7.jpg#631x248)\nBased on the above data, answer the given subquestions",
            prompt: "What will be the median age for this group?",
            answer: 31,
            explanation: "The ages in order: 14, 15, 18, 21, 22, 24, 31, 31, 32, 33, 33, 33, 34. There are 13 values, so the median is the 7th value = 31."
          },
          {
            id: "stats-1-may-2024-q16",
            type: "numerical",
            marks: 1,
            passage: "![Figure](/pyq/stats-1-may-2024/q15-passage-7.jpg#631x248)\nBased on the above data, answer the given subquestions",
            prompt: "How many people are above 23 years of Age in the given stem and leaf plot?",
            answer: 8,
            explanation: "Ages above 23 are 24 (stem 2) and 31, 31, 32, 33, 33, 33, 34 (stem 3). That is 1 + 7 = 8 people."
          },
          {
            id: "stats-1-may-2024-q17",
            type: "numerical",
            marks: 1,
            prompt: "![Figure](/pyq/stats-1-may-2024/q17-8.jpg#647x57)",
            answer: 90,
            explanation: "A linear change y = 2x + 10 moves the most frequent value in the same way. New mode = 2 × 40 + 10 = 90."
          },
          {
            id: "stats-1-may-2024-q18",
            type: "multi",
            marks: 1,
            prompt: "Choose the correct option(s):",
            options: [
              "25th percentile is known as the first quartile.",
              "Median is the 60th percentile of any data.",
              "Inter-quartile range is defined as the difference between third quartile and second quartile.",
              "We need to arrange the data in ascending order to calculate the percentile."
            ],
            answer: [0, 3],
            explanation: "The 25th percentile is Q₁, and data must be sorted in ascending order to find percentiles. The median is the 50th percentile, not the 60th. IQR = Q₃ − Q₁, not Q₃ − Q₂."
          }
        ]
      }
    ]
  },
  {
    slug: "stats-1-january-2024",
    title: "Stats I · January 2024",
    description: "The January 2024 Statistics I paper with the official answer key.",
    difficulty: "Standard",
    durationMin: 45,
    sections: [
      {
        subjectSlug: "statistics-for-data-science-1",
        title: "Statistics for Data Science I",
        short: "Stats I",
        questions: [
          {
            id: "stats-1-january-2024-q1",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/stats-1-january-2024/q1-1.jpg#647x608)",
            options: [
              "There is an association between “Gender” and “Willingness” as row relative frequencies will be approximately same for all rows.",
              "There is no association between “Gender” and “Willingness” as row relative frequencies will be approximately same for all rows.",
              "There is an association between “Gender” and “Willingness” as row relative frequencies will be different for all rows.",
              "There is no association between “Gender” and “Willingness” as row relative frequencies will be different for all rows."
            ],
            answer: 1,
            explanation: "In the 100% stacked bars, about 22% of females and about 25% of males said No. The row relative frequencies are almost the same for both genders, so there is no association."
          },
          {
            id: "stats-1-january-2024-q2",
            type: "multi",
            marks: 4,
            prompt: "![Figure](/pyq/stats-1-january-2024/q2-2.jpg#647x360)",
            options: [
              "There are 9 students who have scored greater than 20 marks.",
              "The data is bimodal.",
              "Mean is greater than the median.",
              "Interquartile range is 28."
            ],
            answer: [2, 3],
            explanation: "Sum = 500, so mean = 500/20 = 25. Median = (10th + 11th)/2 = (23 + 25)/2 = 24, so mean > median. Q₁ = (5th + 6th)/2 = 10 and Q₃ = (15th + 16th)/2 = 38, so IQR = 28. Only 11 marks are above 20, and 10, 38, 50 each occur twice, so the data is not bimodal."
          },
          {
            id: "stats-1-january-2024-q3",
            type: "numerical",
            marks: 4,
            prompt: "![Figure](/pyq/stats-1-january-2024/q3-3.jpg#647x205)",
            answer: 39,
            explanation: "n = 10 + 4 + b + 4 + 1 + 2 = 21 + b. Sum = 4 + 2b + 12 + 4 + 10 = 30 + 2b. Mean: (30 + 2b)/(21 + b) = 1.6, so 0.4b = 3.6 and b = 9. Then n = 30, so b + n = 39."
          },
          {
            id: "stats-1-january-2024-q4",
            type: "numerical",
            marks: 4,
            prompt: "![Figure](/pyq/stats-1-january-2024/q4-4.jpg#647x231)",
            answer: 70,
            explanation: "x̄ = 350/5 = 70 and ȳ = 325/5 = 65. Deviations of X: −5, −5, −10, 10, 10; of Y: −5, −5, −10, 10, 10. Σ(products) = 25 + 25 + 100 + 100 + 100 = 350. Cov = 350/5 = 70."
          },
          {
            id: "stats-1-january-2024-q5",
            type: "multi",
            marks: 2,
            prompt: "To ensure the accuracy of conclusions drawn through inferential statistics, which of the following statement(s) must be true?",
            options: [
              "Sample should not be randomly selected.",
              "Sample should be randomly selected.",
              "Sample should be a good representative of the population.",
              "Sample should not be representative of the population."
            ],
            answer: [1, 2],
            explanation: "Inferential statistics uses a sample to draw conclusions about the population. For this to be accurate, the sample should be chosen at random and should represent the population well."
          },
          {
            id: "stats-1-january-2024-q6",
            type: "multi",
            marks: 2,
            prompt: "Which of the following statement(s) is/are true?",
            options: [
              "The gross annual income for each of 1000 randomly chosen households in New York City for the year 2000 is a time series data.",
              "Passenger Name Record (PNR) number has an ordinal scale of measurement.",
              "Revenue generated by India through tea exports to 10 different countries in year 2010 is a cross-sectional data.",
              "Shirt size is a categorical variable."
            ],
            answer: [2, 3],
            explanation: "Tea export revenue to 10 countries in one year is data at one point in time, so it is cross-sectional. Shirt size (S, M, L) is categorical. Incomes of households for one year are also cross-sectional, not time series, and a PNR number is only a label (nominal)."
          },
          {
            id: "stats-1-january-2024-q7",
            type: "mcq",
            marks: 1,
            passage: "An analyst conducted a survey to understand the opinions of college students regarding the quality of education at their institution. He collected the data from 10 students as:\n“Fair”, “Fair”, ”Excellent”, “Poor”, “Fair”, “Excellent”, “Poor”, “Poor”, “Excellent”, and “Poor”.\nBased on the above data, answer the given subquestions.",
            prompt: "What is the mode of the given data?",
            options: [
              "Excellent",
              "Poor",
              "Fair",
              "Mode is not defined for the given data"
            ],
            answer: 1,
            explanation: "Count each rating: Poor = 4, Fair = 3, Excellent = 3. Poor occurs most often, so the mode is Poor."
          },
          {
            id: "stats-1-january-2024-q8",
            type: "mcq",
            marks: 2,
            passage: "An analyst conducted a survey to understand the opinions of college students regarding the quality of education at their institution. He collected the data from 10 students as:\n“Fair”, “Fair”, ”Excellent”, “Poor”, “Fair”, “Excellent”, “Poor”, “Poor”, “Excellent”, and “Poor”.\nBased on the above data, answer the given subquestions.",
            prompt: "What is the median of the given data?",
            options: [
              "Poor",
              "Fair",
              "Excellent",
              "Median is not defined for given data"
            ],
            answer: 1,
            explanation: "The ratings are ordinal: Poor < Fair < Excellent. In order: P, P, P, P, F, F, F, E, E, E. The 5th and 6th values are both Fair, so the median is Fair."
          },
          {
            id: "stats-1-january-2024-q9",
            type: "multi",
            marks: 5,
            prompt: "![Figure](/pyq/stats-1-january-2024/q9-5.jpg#639x307)",
            options: [
              "Of all the shirts with Polo style, there are 26.67% shirts of Medium size.",
              "Of all the shirts with Small size, there are 25% shirts of Small Print style.",
              "There is no association between the size and style of shirts.",
              "There is an association between the size and style of shirts."
            ],
            answer: [0, 3],
            explanation: "Polo total = 35 + 20 + 20 = 75, and Medium Polo = 20, so 20/75 = 26.67%. Small total = 100 and Small Print = 40, so it is 40%, not 25%. Row relative frequencies differ (Small 25/35/40%, Large 60/20/20%), so there is an association."
          },
          {
            id: "stats-1-january-2024-q10",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/stats-1-january-2024/q10-6.jpg#647x56)",
            options: [
              "![Figure](/pyq/stats-1-january-2024/q10-opt1-7.jpg#126x25)",
              "![Figure](/pyq/stats-1-january-2024/q10-opt2-8.jpg#161x27)",
              "![Figure](/pyq/stats-1-january-2024/q10-opt3-9.jpg#145x24)",
              "![Figure](/pyq/stats-1-january-2024/q10-opt4-10.jpg#150x25)"
            ],
            answer: 2,
            explanation: "Mean x̄ = 20/50 = 0.4. Population variance = 8/50 = 0.16, so σ = √0.16 = 0.4."
          },
          {
            id: "stats-1-january-2024-q11",
            type: "mcq",
            marks: 3,
            prompt: "Select the correct statements from the following:",
            options: [
              "Two data sets with the identical frequency distributions will have identical relative frequency distributions.",
              "A relative frequency is the number of observations belonging to a category.",
              "Two data sets with the identical relative-frequency distributions will always have identical frequency distributions.",
              "If all of the bars in a bar chart have the same length, then the categorical variable shown in the bar chart has no variation."
            ],
            answer: 0,
            explanation: "Relative frequency = frequency ÷ total, so identical frequency tables give identical relative frequency tables. The reverse is false because the totals may differ (10 vs 100 items). A relative frequency is a proportion, not a count."
          },
          {
            id: "stats-1-january-2024-q12",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/stats-1-january-2024/q12-passage-11.jpg#617x614)",
            prompt: "Find the value of 10x.",
            answer: 357,
            explanation: "All slices add to 100%. x = 100 − (28.6 + 17.9 + 7.1 + 10.7) = 100 − 64.3 = 35.7. So 10x = 357."
          },
          {
            id: "stats-1-january-2024-q13",
            type: "multi",
            marks: 3,
            passage: "![Figure](/pyq/stats-1-january-2024/q12-passage-11.jpg#617x614)",
            prompt: "Choose the correct statement(s) from the following.",
            options: [
              "Mode of the data is solar energy.",
              "Median of the data is wind energy.",
              "The combined consumption of the hydro, biomass and geothermal energy is more than the wind energy consumption.",
              "The consumption of solar energy is 120 kWh."
            ],
            answer: [0, 2],
            explanation: "Solar has the largest share (35.7%), so it is the mode. Hydro + biomass + geothermal = 17.9 + 7.1 + 10.7 = 35.7% > 28.6% (wind). Energy source is nominal, so the median is not defined. Solar = 0.357 × 350 ≈ 125 kWh, not 120."
          },
          {
            id: "stats-1-january-2024-q14",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/stats-1-january-2024/q14-12.jpg#647x597)",
            options: [
              "Purchase and Region are categorical variables.",
              "Income Range has nominal scale of measurement.",
              "Age has a ratio scale of measurement.",
              "Household size is a discrete numerical variable.",
              "Purchase has an ordinal scale of measurement."
            ],
            answer: [0, 2, 3],
            explanation: "Purchase (Yes/No) and Region are categorical. Age has a true zero, so it is ratio scale. Household size is a count, so it is discrete. Income range has an order, so it is ordinal, not nominal, and Purchase is nominal, not ordinal."
          }
        ]
      }
    ]
  },
  {
    slug: "stats-1-september-2023",
    title: "Stats I · September 2023",
    description: "The September 2023 Statistics I paper with the official answer key.",
    difficulty: "Standard",
    durationMin: 45,
    sections: [
      {
        subjectSlug: "statistics-for-data-science-1",
        title: "Statistics for Data Science I",
        short: "Stats I",
        questions: [
          {
            id: "stats-1-september-2023-q1",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/stats-1-september-2023/q1-1.jpg#647x55)",
            answer: 10,
            explanation: "Population variance = (3√2)² = 18 and sample variance = (2√5)² = 20. Since n × 18 = (n − 1) × 20, we get 20 = 2n, so n = 10."
          },
          {
            id: "stats-1-september-2023-q2",
            type: "multi",
            marks: 3,
            passage: "The Head of the transportation facility at the IIT Madras campus wants to conduct a survey to rate the bus services offered to all the students. He randomly selects 100 final year students from the campus. Based on the given information, answer the subquestions",
            prompt: "Identify the sample and the population.",
            options: [
              "The population is all the students at IIT Madras campus.",
              "The sample is all the final year students at IIT Madras campus.",
              "The sample is 100 randomly selected final year students at IIT Madras campus.",
              "The population is all the final year students at IIT Madras campus."
            ],
            answer: [0, 2],
            explanation: "The survey is about bus services for all students, so the population is all students at IIT Madras. The sample is the 100 final year students who were randomly selected."
          },
          {
            id: "stats-1-september-2023-q3",
            type: "mcq",
            marks: 2,
            passage: "The Head of the transportation facility at the IIT Madras campus wants to conduct a survey to rate the bus services offered to all the students. He randomly selects 100 final year students from the campus. Based on the given information, answer the subquestions",
            prompt: "Identify the correct statement from the following.",
            options: [
              "Selected sample is a good representation of the population.",
              "Selected sample is not a good representation of the population."
            ],
            answer: 1,
            explanation: "The population is all students, but the sample has only final year students. Other years are left out, so the sample is not a good representation of the population."
          },
          {
            id: "stats-1-september-2023-q4",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/stats-1-september-2023/q4-passage-2.jpg#639x569)",
            prompt: "If a total of 500 fruits are sold on a given day, then find the number of mangoes sold.",
            answer: 125,
            explanation: "Mango has 25% of the pie. Mangoes sold = 25% of 500 = 0.25 × 500 = 125."
          },
          {
            id: "stats-1-september-2023-q5",
            type: "multi",
            marks: 3,
            passage: "![Figure](/pyq/stats-1-september-2023/q4-passage-2.jpg#639x569)",
            prompt: "Choose the correct statement(s) from the following.",
            options: [
              "The slices of pie chart adds up to 100%.",
              "Median of the data is Grapes.",
              "Mode of the data is Guava.",
              "The pie chart is misleading because it does not obey the area principle."
            ],
            answer: [0, 2],
            explanation: "The slices 10 + 15 + 20 + 25 + 30 = 100%. Guava has the largest share (30%), so it is the mode. Fruit type is nominal, so the median is not defined, and the slice areas match the percentages, so the chart is not misleading."
          },
          {
            id: "stats-1-september-2023-q6",
            type: "numerical",
            marks: 5,
            passage: "![Figure](/pyq/stats-1-september-2023/q6-passage-3.jpg#647x439)",
            prompt: "Calculate the absolute value of Point Bi-serial correlation coefficient between the result and number of hours spent. Enter the answer correct to three decimal places.",
            answer: 0.045,
            tolerance: 0.005,
            explanation: "Pass hours: 20, 25, 13 (mean 19.33). Fail hours: 19, 18, 20 (mean 19). Population SD of all 6 hours = √(74.83/6) ≈ 3.53. r = (19.33 − 19)/3.53 × √(3/6 × 3/6) ≈ 0.047. Official answer key accepts any value from 0.04 to 0.05."
          },
          {
            id: "stats-1-september-2023-q7",
            type: "mcq",
            marks: 2,
            passage: "![Figure](/pyq/stats-1-september-2023/q6-passage-3.jpg#647x439)",
            prompt: "Are the exam results of the selected students strongly influenced by the number of hours spent studying?",
            options: [
              "Yes, because the absolute value of Point Bi-serial coefficient is close to 1.",
              "No, because the absolute value of Point Bi-serial coefficient is close to 1.",
              "Yes, because the absolute value of Point Bi-serial coefficient is close to 0.",
              "No, because the absolute value of Point Bi-serial coefficient is close to 0."
            ],
            answer: 3,
            explanation: "The point bi-serial coefficient is about 0.047, which is very close to 0. So the result is not strongly influenced by the number of hours spent."
          },
          {
            id: "stats-1-september-2023-q8",
            type: "numerical",
            marks: 3,
            passage: "![Figure](/pyq/stats-1-september-2023/q8-passage-4.jpg#645x318)",
            prompt: "What is the average annual package of the students if each observation is doubled after subtracting 5 from it?",
            answer: 40,
            explanation: "Data: 10, 12, 16, 25, 25, 25, 30, 32, 34, 41. Sum = 250, so mean = 25. New value = 2(x − 5), so new mean = 2 × (25 − 5) = 40."
          },
          {
            id: "stats-1-september-2023-q9",
            type: "mcq",
            marks: 4,
            passage: "![Figure](/pyq/stats-1-september-2023/q8-passage-4.jpg#645x318)",
            prompt: "What is the population variance of the given data if 5 is subtracted from each observations?",
            options: [
              "78.6",
              "83.6",
              "88.6",
              "93.6"
            ],
            answer: 2,
            explanation: "Subtracting 5 from every value does not change the variance. Mean = 25. Squared deviations: 225, 169, 81, 0, 0, 0, 25, 49, 81, 256, sum = 886. Population variance = 886/10 = 88.6."
          },
          {
            id: "stats-1-september-2023-q10",
            type: "numerical",
            marks: 4,
            prompt: "![Figure](/pyq/stats-1-september-2023/q10-5.jpg#647x285)",
            answer: 0.32,
            tolerance: 0.03,
            explanation: "Means: Chemistry 30, Biology 25. Deviations: (−10, −5, 0, 5, 10) and (0, −5, 5, −5, 5). Σ(products) = 50, Σx² = 250, Σy² = 100. r = 50/√(250 × 100) = 50/158.1 ≈ 0.32. Official answer key accepts any value from 0.29 to 0.35."
          },
          {
            id: "stats-1-september-2023-q11",
            type: "multi",
            marks: 2,
            prompt: "Which of the following statement(s) is(are) true?",
            options: [
              "Eye colour of a person has ordinal scale of measurement.",
              "Recording the price of bitcoin every hour for 3 days is a time-series data.",
              "Number of students present in a class is a discrete variable.",
              "Amount of milk (in litres) is a categorical variable."
            ],
            answer: [1, 2],
            explanation: "Bitcoin price recorded every hour is data over time, so it is time series. Number of students is a count, so it is discrete. Eye colour has no order, so it is nominal, and amount of milk in litres is numerical (continuous), not categorical."
          },
          {
            id: "stats-1-september-2023-q12",
            type: "multi",
            marks: 2,
            prompt: "Sunidhi purchased 5 t-shirts of sizes M, L, S, XL, S for her cousins. Later she purchased one more t-shirt of size M, then choose the correct option(s) from the following:",
            options: [
              "Median of the new data is same as of old data.",
              "New data will be bimodal.",
              "Median of the new data will change.",
              "New data will be unimodal."
            ],
            answer: [0, 1],
            explanation: "Old data in order: S, S, M, L, XL, so the median is M. New data: S, S, M, M, L, XL. The 3rd and 4th values are both M, so the median is still M. S and M now appear twice each, so the data is bimodal."
          },
          {
            id: "stats-1-september-2023-q13",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/stats-1-september-2023/q13-6.jpg#647x78)",
            options: [
              "![Figure](/pyq/stats-1-september-2023/q13-opt1-7.jpg#219x51)",
              "![Figure](/pyq/stats-1-september-2023/q13-opt2-8.jpg#225x50)",
              "![Figure](/pyq/stats-1-september-2023/q13-opt3-9.jpg#219x50)",
              "![Figure](/pyq/stats-1-september-2023/q13-opt4-10.jpg#215x50)"
            ],
            answer: [1, 3],
            explanation: "m₂ − m₁ = [(x₂ + … + xₙ₊₁) − (x₁ + … + xₙ)]/n = (xₙ₊₁ − x₁)/n. In the same way, m₃ − m₂ = (xₙ₊₂ − x₂)/n. So options B and D are true."
          },
          {
            id: "stats-1-september-2023-q14",
            type: "numerical",
            marks: 2,
            prompt: "Find the IQR (Interquartile range) of the data 14, 20, 40, 23 and 18.",
            answer: 5,
            explanation: "Sorted data: 14, 18, 20, 23, 40 (n = 5). Q₁: 0.25 × 5 = 1.25, round up to the 2nd value = 18. Q₃: 0.75 × 5 = 3.75, round up to the 4th value = 23. IQR = 23 − 18 = 5."
          }
        ]
      }
    ]
  },
  {
    slug: "stats-1-may-2023",
    title: "Stats I · May 2023",
    description: "The May 2023 Statistics I paper with the official answer key.",
    difficulty: "Standard",
    durationMin: 45,
    sections: [
      {
        subjectSlug: "statistics-for-data-science-1",
        title: "Statistics for Data Science I",
        short: "Stats I",
        questions: [
          {
            id: "stats-1-may-2023-q1",
            type: "mcq",
            marks: 2,
            prompt: "A researcher wants to investigate the relationship between studying hours and exam scores. He collects the data on studying hours and exam scores from a sample of 100 students and perform a correlation analysis. Which branch of statistics does this analysis belong to?",
            options: [
              "Descriptive Statistics.",
              "Inferential Statistics.",
              "Both Descriptive and Inferential Statistics.",
              "Neither Descriptive nor Inferential Statistics."
            ],
            answer: 0,
            explanation: "The correlation is calculated only to describe the relation within the collected data of 100 students. No conclusion is drawn about a larger population, so this is descriptive statistics."
          },
          {
            id: "stats-1-may-2023-q2",
            type: "multi",
            marks: 2,
            prompt: "![Figure](/pyq/stats-1-may-2023/q2-1.jpg#647x353)",
            options: [
              "It is a time series Data.",
              "It is a cross sectional Data.",
              "It is a structured Data.",
              "It is an unstructured Data."
            ],
            answer: [0, 2],
            explanation: "Oil production is recorded quarter by quarter over time, so it is time series data. It is arranged in a table with fixed rows and columns, so it is structured data."
          },
          {
            id: "stats-1-may-2023-q3",
            type: "multi",
            marks: 2,
            prompt: "Which of the following is/are correct?",
            options: [
              "Mean and Mode can only be defined for a numerical data.",
              "Mode can be defined for a categorical data.",
              "There can be more than one mode for a data.",
              "Median can be measured for a categorical variable only if the variable is nominal.",
              "The sum of relative frequencies of all the observations in a given data set is always equal to 1."
            ],
            answer: [1, 2, 4],
            explanation: "Mode can be found for categorical data (most frequent category), and a data set can have more than one mode. Relative frequencies always add up to 1. Median needs an order, so it works for ordinal data, not nominal."
          },
          {
            id: "stats-1-may-2023-q4",
            type: "numerical",
            marks: 4,
            prompt: "![Figure](/pyq/stats-1-may-2023/q4-2.jpg#647x241)",
            answer: 5,
            explanation: "n = (x + 5) + 15 + 20 + x = 2x + 40. Sum = 3(x + 5) + 60 + 20(x + 1) + x(x + 3) = x² + 26x + 95. Set sum = 5n: x² + 26x + 95 = 10x + 200, so x² + 16x − 105 = 0, (x + 21)(x − 5) = 0. So x = 5."
          },
          {
            id: "stats-1-may-2023-q5",
            type: "numerical",
            marks: 4,
            prompt: "The mean and sample variance of the data set consisting of 10 observations is 22 and 81 respectively. Later it is noted that one observation 20 is wrongly noted as 15. what is the sample standard deviation of the original data set?(Enter the answer correct to two decimal accuracy)",
            answer: 8.695,
            tolerance: 0.015,
            explanation: "Σx = 220, Σ(x − x̄)² = 9 × 81 = 729, so Σx² = 729 + 10 × 22² = 5569. Correct values: Σx = 225, Σx² = 5569 − 15² + 20² = 5744, mean = 22.5. s² = (5744 − 10 × 22.5²)/9 = 681.5/9 ≈ 75.72, so s ≈ 8.70. Official answer key accepts any value from 8.68 to 8.71."
          },
          {
            id: "stats-1-may-2023-q6",
            type: "numerical",
            marks: 2,
            passage: "Table 2 represents the movies released in 2022 on the OTT platform.\n![Figure](/pyq/stats-1-may-2023/q6-passage-3.jpg#559x213)\nBased on the information, answer the given subquestions.",
            prompt: "Find the total number of released movies in 2022 on OTT Platform.",
            answer: 200,
            explanation: "Action has 54 movies with relative frequency 0.27. Total = 54/0.27 = 200 movies."
          },
          {
            id: "stats-1-may-2023-q7",
            type: "numerical",
            marks: 2,
            passage: "Table 2 represents the movies released in 2022 on the OTT platform.\n![Figure](/pyq/stats-1-may-2023/q6-passage-3.jpg#559x213)\nBased on the information, answer the given subquestions.",
            prompt: "Find the number of Thriller and Comedy movies released in 2022 on OTT Platform.",
            answer: 37,
            explanation: "Total = 54/0.27 = 200. Comedy d = 0.085 × 200 = 17 and Thriller c = 0.1 × 200 = 20. So Thriller + Comedy = 17 + 20 = 37."
          },
          {
            id: "stats-1-may-2023-q8",
            type: "numerical",
            marks: 3,
            passage: "Table 2 represents the movies released in 2022 on the OTT platform.\n![Figure](/pyq/stats-1-may-2023/q6-passage-3.jpg#559x213)\nBased on the information, answer the given subquestions.",
            prompt: "Calculate a + b. (Enter the answer correct to three decimal accuracy)",
            answer: 0.545,
            tolerance: 0.003,
            explanation: "Total = 54/0.27 = 200. a = 68/200 = 0.34 and b = 41/200 = 0.205. So a + b = 0.545. Official answer key accepts any value from 0.542 to 0.548."
          },
          {
            id: "stats-1-may-2023-q9",
            type: "multi",
            marks: 2,
            passage: "Based on the given data in the Table 3 , answer the subquestions.\n![Figure](/pyq/stats-1-may-2023/q9-passage-4.jpg#647x190)",
            prompt: "Which of the following statements is/are true?",
            options: [
              "XYZ Ltd. is a variable.",
              "Number of employees have a ratio scale of measurement.",
              "Growth Rate (%) is a variable.",
              "Category have an interval scale of measurement."
            ],
            answer: [1, 2],
            explanation: "Number of employees has a true zero and ratios make sense, so it is ratio scale. Growth rate is a column that changes from stock to stock, so it is a variable. XYZ Ltd. is one observation, not a variable, and Category is nominal."
          },
          {
            id: "stats-1-may-2023-q10",
            type: "mcq",
            marks: 2,
            passage: "Based on the given data in the Table 3 , answer the subquestions.\n![Figure](/pyq/stats-1-may-2023/q9-passage-4.jpg#647x190)",
            prompt: "What is the scale of measurement of “Category”?",
            options: [
              "Ordinal Scale.",
              "Ratio Scale.",
              "Nominal Scale.",
              "Interval Scale."
            ],
            answer: 2,
            explanation: "Category (Technology, Healthcare, Energy, …) only names groups. There is no order between them, so it has a nominal scale."
          },
          {
            id: "stats-1-may-2023-q11",
            type: "multi",
            marks: 2,
            passage: "Table 5 represents the data set about Advertising Expenditure and the Sales Revenue of a company. An analyst wants to investigate the relationship between the Advertising Expenditure (in Lakhs of rupees) and the monthly Sales Revenue (in Lakhs of rupees) of a company over a period of 6 months.\n![Figure](/pyq/stats-1-may-2023/q11-passage-5.jpg#487x233)\nBased on the information, answer the given subquestions.",
            prompt: "Which measure(s) will help you to determine the existence of the relation between Sales Revenue and the Advertising Expenses?",
            options: [
              "Covariance",
              "Mean of both Sales and Advertising",
              "Correlation Coefficient",
              "None"
            ],
            answer: [0, 2],
            explanation: "Covariance shows the direction of the relation between two numerical variables, and the correlation coefficient shows its direction and strength. The means alone say nothing about how the two variables move together."
          },
          {
            id: "stats-1-may-2023-q12",
            type: "numerical",
            marks: 4,
            passage: "Table 5 represents the data set about Advertising Expenditure and the Sales Revenue of a company. An analyst wants to investigate the relationship between the Advertising Expenditure (in Lakhs of rupees) and the monthly Sales Revenue (in Lakhs of rupees) of a company over a period of 6 months.\n![Figure](/pyq/stats-1-may-2023/q11-passage-5.jpg#487x233)\nBased on the information, answer the given subquestions.",
            prompt: "What is the sample covariance between the Sales Revenue and Advertising Expenses?(Enter the answer correct to one decimal accuracy)",
            answer: 18.9,
            tolerance: 0.3,
            explanation: "Mean of Advertising = 117/6 = 19.5, mean of Sales = 495/6 = 82.5. Σ(products of deviations) = −1.25 + 33.75 + 41.25 + 0.75 + 13.75 + 6.25 = 94.5. Sample covariance = 94.5/5 = 18.9. Official answer key accepts any value from 18.6 to 19.2."
          },
          {
            id: "stats-1-may-2023-q13",
            type: "multi",
            marks: 3,
            passage: "A clothe retailer wants to analyze the prices of different brands of t-shirts in his store. He randomly collected 10 t-shirts and prices (in rupees) of the t-shirts are 150, 550, 700, 240, 300, 750, 200, 180, 320, 420 respectively.\nBased on the information, answer the given subquestions.",
            prompt: "Price below which 25% of the t-shirts fall.",
            options: [
              "It is a measure of Q₁.",
              "200 Rs.",
              "It is a measure of Q₃.",
              "550 Rs."
            ],
            answer: [0, 1],
            explanation: "The value below which 25% of data falls is Q₁. Sorted: 150, 180, 200, 240, 300, 320, 420, 550, 700, 750. 0.25 × 10 = 2.5, round up to the 3rd value, so Q₁ = 200 Rs."
          },
          {
            id: "stats-1-may-2023-q14",
            type: "multi",
            marks: 3,
            passage: "A clothe retailer wants to analyze the prices of different brands of t-shirts in his store. He randomly collected 10 t-shirts and prices (in rupees) of the t-shirts are 150, 550, 700, 240, 300, 750, 200, 180, 320, 420 respectively.\nBased on the information, answer the given subquestions.",
            prompt: "Price of the t-shirt that separates price of the highest 25% of the data from the lower 75%.",
            options: [
              "It is a measure of Q₂",
              "550 Rupees",
              "It is a measure of Q₃",
              "310 Rupees"
            ],
            answer: [1, 2],
            explanation: "The value that separates the top 25% from the lower 75% is Q₃. Sorted data has 10 values. 0.75 × 10 = 7.5, round up to the 8th value, so Q₃ = 550 Rs."
          },
          {
            id: "stats-1-may-2023-q15",
            type: "mcq",
            marks: 3,
            passage: "A clothe retailer wants to analyze the prices of different brands of t-shirts in his store. He randomly collected 10 t-shirts and prices (in rupees) of the t-shirts are 150, 550, 700, 240, 300, 750, 200, 180, 320, 420 respectively.\nBased on the information, answer the given subquestions.",
            prompt: "How many outliers are in the given data set?",
            options: [
              "0",
              "1",
              "2",
              "Can’t determined."
            ],
            answer: 0,
            explanation: "Q₁ = 200 and Q₃ = 550, so IQR = 350 and 1.5 × IQR = 525. Fences: 200 − 525 = −325 and 550 + 525 = 1075. All prices (150 to 750) are inside, so there are 0 outliers."
          }
        ]
      }
    ]
  },
  {
    slug: "stats-1-january-2023",
    title: "Stats I · January 2023",
    description: "The January 2023 Statistics I paper with the official answer key.",
    difficulty: "Standard",
    durationMin: 45,
    sections: [
      {
        subjectSlug: "statistics-for-data-science-1",
        title: "Statistics for Data Science I",
        short: "Stats I",
        questions: [
          {
            id: "stats-1-january-2023-q1",
            type: "mcq",
            marks: 2,
            passage: "Figure Q.1 represents the placement report of an engineering college for the academic year 2021-22.\n![Figure](/pyq/stats-1-january-2023/q1-passage-1.jpg#647x469)\nBased on the information, answer the given subquestions.",
            prompt: "Which of the following category does not represent the mode?",
            options: [
              "Analytics",
              "Software",
              "Core",
              "Insufficient information"
            ],
            answer: 2,
            explanation: "Analytics and Software both have the highest share (30%), so both are modes. Core has 25%, so it does not represent the mode."
          },
          {
            id: "stats-1-january-2023-q2",
            type: "numerical",
            marks: 3,
            passage: "Figure Q.1 represents the placement report of an engineering college for the academic year 2021-22.\n![Figure](/pyq/stats-1-january-2023/q1-passage-1.jpg#647x469)\nBased on the information, answer the given subquestions.",
            prompt: "If 1200 students are placed during the placement season of 2021-22, then find the number of students placed in core companies?",
            answer: 300,
            explanation: "Core companies have 25% of the placements. Number placed in core = 25% of 1200 = 0.25 × 1200 = 300."
          },
          {
            id: "stats-1-january-2023-q3",
            type: "multi",
            marks: 3,
            prompt: "Which of the following statements is/are true?",
            options: [
              "A sample is the subset of a population.",
              "Numerical variables can have all the properties of ordinal and nominal scales of measurement.",
              "Categorical variable can have numerical properties.",
              "Correlation coefficient measures a linear association between two numerical variables."
            ],
            answer: [0, 1, 3],
            explanation: "A sample is a part (subset) of the population. Numerical variables can be labelled and ordered, so they have nominal and ordinal properties too. Correlation measures linear association between two numerical variables. Categorical variables do not have numerical properties."
          },
          {
            id: "stats-1-january-2023-q4",
            type: "multi",
            marks: 3,
            prompt: "Which of the following represent(s) cross sectional data?",
            options: [
              "Census of tigers estimated in four different countries in 2021.",
              "Yearly irrigation report released by a government over the period of ten years.",
              "Revenue generated by a company in four different states in 2022.",
              "Monthly expenditure of a family in 2020."
            ],
            answer: [0, 2],
            explanation: "Cross-sectional data is collected at one point in time across many subjects. Tiger census in 4 countries in 2021 and revenue in 4 states in 2022 fit this. A ten-year report and monthly expenses are recorded over time, so they are time series."
          },
          {
            id: "stats-1-january-2023-q5",
            type: "multi",
            marks: 3,
            prompt: "Choose the correct statement/s ?",
            options: [
              "A nominal scale has the property of labelling the categories and it does not involve the ranking of data.",
              "An ordinal scale has all the properties of nominal scale and it involves the ranking of data.",
              "An Interval scale has all the properties of ordinal scale and it satisfies the absolute zero property.",
              "A ratio scale has all the properties of interval scale and it does not satisfy the absolute zero property."
            ],
            answer: [0, 1],
            explanation: "A nominal scale only labels categories with no ranking. An ordinal scale has nominal properties plus ranking. An interval scale has no absolute zero, and a ratio scale does have an absolute zero, so C and D are false."
          },
          {
            id: "stats-1-january-2023-q6",
            type: "mcq",
            marks: 4,
            prompt: "Suppose the number of cars sold by a car dealer in five months are 12, 8, 9, 20, 40.\n\nWhich of the following is/are outliers?",
            options: [
              "-8",
              "20",
              "40",
              "8"
            ],
            answer: 2,
            explanation: "Sorted: 8, 9, 12, 20, 40. Q₁ = 2nd value = 9 and Q₃ = 4th value = 20, so IQR = 11 and 1.5 × IQR = 16.5. Upper fence = 20 + 16.5 = 36.5. Only 40 is above it, so 40 is the outlier."
          },
          {
            id: "stats-1-january-2023-q7",
            type: "multi",
            marks: 4,
            prompt: "An analyst did a survey to know whether literacy rate affects voting rate among adults in villages. He collected the data from a village and the results are tabulated in Table Q.1.\n\n![Figure](/pyq/stats-1-january-2023/q7-2.jpg#312x145)\n\nChoose the correct option/s?",
            options: [
              "Of all the literate adults, 25% do not participate in voting.",
              "Of all the illiterate adults, 72.73% participate in voting.",
              "If all row relative frequencies are similar within each column then, it implies that all column relative frequencies will also be similar within each row.",
              "If all column relative frequencies are similar within each row then, it does not imply that all row relative frequencies will also be similar within each column.",
              "There is no association between literacy and voting participation.",
              "There is an association between literacy and voting participation."
            ],
            answer: [0, 1, 2, 4],
            explanation: "Literate: 10 of 40 do not vote = 25%. Illiterate: 40 of 55 vote = 72.73%. Literate adults vote 75%, which is close to 72.73%, so there is no association. If row relative frequencies are similar, column relative frequencies are also similar, so C is true and D is false."
          },
          {
            id: "stats-1-january-2023-q8",
            type: "mcq",
            marks: 2,
            passage: "An analyst want to analyse the salary of employees in different organizations in a city. To analyse this, he has selected an organization and the data of salaries is tabulated as shown in Table Q.2.\n![Figure](/pyq/stats-1-january-2023/q8-passage-3.jpg#638x206)\nBased on the given information, answer the subquestions.",
            prompt: "Based on the data collected from an organisation, analyst made a statement that the average salary of an employee is 50,000 rupees in different organizations in the city. The given statement of analyst is based on which kind of statistical analysis ?",
            options: [
              "Descriptive statistics",
              "Inferential statistics"
            ],
            answer: 1,
            explanation: "The analyst used data from only one organisation and made a claim about all organisations in the city. Drawing a conclusion about a population from a sample is inferential statistics."
          },
          {
            id: "stats-1-january-2023-q9",
            type: "numerical",
            marks: 4,
            passage: "An analyst want to analyse the salary of employees in different organizations in a city. To analyse this, he has selected an organization and the data of salaries is tabulated as shown in Table Q.2.\n![Figure](/pyq/stats-1-january-2023/q8-passage-3.jpg#638x206)\nBased on the given information, answer the subquestions.",
            prompt: "What is the sample standard deviation of salary (in thousand rupees)? (Enter the answer correct to 2 decimal accuracy)",
            answer: 12.25,
            tolerance: 0.03,
            explanation: "Mean = (80 + 60 + 50 + 60 + 50)/5 = 60. Squared deviations: 400, 0, 100, 0, 100, sum = 600. Sample variance = 600/4 = 150, so s = √150 ≈ 12.25. Official answer key accepts any value from 12.22 to 12.28."
          },
          {
            id: "stats-1-january-2023-q10",
            type: "numerical",
            marks: 3,
            passage: "The heights (in cm) of ten athletes are represented by a stem and leaf plot in Figure Q.2.\n![Figure](/pyq/stats-1-january-2023/q10-passage-4.jpg#290x222)\nBased on the above information, answer the given subquestions",
            prompt: "What is the median height(in cm) of an athlete?",
            answer: 175,
            explanation: "Heights in order: 162, 162, 168, 169, 175, 175, 175, 177, 180, 184. There are 10 values, so median = (5th + 6th)/2 = (175 + 175)/2 = 175 cm."
          },
          {
            id: "stats-1-january-2023-q11",
            type: "numerical",
            marks: 3,
            passage: "The heights (in cm) of ten athletes are represented by a stem and leaf plot in Figure Q.2.\n![Figure](/pyq/stats-1-january-2023/q10-passage-4.jpg#290x222)\nBased on the above information, answer the given subquestions",
            prompt: "What is the mode of the heights (in cm) of athletes?",
            answer: 175,
            explanation: "In the plot, 175 appears three times (17 | 5 5 5). No other height appears more than twice, so the mode is 175 cm."
          },
          {
            id: "stats-1-january-2023-q12",
            type: "numerical",
            marks: 3,
            prompt: "The mean and sample variance of the marks (out of 50) scored by the students in the Statistics course are 40 and 25 respectively. If 5 is subtracted from the marks of each student and then multiplied by 2. Find the mean of the modified marks.",
            answer: 70,
            explanation: "Modified mark = 2(x − 5). The mean changes in the same way: new mean = 2 × (40 − 5) = 2 × 35 = 70."
          },
          {
            id: "stats-1-january-2023-q13",
            type: "mcq",
            marks: 3,
            prompt: "Let X and Y represent the total marks of Mayur and Deepak in 5 subjects respectively. If the marks scored by Deepak is twice the marks scored by Mayur in each subject, then which of the following statement is correct?",
            options: [
              "There is no correlation between X and Y .",
              "There is a weak positive correlation between X and Y .",
              "There is a strong positive correlation between X and Y .",
              "Insufficient information."
            ],
            answer: 2,
            explanation: "Y = 2X for every subject, which is a perfect positive linear relation. So the correlation is r = 1, a strong positive correlation."
          }
        ]
      }
    ]
  },
];
