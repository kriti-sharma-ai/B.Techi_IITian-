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
            explanation: ""
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
            explanation: ""
          },
          {
            id: "stats-1-may-2024-q3",
            type: "numerical",
            marks: 2,
            passage: "Table Q.1 represents the number of books read by five students in a year.\n![Figure](/pyq/stats-1-may-2024/q3-passage-2.jpg#471x200)\nBased on the above data, answer the given subquestions",
            prompt: "What is the value of x? Enter the answer correct to two decimal places.",
            answer: 0.25,
            tolerance: 0.02,
            explanation: "Official answer key accepts any value from 0.23 to 0.27."
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
            explanation: ""
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
            explanation: ""
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
            explanation: ""
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
            explanation: ""
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
            explanation: ""
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
            explanation: ""
          },
          {
            id: "stats-1-may-2024-q10",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/stats-1-may-2024/q10-4.jpg#647x63)",
            answer: 9.93,
            tolerance: 0.03,
            explanation: "Official answer key accepts any value from 9.90 to 9.96."
          },
          {
            id: "stats-1-may-2024-q11",
            type: "numerical",
            marks: 3,
            prompt: "Find the population covariance between X and Y for the dataset given in Table Q.2.\n\n![Figure](/pyq/stats-1-may-2024/q11-5.jpg#308x110)",
            answer: 0,
            explanation: ""
          },
          {
            id: "stats-1-may-2024-q12",
            type: "numerical",
            marks: 2,
            passage: "The marks (out of 100) scored by Manoj in a semester exam are given as 60, 70, 65, 75, 80. If Nitin has scored 5 marks more than Manoj in each subject.\nBased on the given information, answer the subquestions.",
            prompt: "Find the mean of the marks scored by Nitin.",
            answer: 75,
            explanation: ""
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
            explanation: ""
          },
          {
            id: "stats-1-may-2024-q14",
            type: "numerical",
            marks: 2,
            passage: "The marks (out of 100) scored by Manoj in a semester exam are given as 60, 70, 65, 75, 80. If Nitin has scored 5 marks more than Manoj in each subject.\nBased on the given information, answer the subquestions.",
            prompt: "Calculate the correlation coefficient between the marks scored by Manoj and Nitin.",
            answer: 1,
            explanation: ""
          },
          {
            id: "stats-1-may-2024-q15",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/stats-1-may-2024/q15-passage-7.jpg#631x248)\nBased on the above data, answer the given subquestions",
            prompt: "What will be the median age for this group?",
            answer: 31,
            explanation: ""
          },
          {
            id: "stats-1-may-2024-q16",
            type: "numerical",
            marks: 1,
            passage: "![Figure](/pyq/stats-1-may-2024/q15-passage-7.jpg#631x248)\nBased on the above data, answer the given subquestions",
            prompt: "How many people are above 23 years of Age in the given stem and leaf plot?",
            answer: 8,
            explanation: ""
          },
          {
            id: "stats-1-may-2024-q17",
            type: "numerical",
            marks: 1,
            prompt: "![Figure](/pyq/stats-1-may-2024/q17-8.jpg#647x57)",
            answer: 90,
            explanation: ""
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
            explanation: ""
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
            explanation: ""
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
            explanation: ""
          },
          {
            id: "stats-1-january-2024-q3",
            type: "numerical",
            marks: 4,
            prompt: "![Figure](/pyq/stats-1-january-2024/q3-3.jpg#647x205)",
            answer: 39,
            explanation: ""
          },
          {
            id: "stats-1-january-2024-q4",
            type: "numerical",
            marks: 4,
            prompt: "![Figure](/pyq/stats-1-january-2024/q4-4.jpg#647x231)",
            answer: 70,
            explanation: ""
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
            explanation: ""
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
            explanation: ""
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
            explanation: ""
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
            explanation: ""
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
            explanation: ""
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
            explanation: ""
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
            explanation: ""
          },
          {
            id: "stats-1-january-2024-q12",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/stats-1-january-2024/q12-passage-11.jpg#617x614)",
            prompt: "Find the value of 10x.",
            answer: 357,
            explanation: ""
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
            explanation: ""
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
            explanation: ""
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
            explanation: ""
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
            explanation: ""
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
            explanation: ""
          },
          {
            id: "stats-1-september-2023-q4",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/stats-1-september-2023/q4-passage-2.jpg#639x569)",
            prompt: "If a total of 500 fruits are sold on a given day, then find the number of mangoes sold.",
            answer: 125,
            explanation: ""
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
            explanation: ""
          },
          {
            id: "stats-1-september-2023-q6",
            type: "numerical",
            marks: 5,
            passage: "![Figure](/pyq/stats-1-september-2023/q6-passage-3.jpg#647x439)",
            prompt: "Calculate the absolute value of Point Bi-serial correlation coefficient between the result and number of hours spent. Enter the answer correct to three decimal places.",
            answer: 0.045,
            tolerance: 0.005,
            explanation: "Official answer key accepts any value from 0.04 to 0.05."
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
            explanation: ""
          },
          {
            id: "stats-1-september-2023-q8",
            type: "numerical",
            marks: 3,
            passage: "![Figure](/pyq/stats-1-september-2023/q8-passage-4.jpg#645x318)",
            prompt: "What is the average annual package of the students if each observation is doubled after subtracting 5 from it?",
            answer: 40,
            explanation: ""
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
            explanation: ""
          },
          {
            id: "stats-1-september-2023-q10",
            type: "numerical",
            marks: 4,
            prompt: "![Figure](/pyq/stats-1-september-2023/q10-5.jpg#647x285)",
            answer: 0.32,
            tolerance: 0.03,
            explanation: "Official answer key accepts any value from 0.29 to 0.35."
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
            explanation: ""
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
            explanation: ""
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
            explanation: ""
          },
          {
            id: "stats-1-september-2023-q14",
            type: "numerical",
            marks: 2,
            prompt: "Find the IQR (Interquartile range) of the data 14, 20, 40, 23 and 18.",
            answer: 5,
            explanation: ""
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
            explanation: ""
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
            explanation: ""
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
            explanation: ""
          },
          {
            id: "stats-1-may-2023-q4",
            type: "numerical",
            marks: 4,
            prompt: "![Figure](/pyq/stats-1-may-2023/q4-2.jpg#647x241)",
            answer: 5,
            explanation: ""
          },
          {
            id: "stats-1-may-2023-q5",
            type: "numerical",
            marks: 4,
            prompt: "The mean and sample variance of the data set consisting of 10 observations is 22 and 81 respectively. Later it is noted that one observation 20 is wrongly noted as 15. what is the sample standard deviation of the original data set?(Enter the answer correct to two decimal accuracy)",
            answer: 8.695,
            tolerance: 0.015,
            explanation: "Official answer key accepts any value from 8.68 to 8.71."
          },
          {
            id: "stats-1-may-2023-q6",
            type: "numerical",
            marks: 2,
            passage: "Table 2 represents the movies released in 2022 on the OTT platform.\n![Figure](/pyq/stats-1-may-2023/q6-passage-3.jpg#559x213)\nBased on the information, answer the given subquestions.",
            prompt: "Find the total number of released movies in 2022 on OTT Platform.",
            answer: 200,
            explanation: ""
          },
          {
            id: "stats-1-may-2023-q7",
            type: "numerical",
            marks: 2,
            passage: "Table 2 represents the movies released in 2022 on the OTT platform.\n![Figure](/pyq/stats-1-may-2023/q6-passage-3.jpg#559x213)\nBased on the information, answer the given subquestions.",
            prompt: "Find the number of Thriller and Comedy movies released in 2022 on OTT Platform.",
            answer: 37,
            explanation: ""
          },
          {
            id: "stats-1-may-2023-q8",
            type: "numerical",
            marks: 3,
            passage: "Table 2 represents the movies released in 2022 on the OTT platform.\n![Figure](/pyq/stats-1-may-2023/q6-passage-3.jpg#559x213)\nBased on the information, answer the given subquestions.",
            prompt: "Calculate a + b. (Enter the answer correct to three decimal accuracy)",
            answer: 0.545,
            tolerance: 0.003,
            explanation: "Official answer key accepts any value from 0.542 to 0.548."
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
            explanation: ""
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
            explanation: ""
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
            explanation: ""
          },
          {
            id: "stats-1-may-2023-q12",
            type: "numerical",
            marks: 4,
            passage: "Table 5 represents the data set about Advertising Expenditure and the Sales Revenue of a company. An analyst wants to investigate the relationship between the Advertising Expenditure (in Lakhs of rupees) and the monthly Sales Revenue (in Lakhs of rupees) of a company over a period of 6 months.\n![Figure](/pyq/stats-1-may-2023/q11-passage-5.jpg#487x233)\nBased on the information, answer the given subquestions.",
            prompt: "What is the sample covariance between the Sales Revenue and Advertising Expenses?(Enter the answer correct to one decimal accuracy)",
            answer: 18.9,
            tolerance: 0.3,
            explanation: "Official answer key accepts any value from 18.6 to 19.2."
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
            explanation: ""
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
            explanation: ""
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
            explanation: ""
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
            explanation: ""
          },
          {
            id: "stats-1-january-2023-q2",
            type: "numerical",
            marks: 3,
            passage: "Figure Q.1 represents the placement report of an engineering college for the academic year 2021-22.\n![Figure](/pyq/stats-1-january-2023/q1-passage-1.jpg#647x469)\nBased on the information, answer the given subquestions.",
            prompt: "If 1200 students are placed during the placement season of 2021-22, then find the number of students placed in core companies?",
            answer: 300,
            explanation: ""
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
            explanation: ""
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
            explanation: ""
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
            explanation: ""
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
            explanation: ""
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
            explanation: ""
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
            explanation: ""
          },
          {
            id: "stats-1-january-2023-q9",
            type: "numerical",
            marks: 4,
            passage: "An analyst want to analyse the salary of employees in different organizations in a city. To analyse this, he has selected an organization and the data of salaries is tabulated as shown in Table Q.2.\n![Figure](/pyq/stats-1-january-2023/q8-passage-3.jpg#638x206)\nBased on the given information, answer the subquestions.",
            prompt: "What is the sample standard deviation of salary (in thousand rupees)? (Enter the answer correct to 2 decimal accuracy)",
            answer: 12.25,
            tolerance: 0.03,
            explanation: "Official answer key accepts any value from 12.22 to 12.28."
          },
          {
            id: "stats-1-january-2023-q10",
            type: "numerical",
            marks: 3,
            passage: "The heights (in cm) of ten athletes are represented by a stem and leaf plot in Figure Q.2.\n![Figure](/pyq/stats-1-january-2023/q10-passage-4.jpg#290x222)\nBased on the above information, answer the given subquestions",
            prompt: "What is the median height(in cm) of an athlete?",
            answer: 175,
            explanation: ""
          },
          {
            id: "stats-1-january-2023-q11",
            type: "numerical",
            marks: 3,
            passage: "The heights (in cm) of ten athletes are represented by a stem and leaf plot in Figure Q.2.\n![Figure](/pyq/stats-1-january-2023/q10-passage-4.jpg#290x222)\nBased on the above information, answer the given subquestions",
            prompt: "What is the mode of the heights (in cm) of athletes?",
            answer: 175,
            explanation: ""
          },
          {
            id: "stats-1-january-2023-q12",
            type: "numerical",
            marks: 3,
            prompt: "The mean and sample variance of the marks (out of 50) scored by the students in the Statistics course are 40 and 25 respectively. If 5 is subtracted from the marks of each student and then multiplied by 2. Find the mean of the modified marks.",
            answer: 70,
            explanation: ""
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
            explanation: ""
          }
        ]
      }
    ]
  },
];
