import type { PyqTopicTags } from "../../types";

// 138 past-paper questions in 10 topics, 38 repeated question types.
// Tagged once from every question (text and figures); question ids match the paper data.

export const toolsInDataScienceTopics: PyqTopicTags = {
  "topics": [
    {
      "slug": "development-tools",
      "title": "Dev tools: IDEs, uv, Git & DevTools",
      "summary": "IDE features, uv projects, Git workflows and Chrome DevTools tabs for debugging",
      "ids": [
        "tds-end-term-dec-2024-fn-q5",
        "tds-end-term-dec-2024-fn-q8",
        "tds-end-term-apr-2025-fn-q4",
        "tds-end-term-apr-2025-fn-q5",
        "tds-end-term-apr-2025-fn-q8",
        "tds-end-term-apr-2025-fn-q9",
        "tds-end-term-apr-2025-fn-q16",
        "tds-end-term-aug-2025-an-q1",
        "tds-end-term-aug-2025-an-q3",
        "tds-end-term-aug-2025-an-q7",
        "tds-end-term-aug-2025-an-q10",
        "tds-end-term-aug-2025-an-q16",
        "tds-end-term-aug-2025-fn-q1",
        "tds-end-term-aug-2025-fn-q2",
        "tds-end-term-aug-2025-fn-q5",
        "tds-end-term-aug-2025-fn-q16"
      ]
    },
    {
      "slug": "deployment-databases",
      "title": "Deployment, databases & monitoring",
      "summary": "HTTP methods, Docker/edge deployment, database indexing and monitoring strategies",
      "ids": [
        "tds-end-term-apr-2025-fn-q11",
        "tds-end-term-apr-2025-fn-q18",
        "tds-end-term-aug-2025-an-q5",
        "tds-end-term-aug-2025-an-q12",
        "tds-end-term-aug-2025-an-q18",
        "tds-end-term-aug-2025-an-q19",
        "tds-end-term-aug-2025-fn-q9",
        "tds-end-term-aug-2025-fn-q12",
        "tds-end-term-aug-2025-fn-q18"
      ]
    },
    {
      "slug": "llm-prompting",
      "title": "LLM prompting, cost & system prompts",
      "summary": "Validating LLM output, token costs, specific prompts, system prompts and Socratic responses",
      "ids": [
        "tds-end-term-dec-2024-fn-q13",
        "tds-end-term-dec-2024-fn-q14",
        "tds-end-term-dec-2024-fn-q15",
        "tds-end-term-dec-2024-fn-q32",
        "tds-end-term-dec-2024-fn-q33",
        "tds-end-term-dec-2024-fn-q34",
        "tds-end-term-apr-2025-fn-q13",
        "tds-end-term-apr-2025-fn-q14",
        "tds-end-term-apr-2025-fn-q15",
        "tds-end-term-apr-2025-fn-q32",
        "tds-end-term-apr-2025-fn-q33",
        "tds-end-term-apr-2025-fn-q34",
        "tds-end-term-aug-2025-an-q13",
        "tds-end-term-aug-2025-an-q14",
        "tds-end-term-aug-2025-an-q15",
        "tds-end-term-aug-2025-an-q32",
        "tds-end-term-aug-2025-an-q33",
        "tds-end-term-aug-2025-fn-q13",
        "tds-end-term-aug-2025-fn-q14",
        "tds-end-term-aug-2025-fn-q15",
        "tds-end-term-aug-2025-fn-q32",
        "tds-end-term-aug-2025-fn-q33"
      ]
    },
    {
      "slug": "rag-systems",
      "title": "RAG & multi-modal RAG pipelines",
      "summary": "Order of steps in a RAG workflow and advantages of multi-modal retrieval",
      "ids": [
        "tds-end-term-dec-2024-fn-q35",
        "tds-end-term-apr-2025-fn-q35",
        "tds-end-term-aug-2025-an-q31",
        "tds-end-term-aug-2025-an-q34",
        "tds-end-term-aug-2025-fn-q31",
        "tds-end-term-aug-2025-fn-q34"
      ]
    },
    {
      "slug": "data-sourcing-cleaning",
      "title": "Data sourcing & cleaning",
      "summary": "Excel Text-to-Columns, OpenRefine clustering and ethical web scraping",
      "ids": [
        "tds-end-term-dec-2024-fn-q1",
        "tds-end-term-dec-2024-fn-q7",
        "tds-end-term-apr-2025-fn-q1",
        "tds-end-term-apr-2025-fn-q7",
        "tds-end-term-aug-2025-an-q4",
        "tds-end-term-aug-2025-an-q9",
        "tds-end-term-aug-2025-fn-q7",
        "tds-end-term-aug-2025-fn-q8"
      ]
    },
    {
      "slug": "python-pandas-shell",
      "title": "Python, pandas & shell processing",
      "summary": "Exceptions, unique values, groupby, chunked reads for big files and grep/awk pipelines",
      "ids": [
        "tds-end-term-dec-2024-fn-q11",
        "tds-end-term-apr-2025-fn-q2",
        "tds-end-term-apr-2025-fn-q3",
        "tds-end-term-apr-2025-fn-q17",
        "tds-end-term-aug-2025-an-q2",
        "tds-end-term-aug-2025-an-q6",
        "tds-end-term-aug-2025-an-q11",
        "tds-end-term-aug-2025-an-q17",
        "tds-end-term-aug-2025-fn-q3",
        "tds-end-term-aug-2025-fn-q4",
        "tds-end-term-aug-2025-fn-q10",
        "tds-end-term-aug-2025-fn-q11",
        "tds-end-term-aug-2025-fn-q17"
      ]
    },
    {
      "slug": "log-analysis",
      "title": "Apache log parsing & filtering",
      "summary": "Valid log entries, needed fields, timestamp parsing, request splitting, filters and counting",
      "ids": [
        "tds-end-term-dec-2024-fn-q21",
        "tds-end-term-dec-2024-fn-q22",
        "tds-end-term-dec-2024-fn-q23",
        "tds-end-term-dec-2024-fn-q24",
        "tds-end-term-dec-2024-fn-q25",
        "tds-end-term-dec-2024-fn-q26",
        "tds-end-term-dec-2024-fn-q27",
        "tds-end-term-dec-2024-fn-q28",
        "tds-end-term-dec-2024-fn-q29",
        "tds-end-term-dec-2024-fn-q30",
        "tds-end-term-dec-2024-fn-q31",
        "tds-end-term-apr-2025-fn-q21",
        "tds-end-term-apr-2025-fn-q22",
        "tds-end-term-apr-2025-fn-q23",
        "tds-end-term-apr-2025-fn-q24",
        "tds-end-term-apr-2025-fn-q25",
        "tds-end-term-apr-2025-fn-q26",
        "tds-end-term-apr-2025-fn-q27",
        "tds-end-term-apr-2025-fn-q28",
        "tds-end-term-apr-2025-fn-q29",
        "tds-end-term-apr-2025-fn-q30",
        "tds-end-term-apr-2025-fn-q31",
        "tds-end-term-aug-2025-an-q21",
        "tds-end-term-aug-2025-an-q22",
        "tds-end-term-aug-2025-an-q23",
        "tds-end-term-aug-2025-an-q24",
        "tds-end-term-aug-2025-an-q25",
        "tds-end-term-aug-2025-an-q26",
        "tds-end-term-aug-2025-an-q27",
        "tds-end-term-aug-2025-an-q28",
        "tds-end-term-aug-2025-an-q29",
        "tds-end-term-aug-2025-an-q30",
        "tds-end-term-aug-2025-fn-q21",
        "tds-end-term-aug-2025-fn-q22",
        "tds-end-term-aug-2025-fn-q23",
        "tds-end-term-aug-2025-fn-q24",
        "tds-end-term-aug-2025-fn-q25",
        "tds-end-term-aug-2025-fn-q26",
        "tds-end-term-aug-2025-fn-q27",
        "tds-end-term-aug-2025-fn-q28",
        "tds-end-term-aug-2025-fn-q29",
        "tds-end-term-aug-2025-fn-q30"
      ]
    },
    {
      "slug": "statistics-ml-models",
      "title": "Regression, ML & time series",
      "summary": "p-values in regression, KNN bias-variance, K-means n_init and ARIMA order",
      "ids": [
        "tds-end-term-dec-2024-fn-q2",
        "tds-end-term-dec-2024-fn-q3",
        "tds-end-term-dec-2024-fn-q4",
        "tds-end-term-dec-2024-fn-q6",
        "tds-end-term-apr-2025-fn-q6"
      ]
    },
    {
      "slug": "geospatial-analysis",
      "title": "Geospatial analysis & routing",
      "summary": "Haversine distances, nearest-first routing, TSP tools and geospatial Python libraries",
      "ids": [
        "tds-end-term-dec-2024-fn-q12",
        "tds-end-term-dec-2024-fn-q16",
        "tds-end-term-dec-2024-fn-q17",
        "tds-end-term-dec-2024-fn-q18",
        "tds-end-term-dec-2024-fn-q19",
        "tds-end-term-dec-2024-fn-q20",
        "tds-end-term-apr-2025-fn-q12",
        "tds-end-term-apr-2025-fn-q19",
        "tds-end-term-apr-2025-fn-q20",
        "tds-end-term-aug-2025-an-q8",
        "tds-end-term-aug-2025-an-q20",
        "tds-end-term-aug-2025-fn-q6",
        "tds-end-term-aug-2025-fn-q19",
        "tds-end-term-aug-2025-fn-q20"
      ]
    },
    {
      "slug": "visualization-dashboards",
      "title": "Dashboards: Tableau, Streamlit & Kumu",
      "summary": "Sharing Tableau workbooks, Streamlit text commands and Kumu system maps",
      "ids": [
        "tds-end-term-dec-2024-fn-q9",
        "tds-end-term-dec-2024-fn-q10",
        "tds-end-term-apr-2025-fn-q10"
      ]
    }
  ],
  "repeats": [
    {
      "title": "Pick the Chrome DevTools tab for inspecting network/API requests",
      "ids": [
        "tds-end-term-dec-2024-fn-q8",
        "tds-end-term-apr-2025-fn-q5",
        "tds-end-term-apr-2025-fn-q8",
        "tds-end-term-aug-2025-an-q3",
        "tds-end-term-aug-2025-fn-q5"
      ]
    },
    {
      "title": "Interpret a regression coefficient p-value of 0.03",
      "ids": [
        "tds-end-term-dec-2024-fn-q6",
        "tds-end-term-apr-2025-fn-q6"
      ]
    },
    {
      "title": "Pick the OpenRefine approach to de-duplicate inconsistent names",
      "ids": [
        "tds-end-term-dec-2024-fn-q7",
        "tds-end-term-apr-2025-fn-q7",
        "tds-end-term-aug-2025-fn-q7"
      ]
    },
    {
      "title": "Get the unique values of a pandas column",
      "ids": [
        "tds-end-term-dec-2024-fn-q11",
        "tds-end-term-apr-2025-fn-q3",
        "tds-end-term-aug-2025-fn-q4"
      ]
    },
    {
      "title": "Choose Python libraries for geospatial operations and interactive maps",
      "ids": [
        "tds-end-term-dec-2024-fn-q12",
        "tds-end-term-apr-2025-fn-q12",
        "tds-end-term-aug-2025-an-q8",
        "tds-end-term-aug-2025-fn-q6"
      ]
    },
    {
      "title": "Choose Excel Text-to-Columns behaviour/settings for a column",
      "ids": [
        "tds-end-term-dec-2024-fn-q1",
        "tds-end-term-apr-2025-fn-q1"
      ]
    },
    {
      "title": "Explain the role of the system prompt in an LLM assistant",
      "ids": [
        "tds-end-term-dec-2024-fn-q32",
        "tds-end-term-apr-2025-fn-q13",
        "tds-end-term-apr-2025-fn-q32",
        "tds-end-term-aug-2025-fn-q13"
      ]
    },
    {
      "title": "Identify what drives LLM usage cost and response time",
      "ids": [
        "tds-end-term-dec-2024-fn-q14",
        "tds-end-term-apr-2025-fn-q14",
        "tds-end-term-aug-2025-an-q14",
        "tds-end-term-aug-2025-fn-q14"
      ]
    },
    {
      "title": "Pick the most specific prompt for a useful LLM answer",
      "ids": [
        "tds-end-term-dec-2024-fn-q15",
        "tds-end-term-apr-2025-fn-q15",
        "tds-end-term-aug-2025-an-q15",
        "tds-end-term-aug-2025-fn-q15"
      ]
    },
    {
      "title": "Choose the best system prompt for a teaching/research assistant",
      "ids": [
        "tds-end-term-dec-2024-fn-q33",
        "tds-end-term-apr-2025-fn-q33",
        "tds-end-term-aug-2025-an-q32",
        "tds-end-term-aug-2025-fn-q32"
      ]
    },
    {
      "title": "Choose the assistant response that guides the user to reason",
      "ids": [
        "tds-end-term-dec-2024-fn-q34",
        "tds-end-term-apr-2025-fn-q34",
        "tds-end-term-aug-2025-an-q33",
        "tds-end-term-aug-2025-fn-q33"
      ]
    },
    {
      "title": "Order the processing steps of a RAG system",
      "ids": [
        "tds-end-term-dec-2024-fn-q35",
        "tds-end-term-apr-2025-fn-q35",
        "tds-end-term-aug-2025-an-q34",
        "tds-end-term-aug-2025-fn-q34"
      ]
    },
    {
      "title": "State the main advantage of a multi-modal RAG system",
      "ids": [
        "tds-end-term-aug-2025-an-q31",
        "tds-end-term-aug-2025-fn-q31"
      ]
    },
    {
      "title": "State the purpose of the Haversine formula",
      "ids": [
        "tds-end-term-dec-2024-fn-q20",
        "tds-end-term-apr-2025-fn-q20",
        "tds-end-term-aug-2025-an-q20",
        "tds-end-term-aug-2025-fn-q20"
      ]
    },
    {
      "title": "Choose a tool for TSP route optimisation",
      "ids": [
        "tds-end-term-dec-2024-fn-q19",
        "tds-end-term-apr-2025-fn-q19"
      ]
    },
    {
      "title": "Identify a valid log entry for the given log format",
      "ids": [
        "tds-end-term-dec-2024-fn-q21",
        "tds-end-term-apr-2025-fn-q21",
        "tds-end-term-aug-2025-an-q21",
        "tds-end-term-aug-2025-fn-q21"
      ]
    },
    {
      "title": "Pick the log fields needed for a filtering question",
      "ids": [
        "tds-end-term-dec-2024-fn-q22",
        "tds-end-term-apr-2025-fn-q22",
        "tds-end-term-aug-2025-an-q22",
        "tds-end-term-aug-2025-fn-q22"
      ]
    },
    {
      "title": "Pick the strptime format to parse a log timestamp",
      "ids": [
        "tds-end-term-dec-2024-fn-q23",
        "tds-end-term-apr-2025-fn-q23",
        "tds-end-term-aug-2025-an-q23",
        "tds-end-term-aug-2025-fn-q23"
      ]
    },
    {
      "title": "Check whether a timestamp falls on a given weekday",
      "ids": [
        "tds-end-term-dec-2024-fn-q24",
        "tds-end-term-apr-2025-fn-q24"
      ]
    },
    {
      "title": "Write the hour condition for a time window filter",
      "ids": [
        "tds-end-term-dec-2024-fn-q25",
        "tds-end-term-apr-2025-fn-q25",
        "tds-end-term-aug-2025-an-q24",
        "tds-end-term-aug-2025-fn-q24"
      ]
    },
    {
      "title": "Extract the method or protocol from a request line with split",
      "ids": [
        "tds-end-term-dec-2024-fn-q26",
        "tds-end-term-apr-2025-fn-q26",
        "tds-end-term-aug-2025-an-q25"
      ]
    },
    {
      "title": "Extract the URL path from a request line",
      "ids": [
        "tds-end-term-dec-2024-fn-q27",
        "tds-end-term-apr-2025-fn-q27",
        "tds-end-term-aug-2025-fn-q25"
      ]
    },
    {
      "title": "Check if a request URL is under a given prefix",
      "ids": [
        "tds-end-term-dec-2024-fn-q28",
        "tds-end-term-apr-2025-fn-q28"
      ]
    },
    {
      "title": "Write the status code condition for success/redirect",
      "ids": [
        "tds-end-term-dec-2024-fn-q29",
        "tds-end-term-apr-2025-fn-q29",
        "tds-end-term-aug-2025-an-q27",
        "tds-end-term-aug-2025-fn-q27"
      ]
    },
    {
      "title": "Count filtered log entries",
      "ids": [
        "tds-end-term-dec-2024-fn-q30",
        "tds-end-term-apr-2025-fn-q30"
      ]
    },
    {
      "title": "Count log entries by category after filtering",
      "ids": [
        "tds-end-term-aug-2025-an-q28",
        "tds-end-term-aug-2025-fn-q28"
      ]
    },
    {
      "title": "Debug a log count that is far off from expected",
      "ids": [
        "tds-end-term-dec-2024-fn-q31",
        "tds-end-term-apr-2025-fn-q31",
        "tds-end-term-aug-2025-an-q29",
        "tds-end-term-aug-2025-fn-q29"
      ]
    },
    {
      "title": "Detect a platform/mobile device from the user agent field",
      "ids": [
        "tds-end-term-aug-2025-an-q26",
        "tds-end-term-aug-2025-fn-q26"
      ]
    },
    {
      "title": "Process huge log files memory-efficiently in Python",
      "ids": [
        "tds-end-term-aug-2025-an-q30",
        "tds-end-term-aug-2025-fn-q30"
      ]
    },
    {
      "title": "Process a CSV/time series too large for memory with pandas",
      "ids": [
        "tds-end-term-aug-2025-an-q6",
        "tds-end-term-aug-2025-an-q11",
        "tds-end-term-aug-2025-fn-q11"
      ]
    },
    {
      "title": "Pick the Git branch workflow for features or hotfixes",
      "ids": [
        "tds-end-term-aug-2025-an-q1",
        "tds-end-term-aug-2025-an-q16",
        "tds-end-term-aug-2025-fn-q2",
        "tds-end-term-aug-2025-fn-q16"
      ]
    },
    {
      "title": "Manage reproducible Python projects with uv",
      "ids": [
        "tds-end-term-aug-2025-an-q7",
        "tds-end-term-aug-2025-fn-q1"
      ]
    },
    {
      "title": "Pick the shell command to search or extract from log files",
      "ids": [
        "tds-end-term-apr-2025-fn-q17",
        "tds-end-term-aug-2025-an-q17",
        "tds-end-term-aug-2025-fn-q17"
      ]
    },
    {
      "title": "Pick the database indexing strategy for heavy queries",
      "ids": [
        "tds-end-term-aug-2025-an-q5",
        "tds-end-term-aug-2025-fn-q9"
      ]
    },
    {
      "title": "Pick a monitoring strategy that gives actionable insights",
      "ids": [
        "tds-end-term-aug-2025-an-q12",
        "tds-end-term-aug-2025-fn-q12"
      ]
    },
    {
      "title": "Choose a containerised deployment for distributed systems",
      "ids": [
        "tds-end-term-apr-2025-fn-q18",
        "tds-end-term-aug-2025-an-q18",
        "tds-end-term-aug-2025-fn-q18"
      ]
    },
    {
      "title": "Choose the ethical web scraping behaviour",
      "ids": [
        "tds-end-term-aug-2025-an-q9",
        "tds-end-term-aug-2025-fn-q8"
      ]
    },
    {
      "title": "Choose robust Python exception handling with cleanup",
      "ids": [
        "tds-end-term-apr-2025-fn-q2",
        "tds-end-term-aug-2025-fn-q3"
      ]
    }
  ]
};
