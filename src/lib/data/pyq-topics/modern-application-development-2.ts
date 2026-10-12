import type { PyqTopicTags } from "../../types";

// 160 past-paper questions in 12 topics, 39 repeated question types.
// Tagged once from every question (text and figures); question ids match the paper data.

export const modernApplicationDevelopment2Topics: PyqTopicTags = {
  "topics": [
    {
      "slug": "js-functions-closures-this",
      "title": "JS functions, closures & this",
      "summary": "Closures, bind, arrow vs regular functions and what 'this' points to in a call",
      "ids": [
        "mad-2-end-term-dec-2024-an-q15",
        "mad-2-end-term-dec-2024-fn-q1",
        "mad-2-end-term-dec-2024-fn-q17",
        "mad-2-end-term-dec-2024-fn-q18",
        "mad-2-end-term-dec-2024-fn-q20",
        "mad-2-end-term-dec-2024-fn-q29",
        "mad-2-end-term-aug-2025-an-q23",
        "mad-2-end-term-aug-2025-an-q27",
        "mad-2-quiz-1-oct-2025-an-q5",
        "mad-2-quiz-1-oct-2025-an-q12",
        "mad-2-quiz-1-oct-2025-an-q14"
      ]
    },
    {
      "slug": "js-objects-arrays-classes",
      "title": "JS objects, arrays, classes & DOM",
      "summary": "Prototypes, classes, destructuring, array methods, typeof, let/var loops and DOM events",
      "ids": [
        "mad-2-end-term-dec-2024-an-q9",
        "mad-2-end-term-dec-2024-fn-q3",
        "mad-2-end-term-dec-2024-fn-q15",
        "mad-2-end-term-dec-2024-fn-q23",
        "mad-2-end-term-dec-2024-fn-q28",
        "mad-2-end-term-dec-2024-fn-q30",
        "mad-2-end-term-aug-2025-an-q12",
        "mad-2-end-term-aug-2025-fn-q14",
        "mad-2-end-term-aug-2025-fn-q16",
        "mad-2-end-term-aug-2025-fn-q24",
        "mad-2-quiz-1-oct-2025-an-q3",
        "mad-2-quiz-1-oct-2025-an-q4",
        "mad-2-quiz-1-oct-2025-an-q8",
        "mad-2-quiz-1-oct-2025-an-q9",
        "mad-2-quiz-1-oct-2025-an-q11",
        "mad-2-quiz-1-oct-2025-an-q13"
      ]
    },
    {
      "slug": "js-async-promises",
      "title": "Promises, async/await & event loop",
      "summary": "Trace promise chains, async/await order, setTimeout vs microtasks and Promise.all",
      "ids": [
        "mad-2-end-term-dec-2024-an-q4",
        "mad-2-end-term-dec-2024-an-q5",
        "mad-2-end-term-dec-2024-an-q8",
        "mad-2-end-term-dec-2024-an-q14",
        "mad-2-end-term-dec-2024-fn-q2",
        "mad-2-end-term-dec-2024-fn-q12",
        "mad-2-end-term-dec-2024-fn-q13",
        "mad-2-end-term-dec-2024-fn-q16",
        "mad-2-quiz-2-aug-2025-an-q5",
        "mad-2-quiz-2-aug-2025-an-q8",
        "mad-2-end-term-aug-2025-an-q11",
        "mad-2-end-term-aug-2025-an-q13",
        "mad-2-end-term-aug-2025-an-q31",
        "mad-2-end-term-aug-2025-an-q32",
        "mad-2-end-term-aug-2025-fn-q11",
        "mad-2-end-term-aug-2025-fn-q13",
        "mad-2-end-term-aug-2025-fn-q25",
        "mad-2-end-term-aug-2025-fn-q26",
        "mad-2-end-term-aug-2025-fn-q29"
      ]
    },
    {
      "slug": "vue-directives-templates",
      "title": "Vue directives & templates",
      "summary": "v-if/v-show, v-bind class binding, v-model, v-for and template syntax",
      "ids": [
        "mad-2-end-term-dec-2024-an-q7",
        "mad-2-end-term-dec-2024-an-q28",
        "mad-2-end-term-dec-2024-fn-q5",
        "mad-2-end-term-dec-2024-fn-q31",
        "mad-2-end-term-aug-2025-an-q19",
        "mad-2-end-term-aug-2025-an-q24",
        "mad-2-end-term-aug-2025-fn-q23",
        "mad-2-quiz-1-oct-2025-an-q1",
        "mad-2-quiz-1-oct-2025-an-q2",
        "mad-2-quiz-1-oct-2025-an-q6",
        "mad-2-quiz-1-oct-2025-an-q15",
        "mad-2-quiz-1-oct-2025-an-q16"
      ]
    },
    {
      "slug": "vue-reactivity-computed-watch",
      "title": "Vue reactivity, computed & watchers",
      "summary": "How data changes update the DOM: computed props, setters, deep watchers, component state",
      "ids": [
        "mad-2-end-term-dec-2024-an-q19",
        "mad-2-end-term-dec-2024-an-q20",
        "mad-2-end-term-dec-2024-an-q21",
        "mad-2-end-term-dec-2024-fn-q4",
        "mad-2-end-term-dec-2024-fn-q26",
        "mad-2-end-term-aug-2025-an-q2",
        "mad-2-end-term-aug-2025-an-q14",
        "mad-2-end-term-aug-2025-an-q20",
        "mad-2-end-term-aug-2025-an-q21",
        "mad-2-end-term-aug-2025-an-q22",
        "mad-2-end-term-aug-2025-fn-q2",
        "mad-2-end-term-aug-2025-fn-q17",
        "mad-2-end-term-aug-2025-fn-q18",
        "mad-2-end-term-aug-2025-fn-q19",
        "mad-2-quiz-1-oct-2025-an-q7",
        "mad-2-quiz-1-oct-2025-an-q10"
      ]
    },
    {
      "slug": "vue-components-lifecycle",
      "title": "Vue components, slots & lifecycle",
      "summary": "Slots and scoped slots, $emit events, .vue files and lifecycle hooks like beforeCreate",
      "ids": [
        "mad-2-end-term-dec-2024-an-q3",
        "mad-2-end-term-dec-2024-an-q24",
        "mad-2-end-term-dec-2024-fn-q11",
        "mad-2-end-term-dec-2024-fn-q19",
        "mad-2-end-term-dec-2024-fn-q25",
        "mad-2-quiz-2-aug-2025-an-q2",
        "mad-2-quiz-2-aug-2025-an-q7",
        "mad-2-quiz-2-aug-2025-an-q9",
        "mad-2-quiz-2-aug-2025-an-q13",
        "mad-2-end-term-aug-2025-an-q28",
        "mad-2-end-term-aug-2025-fn-q12",
        "mad-2-end-term-aug-2025-fn-q28"
      ]
    },
    {
      "slug": "vuex-state",
      "title": "Vuex state management",
      "summary": "State, getters, mutations vs actions, async actions and dispatch behaviour",
      "ids": [
        "mad-2-end-term-dec-2024-an-q18",
        "mad-2-end-term-dec-2024-fn-q9",
        "mad-2-end-term-dec-2024-fn-q24",
        "mad-2-end-term-dec-2024-fn-q27",
        "mad-2-quiz-2-aug-2025-an-q10",
        "mad-2-quiz-2-aug-2025-an-q14",
        "mad-2-end-term-aug-2025-an-q18",
        "mad-2-end-term-aug-2025-fn-q22"
      ]
    },
    {
      "slug": "vue-router",
      "title": "Vue Router",
      "summary": "Route matching, dynamic params, nested routes, named routes and programmatic navigation",
      "ids": [
        "mad-2-end-term-dec-2024-an-q10",
        "mad-2-end-term-dec-2024-an-q25",
        "mad-2-end-term-dec-2024-fn-q32",
        "mad-2-quiz-2-aug-2025-an-q6",
        "mad-2-quiz-2-aug-2025-an-q11",
        "mad-2-quiz-2-aug-2025-an-q12",
        "mad-2-quiz-2-aug-2025-an-q15",
        "mad-2-quiz-2-aug-2025-an-q16",
        "mad-2-end-term-aug-2025-an-q25",
        "mad-2-end-term-aug-2025-an-q29",
        "mad-2-end-term-aug-2025-an-q30",
        "mad-2-end-term-aug-2025-fn-q15"
      ]
    },
    {
      "slug": "web-storage-fetch-pwa",
      "title": "Web storage, fetch & PWAs",
      "summary": "localStorage vs sessionStorage, fetch request headers, SPAs and PWAs",
      "ids": [
        "mad-2-end-term-dec-2024-an-q11",
        "mad-2-end-term-dec-2024-an-q13",
        "mad-2-end-term-dec-2024-an-q17",
        "mad-2-end-term-dec-2024-an-q27",
        "mad-2-end-term-dec-2024-fn-q7",
        "mad-2-end-term-dec-2024-fn-q21",
        "mad-2-quiz-2-aug-2025-an-q1",
        "mad-2-quiz-2-aug-2025-an-q3",
        "mad-2-quiz-2-aug-2025-an-q4",
        "mad-2-end-term-aug-2025-an-q15",
        "mad-2-end-term-aug-2025-fn-q30"
      ]
    },
    {
      "slug": "web-security",
      "title": "Web security, auth & CORS",
      "summary": "Cookies, CSP, CORS, supply chain attacks, Flask-Security auth, roles and password hashing",
      "ids": [
        "mad-2-end-term-dec-2024-an-q1",
        "mad-2-end-term-dec-2024-an-q6",
        "mad-2-end-term-dec-2024-fn-q6",
        "mad-2-end-term-dec-2024-fn-q10",
        "mad-2-end-term-dec-2024-fn-q22",
        "mad-2-end-term-aug-2025-an-q4",
        "mad-2-end-term-aug-2025-an-q5",
        "mad-2-end-term-aug-2025-an-q26",
        "mad-2-end-term-aug-2025-fn-q4",
        "mad-2-end-term-aug-2025-fn-q5",
        "mad-2-end-term-aug-2025-fn-q31",
        "mad-2-end-term-aug-2025-fn-q32"
      ]
    },
    {
      "slug": "async-tasks-messaging",
      "title": "Celery, queues, webhooks & SSE",
      "summary": "Background jobs with Celery, message brokers, webhooks, long polling, SSE and WebSockets",
      "ids": [
        "mad-2-end-term-dec-2024-an-q2",
        "mad-2-end-term-dec-2024-an-q12",
        "mad-2-end-term-dec-2024-an-q16",
        "mad-2-end-term-dec-2024-an-q23",
        "mad-2-end-term-dec-2024-an-q29",
        "mad-2-end-term-dec-2024-an-q30",
        "mad-2-end-term-dec-2024-an-q31",
        "mad-2-end-term-dec-2024-an-q32",
        "mad-2-end-term-dec-2024-fn-q8",
        "mad-2-end-term-aug-2025-an-q1",
        "mad-2-end-term-aug-2025-an-q7",
        "mad-2-end-term-aug-2025-an-q8",
        "mad-2-end-term-aug-2025-an-q9",
        "mad-2-end-term-aug-2025-an-q17",
        "mad-2-end-term-aug-2025-fn-q1",
        "mad-2-end-term-aug-2025-fn-q7",
        "mad-2-end-term-aug-2025-fn-q8",
        "mad-2-end-term-aug-2025-fn-q9",
        "mad-2-end-term-aug-2025-fn-q21"
      ]
    },
    {
      "slug": "caching-performance",
      "title": "Caching & page performance",
      "summary": "Flask-Caching cached/memoize, cache timeouts, Lighthouse metrics and page load factors",
      "ids": [
        "mad-2-end-term-dec-2024-an-q22",
        "mad-2-end-term-dec-2024-an-q26",
        "mad-2-end-term-dec-2024-fn-q14",
        "mad-2-end-term-aug-2025-an-q3",
        "mad-2-end-term-aug-2025-an-q6",
        "mad-2-end-term-aug-2025-an-q10",
        "mad-2-end-term-aug-2025-an-q16",
        "mad-2-end-term-aug-2025-fn-q3",
        "mad-2-end-term-aug-2025-fn-q6",
        "mad-2-end-term-aug-2025-fn-q10",
        "mad-2-end-term-aug-2025-fn-q20",
        "mad-2-end-term-aug-2025-fn-q27"
      ]
    }
  ],
  "repeats": [
    {
      "title": "Choose secure and samesite values so a cookie is HTTPS-only and same-site",
      "ids": [
        "mad-2-end-term-dec-2024-an-q1",
        "mad-2-end-term-dec-2024-fn-q6"
      ]
    },
    {
      "title": "Pick the true statement about long polling",
      "ids": [
        "mad-2-end-term-dec-2024-an-q2",
        "mad-2-end-term-dec-2024-fn-q8"
      ]
    },
    {
      "title": "Choose the correct named/scoped slot usage for a child component",
      "ids": [
        "mad-2-end-term-dec-2024-an-q3",
        "mad-2-end-term-dec-2024-fn-q11"
      ]
    },
    {
      "title": "Trace a promise chain with throw and catch to find the logged output",
      "ids": [
        "mad-2-end-term-dec-2024-an-q4",
        "mad-2-end-term-dec-2024-fn-q12",
        "mad-2-end-term-aug-2025-an-q13",
        "mad-2-end-term-aug-2025-fn-q26"
      ]
    },
    {
      "title": "Order the console output of an async function that uses await",
      "ids": [
        "mad-2-end-term-dec-2024-an-q5",
        "mad-2-end-term-dec-2024-fn-q13",
        "mad-2-end-term-aug-2025-an-q11",
        "mad-2-end-term-aug-2025-fn-q11",
        "mad-2-end-term-aug-2025-fn-q25"
      ]
    },
    {
      "title": "Order output of setTimeout(0) vs Promise.then callbacks",
      "ids": [
        "mad-2-end-term-dec-2024-an-q8",
        "mad-2-end-term-dec-2024-fn-q2"
      ]
    },
    {
      "title": "Output after deleting a prototype method from an object",
      "ids": [
        "mad-2-end-term-dec-2024-an-q9",
        "mad-2-end-term-dec-2024-fn-q3"
      ]
    },
    {
      "title": "Find the false statement about async and await",
      "ids": [
        "mad-2-end-term-dec-2024-an-q14",
        "mad-2-end-term-dec-2024-fn-q16"
      ]
    },
    {
      "title": "Output when an object method is called detached from its object (this lost)",
      "ids": [
        "mad-2-end-term-dec-2024-an-q15",
        "mad-2-end-term-dec-2024-fn-q17"
      ]
    },
    {
      "title": "Effect of CSP default-src 'self' on an external script",
      "ids": [
        "mad-2-end-term-dec-2024-an-q6",
        "mad-2-end-term-dec-2024-fn-q22"
      ]
    },
    {
      "title": "What v-if/v-else shows after the condition changes",
      "ids": [
        "mad-2-end-term-dec-2024-an-q7",
        "mad-2-end-term-dec-2024-fn-q5"
      ]
    },
    {
      "title": "Find the false statement about caching headers and web storage",
      "ids": [
        "mad-2-end-term-dec-2024-an-q13",
        "mad-2-end-term-dec-2024-fn-q21"
      ]
    },
    {
      "title": "Final localStorage cart output after page refreshes",
      "ids": [
        "mad-2-end-term-dec-2024-an-q17",
        "mad-2-end-term-dec-2024-fn-q7"
      ]
    },
    {
      "title": "Behaviour when dispatching an async Vuex action that commits later",
      "ids": [
        "mad-2-end-term-dec-2024-an-q18",
        "mad-2-end-term-dec-2024-fn-q24",
        "mad-2-quiz-2-aug-2025-an-q10"
      ]
    },
    {
      "title": "Does a deep watcher fire when a nested property changes",
      "ids": [
        "mad-2-end-term-dec-2024-an-q19",
        "mad-2-end-term-dec-2024-fn-q4"
      ]
    },
    {
      "title": "Decide which classes v-bind:class applies to an element",
      "ids": [
        "mad-2-end-term-dec-2024-an-q28",
        "mad-2-end-term-aug-2025-an-q19",
        "mad-2-end-term-aug-2025-fn-q23"
      ]
    },
    {
      "title": "Access a dynamic route param (:id) inside a component",
      "ids": [
        "mad-2-end-term-dec-2024-an-q25",
        "mad-2-end-term-dec-2024-fn-q32"
      ]
    },
    {
      "title": "Find which component renders for a URL given the routes list",
      "ids": [
        "mad-2-end-term-dec-2024-an-q10",
        "mad-2-quiz-2-aug-2025-an-q6",
        "mad-2-end-term-aug-2025-an-q25"
      ]
    },
    {
      "title": "Trace data changes in beforeCreate and created hooks",
      "ids": [
        "mad-2-end-term-dec-2024-an-q24",
        "mad-2-quiz-2-aug-2025-an-q9",
        "mad-2-end-term-aug-2025-fn-q12",
        "mad-2-end-term-aug-2025-fn-q28"
      ]
    },
    {
      "title": "Pick true statements about Celery background tasks",
      "ids": [
        "mad-2-end-term-dec-2024-an-q32",
        "mad-2-end-term-aug-2025-an-q17",
        "mad-2-end-term-aug-2025-fn-q21"
      ]
    },
    {
      "title": "Pick true statements about webhooks",
      "ids": [
        "mad-2-end-term-dec-2024-an-q30",
        "mad-2-end-term-aug-2025-an-q8",
        "mad-2-end-term-aug-2025-fn-q8"
      ]
    },
    {
      "title": "Pick the Lighthouse performance metrics",
      "ids": [
        "mad-2-end-term-dec-2024-an-q26",
        "mad-2-end-term-aug-2025-an-q16",
        "mad-2-end-term-aug-2025-fn-q20"
      ]
    },
    {
      "title": "Predict cache hits and response timing for a Flask-Caching decorated route",
      "ids": [
        "mad-2-end-term-dec-2024-an-q22",
        "mad-2-end-term-aug-2025-fn-q27"
      ]
    },
    {
      "title": "What happens when a queue consumer is slower than the producer",
      "ids": [
        "mad-2-end-term-aug-2025-an-q1",
        "mad-2-end-term-aug-2025-fn-q1"
      ]
    },
    {
      "title": "Meaning of reactivity in Vue.js",
      "ids": [
        "mad-2-end-term-aug-2025-an-q2",
        "mad-2-end-term-aug-2025-fn-q2"
      ]
    },
    {
      "title": "Main benefit of Flask @cache.cached()",
      "ids": [
        "mad-2-end-term-aug-2025-an-q3",
        "mad-2-end-term-aug-2025-fn-q3"
      ]
    },
    {
      "title": "Primary purpose of CORS",
      "ids": [
        "mad-2-end-term-aug-2025-an-q4",
        "mad-2-end-term-aug-2025-fn-q4"
      ]
    },
    {
      "title": "Practices that protect against supply chain attacks",
      "ids": [
        "mad-2-end-term-aug-2025-an-q5",
        "mad-2-end-term-aug-2025-fn-q5"
      ]
    },
    {
      "title": "Factors that affect web page load speed",
      "ids": [
        "mad-2-end-term-aug-2025-an-q6",
        "mad-2-end-term-aug-2025-fn-q6"
      ]
    },
    {
      "title": "Benefits of using a message broker",
      "ids": [
        "mad-2-end-term-aug-2025-an-q7",
        "mad-2-end-term-aug-2025-fn-q7"
      ]
    },
    {
      "title": "Are webhooks right for notifying third-party services on an order",
      "ids": [
        "mad-2-end-term-aug-2025-an-q9",
        "mad-2-end-term-aug-2025-fn-q9"
      ]
    },
    {
      "title": "Main advantage of caching in a Flask app",
      "ids": [
        "mad-2-end-term-aug-2025-an-q10",
        "mad-2-end-term-aug-2025-fn-q10"
      ]
    },
    {
      "title": "Output of object destructuring with rest and renamed keys",
      "ids": [
        "mad-2-end-term-aug-2025-an-q12",
        "mad-2-end-term-aug-2025-fn-q24"
      ]
    },
    {
      "title": "True statements about Vuex mutations vs actions",
      "ids": [
        "mad-2-end-term-aug-2025-an-q18",
        "mad-2-end-term-aug-2025-fn-q22"
      ]
    },
    {
      "title": "Trace output of a closure that captures an outer variable",
      "ids": [
        "mad-2-end-term-dec-2024-fn-q20",
        "mad-2-end-term-aug-2025-an-q27",
        "mad-2-quiz-1-oct-2025-an-q5"
      ]
    },
    {
      "title": "Trace this inside arrow vs regular methods of nested objects",
      "ids": [
        "mad-2-end-term-dec-2024-fn-q29",
        "mad-2-end-term-aug-2025-an-q23",
        "mad-2-quiz-1-oct-2025-an-q12"
      ]
    },
    {
      "title": "Trace class inheritance with super and overridden methods",
      "ids": [
        "mad-2-end-term-aug-2025-fn-q16",
        "mad-2-quiz-1-oct-2025-an-q13"
      ]
    },
    {
      "title": "Work out what named and scoped slots render in a parent component",
      "ids": [
        "mad-2-quiz-2-aug-2025-an-q13",
        "mad-2-end-term-aug-2025-an-q28"
      ]
    },
    {
      "title": "Trace localStorage and sessionStorage values after set, get and remove",
      "ids": [
        "mad-2-end-term-aug-2025-an-q15",
        "mad-2-end-term-aug-2025-fn-q30"
      ]
    }
  ]
};
