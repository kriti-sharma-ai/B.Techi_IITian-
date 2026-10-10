import type { QualifierMock } from "../../types";

// Tools in Data Science: IIT Madras BS End Term papers (3 papers, 104 questions).
// Questions, options and answer keys are reproduced from the official question papers.
// Figures, code and maths typeset as images are in public/pyq/<slug>/, embedded inline as
// ![Figure](src#WxH). Range answers are stored as midpoint ± tolerance.
// Generated from the paper PDFs; edit with care.

export const tdsEndTermPapers: QualifierMock[] = [
  {
    slug: "tds-end-term-aug-2025-fn",
    title: "TDS End Term · 31 Aug 2025 (FN)",
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
        subjectSlug: "tools-in-data-science",
        title: "Tools in Data Science",
        short: "TDS",
        questions: [
          {
            id: "tds-end-term-aug-2025-fn-q1",
            type: "mcq",
            marks: 2,
            prompt: "When using uv for Python package management, which command sequence correctly creates a new project with a specific Python version and installs dependencies?",
            options: [
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q1-opt1-1.webp#425x26)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q1-opt2-1.webp#506x25)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q1-opt3-1.webp#554x21)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q1-opt4-1.webp#447x21)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "tds-end-term-aug-2025-fn-q2",
            type: "mcq",
            marks: 1,
            prompt: "In Git workflow for collaborative data science projects, what is the most appropriate sequence for integrating feature changes?",
            options: [
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q2-opt1-1.webp#524x27)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q2-opt2-1.webp#575x22)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q2-opt3-1.webp#484x25)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q2-opt4-1.webp#477x20)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-aug-2025-fn-q3",
            type: "mcq",
            marks: 1,
            prompt: "When designing error handling in Python data processing pipelines, which approach generally offers the most robust and maintainable solution for unexpected runtime errors?",
            options: [
              "Using only generic try-except blocks",
              "Using try-except-finally with specific exception types and proper logging",
              "Using pre-emptive condition checks (if-else) without exception handling",
              "Allowing all exceptions to propagate to the top level"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-aug-2025-fn-q4",
            type: "mcq",
            marks: 1,
            prompt: "A data scientist needs to identify unique treatment combinations in a clinical trial dataset with 50,000 rows. Which pandas approach would be most memory-efficient for large datasets?",
            options: [
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q4-opt1-1.webp#346x33)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q4-opt2-1.webp#263x29)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q4-opt3-1.webp#416x29)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q4-opt4-1.webp#456x30)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "tds-end-term-aug-2025-fn-q5",
            type: "mcq",
            marks: 1,
            prompt: "A developer debugging an API integration notices intermittent 429 status codes. Which Chrome DevTools approach would best help identify the rate limiting pattern?",
            options: [
              "Console tab with error filtering",
              "Network tab with timing analysis and request throttling simulation",
              "Application tab for storage inspection",
              "Performance tab for bottleneck analysis"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-aug-2025-fn-q6",
            type: "mcq",
            marks: 1,
            prompt: "For a geospatial analysis project involving buffer operations, spatial joins, and interactive mapping, which combination of libraries provides the most comprehensive solution?",
            options: [
              "Matplotlib + NumPy + Pandas",
              "GeoPandas + Shapely + Folium",
              "Plotly + Seaborn + SciPy",
              "Bokeh + NetworkX + PyProj"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-aug-2025-fn-q7",
            type: "mcq",
            marks: 1,
            prompt: "When cleaning a dataset with company names like \"Microsoft Corp\", \"Microsoft Corporation\", \"MSFT\", which OpenRefine technique would be most effective?",
            options: [
              "Simple find and replace operations",
              "Clustering algorithms with fingerprinting and n-gram comparison",
              "Regular expression matching only",
              "Manual standardization"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-aug-2025-fn-q8",
            type: "mcq",
            marks: 1,
            prompt: "![Figure](/pyq/tds-end-term-aug-2025-fn/q8-1.webp#575x52)",
            options: [
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q8-opt1-1.webp#435x26)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q8-opt2-1.webp#575x50)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q8-opt3-1.webp#571x26)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q8-opt4-1.webp#504x25)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-aug-2025-fn-q9",
            type: "mcq",
            marks: 2,
            prompt: "When designing a SQLite database for time-series sensor data with millions of records, which indexing strategy optimizes both query performance and storage efficiency?",
            options: [
              "Primary key index only",
              "Composite index on (timestamp, sensor_id) with partial indexes for active sensors",
              "Individual indexes on all columns",
              "No indexing to save storage space"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-aug-2025-fn-q10",
            type: "mcq",
            marks: 2,
            prompt: "A data analyst needs to identify customers with purchase patterns similar to high-value segments. Which pandas operation most efficiently computes customer similarity?",
            options: [
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q10-opt1-1.webp#320x25)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q10-opt2-1.webp#575x52)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q10-opt3-1.webp#308x25)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q10-opt4-1.webp#515x27)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-aug-2025-fn-q11",
            type: "mcq",
            marks: 1,
            prompt: "You are working with a very large CSV file that is too big to fit into memory. Which pandas method is the best way to read and process the file without running out of memory?",
            options: [
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q11-opt1-1.webp#388x27)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q11-opt2-1.webp#575x28)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q11-opt3-1.webp#500x27)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q11-opt4-1.webp#435x25)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-aug-2025-fn-q12",
            type: "mcq",
            marks: 1,
            prompt: "A developer optimizing database-heavy applications needs to identify query bottlenecks and connection issues. Which monitoring approach provides comprehensive insights?",
            options: [
              "Application logs only",
              "Database query profiling + connection pool metrics + application performance monitoring",
              "Network traffic analysis only",
              "Memory usage tracking exclusively"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-aug-2025-fn-q13",
            type: "mcq",
            marks: 1,
            passage: "Scenario 1: AI-Powered Research Assistant Development\nDr. Kumar is developing an AI research assistant for environmental science students. The system needs to process academic papers, generate summaries, and answer domain specific questions while encouraging critical thinking.\nBased on the above data, answer the given subquestions.",
            prompt: "The research assistant uses a system prompt to guide its behavior. Which system prompt design principle is most important for educational effectiveness?",
            options: [
              "Providing direct answers to maximize efficiency",
              "Balancing information delivery with Socratic questioning to promote learning",
              "Limiting responses to prevent information overload",
              "Using technical jargon to maintain academic rigor"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-aug-2025-fn-q14",
            type: "multi",
            marks: 2,
            passage: "Scenario 1: AI-Powered Research Assistant Development\nDr. Kumar is developing an AI research assistant for environmental science students. The system needs to process academic papers, generate summaries, and answer domain specific questions while encouraging critical thinking.\nBased on the above data, answer the given subquestions.",
            prompt: "When students submit complex research queries, which factors most significantly impact the LLM's operational costs and response quality? (Select all that apply)",
            options: [
              "Token count of input prompts and generated responses",
              "Complexity and specificity of the query requiring deeper reasoning",
              "Time of day when queries are submitted",
              "Context window utilization for multi-turn conversations",
              "Student's academic level"
            ],
            answer: [
              0,
              1,
              3
            ],
            explanation: ""
          },
          {
            id: "tds-end-term-aug-2025-fn-q15",
            type: "mcq",
            marks: 1,
            passage: "Scenario 1: AI-Powered Research Assistant Development\nDr. Kumar is developing an AI research assistant for environmental science students. The system needs to process academic papers, generate summaries, and answer domain specific questions while encouraging critical thinking.\nBased on the above data, answer the given subquestions.",
            prompt: "Which prompt engineering technique would generate the most pedagogically valuable response for environmental research?",
            options: [
              "\"Explain climate change impacts\"",
              "\"Write about environmental issues\"",
              "\"Analyze the interconnected effects of ocean acidification on marine ecosystems, considering pH changes, species adaptation, and food web dynamics. What research methodologies would be most appropriate for studying these relationships?\"",
              "\"Discuss environmental problems briefly\""
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "tds-end-term-aug-2025-fn-q16",
            type: "mcq",
            marks: 1,
            passage: "Scenario 2: Smart City Traffic Management System\nA metropolitan city is implementing a real-time traffic management system that processes data from IoT sensors, traffic cameras, and GPS devices to optimize traffic flow across 500+ intersections.\nSystem Architecture:\n● IoT sensors at intersections (Lat/Long coordinates provided)\n● Central processing hub: (28.6139^o N, 77.2090^o E)\n● Real-time data streams: traffic density, weather conditions, accident reports\n● ML models for traffic prediction and route optimization\nBased on the above data, answer the given subquestions.",
            prompt: "The development team uses Git for version control of traffic algorithms. When a critical traffic routing bug is discovered in production, which Git workflow ensures rapid deployment of fixes while maintaining code integrity?",
            options: [
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q16-opt1-1.webp#349x59)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q16-opt2-1.webp#312x131)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q16-opt3-1.webp#304x82)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q16-opt4-1.webp#352x89)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-aug-2025-fn-q17",
            type: "mcq",
            marks: 2,
            passage: "Scenario 2: Smart City Traffic Management System\nA metropolitan city is implementing a real-time traffic management system that processes data from IoT sensors, traffic cameras, and GPS devices to optimize traffic flow across 500+ intersections.\nSystem Architecture:\n● IoT sensors at intersections (Lat/Long coordinates provided)\n● Central processing hub: (28.6139^o N, 77.2090^o E)\n● Real-time data streams: traffic density, weather conditions, accident reports\n● ML models for traffic prediction and route optimization\nBased on the above data, answer the given subquestions.",
            prompt: "Traffic engineers need to analyze historical data patterns. Which command-line approach efficiently processes large log files to extract peak traffic periods and route preferences?",
            options: [
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q17-opt1-1.webp#294x27)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q17-opt2-1.webp#575x56)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q17-opt3-1.webp#378x29)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q17-opt4-1.webp#207x27)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-aug-2025-fn-q18",
            type: "mcq",
            marks: 2,
            passage: "Scenario 2: Smart City Traffic Management System\nA metropolitan city is implementing a real-time traffic management system that processes data from IoT sensors, traffic cameras, and GPS devices to optimize traffic flow across 500+ intersections.\nSystem Architecture:\n● IoT sensors at intersections (Lat/Long coordinates provided)\n● Central processing hub: (28.6139^o N, 77.2090^o E)\n● Real-time data streams: traffic density, weather conditions, accident reports\n● ML models for traffic prediction and route optimization\nBased on the above data, answer the given subquestions.",
            prompt: "For deploying the traffic management system across distributed edge computing nodes at intersections, which containerization strategy optimizes resource utilization and ensures consistent performance?",
            options: [
              "Single monolithic container with all services",
              "Multi-stage Docker builds with service mesh architecture and resource constraints",
              "Virtual machines for each intersection",
              "Direct installation on edge hardware without containerization"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-aug-2025-fn-q19",
            type: "mcq",
            marks: 1,
            passage: "Scenario 2: Smart City Traffic Management System\nA metropolitan city is implementing a real-time traffic management system that processes data from IoT sensors, traffic cameras, and GPS devices to optimize traffic flow across 500+ intersections.\nSystem Architecture:\n● IoT sensors at intersections (Lat/Long coordinates provided)\n● Central processing hub: (28.6139^o N, 77.2090^o E)\n● Real-time data streams: traffic density, weather conditions, accident reports\n● ML models for traffic prediction and route optimization\nBased on the above data, answer the given subquestions.",
            prompt: "When optimizing traffic routes for emergency vehicles during peak hours, which algorithmic approach best balances computational efficiency with real-time requirements?",
            options: [
              "Brute force calculation of all possible routes",
              "A pathfinding with dynamic edge weights based on real-time traffic data",
              "Random route selection",
              "Static pre-computed emergency routes"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-aug-2025-fn-q20",
            type: "mcq",
            marks: 1,
            passage: "Scenario 2: Smart City Traffic Management System\nA metropolitan city is implementing a real-time traffic management system that processes data from IoT sensors, traffic cameras, and GPS devices to optimize traffic flow across 500+ intersections.\nSystem Architecture:\n● IoT sensors at intersections (Lat/Long coordinates provided)\n● Central processing hub: (28.6139^o N, 77.2090^o E)\n● Real-time data streams: traffic density, weather conditions, accident reports\n● ML models for traffic prediction and route optimization\nBased on the above data, answer the given subquestions.",
            prompt: "The system calculates distances between intersections for route optimization. What is the primary computational advantage of implementing the Haversine formula in the traffic management context?",
            options: [
              "Provides accurate great-circle distances for GPS coordinates without requiring road network data",
              "Calculates exact travel time including traffic conditions",
              "Determines elevation changes for fuel efficiency",
              "Measures road surface quality for vehicle routing"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "tds-end-term-aug-2025-fn-q21",
            type: "mcq",
            marks: 1,
            passage: "Scenario 3: E-commerce Platform Log Analysis\nYou're analyzing Apache access logs from a major e-commerce platform. The logs contain customer browsing patterns, purchase behaviors, and system performance metrics during Black Friday sales.\nLog Format Specification:\n\n![Figure](/pyq/tds-end-term-aug-2025-fn/q21-passage-1.webp#575x223)\n\nAnalysis Requirements:\n● Filter purchases (POST to /checkout/) during peak hours (12:00-15:59)\n● Identify mobile vs desktop traffic patterns\n● Track successful transactions (status codes 200-299)\n● Analyze product category performance\nBased on the above data, answer the given subquestions.",
            prompt: "Which of the following Apache log entries correctly represents a successful mobile checkout transaction that occurred during the peak analysis window (12:00–15:59)?",
            options: [
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q21-opt1-1.webp#575x110)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q21-opt2-1.webp#575x116)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q21-opt3-1.webp#575x102)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q21-opt4-1.webp#575x85)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "tds-end-term-aug-2025-fn-q22",
            type: "mcq",
            marks: 1,
            passage: "Scenario 3: E-commerce Platform Log Analysis\nYou're analyzing Apache access logs from a major e-commerce platform. The logs contain customer browsing patterns, purchase behaviors, and system performance metrics during Black Friday sales.\nLog Format Specification:\n\n![Figure](/pyq/tds-end-term-aug-2025-fn/q21-passage-1.webp#575x223)\n\nAnalysis Requirements:\n● Filter purchases (POST to /checkout/) during peak hours (12:00-15:59)\n● Identify mobile vs desktop traffic patterns\n● Track successful transactions (status codes 200-299)\n● Analyze product category performance\nBased on the above data, answer the given subquestions.",
            prompt: "To extract essential fields for the analysis \"mobile checkout transactions between 12:00-15:59 with successful status codes\", which data elements are required?",
            options: [
              "IP, UserAgent, Referrer, VirtualHost",
              "Timestamp, HTTP_METHOD, URL, StatusCode, UserAgent",
              "RemoteUser, AuthUser, ResponseSize, ServerIP",
              "IP, Timestamp, Referrer, ResponseSize"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-aug-2025-fn-q23",
            type: "mcq",
            marks: 1,
            passage: "Scenario 3: E-commerce Platform Log Analysis\nYou're analyzing Apache access logs from a major e-commerce platform. The logs contain customer browsing patterns, purchase behaviors, and system performance metrics during Black Friday sales.\nLog Format Specification:\n\n![Figure](/pyq/tds-end-term-aug-2025-fn/q21-passage-1.webp#575x223)\n\nAnalysis Requirements:\n● Filter purchases (POST to /checkout/) during peak hours (12:00-15:59)\n● Identify mobile vs desktop traffic patterns\n● Track successful transactions (status codes 200-299)\n● Analyze product category performance\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/tds-end-term-aug-2025-fn/q23-1.webp#294x110)",
            options: [
              "%d/%b/%Y:%H:%M:%S",
              "%d/%b/%Y:%H:%M:%S %z",
              "%Y-%m-%d %H:%M:%S %Z",
              "%d-%b-%Y:%H:%M:%S GMT"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-aug-2025-fn-q24",
            type: "mcq",
            marks: 1,
            passage: "Scenario 3: E-commerce Platform Log Analysis\nYou're analyzing Apache access logs from a major e-commerce platform. The logs contain customer browsing patterns, purchase behaviors, and system performance metrics during Black Friday sales.\nLog Format Specification:\n\n![Figure](/pyq/tds-end-term-aug-2025-fn/q21-passage-1.webp#575x223)\n\nAnalysis Requirements:\n● Filter purchases (POST to /checkout/) during peak hours (12:00-15:59)\n● Identify mobile vs desktop traffic patterns\n● Track successful transactions (status codes 200-299)\n● Analyze product category performance\nBased on the above data, answer the given subquestions.",
            prompt: "To identify checkout transactions occurring between 12:00 and 15:59, which Python condition correctly validates the time range?",
            options: [
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q24-opt1-1.webp#270x29)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q24-opt2-1.webp#253x27)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q24-opt3-1.webp#271x22)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q24-opt4-1.webp#307x26)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "tds-end-term-aug-2025-fn-q25",
            type: "mcq",
            marks: 1,
            passage: "Scenario 3: E-commerce Platform Log Analysis\nYou're analyzing Apache access logs from a major e-commerce platform. The logs contain customer browsing patterns, purchase behaviors, and system performance metrics during Black Friday sales.\nLog Format Specification:\n\n![Figure](/pyq/tds-end-term-aug-2025-fn/q21-passage-1.webp#575x223)\n\nAnalysis Requirements:\n● Filter purchases (POST to /checkout/) during peak hours (12:00-15:59)\n● Identify mobile vs desktop traffic patterns\n● Track successful transactions (status codes 200-299)\n● Analyze product category performance\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/tds-end-term-aug-2025-fn/q25-1.webp#463x107)",
            options: [
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q25-opt1-1.webp#217x27)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q25-opt2-1.webp#216x21)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q25-opt3-1.webp#217x28)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q25-opt4-1.webp#220x24)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-aug-2025-fn-q26",
            type: "mcq",
            marks: 1,
            passage: "Scenario 3: E-commerce Platform Log Analysis\nYou're analyzing Apache access logs from a major e-commerce platform. The logs contain customer browsing patterns, purchase behaviors, and system performance metrics during Black Friday sales.\nLog Format Specification:\n\n![Figure](/pyq/tds-end-term-aug-2025-fn/q21-passage-1.webp#575x223)\n\nAnalysis Requirements:\n● Filter purchases (POST to /checkout/) during peak hours (12:00-15:59)\n● Identify mobile vs desktop traffic patterns\n● Track successful transactions (status codes 200-299)\n● Analyze product category performance\nBased on the above data, answer the given subquestions.",
            prompt: "To identify mobile traffic from the UserAgent string, which Python approach provides the most reliable mobile device detection?",
            options: [
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q26-opt1-1.webp#226x30)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q26-opt2-1.webp#575x56)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q26-opt3-1.webp#452x27)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q26-opt4-1.webp#306x26)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-aug-2025-fn-q27",
            type: "mcq",
            marks: 1,
            passage: "Scenario 3: E-commerce Platform Log Analysis\nYou're analyzing Apache access logs from a major e-commerce platform. The logs contain customer browsing patterns, purchase behaviors, and system performance metrics during Black Friday sales.\nLog Format Specification:\n\n![Figure](/pyq/tds-end-term-aug-2025-fn/q21-passage-1.webp#575x223)\n\nAnalysis Requirements:\n● Filter purchases (POST to /checkout/) during peak hours (12:00-15:59)\n● Identify mobile vs desktop traffic patterns\n● Track successful transactions (status codes 200-299)\n● Analyze product category performance\nBased on the above data, answer the given subquestions.",
            prompt: "For determining successful transactions, which condition correctly identifies HTTP status codes indicating success?",
            options: [
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q27-opt1-1.webp#140x25)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q27-opt2-1.webp#264x27)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q27-opt3-1.webp#199x30)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q27-opt4-1.webp#127x26)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "tds-end-term-aug-2025-fn-q28",
            type: "mcq",
            marks: 1,
            passage: "Scenario 3: E-commerce Platform Log Analysis\nYou're analyzing Apache access logs from a major e-commerce platform. The logs contain customer browsing patterns, purchase behaviors, and system performance metrics during Black Friday sales.\nLog Format Specification:\n\n![Figure](/pyq/tds-end-term-aug-2025-fn/q21-passage-1.webp#575x223)\n\nAnalysis Requirements:\n● Filter purchases (POST to /checkout/) during peak hours (12:00-15:59)\n● Identify mobile vs desktop traffic patterns\n● Track successful transactions (status codes 200-299)\n● Analyze product category performance\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/tds-end-term-aug-2025-fn/q28-1.webp#342x133)",
            options: [
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q28-opt1-1.webp#213x29)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q28-opt2-1.webp#519x59)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q28-opt3-1.webp#217x25)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q28-opt4-1.webp#267x25)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-aug-2025-fn-q29",
            type: "mcq",
            marks: 1,
            passage: "Scenario 3: E-commerce Platform Log Analysis\nYou're analyzing Apache access logs from a major e-commerce platform. The logs contain customer browsing patterns, purchase behaviors, and system performance metrics during Black Friday sales.\nLog Format Specification:\n\n![Figure](/pyq/tds-end-term-aug-2025-fn/q21-passage-1.webp#575x223)\n\nAnalysis Requirements:\n● Filter purchases (POST to /checkout/) during peak hours (12:00-15:59)\n● Identify mobile vs desktop traffic patterns\n● Track successful transactions (status codes 200-299)\n● Analyze product category performance\nBased on the above data, answer the given subquestions.",
            prompt: "If the transaction count appears unexpectedly high, which systematic debugging approach would identify the root cause?",
            options: [
              "Assume data corruption and discard results",
              "Validate each filter condition independently: time range → HTTP method → URL pattern → status code",
              "Reduce the dataset size randomly",
              "Check only the timestamp filter"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-aug-2025-fn-q30",
            type: "mcq",
            marks: 1,
            passage: "Scenario 3: E-commerce Platform Log Analysis\nYou're analyzing Apache access logs from a major e-commerce platform. The logs contain customer browsing patterns, purchase behaviors, and system performance metrics during Black Friday sales.\nLog Format Specification:\n\n![Figure](/pyq/tds-end-term-aug-2025-fn/q21-passage-1.webp#575x223)\n\nAnalysis Requirements:\n● Filter purchases (POST to /checkout/) during peak hours (12:00-15:59)\n● Identify mobile vs desktop traffic patterns\n● Track successful transactions (status codes 200-299)\n● Analyze product category performance\nBased on the above data, answer the given subquestions.",
            prompt: "When processing very large Apache log files (10GB+), which of the following Python approaches offers the best memory efficiency?",
            options: [
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q30-opt1-1.webp#286x56)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q30-opt2-1.webp#437x83)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q30-opt3-1.webp#297x57)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q30-opt4-1.webp#301x54)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-aug-2025-fn-q31",
            type: "mcq",
            marks: 1,
            passage: "Scenario 4: Academic Research RAG System with Multi-Modal Analysis\nA research university implements an advanced RAG system that processes academic papers, datasets, code repositories, and experimental results to support interdisciplinary research across STEM fields.\nAdvanced Multi-Modal RAG Architecture:\n● Text Processing: Research papers, grants, technical documentation\n● Code Analysis: GitHub repositories, computational notebooks, algorithm implementations ● Data Integration: Experimental datasets, simulation results, sensor data\n● Visual Processing: Figures, charts, experimental images, technical diagrams\n● Semantic Linking: Cross-reference relationships between concepts, methods, and findings Based on the above data, answer the given subquestions.",
            prompt: "What is the primary advantage of multi-modal RAG systems over text-only approaches in academic research contexts?",
            options: [
              "Reduced computational complexity for information retrieval",
              "Comprehensive understanding through integration of textual concepts, visual data, and computational methods",
              "Simplified system architecture and maintenance",
              "Lower storage requirements for research materials"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-aug-2025-fn-q32",
            type: "mcq",
            marks: 1,
            passage: "Scenario 4: Academic Research RAG System with Multi-Modal Analysis\nA research university implements an advanced RAG system that processes academic papers, datasets, code repositories, and experimental results to support interdisciplinary research across STEM fields.\nAdvanced Multi-Modal RAG Architecture:\n● Text Processing: Research papers, grants, technical documentation\n● Code Analysis: GitHub repositories, computational notebooks, algorithm implementations ● Data Integration: Experimental datasets, simulation results, sensor data\n● Visual Processing: Figures, charts, experimental images, technical diagrams\n● Semantic Linking: Cross-reference relationships between concepts, methods, and findings Based on the above data, answer the given subquestions.",
            prompt: "Which system prompt design best supports interdisciplinary research collaboration and knowledge synthesis?",
            options: [
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q32-opt1-1.webp#355x110)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q32-opt2-1.webp#378x50)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q32-opt3-1.webp#419x181)",
              "![Figure](/pyq/tds-end-term-aug-2025-fn/q32-opt4-1.webp#323x81)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "tds-end-term-aug-2025-fn-q33",
            type: "mcq",
            marks: 1,
            passage: "Scenario 4: Academic Research RAG System with Multi-Modal Analysis\nA research university implements an advanced RAG system that processes academic papers, datasets, code repositories, and experimental results to support interdisciplinary research across STEM fields.\nAdvanced Multi-Modal RAG Architecture:\n● Text Processing: Research papers, grants, technical documentation\n● Code Analysis: GitHub repositories, computational notebooks, algorithm implementations ● Data Integration: Experimental datasets, simulation results, sensor data\n● Visual Processing: Figures, charts, experimental images, technical diagrams\n● Semantic Linking: Cross-reference relationships between concepts, methods, and findings Based on the above data, answer the given subquestions.",
            prompt: "A researcher asks: \"How can machine learning techniques be applied to optimize renewable energy grid integration, and what interdisciplinary approaches show promise?\" Which response demonstrates the most effective research synthesis approach?",
            options: [
              "\"Machine learning can predict energy demand and optimize grid operations through various algorithms.\"",
              "\"Here are 10 recent papers on ML applications in renewable energy: [lists papers with summaries]\"",
              "\"Let's explore the intersection of several fields: What specific grid integration challenges interest you? ML approaches range from demand forecasting (time series analysis) to real-time optimization (reinforcement learning), while power systems engineering provides domain constraints. Materials science advances in energy storage create new optimization opportunities. Which aspect aligns with your research focus?\"",
              "\"This is a complex topic requiring extensive literature review across multiple disciplines.\""
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "tds-end-term-aug-2025-fn-q34",
            type: "mcq",
            marks: 1,
            passage: "Scenario 4: Academic Research RAG System with Multi-Modal Analysis\nA research university implements an advanced RAG system that processes academic papers, datasets, code repositories, and experimental results to support interdisciplinary research across STEM fields.\nAdvanced Multi-Modal RAG Architecture:\n● Text Processing: Research papers, grants, technical documentation\n● Code Analysis: GitHub repositories, computational notebooks, algorithm implementations ● Data Integration: Experimental datasets, simulation results, sensor data\n● Visual Processing: Figures, charts, experimental images, technical diagrams\n● Semantic Linking: Cross-reference relationships between concepts, methods, and findings Based on the above data, answer the given subquestions.",
            prompt: "Which processing sequence correctly describes the multi-modal RAG system's comprehensive research synthesis workflow?",
            options: [
              "Research Query → Text Search Only → Generate Literature Summary",
              "Research Query → Keyword Matching → Return Most Recent Papers",
              "Research Query → Multi-Modal Embedding (text + code + visual + data) → Cross-Disciplinary Retrieval → Concept Mapping → Synthesized Research Insights with Method Integration",
              "Research Query → Database Search → Template Response Generation"
            ],
            answer: 2,
            explanation: ""
          }
        ]
      }
    ]
  },
  {
    slug: "tds-end-term-apr-2025-fn",
    title: "TDS End Term · 13 Apr 2025 (FN)",
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
        subjectSlug: "tools-in-data-science",
        title: "Tools in Data Science",
        short: "TDS",
        questions: [
          {
            id: "tds-end-term-apr-2025-fn-q1",
            type: "mcq",
            marks: 1,
            prompt: "You receive a tab-delimited file where some numeric fields are interpreted as dates (e.g., \"3/10\" becomes \"March 10\" in Excel). What is the most effective way to handle this in Text to-Columns?",
            options: [
              "Change the delimiter to commas before opening the file",
              "Format the column as Text before applying Text-to-Columns",
              "Use the General data format option in Text-to-Columns",
              "Manually change the affected cells back to numbers after splitting"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-apr-2025-fn-q2",
            type: "mcq",
            marks: 1,
            prompt: "In Python, which statement correctly handles exceptions and ensures that cleanup code is executed?",
            options: [
              "![Figure](/pyq/tds-end-term-apr-2025-fn/q2-opt1-1.webp#108x29)",
              "![Figure](/pyq/tds-end-term-apr-2025-fn/q2-opt2-1.webp#192x24)",
              "![Figure](/pyq/tds-end-term-apr-2025-fn/q2-opt3-1.webp#163x26)",
              "![Figure](/pyq/tds-end-term-apr-2025-fn/q2-opt4-1.webp#177x27)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-apr-2025-fn-q3",
            type: "mcq",
            marks: 1,
            prompt: "A research team has a pandas dataframe of medical trial participants. To quickly identify how many different treatment groups exist, which Pandas method would be most efficient?",
            options: [
              "`len(set(column))`",
              "`column.count()`",
              "`column.nunique()`",
              "`column.value_counts()`"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "tds-end-term-apr-2025-fn-q4",
            type: "mcq",
            marks: 1,
            prompt: "![Figure](/pyq/tds-end-term-apr-2025-fn/q4-1.webp#391x26)",
            options: [
              "To track changes to specific files",
              "To specify files that Git should not track",
              "To define Git repository settings",
              "To list contributors to the repository"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-apr-2025-fn-q5",
            type: "mcq",
            marks: 1,
            prompt: "A developer wants to examine API request headers and responses to debug an issue with a failing API call. Where in Chrome DevTools should they look?",
            options: [
              "Console tab",
              "Application tab",
              "Network tab",
              "Sources tab"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "tds-end-term-apr-2025-fn-q6",
            type: "mcq",
            marks: 1,
            prompt: "A pharmaceutical researcher is testing a new drug's effectiveness. If the p-value is 0.03 in a regression analysis, what can be concluded about the drug's impact?",
            options: [
              "The drug has no significant effect",
              "The result is statistically significant at a 5% significance level",
              "More data collection is needed",
              "The sample size is too small"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-apr-2025-fn-q7",
            type: "mcq",
            marks: 1,
            prompt: "A data analyst receives a messy dataset with inconsistent company names like \"Apple\", \"Apple Inc.\", and \"Apple Incorporated\". Which tool would best standardize these entries?",
            options: [
              "Excel's Find and Replace",
              "OpenRefine's clustering feature",
              "Python's string manipulation",
              "Manual editing"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-apr-2025-fn-q8",
            type: "mcq",
            marks: 1,
            prompt: "A web developer wants to analyze the load time and resources of a webpage. Which Chrome DevTools feature provides comprehensive network request information?",
            options: [
              "Console tab",
              "Network tab",
              "Elements tab",
              "Sources tab"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-apr-2025-fn-q9",
            type: "mcq",
            marks: 1,
            prompt: "Which of the following is NOT a feature typically found in modern IDEs?",
            options: [
              "Syntax highlighting",
              "Integrated debugger",
              "Version control integration",
              "Native hardware virtualization"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "tds-end-term-apr-2025-fn-q10",
            type: "mcq",
            marks: 1,
            prompt: "Which of the following describes the primary use of Kumu?",
            options: [
              "Building financial models",
              "Creating system maps and visualizing relationships",
              "Performing real-time data analysis",
              "Designing geographic maps for navigation"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-apr-2025-fn-q11",
            type: "mcq",
            marks: 2,
            prompt: "Which HTTP method is idempotent, meaning multiple identical requests have the same effect as a single request?",
            options: [
              "POST",
              "PUT",
              "GET",
              "DELETE"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-apr-2025-fn-q12",
            type: "multi",
            marks: 2,
            prompt: "A researcher needs to perform spatial data operations like buffering and visualize the results on an interactive map. Which libraries would be most suitable?",
            options: [
              "Geopandas",
              "Folium",
              "Matplotlib",
              "Shapely"
            ],
            answer: [
              0,
              1
            ],
            explanation: ""
          },
          {
            id: "tds-end-term-apr-2025-fn-q13",
            type: "mcq",
            marks: 1,
            passage: "Scenario 1:\nSarah is working on a research paper about renewable energy technologies and decides to use an LLM to help her draft some sections.\nBased on the above data, answer the given subquestions.",
            prompt: "Sarah prompts the LLM: \"Write a comprehensive overview of solar energy advancements in the last decade.\"\nThe instructor wants to ensure that the LLM provides concise, clear, and helpful answers. What is the role of the system prompt in guiding the LLM's behavior?",
            options: [
              "It defines the LLM’s tone, behavior, and response style to align with the instructor's teaching goals.",
              "It provides a list of pre-written responses to be used in all classroom scenarios.",
              "It prevents the LLM from ever deviating from pre-determined responses, regardless of the context.",
              "It configures the LLM to only respond to specific commands, disregarding any other input."
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "tds-end-term-apr-2025-fn-q14",
            type: "multi",
            marks: 2,
            passage: "Scenario 1:\nSarah is working on a research paper about renewable energy technologies and decides to use an LLM to help her draft some sections.\nBased on the above data, answer the given subquestions.",
            prompt: "When Sarah submits increasingly complex prompts about solar energy, which of the following statements are TRUE regarding LLM cost and usage",
            options: [
              "LLM costs are primarily calculated based on the number of tokens processed",
              "LLM usage is always free for academic research",
              "The total length of both input prompt and output response impacts the overall cost",
              "LLM costs are fixed regardless of the complexity of the query",
              "Token count has no relation to computational resources required"
            ],
            answer: [
              0,
              2
            ],
            explanation: ""
          },
          {
            id: "tds-end-term-apr-2025-fn-q15",
            type: "mcq",
            marks: 1,
            passage: "Scenario 1:\nSarah is working on a research paper about renewable energy technologies and decides to use an LLM to help her draft some sections.\nBased on the above data, answer the given subquestions.",
            prompt: "Sarah wants to improve the specificity of her LLM prompt. Which prompt is likely to generate the most precise and useful response?",
            options: [
              "\"Tell me about solar energy\"",
              "\"Discuss solar energy advancements\"",
              "\"Outline 4 key solar energy technological breakthroughs from 2014-2024, including specific efficiency improvements and implementation challenges\"",
              "\"Write a paragraph about solar energy\""
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "tds-end-term-apr-2025-fn-q16",
            type: "mcq",
            marks: 1,
            passage: "Scenario 2\nWildfire Emergency Evacuation Planning\nBackground:\nA wildfire is threatening a rural mountain region, and emergency services need to coordinate evacuation routes for four remote communities. The Emergency Management Center is located at a central command post, and must plan the most efficient evacuation route to ensure rapid and safe community evacuation.\nThe four communities are:\nPine Ridge Settlement (Latitude: 38.7456, Longitude: -120.8765)\nMountain View Village (Latitude: 38.6987, Longitude: -120.9234)\nRiver Valley Community (Latitude: 38.7123, Longitude: -120.7654)\nForest Creek Hamlet (Latitude: 38.6789, Longitude: -120.8901)\nCentral Command Post Location:\n(Latitude: 38.7200, Longitude: -120.8500)\nBased on the above data, answer the given subquestions.",
            prompt: "During the wildfire emergency, multiple teams are updating evacuation plans. Which Git command would a team member use to get the latest evacuation route updates?",
            options: [
              "git commit",
              "git checkout",
              "git pull",
              "git add"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "tds-end-term-apr-2025-fn-q17",
            type: "mcq",
            marks: 1,
            passage: "Scenario 2\nWildfire Emergency Evacuation Planning\nBackground:\nA wildfire is threatening a rural mountain region, and emergency services need to coordinate evacuation routes for four remote communities. The Emergency Management Center is located at a central command post, and must plan the most efficient evacuation route to ensure rapid and safe community evacuation.\nThe four communities are:\nPine Ridge Settlement (Latitude: 38.7456, Longitude: -120.8765)\nMountain View Village (Latitude: 38.6987, Longitude: -120.9234)\nRiver Valley Community (Latitude: 38.7123, Longitude: -120.7654)\nForest Creek Hamlet (Latitude: 38.6789, Longitude: -120.8901)\nCentral Command Post Location:\n(Latitude: 38.7200, Longitude: -120.8500)\nBased on the above data, answer the given subquestions.",
            prompt: "An emergency responder needs to search through evacuation logs to find all entries related to \"Pine Ridge\". Which command would be most useful?",
            options: [
              "![Figure](/pyq/tds-end-term-apr-2025-fn/q17-opt1-1.webp#236x31)",
              "![Figure](/pyq/tds-end-term-apr-2025-fn/q17-opt2-1.webp#378x31)",
              "![Figure](/pyq/tds-end-term-apr-2025-fn/q17-opt3-1.webp#155x24)",
              "![Figure](/pyq/tds-end-term-apr-2025-fn/q17-opt4-1.webp#243x23)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-apr-2025-fn-q18",
            type: "mcq",
            marks: 1,
            passage: "Scenario 2\nWildfire Emergency Evacuation Planning\nBackground:\nA wildfire is threatening a rural mountain region, and emergency services need to coordinate evacuation routes for four remote communities. The Emergency Management Center is located at a central command post, and must plan the most efficient evacuation route to ensure rapid and safe community evacuation.\nThe four communities are:\nPine Ridge Settlement (Latitude: 38.7456, Longitude: -120.8765)\nMountain View Village (Latitude: 38.6987, Longitude: -120.9234)\nRiver Valley Community (Latitude: 38.7123, Longitude: -120.7654)\nForest Creek Hamlet (Latitude: 38.6789, Longitude: -120.8901)\nCentral Command Post Location:\n(Latitude: 38.7200, Longitude: -120.8500)\nBased on the above data, answer the given subquestions.",
            prompt: "In a resource-constrained emergency environment, which deployment method would be MOST appropriate for the Python-based evacuation management system?",
            options: [
              "Running scripts locally on a single emergency responder's laptop",
              "Distributing Python source code to all emergency personnel",
              "Containerized deployment with Docker for consistent execution across multiple devices",
              "Full cloud migration requiring constant internet connectivity"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "tds-end-term-apr-2025-fn-q19",
            type: "mcq",
            marks: 1,
            passage: "Scenario 2\nWildfire Emergency Evacuation Planning\nBackground:\nA wildfire is threatening a rural mountain region, and emergency services need to coordinate evacuation routes for four remote communities. The Emergency Management Center is located at a central command post, and must plan the most efficient evacuation route to ensure rapid and safe community evacuation.\nThe four communities are:\nPine Ridge Settlement (Latitude: 38.7456, Longitude: -120.8765)\nMountain View Village (Latitude: 38.6987, Longitude: -120.9234)\nRiver Valley Community (Latitude: 38.7123, Longitude: -120.7654)\nForest Creek Hamlet (Latitude: 38.6789, Longitude: -120.8901)\nCentral Command Post Location:\n(Latitude: 38.7200, Longitude: -120.8500)\nBased on the above data, answer the given subquestions.",
            prompt: "Which computational tool would be MOST APPROPRIATE for optimizing the complex evacuation route considering multiple communities?",
            options: [
              "Microsoft Excel for manual distance calculations",
              "Google Maps for route visualization",
              "Python libraries like NetworkX or OR-Tools for route optimization",
              "QGIS for static route mapping"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "tds-end-term-apr-2025-fn-q20",
            type: "mcq",
            marks: 1,
            passage: "Scenario 2\nWildfire Emergency Evacuation Planning\nBackground:\nA wildfire is threatening a rural mountain region, and emergency services need to coordinate evacuation routes for four remote communities. The Emergency Management Center is located at a central command post, and must plan the most efficient evacuation route to ensure rapid and safe community evacuation.\nThe four communities are:\nPine Ridge Settlement (Latitude: 38.7456, Longitude: -120.8765)\nMountain View Village (Latitude: 38.6987, Longitude: -120.9234)\nRiver Valley Community (Latitude: 38.7123, Longitude: -120.7654)\nForest Creek Hamlet (Latitude: 38.6789, Longitude: -120.8901)\nCentral Command Post Location:\n(Latitude: 38.7200, Longitude: -120.8500)\nBased on the above data, answer the given subquestions.",
            prompt: "What is the primary advantage of using the Haversine formula in emergency route planning?",
            options: [
              "Calculating exact road distances",
              "Determining travel time under specific conditions",
              "Computing great-circle distances on a spherical Earth",
              "Measuring elevation changes in mountainous terrain"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "tds-end-term-apr-2025-fn-q21",
            type: "mcq",
            marks: 2,
            passage: "Scenario 3\nYou are provided with a Gzipped Apache log file from a website having the below data in each row.\n\n![Figure](/pyq/tds-end-term-apr-2025-fn/q21-passage-1.webp#575x324)\n\nThe fields are separated by spaces and quoted by double quotes (\"). Unlike CSV files, quoted fields are escaped via \"and not\". All data is in the GMT-0500 timezone and the questions were based in this same time zone.\nUse the information given and answer the sub-questions.\nNote: Assume that you are using Python codes for log analysis",
            prompt: "Which of the following is a valid log entry based on the provided format?",
            options: [
              "192.168.1.1 - - [12/Dec/2024:14:05:59 -0500] \"GET /image.jpg HTTP/1.1\" 200 1234 \"-\" \"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36\" www.s-anand.net 192.254.190.217",
              "192.168.1.1 - - [12/Dec/2024:14:05:59 -0500] \"POST /image.jpg INVALID\" 200 1234 \"-\" \"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36\" www.s-anand.net 192.254.190.217",
              "192.168.1.1 - - [12/Dec/2024:14:05:59 -0500] \"PUT /image.jpg HTTP/1.1\" OK 1234 \"-\" \"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36\" www.s-anand.net 192.254.190.217",
              "203.0.113.7 - - [14/Dec/2024:16:45:11 -0500] \"GET /index.html HTTP/1.1\" 200 3500 \"-\" \"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36\" www.s-anand.net 192.254.190.219"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "tds-end-term-apr-2025-fn-q22",
            type: "mcq",
            marks: 1,
            passage: "Scenario 3\nYou are provided with a Gzipped Apache log file from a website having the below data in each row.\n\n![Figure](/pyq/tds-end-term-apr-2025-fn/q21-passage-1.webp#575x324)\n\nThe fields are separated by spaces and quoted by double quotes (\"). Unlike CSV files, quoted fields are escaped via \"and not\". All data is in the GMT-0500 timezone and the questions were based in this same time zone.\nUse the information given and answer the sub-questions.\nNote: Assume that you are using Python codes for log analysis",
            prompt: "Which of the following fields are necessary to filter \"POST requests made for pages under /images/ from 15:00 to 18:00 on Mondays\"?",
            options: [
              "Time, Request, Method, URL",
              "Time, Method, Status, Size",
              "Time, Method, URL, Referer",
              "Time, Status, URL, Server"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "tds-end-term-apr-2025-fn-q23",
            type: "mcq",
            marks: 1,
            passage: "Scenario 3\nYou are provided with a Gzipped Apache log file from a website having the below data in each row.\n\n![Figure](/pyq/tds-end-term-apr-2025-fn/q21-passage-1.webp#575x324)\n\nThe fields are separated by spaces and quoted by double quotes (\"). Unlike CSV files, quoted fields are escaped via \"and not\". All data is in the GMT-0500 timezone and the questions were based in this same time zone.\nUse the information given and answer the sub-questions.\nNote: Assume that you are using Python codes for log analysis",
            prompt: "If the time in the log is stored in the format [01/May/2024:00:00:00 -0500], which of the following time formats should you use to parse it correctly?",
            options: [
              "![Figure](/pyq/tds-end-term-apr-2025-fn/q23-opt1-1.webp#199x25)",
              "![Figure](/pyq/tds-end-term-apr-2025-fn/q23-opt2-1.webp#178x22)",
              "![Figure](/pyq/tds-end-term-apr-2025-fn/q23-opt3-1.webp#173x19)",
              "![Figure](/pyq/tds-end-term-apr-2025-fn/q23-opt4-1.webp#190x21)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "tds-end-term-apr-2025-fn-q24",
            type: "mcq",
            marks: 2,
            passage: "Scenario 3\nYou are provided with a Gzipped Apache log file from a website having the below data in each row.\n\n![Figure](/pyq/tds-end-term-apr-2025-fn/q21-passage-1.webp#575x324)\n\nThe fields are separated by spaces and quoted by double quotes (\"). Unlike CSV files, quoted fields are escaped via \"and not\". All data is in the GMT-0500 timezone and the questions were based in this same time zone.\nUse the information given and answer the sub-questions.\nNote: Assume that you are using Python codes for log analysis",
            prompt: "Which of the following methods is best for identifying if a log entry’s timestamp corresponds to a Sunday?",
            options: [
              "Check if timestamp.dayname() == 'Sunday'",
              "Check if timestamp.weekday() == 5",
              "Check if timestamp.strftime('%A') == 'Sunday'",
              "Check if timestamp.weekday() == 6"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "tds-end-term-apr-2025-fn-q25",
            type: "mcq",
            marks: 1,
            passage: "Scenario 3\nYou are provided with a Gzipped Apache log file from a website having the below data in each row.\n\n![Figure](/pyq/tds-end-term-apr-2025-fn/q21-passage-1.webp#575x324)\n\nThe fields are separated by spaces and quoted by double quotes (\"). Unlike CSV files, quoted fields are escaped via \"and not\". All data is in the GMT-0500 timezone and the questions were based in this same time zone.\nUse the information given and answer the sub-questions.\nNote: Assume that you are using Python codes for log analysis",
            prompt: "How would you identify log entries where the time is between 16:00 and 18:59 on Sundays?",
            options: [
              "Check if 16 <= timestamp.hour < 18",
              "Check if 16 <= timestamp.hour < 19",
              "Check if 16 < timestamp.hour < 19",
              "Check if timestamp.hour in range(16, 20)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-apr-2025-fn-q26",
            type: "mcq",
            marks: 1,
            passage: "Scenario 3\nYou are provided with a Gzipped Apache log file from a website having the below data in each row.\n\n![Figure](/pyq/tds-end-term-apr-2025-fn/q21-passage-1.webp#575x324)\n\nThe fields are separated by spaces and quoted by double quotes (\"). Unlike CSV files, quoted fields are escaped via \"and not\". All data is in the GMT-0500 timezone and the questions were based in this same time zone.\nUse the information given and answer the sub-questions.\nNote: Assume that you are using Python codes for log analysis",
            prompt: "How would you extract the HTTP protocol version (e.g., HTTP/1.1) from the Request field \"GET /blog/ HTTP/1.1\"?",
            options: [
              "Use request.split('/')[1]",
              "Use request.split(' ')[2]",
              "Use request.split(' ')[1]",
              "Use request.split('/')[2]"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-apr-2025-fn-q27",
            type: "mcq",
            marks: 1,
            passage: "Scenario 3\nYou are provided with a Gzipped Apache log file from a website having the below data in each row.\n\n![Figure](/pyq/tds-end-term-apr-2025-fn/q21-passage-1.webp#575x324)\n\nThe fields are separated by spaces and quoted by double quotes (\"). Unlike CSV files, quoted fields are escaped via \"and not\". All data is in the GMT-0500 timezone and the questions were based in this same time zone.\nUse the information given and answer the sub-questions.\nNote: Assume that you are using Python codes for log analysis",
            prompt: "![Figure](/pyq/tds-end-term-apr-2025-fn/q27-1.webp#410x87)",
            options: [
              "![Figure](/pyq/tds-end-term-apr-2025-fn/q27-opt1-1.webp#271x24)",
              "![Figure](/pyq/tds-end-term-apr-2025-fn/q27-opt2-1.webp#272x26)",
              "![Figure](/pyq/tds-end-term-apr-2025-fn/q27-opt3-1.webp#270x27)",
              "![Figure](/pyq/tds-end-term-apr-2025-fn/q27-opt4-1.webp#268x23)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "tds-end-term-apr-2025-fn-q28",
            type: "mcq",
            marks: 1,
            passage: "Scenario 3\nYou are provided with a Gzipped Apache log file from a website having the below data in each row.\n\n![Figure](/pyq/tds-end-term-apr-2025-fn/q21-passage-1.webp#575x324)\n\nThe fields are separated by spaces and quoted by double quotes (\"). Unlike CSV files, quoted fields are escaped via \"and not\". All data is in the GMT-0500 timezone and the questions were based in this same time zone.\nUse the information given and answer the sub-questions.\nNote: Assume that you are using Python codes for log analysis",
            prompt: "![Figure](/pyq/tds-end-term-apr-2025-fn/q28-1.webp#331x98)",
            options: [
              "![Figure](/pyq/tds-end-term-apr-2025-fn/q28-opt1-1.webp#198x29)",
              "![Figure](/pyq/tds-end-term-apr-2025-fn/q28-opt2-1.webp#289x27)",
              "![Figure](/pyq/tds-end-term-apr-2025-fn/q28-opt3-1.webp#200x27)",
              "![Figure](/pyq/tds-end-term-apr-2025-fn/q28-opt4-1.webp#268x30)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-apr-2025-fn-q29",
            type: "mcq",
            marks: 1,
            passage: "Scenario 3\nYou are provided with a Gzipped Apache log file from a website having the below data in each row.\n\n![Figure](/pyq/tds-end-term-apr-2025-fn/q21-passage-1.webp#575x324)\n\nThe fields are separated by spaces and quoted by double quotes (\"). Unlike CSV files, quoted fields are escaped via \"and not\". All data is in the GMT-0500 timezone and the questions were based in this same time zone.\nUse the information given and answer the sub-questions.\nNote: Assume that you are using Python codes for log analysis",
            prompt: "How would you identify if the log entry’s HTTP status code indicates a redirection request? (Assume that status is correctly stored in the variable ‘status’)",
            options: [
              "status in [301, 302, 303]",
              "200 < status < 400",
              "300 <= status < 400",
              "status in range(299, 400)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "tds-end-term-apr-2025-fn-q30",
            type: "mcq",
            marks: 1,
            passage: "Scenario 3\nYou are provided with a Gzipped Apache log file from a website having the below data in each row.\n\n![Figure](/pyq/tds-end-term-apr-2025-fn/q21-passage-1.webp#575x324)\n\nThe fields are separated by spaces and quoted by double quotes (\"). Unlike CSV files, quoted fields are escaped via \"and not\". All data is in the GMT-0500 timezone and the questions were based in this same time zone.\nUse the information given and answer the sub-questions.\nNote: Assume that you are using Python codes for log analysis",
            prompt: "After filtering the log entries (in a list filtered_entries), which of the following is the best way to count the number of requests with a 404 status code for pages under /error/?",
            options: [
              "Use len(filtered_entries)",
              "Use len(entries)",
              "Use sum(1 for entry in entries)",
              "None of these"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "tds-end-term-apr-2025-fn-q31",
            type: "mcq",
            marks: 1,
            passage: "Scenario 3\nYou are provided with a Gzipped Apache log file from a website having the below data in each row.\n\n![Figure](/pyq/tds-end-term-apr-2025-fn/q21-passage-1.webp#575x324)\n\nThe fields are separated by spaces and quoted by double quotes (\"). Unlike CSV files, quoted fields are escaped via \"and not\". All data is in the GMT-0500 timezone and the questions were based in this same time zone.\nUse the information given and answer the sub-questions.\nNote: Assume that you are using Python codes for log analysis",
            prompt: "If the count of log entries appears much larger than expected, which of the following could be the reason?",
            options: [
              "The filter for Monday is incorrect.",
              "The filter for time range is incorrect.",
              "The filter for HTTP method is incorrect.",
              "Any of these could be the reason."
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "tds-end-term-apr-2025-fn-q32",
            type: "mcq",
            marks: 1,
            passage: "Scenario 4\nA climate science professor is developing an AI-powered learning assistant called ClimateBot to help students understand complex climate modeling techniques and computational approaches to environmental data analysis.\nGuidelines for ClimateBot:\n- Engage students through thought-provoking questions\n- Encourage independent problem-solving\n- Guide students to discover solutions autonomously\n- Provide conceptual insights, not direct answers\n- Help students develop robust computational and analytical skills\nBased on the above data, answer the given subquestions.",
            prompt: "What is the primary purpose of the system prompt in controlling an AI learning assistant's behavior?",
            options: [
              "To create a fixed set of predetermined responses for every possible student query",
              "To define the core communication strategy, learning approach, and interaction guidelines",
              "To replace the need for human instructor guidance completely",
              "To limit the AI's ability to understand complex scientific concepts"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-apr-2025-fn-q33",
            type: "mcq",
            marks: 1,
            passage: "Scenario 4\nA climate science professor is developing an AI-powered learning assistant called ClimateBot to help students understand complex climate modeling techniques and computational approaches to environmental data analysis.\nGuidelines for ClimateBot:\n- Engage students through thought-provoking questions\n- Encourage independent problem-solving\n- Guide students to discover solutions autonomously\n- Provide conceptual insights, not direct answers\n- Help students develop robust computational and analytical skills\nBased on the above data, answer the given subquestions.",
            prompt: "Choose the best system prompt that achieves the instructor's goals.",
            options: [
              "\"You are a climate science assistant. Provide direct answers and complete code solutions whenever students ask.\"",
              "\"You are an interactive learning assistant for climate science. Guide students through complex concepts by asking reflective questions. Avoid giving direct solutions. Encourage independent thinking and help students develop problem-solving skills.\"",
              "\"You are a simple computational tool. Provide exact numerical answers and full code implementations for any climate modeling question.\"",
              "\"You are a climate science assistant. Help students and tell them to consult textbooks for all information.\""
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-apr-2025-fn-q34",
            type: "mcq",
            marks: 1,
            passage: "Scenario 4\nA climate science professor is developing an AI-powered learning assistant called ClimateBot to help students understand complex climate modeling techniques and computational approaches to environmental data analysis.\nGuidelines for ClimateBot:\n- Engage students through thought-provoking questions\n- Encourage independent problem-solving\n- Guide students to discover solutions autonomously\n- Provide conceptual insights, not direct answers\n- Help students develop robust computational and analytical skills\nBased on the above data, answer the given subquestions.",
            prompt: "A student asks: \"How do I calculate the global warming potential of different greenhouse gases?\" Choose the most pedagogically effective response:",
            options: [
              "\"The global warming potential (GWP) is calculated by multiplying the gas's radiative efficiency by its atmospheric lifetime. Here's the exact formula: [provides complete formula and calculation method]\"",
              "\"Global warming potential (GWP) is determined by factors like a gas's molecular structure, atmospheric lifetime, and interaction with radiation. Different gases have different GWPs based on these characteristics.\"",
              "\"Let's break this down. What do you already know about greenhouse gases and their impact on climate? Have you considered how different molecules might have varying abilities to trap heat?\"",
              "\"I cannot help you with this calculation. Please refer to your textbook for a complete explanation.\""
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "tds-end-term-apr-2025-fn-q35",
            type: "mcq",
            marks: 1,
            passage: "Scenario 4\nA climate science professor is developing an AI-powered learning assistant called ClimateBot to help students understand complex climate modeling techniques and computational approaches to environmental data analysis.\nGuidelines for ClimateBot:\n- Engage students through thought-provoking questions\n- Encourage independent problem-solving\n- Guide students to discover solutions autonomously\n- Provide conceptual insights, not direct answers\n- Help students develop robust computational and analytical skills\nBased on the above data, answer the given subquestions.",
            prompt: "Assume that the ClimateBot, an advanced learning assistant for climate science students.Its primary mission is to foster critical thinking, scientific reasoning, and deep understanding of complex environmental systems by using a RAG (Retrieval-Augmented Generation) system. The RAG system works as follows:\n1. Climate Data Storage: Comprehensive climate research materials (like reports, research papers and notes) are split into smaller chunks. Each chunk is vectorized using an embedding model.\n2. Vector Database: The vectorized chunks are stored in a FAISS or Weaviate vector database. 3. Retriever: When a student asks a question, the system retrieves the most relevant content (based on semantic similarity) from the vector database.\n4. LLM Contextualization: The retrieved content is added as context in the assistant's prompt, which is then used by the LLM (like GPT-4) to generate a personalized, context-aware response. Which of the following correctly describes the process flow of a RAG-based system for the IITM TDS Teaching Assistant?",
            options: [
              "![Figure](/pyq/tds-end-term-apr-2025-fn/q35-opt1-1.webp#311x59)",
              "![Figure](/pyq/tds-end-term-apr-2025-fn/q35-opt2-1.webp#359x95)",
              "![Figure](/pyq/tds-end-term-apr-2025-fn/q35-opt3-1.webp#379x127)",
              "![Figure](/pyq/tds-end-term-apr-2025-fn/q35-opt4-1.webp#364x90)"
            ],
            answer: 2,
            explanation: ""
          }
        ]
      }
    ]
  },
  {
    slug: "tds-end-term-dec-2024-fn",
    title: "TDS End Term · 22 Dec 2024 (FN)",
    description: "End Term paper from the September 2024 term, forenoon session on 22 Dec 2024, with the official answer key.",
    difficulty: "Standard",
    durationMin: 90,
    endTerm: {
      date: "2024-12-22",
      session: "FN",
      term: "September 2024"
    },
    sections: [
      {
        subjectSlug: "tools-in-data-science",
        title: "Tools in Data Science",
        short: "TDS",
        questions: [
          {
            id: "tds-end-term-dec-2024-fn-q1",
            type: "mcq",
            marks: 1,
            prompt: "![Figure](/pyq/tds-end-term-dec-2024-fn/q1-1.webp#575x271)",
            options: [
              "The numeric part of the order (123, 456, 789, 101)",
              "Only the first character of the order ID (O, O, O, O)",
              "The column will remain unchanged",
              "Each character of the order ID will be split into separate cells (O, r, d, e, r, I, D, 1, 2, 3)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "tds-end-term-dec-2024-fn-q2",
            type: "mcq",
            marks: 1,
            prompt: "You and your friend are building a KNN model to classify customers based on their shopping patterns. You use cross-validation to choose K = 6, while your friend guesses and sets K = 2. On the test set, you notice that your friend's model has a much higher training accuracy but much lower test accuracy than yours. Which of the following is the best explanation?",
            options: [
              "Your friend’s model has higher bias than yours",
              "Your friend’s model has higher variance and overfits the data",
              "Your model underfits the data compared to your friend’s model",
              "Your model overfits the data compared to your friend’s model"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-dec-2024-fn-q3",
            type: "mcq",
            marks: 1,
            prompt: "You are running a K-means clustering algorithm on customer segmentation data. Each time you run the model, you get different cluster assignments, making it hard to compare results. Which parameter should you adjust in the kmeans() function to achieve more stable and consistent results?",
            options: [
              "algorithm",
              "max_iter",
              "n_clusters",
              "n_init"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "tds-end-term-dec-2024-fn-q4",
            type: "mcq",
            marks: 1,
            prompt: "You are fitting an ARIMA model to a stock price time series. You want to use no moving average component, 5 lags for autoregression, and 1 difference to make the series stationary. Which of the following model specifications should you use?",
            options: [
              "ARIMA(..., trend = (5,1,0))",
              "ARIMA(..., order = (5,1,0))",
              "ARIMA(..., order = (0,5,1))",
              "ARIMA(..., trend = (0,5,1))"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-dec-2024-fn-q5",
            type: "mcq",
            marks: 1,
            prompt: "You are debugging a login issue on a website and want to check if the site is setting a \"session\" cookie properly. In Chrome DevTools, which tab should you open to view the cookies associated with the website?",
            options: [
              "Elements",
              "Network",
              "Source",
              "Application"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "tds-end-term-dec-2024-fn-q6",
            type: "mcq",
            marks: 1,
            prompt: "You are building a linear regression model to predict house prices based on the number of bedrooms. You obtain a p-value of 0.03 for the coefficient of \"number of bedrooms.\" Which of the following conclusions can you draw?",
            options: [
              "The relationship between number of bedrooms and house prices is statistically significant",
              "There is no relationship between number of bedrooms and house prices",
              "The analysis is inconclusive",
              "The model is overfitting"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "tds-end-term-dec-2024-fn-q7",
            type: "mcq",
            marks: 1,
            prompt: "You have a dataset of customer names that includes duplicates due to inconsistent capitalization and extra whitespace (e.g., 'John Doe', 'JOHN DOE', 'John Doe'). Which of the following tools would be best for cleaning and de-duplicating this data?",
            options: [
              "OpenRefine",
              "Tableau",
              "MySQL",
              "Microsoft Excel"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "tds-end-term-dec-2024-fn-q8",
            type: "mcq",
            marks: 1,
            prompt: "You want to check if a button click on a website triggers an API call to the backend. Which tab in Chrome DevTools should you monitor to see the network request?",
            options: [
              "Elements",
              "Console",
              "Sources",
              "Network"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "tds-end-term-dec-2024-fn-q9",
            type: "mcq",
            marks: 1,
            prompt: "You are creating a Streamlit app to display COVID-19 statistics. At the top of the app, you want to display an introductory message explaining the purpose of the app. Which of the following commands will achieve this ?",
            options: [
              "st.add_text()",
              "st.text()",
              "st.insert_text()",
              "st.display_text()"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-dec-2024-fn-q10",
            type: "mcq",
            marks: 1,
            prompt: "Your manager asks you to share your Tableau file with the sales team so they can see all the visualizations, dashboards, and underlying data. What type of file would you share with them to include everything needed for the team to view the content and access the data?",
            options: [
              "A Microsoft Excel workbook",
              "A Tableau workbook file (.twb) containing sheets, dashboards, and stories",
              "A Tableau story file (.twb) containing a sequence of sheets and dashboards",
              "A Tableau Packaged Workbook (.twbx) including all sheets, dashboards, stories, and data"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "tds-end-term-dec-2024-fn-q11",
            type: "multi",
            marks: 2,
            prompt: "![Figure](/pyq/tds-end-term-dec-2024-fn/q11-1.webp#575x103)",
            options: [
              "data_df.book_genre.unique()",
              "data_df.book_genre.category_name()",
              "data_df['book_genre'].distinct()",
              "data_df['book_genre'].unique()"
            ],
            answer: [
              0,
              3
            ],
            explanation: ""
          },
          {
            id: "tds-end-term-dec-2024-fn-q12",
            type: "multi",
            marks: 1,
            prompt: "You are asked to create an interactive map showing the locations of COVID-19 vaccination centers. Which of the following Python libraries would be most useful for geospatial analysis and visualization?",
            options: [
              "Geopandas",
              "QGIS",
              "Folium",
              "OpenStreetMap"
            ],
            answer: [
              0,
              2
            ],
            explanation: ""
          },
          {
            id: "tds-end-term-dec-2024-fn-q13",
            type: "mcq",
            marks: 1,
            passage: "Scenario 1\nReema is working on her project report and decides to use an LLM (like ChatGPT) to generate content for the “Introduction” section of her report. Below is her interaction with the LLM. Reema: \"Write an introduction on the impact of AI on employment. Make it sound academic and professional.\"\nLLM:\nThe rise of artificial intelligence (AI) has significantly transformed employment patterns worldwide. While automation increases productivity and efficiency, it also leads to displacement of certain jobs. Sectors like manufacturing and logistics are experiencing reduced demand for human labor, while jobs requiring creativity, empathy, and complex problem-solving are on the rise. Policymakers and educators are now focusing on reskilling workers to adapt to this change. Based on the above data, answer the given subquestions.",
            prompt: "Which of the following actions should Reema take to validate the LLM's claims?",
            options: [
              "Ask the LLM to provide sources for the claims it makes.",
              "Use trusted sources (like academic journals, industry reports, or government publications) to verify the LLM's information.",
              "Assume the LLM is always accurate and submit the report as-is.",
              "Copy and paste the same prompt into another LLM (like Bard or Claude) and compare the responses."
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-dec-2024-fn-q14",
            type: "multi",
            marks: 2,
            passage: "Scenario 1\nReema is working on her project report and decides to use an LLM (like ChatGPT) to generate content for the “Introduction” section of her report. Below is her interaction with the LLM. Reema: \"Write an introduction on the impact of AI on employment. Make it sound academic and professional.\"\nLLM:\nThe rise of artificial intelligence (AI) has significantly transformed employment patterns worldwide. While automation increases productivity and efficiency, it also leads to displacement of certain jobs. Sectors like manufacturing and logistics are experiencing reduced demand for human labor, while jobs requiring creativity, empathy, and complex problem-solving are on the rise. Policymakers and educators are now focusing on reskilling workers to adapt to this change. Based on the above data, answer the given subquestions.",
            prompt: "Reema realizes that the LLM's response was too short, and she wants more details for the introduction. She tries the following prompt:\n\"Give a more detailed and comprehensive introduction on the impact of AI on employment. Include key trends, specific examples, and the role of governments in addressing employment issues.\"\nThe LLM takes longer to generate the response and produces a longer, more detailed introduction.Which of the following is TRUE about how this new prompt impacts usage and costs?",
            options: [
              "The cost of LLM usage increases as more words are included in the output.",
              "The cost of LLM usage depends only on the number of requests, not the length of the response.",
              "The time it takes for the LLM to generate the output depends on the size of the prompt and the complexity of the instructions.",
              "The time it takes for the LLM is dependent only on the size of the prompt"
            ],
            answer: [
              0,
              2
            ],
            explanation: ""
          },
          {
            id: "tds-end-term-dec-2024-fn-q15",
            type: "mcq",
            marks: 1,
            passage: "Scenario 1\nReema is working on her project report and decides to use an LLM (like ChatGPT) to generate content for the “Introduction” section of her report. Below is her interaction with the LLM. Reema: \"Write an introduction on the impact of AI on employment. Make it sound academic and professional.\"\nLLM:\nThe rise of artificial intelligence (AI) has significantly transformed employment patterns worldwide. While automation increases productivity and efficiency, it also leads to displacement of certain jobs. Sectors like manufacturing and logistics are experiencing reduced demand for human labor, while jobs requiring creativity, empathy, and complex problem-solving are on the rise. Policymakers and educators are now focusing on reskilling workers to adapt to this change. Based on the above data, answer the given subquestions.",
            prompt: "Reema notices that the LLM sometimes produces \"generic\" and \"vague\" responses. She wants more specific, detailed, and structured answers. Which of the following prompts would most likely produce a more specific and useful response from the LLM?",
            options: [
              "\"Write a detailed introduction on the impact of AI on employment.\"",
              "\"List 3 key trends in the impact of AI on employment and provide a real-world example for each.\"",
              "\"Discuss how AI impacts employment in different sectors.\"",
              "\"Explain the impact of AI on employment.\""
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-dec-2024-fn-q16",
            type: "multi",
            marks: 1,
            passage: "Scenario 2\nGeospatial Distance Calculation for Emergency Response\nBackground:\nAs part of the course, you have been introduced with the concept of Haversine formula and its use in distance calculations between two points. The below is a transcript of the conversation between a student in TDS and ChatGPT while they were trying to solve the questions in Graded Assignment 6.\nStudent-ChatGPT Discussion Thread\nStudent:\nHi, I have two locations with the following coordinates:\n- Location A: Latitude = 40.748817, Longitude = -73.985428\n- Location B: Latitude = 40.761293, Longitude = -73.982294\nI need to calculate the distance between them. I heard that the Haversine formula can be used for this. Can you help me understand how to do this step-by-step?\n\n![Figure](/pyq/tds-end-term-dec-2024-fn/q16-passage-1.webp#575x842)\n\n![Figure](/pyq/tds-end-term-dec-2024-fn/q16-passage-2.webp#575x821)\n\nStudent:\nAh, I see my mistake. I’ll correct the second part and continue with the calculation. Thanks! Assume that the student got the full marks for the answers in Graded Assignment 6. Use the information given in the above conversation to answer the given subquestions for the given scenario.\nEmergency Medical Supply Delivery in Storm-Critical Zones\nBackground:\nThe city of Hillton has been hit by a severe storm, leading to power outages and road closures. The city’s emergency response team is tasked with delivering medical supplies to four hospitals located in different areas of the city. Due to time constraints, the response team wants to find the most optimal route to minimize travel distance.\nThe team has access to a file called hospital_locations.csv, which contains the following information:\n- Hospital Name\n- Business ID\n- Latitude\n- Longitude\nThe 4 hospitals in need of supplies are:\n1. North Hill Hospital (Business ID: 2103) — (Latitude: 40.7128, Longitude: -74.0060) 2. Eastview Medical Center (Business ID: 2158) — (Latitude: 40.7306, Longitude: -73.9866) 3. Westbrook Hospital (Business ID: 1987) — (Latitude: 40.6995, Longitude: -74.1745) 4. Southend Clinic (Business ID: 2895) — (Latitude: 40.6526, Longitude: -73.9497)\nThe emergency response team is currently stationed at the Emergency Supply Center at (Latitude: 40.7222, Longitude: -74.0134). The team must deliver supplies to each of the 4 hospitals and return to the supply center.\nThe goal is to minimize the total distance traveled.\nBased on the above data, answer the given subquestions.",
            prompt: "The first step is to calculate the distance (in meters) between the Emergency Supply Center and each of the 4 hospitals using the Haversine formula.\nWhich of the following is the correct distance (in meters,most closest) from the Emergency Supply Center (Latitude: 40.7222, Longitude: -74.0134) to Eastview Medical Center (Latitude: 40.7306, Longitude: -73.9866)?",
            options: [
              "1,975 meters",
              "2,346 meters",
              "2,925 meters",
              "3,254 meters"
            ],
            answer: [
              1
            ],
            explanation: ""
          },
          {
            id: "tds-end-term-dec-2024-fn-q17",
            type: "mcq",
            marks: 2,
            passage: "Scenario 2\nGeospatial Distance Calculation for Emergency Response\nBackground:\nAs part of the course, you have been introduced with the concept of Haversine formula and its use in distance calculations between two points. The below is a transcript of the conversation between a student in TDS and ChatGPT while they were trying to solve the questions in Graded Assignment 6.\nStudent-ChatGPT Discussion Thread\nStudent:\nHi, I have two locations with the following coordinates:\n- Location A: Latitude = 40.748817, Longitude = -73.985428\n- Location B: Latitude = 40.761293, Longitude = -73.982294\nI need to calculate the distance between them. I heard that the Haversine formula can be used for this. Can you help me understand how to do this step-by-step?\n\n![Figure](/pyq/tds-end-term-dec-2024-fn/q16-passage-1.webp#575x842)\n\n![Figure](/pyq/tds-end-term-dec-2024-fn/q16-passage-2.webp#575x821)\n\nStudent:\nAh, I see my mistake. I’ll correct the second part and continue with the calculation. Thanks! Assume that the student got the full marks for the answers in Graded Assignment 6. Use the information given in the above conversation to answer the given subquestions for the given scenario.\nEmergency Medical Supply Delivery in Storm-Critical Zones\nBackground:\nThe city of Hillton has been hit by a severe storm, leading to power outages and road closures. The city’s emergency response team is tasked with delivering medical supplies to four hospitals located in different areas of the city. Due to time constraints, the response team wants to find the most optimal route to minimize travel distance.\nThe team has access to a file called hospital_locations.csv, which contains the following information:\n- Hospital Name\n- Business ID\n- Latitude\n- Longitude\nThe 4 hospitals in need of supplies are:\n1. North Hill Hospital (Business ID: 2103) — (Latitude: 40.7128, Longitude: -74.0060) 2. Eastview Medical Center (Business ID: 2158) — (Latitude: 40.7306, Longitude: -73.9866) 3. Westbrook Hospital (Business ID: 1987) — (Latitude: 40.6995, Longitude: -74.1745) 4. Southend Clinic (Business ID: 2895) — (Latitude: 40.6526, Longitude: -73.9497)\nThe emergency response team is currently stationed at the Emergency Supply Center at (Latitude: 40.7222, Longitude: -74.0134). The team must deliver supplies to each of the 4 hospitals and return to the supply center.\nThe goal is to minimize the total distance traveled.\nBased on the above data, answer the given subquestions.",
            prompt: "The response team wants to deliver to the nearest hospital first. Which of the following hospitals is closest to the Emergency Supply Center (Latitude: 40.7222, Longitude: -74.0134)?",
            options: [
              "North Hill Hospital (Latitude: 40.7128, Longitude: -74.0060)",
              "Eastview Medical Center (Latitude: 40.7306, Longitude: -73.9866)",
              "Westbrook Hospital (Latitude: 40.6995, Longitude: -74.1745)",
              "Southend Clinic (Latitude: 40.6526, Longitude: -73.9497)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "tds-end-term-dec-2024-fn-q18",
            type: "mcq",
            marks: 2,
            passage: "Scenario 2\nGeospatial Distance Calculation for Emergency Response\nBackground:\nAs part of the course, you have been introduced with the concept of Haversine formula and its use in distance calculations between two points. The below is a transcript of the conversation between a student in TDS and ChatGPT while they were trying to solve the questions in Graded Assignment 6.\nStudent-ChatGPT Discussion Thread\nStudent:\nHi, I have two locations with the following coordinates:\n- Location A: Latitude = 40.748817, Longitude = -73.985428\n- Location B: Latitude = 40.761293, Longitude = -73.982294\nI need to calculate the distance between them. I heard that the Haversine formula can be used for this. Can you help me understand how to do this step-by-step?\n\n![Figure](/pyq/tds-end-term-dec-2024-fn/q16-passage-1.webp#575x842)\n\n![Figure](/pyq/tds-end-term-dec-2024-fn/q16-passage-2.webp#575x821)\n\nStudent:\nAh, I see my mistake. I’ll correct the second part and continue with the calculation. Thanks! Assume that the student got the full marks for the answers in Graded Assignment 6. Use the information given in the above conversation to answer the given subquestions for the given scenario.\nEmergency Medical Supply Delivery in Storm-Critical Zones\nBackground:\nThe city of Hillton has been hit by a severe storm, leading to power outages and road closures. The city’s emergency response team is tasked with delivering medical supplies to four hospitals located in different areas of the city. Due to time constraints, the response team wants to find the most optimal route to minimize travel distance.\nThe team has access to a file called hospital_locations.csv, which contains the following information:\n- Hospital Name\n- Business ID\n- Latitude\n- Longitude\nThe 4 hospitals in need of supplies are:\n1. North Hill Hospital (Business ID: 2103) — (Latitude: 40.7128, Longitude: -74.0060) 2. Eastview Medical Center (Business ID: 2158) — (Latitude: 40.7306, Longitude: -73.9866) 3. Westbrook Hospital (Business ID: 1987) — (Latitude: 40.6995, Longitude: -74.1745) 4. Southend Clinic (Business ID: 2895) — (Latitude: 40.6526, Longitude: -73.9497)\nThe emergency response team is currently stationed at the Emergency Supply Center at (Latitude: 40.7222, Longitude: -74.0134). The team must deliver supplies to each of the 4 hospitals and return to the supply center.\nThe goal is to minimize the total distance traveled.\nBased on the above data, answer the given subquestions.",
            prompt: "The response team has decided to follow the \"nearest hospital first\" strategy. The team first goes from the Emergency Supply Center to the nearest hospital identified in the previous question, then proceeds to the next closest hospital from there, and so on until all hospitals are served. Based on this strategy, which of the following represents the correct order of hospitals to visit?",
            options: [
              "North Hill Hospital → Eastview Medical Center → Southend Clinic → Westbrook Hospital",
              "Eastview Medical Center → North Hill Hospital → Southend Clinic → Westbrook Hospital",
              "North Hill Hospital → Southend Clinic → Eastview Medical Center → Westbrook Hospital",
              "Eastview Medical Center → Southend Clinic → North Hill Hospital → Westbrook Hospital"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "tds-end-term-dec-2024-fn-q19",
            type: "mcq",
            marks: 1,
            passage: "Scenario 2\nGeospatial Distance Calculation for Emergency Response\nBackground:\nAs part of the course, you have been introduced with the concept of Haversine formula and its use in distance calculations between two points. The below is a transcript of the conversation between a student in TDS and ChatGPT while they were trying to solve the questions in Graded Assignment 6.\nStudent-ChatGPT Discussion Thread\nStudent:\nHi, I have two locations with the following coordinates:\n- Location A: Latitude = 40.748817, Longitude = -73.985428\n- Location B: Latitude = 40.761293, Longitude = -73.982294\nI need to calculate the distance between them. I heard that the Haversine formula can be used for this. Can you help me understand how to do this step-by-step?\n\n![Figure](/pyq/tds-end-term-dec-2024-fn/q16-passage-1.webp#575x842)\n\n![Figure](/pyq/tds-end-term-dec-2024-fn/q16-passage-2.webp#575x821)\n\nStudent:\nAh, I see my mistake. I’ll correct the second part and continue with the calculation. Thanks! Assume that the student got the full marks for the answers in Graded Assignment 6. Use the information given in the above conversation to answer the given subquestions for the given scenario.\nEmergency Medical Supply Delivery in Storm-Critical Zones\nBackground:\nThe city of Hillton has been hit by a severe storm, leading to power outages and road closures. The city’s emergency response team is tasked with delivering medical supplies to four hospitals located in different areas of the city. Due to time constraints, the response team wants to find the most optimal route to minimize travel distance.\nThe team has access to a file called hospital_locations.csv, which contains the following information:\n- Hospital Name\n- Business ID\n- Latitude\n- Longitude\nThe 4 hospitals in need of supplies are:\n1. North Hill Hospital (Business ID: 2103) — (Latitude: 40.7128, Longitude: -74.0060) 2. Eastview Medical Center (Business ID: 2158) — (Latitude: 40.7306, Longitude: -73.9866) 3. Westbrook Hospital (Business ID: 1987) — (Latitude: 40.6995, Longitude: -74.1745) 4. Southend Clinic (Business ID: 2895) — (Latitude: 40.6526, Longitude: -73.9497)\nThe emergency response team is currently stationed at the Emergency Supply Center at (Latitude: 40.7222, Longitude: -74.0134). The team must deliver supplies to each of the 4 hospitals and return to the supply center.\nThe goal is to minimize the total distance traveled.\nBased on the above data, answer the given subquestions.",
            prompt: "The response team realizes that following the \"nearest hospital first\" strategy may not be optimal. They consider using a more advanced strategy where they plan the entire route before starting. The team uses geospatial optimization tools to find the shortest route using a \"traveling salesperson problem (TSP)\" approach.\nWhich of the following tools would be the most appropriate for implementing this route optimization?",
            options: [
              "QGIS to calculate the optimal route using the shortest path network analysis tool.",
              "Excel to calculate the distances between each pair of hospitals and identify the optimal route manually.",
              "Power BI to visualize the hospital locations on a map and create an optimized route.",
              "A TSP algorithm using Python libraries like NetworkX, SciPy, or OR-Tools to calculate the optimal route."
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "tds-end-term-dec-2024-fn-q20",
            type: "mcq",
            marks: 1,
            passage: "Scenario 2\nGeospatial Distance Calculation for Emergency Response\nBackground:\nAs part of the course, you have been introduced with the concept of Haversine formula and its use in distance calculations between two points. The below is a transcript of the conversation between a student in TDS and ChatGPT while they were trying to solve the questions in Graded Assignment 6.\nStudent-ChatGPT Discussion Thread\nStudent:\nHi, I have two locations with the following coordinates:\n- Location A: Latitude = 40.748817, Longitude = -73.985428\n- Location B: Latitude = 40.761293, Longitude = -73.982294\nI need to calculate the distance between them. I heard that the Haversine formula can be used for this. Can you help me understand how to do this step-by-step?\n\n![Figure](/pyq/tds-end-term-dec-2024-fn/q16-passage-1.webp#575x842)\n\n![Figure](/pyq/tds-end-term-dec-2024-fn/q16-passage-2.webp#575x821)\n\nStudent:\nAh, I see my mistake. I’ll correct the second part and continue with the calculation. Thanks! Assume that the student got the full marks for the answers in Graded Assignment 6. Use the information given in the above conversation to answer the given subquestions for the given scenario.\nEmergency Medical Supply Delivery in Storm-Critical Zones\nBackground:\nThe city of Hillton has been hit by a severe storm, leading to power outages and road closures. The city’s emergency response team is tasked with delivering medical supplies to four hospitals located in different areas of the city. Due to time constraints, the response team wants to find the most optimal route to minimize travel distance.\nThe team has access to a file called hospital_locations.csv, which contains the following information:\n- Hospital Name\n- Business ID\n- Latitude\n- Longitude\nThe 4 hospitals in need of supplies are:\n1. North Hill Hospital (Business ID: 2103) — (Latitude: 40.7128, Longitude: -74.0060) 2. Eastview Medical Center (Business ID: 2158) — (Latitude: 40.7306, Longitude: -73.9866) 3. Westbrook Hospital (Business ID: 1987) — (Latitude: 40.6995, Longitude: -74.1745) 4. Southend Clinic (Business ID: 2895) — (Latitude: 40.6526, Longitude: -73.9497)\nThe emergency response team is currently stationed at the Emergency Supply Center at (Latitude: 40.7222, Longitude: -74.0134). The team must deliver supplies to each of the 4 hospitals and return to the supply center.\nThe goal is to minimize the total distance traveled.\nBased on the above data, answer the given subquestions.",
            prompt: "Which of the following best describes the purpose of using the Haversine formula in geospatial analysis?",
            options: [
              "It calculates the distance between two points along a road or path on a map.",
              "It computes the distance between two points along the surface of a sphere.",
              "It measures the Euclidean distance between two points in a Cartesian coordinate system.",
              "It calculates the total travel time between two points based on traffic conditions."
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-dec-2024-fn-q21",
            type: "multi",
            marks: 2,
            passage: "![Figure](/pyq/tds-end-term-dec-2024-fn/q21-passage-1.webp#575x663)",
            prompt: "Which of the below can be a valid log file entry based on the descriptions provided in the main question?",
            options: [
              "40.77.167.48 - - [30/Apr/2024:07:12:09 -0500] \"GET /mplayer2.jsz HTTP/1.1\" 200 7416 \"-\" \"Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm) Chrome/116.0.1938.76 Safari/537.36\" www.s-anand.net 192.254.190.216",
              "40.77.167.48 - - [30/Apr/2024:07:12:09 -0500] \"POST /mplayer2.jsz HTTP/1.1\" 200 7416 \"-\" \"Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm) Chrome/116.0.1938.76 Safari/537.36\" www.s-anand.net 192.254.190.216",
              "40.77.167.48 - - [30-Apr-2024 07:12:09 -0500] \"GET /mplayer2.jsz HTTP/1.1\" 200 7416 \"-\" \"Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm) Chrome/116.0.1938.76 Safari/537.36\" www.s-anand.net 192.254.190.216",
              "40.77.167.48 - - [30/Apr/2024:07:12:09 -0500] \"GET /mplayer2.jsz HTTP/1.1\" OK 7416 \"-\" \"Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm) Chrome/116.0.1938.76 Safari/537.36\" www.s-anand.net 192.254.190.216"
            ],
            answer: [
              0,
              1
            ],
            explanation: ""
          },
          {
            id: "tds-end-term-dec-2024-fn-q22",
            type: "mcq",
            marks: 1,
            passage: "![Figure](/pyq/tds-end-term-dec-2024-fn/q21-passage-1.webp#575x663)",
            prompt: "Which of the following fields are necessary to filter \"GET requests made for pages under /telugump3/ from 10:00 until before 21:00 on Saturdays\"?",
            options: [
              "Time, Request, URL, Method",
              "Time, Request, Status, Size",
              "Time, Method, URL, Status",
              "Time, Status, URL, Referer"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "tds-end-term-dec-2024-fn-q23",
            type: "mcq",
            marks: 1,
            passage: "![Figure](/pyq/tds-end-term-dec-2024-fn/q21-passage-1.webp#575x663)",
            prompt: "![Figure](/pyq/tds-end-term-dec-2024-fn/q23-1.webp#356x99)",
            options: [
              "![Figure](/pyq/tds-end-term-dec-2024-fn/q23-opt1-1.webp#211x27)",
              "![Figure](/pyq/tds-end-term-dec-2024-fn/q23-opt2-1.webp#193x30)",
              "![Figure](/pyq/tds-end-term-dec-2024-fn/q23-opt3-1.webp#185x26)",
              "![Figure](/pyq/tds-end-term-dec-2024-fn/q23-opt4-1.webp#202x25)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "tds-end-term-dec-2024-fn-q24",
            type: "mcq",
            marks: 1,
            passage: "![Figure](/pyq/tds-end-term-dec-2024-fn/q21-passage-1.webp#575x663)",
            prompt: "Which of the following methods is best for identifying if a log entry's timestamp corresponds to a Saturday? (timestamp is a method in datetime library)",
            options: [
              "![Figure](/pyq/tds-end-term-dec-2024-fn/q24-opt1-1.webp#320x31)",
              "![Figure](/pyq/tds-end-term-dec-2024-fn/q24-opt2-1.webp#321x29)",
              "![Figure](/pyq/tds-end-term-dec-2024-fn/q24-opt3-1.webp#451x32)",
              "![Figure](/pyq/tds-end-term-dec-2024-fn/q24-opt4-1.webp#412x26)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-dec-2024-fn-q25",
            type: "multi",
            marks: 1,
            passage: "![Figure](/pyq/tds-end-term-dec-2024-fn/q21-passage-1.webp#575x663)",
            prompt: "How would you identify log entries where the time is between 10:00 and 20:59 on Saturdays?",
            options: [
              "![Figure](/pyq/tds-end-term-dec-2024-fn/q25-opt1-1.webp#337x28)",
              "![Figure](/pyq/tds-end-term-dec-2024-fn/q25-opt2-1.webp#331x27)",
              "![Figure](/pyq/tds-end-term-dec-2024-fn/q25-opt3-1.webp#323x28)",
              "![Figure](/pyq/tds-end-term-dec-2024-fn/q25-opt4-1.webp#385x27)"
            ],
            answer: [
              0,
              3
            ],
            explanation: ""
          },
          {
            id: "tds-end-term-dec-2024-fn-q26",
            type: "mcq",
            marks: 1,
            passage: "![Figure](/pyq/tds-end-term-dec-2024-fn/q21-passage-1.webp#575x663)",
            prompt: "![Figure](/pyq/tds-end-term-dec-2024-fn/q26-1.webp#401x84)",
            options: [
              "![Figure](/pyq/tds-end-term-dec-2024-fn/q26-opt1-1.webp#250x23)",
              "![Figure](/pyq/tds-end-term-dec-2024-fn/q26-opt2-1.webp#257x28)",
              "![Figure](/pyq/tds-end-term-dec-2024-fn/q26-opt3-1.webp#260x25)",
              "![Figure](/pyq/tds-end-term-dec-2024-fn/q26-opt4-1.webp#256x28)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "tds-end-term-dec-2024-fn-q27",
            type: "mcq",
            marks: 1,
            passage: "![Figure](/pyq/tds-end-term-dec-2024-fn/q21-passage-1.webp#575x663)",
            prompt: "![Figure](/pyq/tds-end-term-dec-2024-fn/q27-1.webp#379x82)",
            options: [
              "![Figure](/pyq/tds-end-term-dec-2024-fn/q27-opt1-1.webp#256x32)",
              "![Figure](/pyq/tds-end-term-dec-2024-fn/q27-opt2-1.webp#251x25)",
              "![Figure](/pyq/tds-end-term-dec-2024-fn/q27-opt3-1.webp#251x31)",
              "![Figure](/pyq/tds-end-term-dec-2024-fn/q27-opt4-1.webp#262x29)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "tds-end-term-dec-2024-fn-q28",
            type: "mcq",
            marks: 1,
            passage: "![Figure](/pyq/tds-end-term-dec-2024-fn/q21-passage-1.webp#575x663)",
            prompt: "![Figure](/pyq/tds-end-term-dec-2024-fn/q28-1.webp#402x75)",
            options: [
              "![Figure](/pyq/tds-end-term-dec-2024-fn/q28-opt1-1.webp#225x29)",
              "![Figure](/pyq/tds-end-term-dec-2024-fn/q28-opt2-1.webp#310x28)",
              "![Figure](/pyq/tds-end-term-dec-2024-fn/q28-opt3-1.webp#224x30)",
              "![Figure](/pyq/tds-end-term-dec-2024-fn/q28-opt4-1.webp#290x29)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-dec-2024-fn-q29",
            type: "mcq",
            marks: 1,
            passage: "![Figure](/pyq/tds-end-term-dec-2024-fn/q21-passage-1.webp#575x663)",
            prompt: "How would you identify if the Status code of a log entry indicates a successful request? (Assume that status is correctly stored in the variable ‘status’)",
            options: [
              "![Figure](/pyq/tds-end-term-dec-2024-fn/q29-opt1-1.webp#206x26)",
              "![Figure](/pyq/tds-end-term-dec-2024-fn/q29-opt2-1.webp#370x30)",
              "![Figure](/pyq/tds-end-term-dec-2024-fn/q29-opt3-1.webp#202x27)",
              "![Figure](/pyq/tds-end-term-dec-2024-fn/q29-opt4-1.webp#271x27)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "tds-end-term-dec-2024-fn-q30",
            type: "mcq",
            marks: 1,
            passage: "![Figure](/pyq/tds-end-term-dec-2024-fn/q21-passage-1.webp#575x663)",
            prompt: "![Figure](/pyq/tds-end-term-dec-2024-fn/q30-1.webp#376x103)",
            options: [
              "![Figure](/pyq/tds-end-term-dec-2024-fn/q30-opt1-1.webp#254x28)",
              "![Figure](/pyq/tds-end-term-dec-2024-fn/q30-opt2-1.webp#161x26)",
              "![Figure](/pyq/tds-end-term-dec-2024-fn/q30-opt3-1.webp#320x27)",
              "![Figure](/pyq/tds-end-term-dec-2024-fn/q30-opt4-1.webp#284x30)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "tds-end-term-dec-2024-fn-q31",
            type: "mcq",
            marks: 1,
            passage: "![Figure](/pyq/tds-end-term-dec-2024-fn/q21-passage-1.webp#575x663)",
            prompt: "If the count of log entries appears much smaller than expected, which of the following could be the reason?",
            options: [
              "The filter for Saturday is incorrect.",
              "The filter for time range is incorrect.",
              "The filter for successful status codes is incorrect.",
              "Any of the given option could be the reason."
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "tds-end-term-dec-2024-fn-q32",
            type: "mcq",
            marks: 1,
            passage: "Scenario 4\nThe course instructor of TDS is developing an LLM-powered learning assistant called EduBot. This assistant is used by students to learn concepts in geospatial analysis, optimization, and data science. This bot will be highly helpful for students in solving the questions given in the context of “Emergency Medical Supply Delivery in Storm-Critical Zones” in this question paper. The goal of the assistant is to help students think critically and solve problems independently without receiving direct answers or step-by-step solutions.\nThe instructor defines the following constraints for the LLM assistant (EduBot):\n1. Do not provide final answers — If a student asks for the solution, the agent must not give the final answer.\n2. Do not provide step-by-step code — The agent must avoid giving Python, SQL, or R code directly.\n3. Encourage critical thinking — The agent should guide students using reflective questions, sanity checks, and logical reasoning.\n4. Use context-aware prompts — The agent should recognize when a student might have made a conceptual mistake (like unit errors) and provide guidance.\nThe instructor asks you, as part of a course assignment, to design the system prompt that will be sent to OpenAI’s API for creating this LLM-based agent. Your task is to answer the given sub- questions to ensure EduBot works as expected.",
            prompt: "The instructor wants to ensure that the agent’s purpose is clear to the LLM. What is the role of the system prompt in controlling the LLM's behavior?",
            options: [
              "It defines the role, constraints, and communication style of the LLM agent, ensuring it guides rather than solves.",
              "It acts as a script that contains hard-coded responses for every student question.",
              "It ensures that the LLM only responds with exact pre-written answers to specific queries.",
              "It modifies the OpenAI model itself to force it to behave like a teaching assistant."
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "tds-end-term-dec-2024-fn-q33",
            type: "mcq",
            marks: 1,
            passage: "Scenario 4\nThe course instructor of TDS is developing an LLM-powered learning assistant called EduBot. This assistant is used by students to learn concepts in geospatial analysis, optimization, and data science. This bot will be highly helpful for students in solving the questions given in the context of “Emergency Medical Supply Delivery in Storm-Critical Zones” in this question paper. The goal of the assistant is to help students think critically and solve problems independently without receiving direct answers or step-by-step solutions.\nThe instructor defines the following constraints for the LLM assistant (EduBot):\n1. Do not provide final answers — If a student asks for the solution, the agent must not give the final answer.\n2. Do not provide step-by-step code — The agent must avoid giving Python, SQL, or R code directly.\n3. Encourage critical thinking — The agent should guide students using reflective questions, sanity checks, and logical reasoning.\n4. Use context-aware prompts — The agent should recognize when a student might have made a conceptual mistake (like unit errors) and provide guidance.\nThe instructor asks you, as part of a course assignment, to design the system prompt that will be sent to OpenAI’s API for creating this LLM-based agent. Your task is to answer the given sub- questions to ensure EduBot works as expected.",
            prompt: "Choose the best system prompt that achieves the instructor's goals.",
            options: [
              "“””You are an interactive assistant. Answer student questions directly and provide Python code or final answers if requested.\nIf the student asks for clarification, provide a detailed step-by-step solution.”””",
              "“””You are a learning assistant for a Data Science course. Do not provide final answers or direct solutions. Do not provide Python or step-by-step code. Encourage critical thinking using reflective questions. Use sanity checks to help students validate their work. If a student provides a calculation, prompt them to review units, radian-to-degree conversions, or other potential points of error.”””",
              "“””You are a teaching assistant for a Data Science course. Answer questions using logical reasoning, and if the student requests the final solution, provide the exact distance or value. Ask follow-up questions to help students understand the answer.”””",
              "“””You are a simple assistant. Do not provide step-by-step guidance or explanations. When asked about concepts like geospatial distance, tell students to look up the concept themselves. If a student asks for the answer, refuse to respond.”””"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-dec-2024-fn-q34",
            type: "mcq",
            marks: 1,
            passage: "Scenario 4\nThe course instructor of TDS is developing an LLM-powered learning assistant called EduBot. This assistant is used by students to learn concepts in geospatial analysis, optimization, and data science. This bot will be highly helpful for students in solving the questions given in the context of “Emergency Medical Supply Delivery in Storm-Critical Zones” in this question paper. The goal of the assistant is to help students think critically and solve problems independently without receiving direct answers or step-by-step solutions.\nThe instructor defines the following constraints for the LLM assistant (EduBot):\n1. Do not provide final answers — If a student asks for the solution, the agent must not give the final answer.\n2. Do not provide step-by-step code — The agent must avoid giving Python, SQL, or R code directly.\n3. Encourage critical thinking — The agent should guide students using reflective questions, sanity checks, and logical reasoning.\n4. Use context-aware prompts — The agent should recognize when a student might have made a conceptual mistake (like unit errors) and provide guidance.\nThe instructor asks you, as part of a course assignment, to design the system prompt that will be sent to OpenAI’s API for creating this LLM-based agent. Your task is to answer the given sub- questions to ensure EduBot works as expected.",
            prompt: "A student asks the following question to EduBot:\n\"How do I convert degrees to radians?\"\nThe goal of the LLM assistant is to use logical reasoning to prompt the student to think critically. Instead of directly providing the formula, the assistant should encourage the student to recall or derive it on their own. The assistant should use concepts, relationships, and reasoning techniques that help the student make connections.\nWhich of the below responses will be an ideal response from the agent in this situation?",
            options: [
              "![Figure](/pyq/tds-end-term-dec-2024-fn/q34-opt1-1.webp#378x131)",
              "![Figure](/pyq/tds-end-term-dec-2024-fn/q34-opt2-1.webp#374x183)",
              "![Figure](/pyq/tds-end-term-dec-2024-fn/q34-opt3-1.webp#380x118)",
              "![Figure](/pyq/tds-end-term-dec-2024-fn/q34-opt4-1.webp#432x135)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "tds-end-term-dec-2024-fn-q35",
            type: "mcq",
            marks: 1,
            passage: "Scenario 4\nThe course instructor of TDS is developing an LLM-powered learning assistant called EduBot. This assistant is used by students to learn concepts in geospatial analysis, optimization, and data science. This bot will be highly helpful for students in solving the questions given in the context of “Emergency Medical Supply Delivery in Storm-Critical Zones” in this question paper. The goal of the assistant is to help students think critically and solve problems independently without receiving direct answers or step-by-step solutions.\nThe instructor defines the following constraints for the LLM assistant (EduBot):\n1. Do not provide final answers — If a student asks for the solution, the agent must not give the final answer.\n2. Do not provide step-by-step code — The agent must avoid giving Python, SQL, or R code directly.\n3. Encourage critical thinking — The agent should guide students using reflective questions, sanity checks, and logical reasoning.\n4. Use context-aware prompts — The agent should recognize when a student might have made a conceptual mistake (like unit errors) and provide guidance.\nThe instructor asks you, as part of a course assignment, to design the system prompt that will be sent to OpenAI’s API for creating this LLM-based agent. Your task is to answer the given sub- questions to ensure EduBot works as expected.",
            prompt: "Assume that the EduBot is designed to provide context-aware, personalized guidance to students by using a RAG (Retrieval-Augmented Generation) system.\nThe RAG system works as follows:\n1. Course Material Storage: Custom course content (like PDFs, guides, and notes) is split into smaller chunks. Each chunk is vectorized using an embedding model.\n2. Vector Database: The vectorized chunks are stored in a FAISS or Weaviate vector database. 3. Retriever: When a student asks a question, the system retrieves the most relevant content (based on semantic similarity) from the vector database.\n4. LLM Contextualization: The retrieved content is added as context in the assistant's prompt, which is then used by the LLM (like GPT-4) to generate a personalized, context-aware response. Which of the following correctly describes the process flow of a RAG-based system for the IITM TDS Teaching Assistant?",
            options: [
              "![Figure](/pyq/tds-end-term-dec-2024-fn/q35-opt1-1.webp#426x29)",
              "![Figure](/pyq/tds-end-term-dec-2024-fn/q35-opt2-1.webp#575x48)",
              "![Figure](/pyq/tds-end-term-dec-2024-fn/q35-opt3-1.webp#565x43)",
              "![Figure](/pyq/tds-end-term-dec-2024-fn/q35-opt4-1.webp#531x43)"
            ],
            answer: 2,
            explanation: ""
          }
        ]
      }
    ]
  }
];
