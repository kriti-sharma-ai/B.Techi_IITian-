import type { QualifierMock } from "../../types";

// Modern Application Development II: IIT Madras BS End Term papers (3 papers, 96 questions).
// Questions, options and answer keys are reproduced from the official question papers.
// Figures, code and maths typeset as images are in public/pyq/<slug>/, embedded inline as
// ![Figure](src#WxH). Range answers are stored as midpoint ± tolerance.
// Generated from the paper PDFs; edit with care.

export const mad2EndTermPapers: QualifierMock[] = [
  {
    slug: "mad-2-end-term-aug-2025-an",
    title: "MAD II End Term · 31 Aug 2025 (AN)",
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
        subjectSlug: "modern-application-development-2",
        title: "Modern Application Development II",
        short: "MAD II",
        questions: [
          {
            id: "mad-2-end-term-aug-2025-an-q1",
            type: "mcq",
            marks: 2,
            prompt: "In a message queue system, if the consumer is slower than the producer, what is likely to occur first?",
            options: [
              "Messages will be dropped",
              "Messages will accumulate in the queue",
              "The consumer will speed up automatically",
              "The producer will block until the consumer is ready"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-2-end-term-aug-2025-an-q2",
            type: "mcq",
            marks: 2,
            prompt: "What does \"reactivity\" mean in the context of frontend frameworks like Vue.js?",
            options: [
              "The component will reload when data changes",
              "All function calls become asynchronous",
              "It disables direct access to state",
              "The DOM updates automatically when the underlying reactive data changes"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mad-2-end-term-aug-2025-an-q3",
            type: "mcq",
            marks: 2,
            prompt: "In Flask, what is the main benefit of using the @cache.cached() decorator?",
            options: [
              "It stores output in session storage",
              "It enables token authentication",
              "It sends compressed response headers",
              "It skips route execution for repeated inputs"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mad-2-end-term-aug-2025-an-q4",
            type: "mcq",
            marks: 2,
            prompt: "What is the primary purpose of CORS (Cross-Origin Resource Sharing)?",
            options: [
              "To encrypt data between client and server",
              "To compress HTTP responses",
              "To authenticate users across applications",
              "To control which domains can access resources"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mad-2-end-term-aug-2025-an-q5",
            type: "multi",
            marks: 2,
            prompt: "Which of the following practices help protect against supply chain attacks?",
            options: [
              "Storing keys only in environment variables",
              "Version pinning",
              "Using only packages with over 1000 stars on GitHub",
              "Reduce Dependencies"
            ],
            answer: [
              1,
              3
            ],
            explanation: ""
          },
          {
            id: "mad-2-end-term-aug-2025-an-q6",
            type: "multi",
            marks: 2,
            prompt: "Which of the following factors directly affect the speed and performance of a web page load?",
            options: [
              "The number of CSS selectors in the stylesheet",
              "Use of semantic HTML tags",
              "Number of HTTP requests made",
              "File size of resources (like images, JS)"
            ],
            answer: [
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "mad-2-end-term-aug-2025-an-q7",
            type: "multi",
            marks: 2,
            prompt: "Which of the following is/are the potential benefits of using a message broker?",
            options: [
              "A message broker makes the network scalable for adding more servers to the network.",
              "A message broker allows two servers in a network to directly communicate with each other, without an intermediary.",
              "A message broker is not suited in case of traffic spikes, as messages are retained in the queue until processed.",
              "A message broker can be used for batch processing of messages."
            ],
            answer: [
              0,
              3
            ],
            explanation: ""
          },
          {
            id: "mad-2-end-term-aug-2025-an-q8",
            type: "multi",
            marks: 2,
            prompt: "Which statements about webhooks are correct?",
            options: [
              "They enable real-time data delivery",
              "They use HTTP POST requests typically",
              "They're designed for server-to-server communication",
              "They require polling from the client"
            ],
            answer: [
              0,
              1,
              2
            ],
            explanation: ""
          },
          {
            id: "mad-2-end-term-aug-2025-an-q9",
            type: "mcq",
            marks: 3,
            prompt: "A popular e-commerce platform needs to notify multiple third-party services (inventory management, email marketing, analytics) whenever a customer places an order. The development team is considering different approaches to handle these notifications.\nScenario: When an order is placed, the system needs to:\n● Update inventory levels in an external warehouse system\n● Send a welcome email through a third-party email service\n● Log analytics data to an external tracking service\n● Update customer loyalty points in a CRM system\nWhich of the following statements about using webhooks for this scenario is MOST accurate?",
            options: [
              "Webhooks are not suitable for this use case because they require the e- commerce platform to continuously poll each third-party service to check if they're ready to receive data, which would create unnecessary network overhead.",
              "Webhooks should be avoided in this scenario because they operate synchronously, meaning the customer's order placement would be delayed until all third-party services have successfully processed their notifications.",
              "Webhooks provide an ideal solution as they allow the e-commerce platform to push real-time notifications to all subscribed third-party services immediately when an order is placed, eliminating the need for these services to repeatedly poll for updates.",
              "Webhooks are primarily designed for read-only operations and cannot handle complex data payloads like order information, making them unsuitable for e-commerce transaction notifications."
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-2-end-term-aug-2025-an-q10",
            type: "mcq",
            marks: 3,
            prompt: "What is the main advantage of using caching in a Flask-based web application?",
            options: [
              "It eliminates the need for client-side rendering",
              "It reduces server load by reusing responses for repeated requests",
              "It encrypts data transmission between server and client",
              "It avoids the need for database interactions completely"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-2-end-term-aug-2025-an-q11",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-2-end-term-aug-2025-an/q11-1.webp#575x262)",
            options: [
              "R P Q S",
              "P R S Q",
              "R S P Q",
              "R P S Q"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mad-2-end-term-aug-2025-an-q12",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-2-end-term-aug-2025-an/q12-1.webp#534x387)",
            options: [
              "![Figure](/pyq/mad-2-end-term-aug-2025-an/q12-opt1-1.webp#575x125)",
              "![Figure](/pyq/mad-2-end-term-aug-2025-an/q12-opt2-1.webp#575x128)",
              "![Figure](/pyq/mad-2-end-term-aug-2025-an/q12-opt3-1.webp#575x104)",
              "![Figure](/pyq/mad-2-end-term-aug-2025-an/q12-opt4-1.webp#575x94)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-2-end-term-aug-2025-an-q13",
            type: "mcq",
            marks: 3,
            prompt: "Consider the following javascript program.\n\n![Figure](/pyq/mad-2-end-term-aug-2025-an/q13-1.webp#575x842)\n\nWhat will be the output of the above program on the browser’s console?",
            options: [
              "![Figure](/pyq/mad-2-end-term-aug-2025-an/q13-opt1-1.webp#280x110)",
              "![Figure](/pyq/mad-2-end-term-aug-2025-an/q13-opt2-1.webp#308x114)",
              "![Figure](/pyq/mad-2-end-term-aug-2025-an/q13-opt3-1.webp#303x113)",
              "![Figure](/pyq/mad-2-end-term-aug-2025-an/q13-opt4-1.webp#286x115)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-2-end-term-aug-2025-an-q14",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-2-end-term-aug-2025-an/q14-1.webp#575x470)",
            options: [
              "App 1 only shows data",
              "Both show “Hello from App 2”",
              "Both show “Hello from App 1”",
              "Each renders its own message independently"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mad-2-end-term-aug-2025-an-q15",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-2-end-term-aug-2025-an/q15-1.webp#566x464)",
            options: [
              "![Figure](/pyq/mad-2-end-term-aug-2025-an/q15-opt1-1.webp#58x70)",
              "![Figure](/pyq/mad-2-end-term-aug-2025-an/q15-opt2-1.webp#59x73)",
              "![Figure](/pyq/mad-2-end-term-aug-2025-an/q15-opt3-1.webp#57x66)",
              "![Figure](/pyq/mad-2-end-term-aug-2025-an/q15-opt4-1.webp#132x22)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mad-2-end-term-aug-2025-an-q16",
            type: "multi",
            marks: 3,
            prompt: "Which factors directly impact the Lighthouse \"Performance\" score?",
            options: [
              "First Contentful Paint (FCP)",
              "Time to Interactive (TTI)",
              "Layout Shift",
              "HTTPS usage"
            ],
            answer: [
              0,
              1,
              2
            ],
            explanation: ""
          },
          {
            id: "mad-2-end-term-aug-2025-an-q17",
            type: "multi",
            marks: 3,
            prompt: "Which statements are true about handling background tasks in Flask with Celery?",
            options: [
              "Using time.sleep() blocks the event loop and is recommended for async tasks",
              "Celery allows long-running tasks to be executed asynchronously",
              "Polling is a strategy to check task status periodically",
              "Flask + Celery + Redis is a common stack for async task management"
            ],
            answer: [
              1,
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "mad-2-end-term-aug-2025-an-q18",
            type: "multi",
            marks: 3,
            prompt: "Which of the following are true about mutations and actions in Vuex?",
            options: [
              "Actions can be asynchronous",
              "Only actions can call APIs through fetch call",
              "Mutations should modify state directly",
              "Mutations can be asynchronous"
            ],
            answer: [
              0,
              1,
              2
            ],
            explanation: ""
          },
          {
            id: "mad-2-end-term-aug-2025-an-q19",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/mad-2-end-term-aug-2025-an/q19-1.webp#575x98)",
            options: [
              "The class \"active\" will only be applied to the div element if the variable \"isActive\" evaluates to true.",
              "The class \"disabled\" will be applied to the div element when the variable \"isEnabled\" evaluates to false.",
              "The class \"text-bold\" will always be applied to the div element regardless of the \"hasBoldText\" variable value.",
              "All three classes (\"active\", \"text-bold\", \"disabled\") will always be applied to the div element.",
              "If \"isEnabled\" is undefined, the \"disabled\" class will not be applied to the div element.",
              "The class \"text-bold\" will only be applied if the variable \"hasBoldText\" exists and evaluates to a truthy value."
            ],
            answer: [
              0,
              1,
              5
            ],
            explanation: ""
          },
          {
            id: "mad-2-end-term-aug-2025-an-q20",
            type: "mcq",
            marks: 3,
            passage: "![Figure](/pyq/mad-2-end-term-aug-2025-an/q20-passage-1.webp#575x705)\n\n![Figure](/pyq/mad-2-end-term-aug-2025-an/q20-passage-2.webp#575x668)\n\nScenario\n1. The component is loaded.\n2. User clicks \"Mark Complete\" for the task named Build Project.\n3. User clicks \"Show Completed\" button again.",
            prompt: "After step 2 (Mark Completed is clicked), what tasks are shown?",
            options: [
              "Learn Vue",
              "Learn Vue, Build Project, Test App",
              "Test App only",
              "None"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mad-2-end-term-aug-2025-an-q21",
            type: "mcq",
            marks: 3,
            passage: "![Figure](/pyq/mad-2-end-term-aug-2025-an/q20-passage-1.webp#575x705)\n\n![Figure](/pyq/mad-2-end-term-aug-2025-an/q20-passage-2.webp#575x668)\n\nScenario\n1. The component is loaded.\n2. User clicks \"Mark Complete\" for the task named Build Project.\n3. User clicks \"Show Completed\" button again.",
            prompt: "After step 3 (Mark Complete is clicked on Build Project), how many completed tasks are reported in the UI?",
            options: [
              "1",
              "2",
              "3",
              "0"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-2-end-term-aug-2025-an-q22",
            type: "multi",
            marks: 3,
            passage: "![Figure](/pyq/mad-2-end-term-aug-2025-an/q20-passage-1.webp#575x705)\n\n![Figure](/pyq/mad-2-end-term-aug-2025-an/q20-passage-2.webp#575x668)\n\nScenario\n1. The component is loaded.\n2. User clicks \"Mark Complete\" for the task named Build Project.\n3. User clicks \"Show Completed\" button again.",
            prompt: "Which of the following are true about this component’s behavior?",
            options: [
              "![Figure](/pyq/mad-2-end-term-aug-2025-an/q22-opt1-1.webp#575x47)",
              "![Figure](/pyq/mad-2-end-term-aug-2025-an/q22-opt2-1.webp#575x47)",
              "![Figure](/pyq/mad-2-end-term-aug-2025-an/q22-opt3-1.webp#575x49)",
              "![Figure](/pyq/mad-2-end-term-aug-2025-an/q22-opt4-1.webp#575x33)"
            ],
            answer: [
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "mad-2-end-term-aug-2025-an-q23",
            type: "mcq",
            marks: 4.5,
            prompt: "![Figure](/pyq/mad-2-end-term-aug-2025-an/q23-1.webp#575x842)",
            options: [
              "![Figure](/pyq/mad-2-end-term-aug-2025-an/q23-opt1-1.webp#84x95)",
              "![Figure](/pyq/mad-2-end-term-aug-2025-an/q23-opt2-1.webp#78x85)",
              "![Figure](/pyq/mad-2-end-term-aug-2025-an/q23-opt3-1.webp#66x83)",
              "![Figure](/pyq/mad-2-end-term-aug-2025-an/q23-opt4-1.webp#52x81)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-2-end-term-aug-2025-an-q24",
            type: "mcq",
            marks: 4.5,
            prompt: "![Figure](/pyq/mad-2-end-term-aug-2025-an/q24-1.webp#575x685)",
            options: [
              "![Figure](/pyq/mad-2-end-term-aug-2025-an/q24-opt1-1.webp#382x22)",
              "![Figure](/pyq/mad-2-end-term-aug-2025-an/q24-opt2-1.webp#424x25)",
              "![Figure](/pyq/mad-2-end-term-aug-2025-an/q24-opt3-1.webp#324x22)",
              "![Figure](/pyq/mad-2-end-term-aug-2025-an/q24-opt4-1.webp#161x29)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-2-end-term-aug-2025-an-q25",
            type: "mcq",
            marks: 4.5,
            prompt: "![Figure](/pyq/mad-2-end-term-aug-2025-an/q25-1.webp#559x240)",
            options: [
              "UserProfile",
              "User",
              "NotFound",
              "UserSettings"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-2-end-term-aug-2025-an-q26",
            type: "mcq",
            marks: 4.5,
            prompt: "![Figure](/pyq/mad-2-end-term-aug-2025-an/q26-1.webp#575x459)",
            options: [
              "Request succeeds",
              "CORS error occurs",
              "404 error",
              "The server crashes"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-2-end-term-aug-2025-an-q27",
            type: "mcq",
            marks: 4.5,
            prompt: "![Figure](/pyq/mad-2-end-term-aug-2025-an/q27-1.webp#368x369)",
            options: [
              "![Figure](/pyq/mad-2-end-term-aug-2025-an/q27-opt1-1.webp#50x91)",
              "![Figure](/pyq/mad-2-end-term-aug-2025-an/q27-opt2-1.webp#40x93)",
              "![Figure](/pyq/mad-2-end-term-aug-2025-an/q27-opt3-1.webp#38x98)",
              "![Figure](/pyq/mad-2-end-term-aug-2025-an/q27-opt4-1.webp#91x73)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-2-end-term-aug-2025-an-q28",
            type: "multi",
            marks: 4.5,
            prompt: "![Figure](/pyq/mad-2-end-term-aug-2025-an/q28-1.webp#575x842)\n\nAssuming that the root Vue instance has already been created and mounted to div app. Which of the following statements are CORRECT?",
            options: [
              "The header slot will display \"Welcome John\" when loading is true",
              "The content slot will render 3 list items with \"item1 (3 total)\", \"item2 (3 total)\", \"item3 (3 total)\"",
              "The default slot will display \"No data available\" from the fallback prop",
              "If we change isLoading: true in data-provider, the header will show \"Loading...\"",
              "Changing v-slot:default to just v-slot in parent-component would break the functionality"
            ],
            answer: [
              1,
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "mad-2-end-term-aug-2025-an-q29",
            type: "mcq",
            marks: 4.5,
            passage: "Answer the given Subquestions:",
            prompt: "Consider the following Vue Router configuration in a Vue 2 application:\n\n![Figure](/pyq/mad-2-end-term-aug-2025-an/q29-1.webp#349x401)\n\nIn a Vue component, you have these navigation methods:\n\n![Figure](/pyq/mad-2-end-term-aug-2025-an/q29-2.webp#575x737)\n\nWhat URLs will be generated when the user clicks each navigation element?",
            options: [
              "User button: /user,\nProduct button: /product,\nHome link: /home",
              "User button: /user/123,\nProduct button: /product/electronics/456,\nHome link: /",
              "User button: /UserProfile/123,\nProduct button: /ProductDetail/electronics/456,\nHome link: /Home",
              "User button: /user?id=123,\nProduct button: /product?category=electronics&id=456,\nHome link: /"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-2-end-term-aug-2025-an-q30",
            type: "multi",
            marks: 4.5,
            passage: "Answer the given Subquestions:",
            prompt: "Using the same Vue Router configuration from the previous question, Select ALL correct statements about these navigation methods.",
            options: [
              "The \"View User\" link will navigate to /user/789 and match the UserProfile route",
              "The navigateOne() method will create URL /user/555?tab=settings",
              "The $router.replace() method adds a new entry to the browser history",
              "The $router.go(-1) method navigates to the previous page in browser history"
            ],
            answer: [
              1,
              3
            ],
            explanation: ""
          },
          {
            id: "mad-2-end-term-aug-2025-an-q31",
            type: "mcq",
            marks: 3,
            passage: "Prashant and Nikita are creating a quiz question paper collaboratively. They are each working on different sections — and complete their tasks in parallel. Meanwhile, Mayur is enjoying a single- player game that finishes when the game loop ends.\nTo compare productivity:\n● If Prashant and Nikita (together) finish faster than Mayur, the winner is \"Team\".\n● If Mayur finishes faster, he wins.\n● If both take the same time, Mayur wins by default.\nYou are simulating this scenario in the browser.Prashant and Nikita are represented using parallel Promises. Mayur is represented using a single Promise. The frontend must calculate who finishes first using asynchronous logic, and display the result.\n\n![Figure](/pyq/mad-2-end-term-aug-2025-an/q31-passage-1.webp#575x423)\n\nBased on the above data, answer the given subquestions.",
            prompt: "If Prashant and Nikita finish together in 3 seconds (since Promise.all waits for both), and Mayur finishes in 4 seconds, who wins?",
            options: [
              "Mayur",
              "Team",
              "Nikita",
              "Race condition prevents output"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-2-end-term-aug-2025-an-q32",
            type: "mcq",
            marks: 3,
            passage: "Prashant and Nikita are creating a quiz question paper collaboratively. They are each working on different sections — and complete their tasks in parallel. Meanwhile, Mayur is enjoying a single- player game that finishes when the game loop ends.\nTo compare productivity:\n● If Prashant and Nikita (together) finish faster than Mayur, the winner is \"Team\".\n● If Mayur finishes faster, he wins.\n● If both take the same time, Mayur wins by default.\nYou are simulating this scenario in the browser.Prashant and Nikita are represented using parallel Promises. Mayur is represented using a single Promise. The frontend must calculate who finishes first using asynchronous logic, and display the result.\n\n![Figure](/pyq/mad-2-end-term-aug-2025-an/q31-passage-1.webp#575x423)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/mad-2-end-term-aug-2025-an/q32-1.webp#575x520)\n\nThe Team takes 5 seconds in total. Mayur takes 2 seconds. According to the logic of app2.js, who is the winner?",
            options: [
              "Mayur",
              "Team",
              "Nikita",
              "Error due to async logic"
            ],
            answer: 0,
            explanation: ""
          }
        ]
      }
    ]
  },
  {
    slug: "mad-2-end-term-dec-2024-fn",
    title: "MAD II End Term · 22 Dec 2024 (FN)",
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
        subjectSlug: "modern-application-development-2",
        title: "Modern Application Development II",
        short: "MAD II",
        questions: [
          {
            id: "mad-2-end-term-dec-2024-fn-q1",
            type: "mcq",
            marks: 3,
            prompt: "Which of the following statements is true about closures in JavaScript?",
            options: [
              "A closure can access variables from its outer function even after the outer function has returned.",
              "A closure can be created when a function is defined inside another function.",
              "Closures are useful for data encapsulation and controlling access to private data.",
              "All of these."
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-fn-q2",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q2-1.webp#357x358)",
            options: [
              "Start\nInside Timeout\nInside Promise\nEnd",
              "Start\nInside Promise\nInside Timeout\nEnd",
              "Start\nEnd\nInside Timeout\nInside Promise",
              "Start\nEnd\nInside Promise\nInside Timeout"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-fn-q3",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q3-1.webp#363x402)",
            options: [
              "Hello, John\nTypeError: john.greet is not a function",
              "Hello, John\nHello, undefined",
              "TypeError: john.greet is not a function\nTypeError: john.greet is not a function",
              "Hello, John\nHello, John"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-fn-q4",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q4-1.webp#497x523)",
            options: [
              "The watcher will not be triggered because “name” is a nested property of “user” object.",
              "The watcher will be triggered and log \"User object changed: { name: 'Bob', age: 30 }\".",
              "The watcher will be triggered, but it will only log the new “name” value, i.e., “Dev”, and not the entire user object.",
              "The watcher will throw an error because deep watching is not supported on nested objects."
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-fn-q5",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q5-1.webp#529x474)",
            options: [
              "The paragraph with the text “This paragraph is visible” will be displayed.",
              "The paragraph with the text “This paragraph is hidden” will be displayed.",
              "Both paragraphs will be displayed because of the v-if and v-else bindings.",
              "No change will happen since v-if and v-else do not update the DOM."
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-fn-q6",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q6-1.webp#575x94)",
            options: [
              "secure=True and samesite='Strict'",
              "secure=False and samesite='Strict'",
              "secure=True and samesite='None'",
              "secure=False and samesite='Lax'"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-fn-q7",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q7-1.webp#575x404)",
            options: [
              "[]",
              "['Laptop', ‘Laptop’, ‘Laptop’]",
              "[{ id: 1, name: 'Laptop' }]",
              "[undefined]"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-fn-q8",
            type: "mcq",
            marks: 3,
            prompt: "Which of the following is true regarding long polling?",
            options: [
              "Long polling opens multiple connections between the client and the server, and the server continuously sends updates to the client in real-time.",
              "Long polling involves the client repeatedly sending requests at fixed intervals to the server to check for updates, regardless of whether new data is available.",
              "Long polling allows the client to make a single request to the server, where the server holds the connection open until new data is available and then sends the response.",
              "Long polling uses WebSockets to maintain a persistent, bidirectional connection between the client and the server."
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-fn-q9",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q9-1.webp#575x336)",
            options: [
              "Multiple state changes in one mutation",
              "Async operation in mutation",
              "Direct state mutation",
              "Both Multiple state changes in one mutation and Async operation in mutation"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-fn-q10",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q10-1.webp#575x450)",
            options: [
              "No authentication check",
              "SQL injection vulnerability",
              "Unvalidated user input",
              "All of these"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-fn-q11",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q11-1.webp#498x407)",
            options: [
              "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q11-opt1-1.webp#575x31)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q11-opt2-1.webp#575x29)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q11-opt3-1.webp#516x32)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q11-opt4-1.webp#569x30)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-fn-q12",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q12-1.webp#401x206)\n\nWhat will be the output on the console?",
            options: [
              "error4",
              "7",
              "error",
              "undefined"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-fn-q13",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q13-1.webp#409x347)",
            options: [
              "Begin, Start, 5, End, Finish",
              "Begin, Finish, Start, 5, End",
              "Begin, Finish, Start, End, 5",
              "Begin, Start, Finish, 5, End"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-fn-q14",
            type: "mcq",
            marks: 3,
            prompt: "Which of the following best describes the difference between @cache.memoize() and @cache.cached() in Flask-Caching?",
            options: [
              "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q14-opt1-1.webp#546x51)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q14-opt2-1.webp#539x46)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q14-opt3-1.webp#558x31)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q14-opt4-1.webp#407x25)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-fn-q15",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q15-1.webp#575x259)",
            options: [
              "It will display the indices, values and types of all the items of the array.",
              "It will throw error on the console for the very first iteration.",
              "It will display the index, value and type of the value for the first item of array and then will throw error for the next value.",
              "None of these."
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-fn-q16",
            type: "mcq",
            marks: 2,
            prompt: "Which of the following statements is false when using the “async” and “await” keywords in JavaScript?",
            options: [
              "The “await” keyword can only be used inside an async function.",
              "The “await” keyword pauses the execution of the surrounding async function until the promise resolves.",
              "The async functions always return a promise, even if the return value is not a promise.",
              "The async functions run synchronously, but their await statements execute asynchronously."
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-fn-q17",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q17-1.webp#356x316)",
            options: [
              "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q17-opt1-1.webp#52x22)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q17-opt2-1.webp#92x25)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q17-opt3-1.webp#42x18)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q17-opt4-1.webp#136x25)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q17-opt5-1.webp#129x28)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-fn-q18",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q18-1.webp#575x369)",
            options: [
              "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q18-opt1-1.webp#96x23)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q18-opt2-1.webp#104x23)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q18-opt3-1.webp#100x21)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q18-opt4-1.webp#79x18)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q18-opt5-1.webp#84x21)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q18-opt6-1.webp#45x19)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q18-opt7-1.webp#132x27)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-fn-q19",
            type: "mcq",
            marks: 2,
            prompt: "Which of the following statements about the beforeDestroy and destroyed lifecycle hooks in Vue is true?",
            options: [
              "The “beforeDestroy” hook is called after the component is removed from the DOM, and the “destroyed” hook is called before the component is destroyed.",
              "The “beforeDestroy” hook is called before the component is removed from the DOM, and the “destroyed” hook is called after the component is destroyed.",
              "The “beforeDestroy” hook is called when the component is mounted, and the “destroyed” hook is called before the component is destroyed.",
              "Both hooks are called after the component is destroyed."
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-fn-q20",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q20-1.webp#334x287)",
            options: [
              "5",
              "10",
              "15",
              "20"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-fn-q21",
            type: "mcq",
            marks: 2,
            prompt: "Which of the following statements is FALSE?",
            options: [
              "Cache-Control: no-store prevents caching",
              "ETag helps validate cache freshness",
              "Data stored in sessionStorage remains available even after the browser is closed and reopened.",
              "localStorage has larger storage limit than cookies"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-fn-q22",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q22-1.webp#575x247)",
            options: [
              "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q22-opt1-1.webp#391x27)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q22-opt2-1.webp#513x35)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q22-opt3-1.webp#495x36)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q22-opt4-1.webp#438x29)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-fn-q23",
            type: "mcq",
            marks: 4.5,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q23-1.webp#575x789)",
            options: [
              "Child\nParent\nGrandParent",
              "Child",
              "GrandParent\nParent\nChild",
              "None of these"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-fn-q24",
            type: "mcq",
            marks: 4.5,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q24-1.webp#575x533)",
            options: [
              "The increment mutation will be called immediately after the dispatch.",
              "The state will be updated after the asynchronous operation completes.",
              "The incrementAsync action will be executed synchronously, and increment will be committed before the promise resolves.",
              "The action will be skipped since mutations cannot be called inside actions."
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-fn-q25",
            type: "mcq",
            marks: 4.5,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q25-1.webp#480x816)",
            options: [
              "Parent",
              "Button",
              "Button\nParent",
              "Parent\nButton"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-fn-q26",
            type: "mcq",
            marks: 4.5,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q26-1.webp#575x842)",
            options: [
              "Likes: 5",
              "Likes: 8",
              "Likes: 6",
              "Likes: 9"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-fn-q27",
            type: "mcq",
            marks: 4.5,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q27-1.webp#575x842)",
            options: [
              "The userData in the store is set to the data from the API.",
              "User: null",
              "The error will be logged, Nothing will be displayed",
              "User: Luke"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-fn-q28",
            type: "mcq",
            marks: 4.5,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q28-1.webp#575x511)",
            options: [
              "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q28-opt1-1.webp#256x123)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q28-opt2-1.webp#263x124)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q28-opt3-1.webp#253x117)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q28-opt4-1.webp#267x125)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-fn-q29",
            type: "mcq",
            marks: 4.5,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q29-1.webp#575x603)",
            options: [
              "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q29-opt1-1.webp#140x66)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q29-opt2-1.webp#135x74)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q29-opt3-1.webp#136x74)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q29-opt4-1.webp#126x71)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-fn-q30",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q30-1.webp#575x437)",
            options: [
              "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q30-opt1-1.webp#255x33)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q30-opt2-1.webp#276x30)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q30-opt3-1.webp#478x36)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q30-opt4-1.webp#495x37)"
            ],
            answer: [
              1,
              2
            ],
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-fn-q31",
            type: "multi",
            marks: 4.5,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q31-1.webp#575x644)",
            options: [
              "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q31-opt1-1.webp#575x23)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q31-opt2-1.webp#575x60)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q31-opt3-1.webp#575x54)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q31-opt4-1.webp#575x31)"
            ],
            answer: [
              0,
              1
            ],
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-fn-q32",
            type: "multi",
            marks: 2,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-fn/q32-1.webp#575x363)",
            options: [
              "this.$route.params.id",
              "this.$router.params.id",
              "this.$route.query.id",
              "this.$route.params['id']"
            ],
            answer: [
              0,
              3
            ],
            explanation: ""
          }
        ]
      }
    ]
  },
  {
    slug: "mad-2-end-term-dec-2024-an",
    title: "MAD II End Term · 22 Dec 2024 (AN)",
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
        subjectSlug: "modern-application-development-2",
        title: "Modern Application Development II",
        short: "MAD II",
        questions: [
          {
            id: "mad-2-end-term-dec-2024-an-q1",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-an/q1-1.webp#575x85)",
            options: [
              "secure=False and samesite='Strict'",
              "secure=True and samesite='None'",
              "secure=True and samesite='Strict'",
              "secure=False and samesite='Lax'"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-an-q2",
            type: "mcq",
            marks: 3,
            prompt: "Which of the following is true regarding long polling?",
            options: [
              "Long polling opens multiple connections between the client and the server, and the server continuously sends updates to the client in real-time.",
              "Long polling allows the client to make a single request to the server, where the server holds the connection open until new data is available and then sends the response.",
              "Long polling involves the client repeatedly sending requests at fixed intervals to the server to check for updates, regardless of whether new data is available.",
              "Long polling uses WebSockets to maintain a persistent, bidirectional connection between the client and the server."
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-an-q3",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-an/q3-1.webp#509x395)",
            options: [
              "![Figure](/pyq/mad-2-end-term-dec-2024-an/q3-opt1-1.webp#572x28)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-an/q3-opt2-1.webp#512x27)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-an/q3-opt3-1.webp#575x27)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-an/q3-opt4-1.webp#567x25)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-an-q4",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-an/q4-1.webp#430x192)\n\nWhat will be the output on the console?",
            options: [
              "7",
              "error",
              "undefined",
              "error4"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-an-q5",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-an/q5-1.webp#422x318)",
            options: [
              "Begin, Start, 5, End, Finish",
              "Begin, Start, Finish, 5, End",
              "Begin, Finish, Start, 5, End",
              "Begin, Finish, Start, End, 5"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-an-q6",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-an/q6-1.webp#575x277)",
            options: [
              "![Figure](/pyq/mad-2-end-term-dec-2024-an/q6-opt1-1.webp#387x28)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-an/q6-opt2-1.webp#469x27)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-an/q6-opt3-1.webp#415x27)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-an/q6-opt4-1.webp#512x28)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-an-q7",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-an/q7-1.webp#535x463)",
            options: [
              "The paragraph with the text “This paragraph is hidden” will be displayed.",
              "The paragraph with the text “This paragraph is visible” will be displayed.",
              "Both paragraphs will be displayed because of the v-if and v-else bindings.",
              "No change will happen, since v-if and v-else do not update the DOM."
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-an-q8",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-an/q8-1.webp#394x367)",
            options: [
              "![Figure](/pyq/mad-2-end-term-dec-2024-an/q8-opt1-1.webp#122x98)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-an/q8-opt2-1.webp#128x93)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-an/q8-opt3-1.webp#125x91)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-an/q8-opt4-1.webp#119x95)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-an-q9",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-an/q9-1.webp#380x408)",
            options: [
              "![Figure](/pyq/mad-2-end-term-dec-2024-an/q9-opt1-1.webp#291x57)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-an/q9-opt2-1.webp#129x59)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-an/q9-opt3-1.webp#96x53)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-an/q9-opt4-1.webp#289x53)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-an-q10",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-an/q10-1.webp#575x301)",
            options: [
              "Home",
              "Profile",
              "Security",
              "Settings"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-an-q11",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-an/q11-1.webp#575x486)",
            options: [
              "The new value will be stored in session storage, and the “userName” data property will be updated.",
              "The new value will be stored in session storage, but the “userName” data property will be reset to an empty string on page refresh.",
              "The “userName” data property will be reset to an empty string, and the session storage value will be ignored on refresh.",
              "The “userName” data property will not be updated in session storage because session storage doesn't persist across refreshes."
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-an-q12",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-an/q12-1.webp#575x165)",
            options: [
              "II, III, I",
              "III, I, II",
              "III, II, I",
              "I, II, III"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-an-q13",
            type: "mcq",
            marks: 2,
            prompt: "Which of the following statements is FALSE?",
            options: [
              "Cache-Control: no-store prevents caching",
              "Data stored in sessionStorage remains available even after the browser is closed and reopened.",
              "ETag helps validate cache freshness",
              "localStorage has larger storage limit than cookies"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-an-q14",
            type: "mcq",
            marks: 2,
            prompt: "Which of the following statements is false when using the “async” and “await” keywords in JavaScript?",
            options: [
              "The “await” keyword can only be used inside an async function.",
              "The async functions run synchronously, but their await statements execute asynchronously.",
              "The “await” keyword pauses the execution of the surrounding async function until the promise resolves.",
              "The async functions always return a promise, even if the return value is not a promise."
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-an-q15",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-an/q15-1.webp#384x312)",
            options: [
              "![Figure](/pyq/mad-2-end-term-dec-2024-an/q15-opt1-1.webp#52x23)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-an/q15-opt2-1.webp#39x24)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-an/q15-opt3-1.webp#133x26)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-an/q15-opt4-1.webp#124x28)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-an/q15-opt5-1.webp#87x23)"
            ],
            answer: 4,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-an-q16",
            type: "mcq",
            marks: 2,
            prompt: "You have a Celery task send_email that needs to run every 10 minutes. How can you schedule it?",
            options: [
              "Using @app.task_periodic to run the task every 10 minutes.",
              "Using @app.on_periodic to schedule a periodic task.",
              "Using Celery Beat to schedule periodic tasks.",
              "Celery doesn't support scheduling tasks at fixed intervals; you need to use an external scheduler."
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-an-q17",
            type: "mcq",
            marks: 4.5,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-an/q17-1.webp#575x401)",
            options: [
              "![Figure](/pyq/mad-2-end-term-dec-2024-an/q17-opt1-1.webp#18x21)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-an/q17-opt2-1.webp#202x27)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-an/q17-opt3-1.webp#95x24)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-an/q17-opt4-1.webp#211x25)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-an-q18",
            type: "mcq",
            marks: 4.5,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-an/q18-1.webp#575x551)",
            options: [
              "The increment mutation will be called immediately after the dispatch.",
              "The incrementAsync action will be executed synchronously, and increment will be committed before the promise resolves.",
              "The state will be updated after the asynchronous operation completes.",
              "The action will be skipped since mutations cannot be called inside actions."
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-an-q19",
            type: "mcq",
            marks: 4.5,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-an/q19-1.webp#502x541)",
            options: [
              "The watcher will be triggered and log \"User object changed: { name: 'Bob', age: 30 }\".",
              "The watcher will not be triggered because “name” is a nested property of “user” object.",
              "The watcher will be triggered, but it will only log the new “name” value, i.e., “Dev”, and not the entire user object.",
              "The watcher will throw an error because deep watching is not supported on nested objects."
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-an-q20",
            type: "mcq",
            marks: 4.5,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-an/q20-1.webp#575x763)",
            options: [
              "[2, 4, 6]",
              "[2, 4, 6, 8]",
              "[4, 8, 12]",
              "[2, 4, 6, 16]"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-an-q21",
            type: "mcq",
            marks: 4.5,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-an/q21-1.webp#575x842)",
            options: [
              "Required",
              "Invalid format, Email exists, Required",
              "Required, Email exists",
              "Validating..., Required"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-an-q22",
            type: "mcq",
            marks: 4.5,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-an/q22-1.webp#575x529)",
            options: [
              "![Figure](/pyq/mad-2-end-term-dec-2024-an/q22-opt1-1.webp#170x72)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-an/q22-opt2-1.webp#163x76)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-an/q22-opt3-1.webp#161x71)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-an/q22-opt4-1.webp#162x70)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-an-q23",
            type: "mcq",
            marks: 4.5,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-an/q23-1.webp#575x322)",
            options: [
              "The task will immediately execute and print the result 'Task completed'.",
              "The task will execute asynchronously, and 'Task completed' will be printed after a 10-second delay.",
              "The task will execute synchronously, blocking the main thread for 10 seconds.",
              "None of these"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-an-q24",
            type: "mcq",
            marks: 4.5,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-an/q24-1.webp#575x842)",
            options: [
              "![Figure](/pyq/mad-2-end-term-dec-2024-an/q24-opt1-1.webp#206x47)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-an/q24-opt2-1.webp#326x53)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-an/q24-opt3-1.webp#450x55)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-an/q24-opt4-1.webp#575x56)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-an-q25",
            type: "multi",
            marks: 2,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-an/q25-1.webp#575x389)",
            options: [
              "![Figure](/pyq/mad-2-end-term-dec-2024-an/q25-opt1-1.webp#171x27)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-an/q25-opt2-1.webp#155x24)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-an/q25-opt3-1.webp#172x23)",
              "![Figure](/pyq/mad-2-end-term-dec-2024-an/q25-opt4-1.webp#183x24)"
            ],
            answer: [
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-an-q26",
            type: "multi",
            marks: 2,
            prompt: "Which of the following statements are true about Lighthouse?",
            options: [
              "Lighthouse measures various performance metrics, including Time to Interactive and Speed Index.",
              "Lighthouse generates a single score for UI design only.",
              "It can emulate network throttling and device types during performance evaluation.",
              "Lighthouse focuses exclusively on performance and ignores accessibility."
            ],
            answer: [
              0,
              2
            ],
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-an-q27",
            type: "multi",
            marks: 2,
            prompt: "Which of the following statement(s) is/are correct regarding the behavior of local storage in Vue.js applications?",
            options: [
              "The local storage data persists even after the browser is closed and reopened.",
              "The local storage data is automatically cleared every session.",
              "The local storage can only store strings, and storing objects requires manual serialization and de-serialization.",
              "Vue's reactivity system automatically updates the local storage when bound to a Vue data property."
            ],
            answer: [
              0,
              2
            ],
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-an-q28",
            type: "multi",
            marks: 2,
            prompt: "![Figure](/pyq/mad-2-end-term-dec-2024-an/q28-1.webp#575x88)",
            options: [
              "The class, namely “classB” will always be applied to the div element.",
              "The classes, namely “classA” and “classB” will always be applied to the div element.",
              "The class, namely “classA” will only be applied to the div element, if the variable “isClassA” evaluates to true.",
              "The class, namely “classB” will only be applied to the div element, if no variable with name “isClassA” exists."
            ],
            answer: [
              0,
              2
            ],
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-an-q29",
            type: "multi",
            marks: 3,
            prompt: "Which of the following statements correctly describe the use of asynchronous messaging systems and frameworks?",
            options: [
              "Celery allows web servers to offload long-running tasks to worker processes, decoupling task execution from user requests.",
              "Push queues are used for real-time operations, while pull queues are better suited for batch processing.",
              "Server-Sent Events (SSE) provide a persistent connection between server and client, enabling bi-directional communication.",
              "Redis is a high-performance in-memory database that supports Pub/Sub."
            ],
            answer: [
              0,
              1,
              3
            ],
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-an-q30",
            type: "multi",
            marks: 3,
            prompt: "Which of the following statement(s) is/are true about Webhooks?",
            options: [
              "A Webhook is a method for a server to send real-time data to another server as an HTTP POST request.",
              "Webhooks are typically used for sending periodic updates at regular intervals.",
              "A client must continuously poll a Webhook URL to receive data.",
              "Webhooks are usually used in event-driven architectures, where an event triggers an HTTP POST request to a specified endpoint."
            ],
            answer: [
              0,
              3
            ],
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-an-q31",
            type: "multi",
            marks: 3,
            prompt: "Which of the following statement(s) is/are true regarding Server-Sent Events (SSE) and WebSockets?",
            options: [
              "SSE is a two-way communication protocol, while WebSockets are\nunidirectional.",
              "WebSockets are more suited for scenarios requiring bi-directional communication.",
              "SSE is based on HTTP and can only be used for server-to-client communication, while WebSockets are based on TCP and support both directions.",
              "SSE is an extension of WebSockets, providing enhanced support for server-to- client communication."
            ],
            answer: [
              1,
              2
            ],
            explanation: ""
          },
          {
            id: "mad-2-end-term-dec-2024-an-q32",
            type: "multi",
            marks: 3,
            prompt: "Which of the following is/are typical use case(s) for Celery tasks?",
            options: [
              "Processing time-consuming or resource-intensive background jobs asynchronously.",
              "Directly handling incoming HTTP requests in web servers.",
              "Scheduling periodic tasks like sending emails or cleaning up the database.",
              "Serving real-time notifications over WebSockets."
            ],
            answer: [
              0,
              2
            ],
            explanation: ""
          }
        ]
      }
    ]
  }
];
