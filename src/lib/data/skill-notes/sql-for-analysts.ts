import type { SkillNotes } from "../../types";

// Text lessons for "SQL for Analysts". Queries use standard SQL that runs on PostgreSQL;
// differences in MySQL or SQL Server are called out where they bite.

export const sqlNotes: SkillNotes = {
  skill: "sql-for-analysts",
  quickLabel: "Queries",
  lessons: [
    {
      lecture: "Tables, rows and keys",
      blocks: [
        {
          kind: "points",
          items: [
            "A relational database stores data in **tables**. Each **row** is one thing (an order, a customer); each **column** is one attribute of it.",
            "A **primary key** uniquely identifies each row (`order_id`). It can't be null or repeat.",
            "A **foreign key** is a column that points at another table's primary key (`orders.customer_id → customers.customer_id`). That link is what joins use.",
            "Splitting data into linked tables (**normalisation**) means a customer's city is stored once, not copied into every order. Fix it in one place and every query sees it.",
          ],
        },
        {
          kind: "table",
          title: "The practice schema used in every lesson",
          head: ["Table", "Columns", "Grain (one row is…)"],
          rows: [
            ["`customers`", "customer_id, name, city, signup_date, segment", "one customer"],
            ["`orders`", "order_id, customer_id, order_date, status, amount", "one order"],
            ["`order_items`", "order_id, product_id, qty, unit_price", "one product line in an order"],
            ["`products`", "product_id, name, category, cost", "one product"],
          ],
        },
        {
          kind: "tip",
          text: "Before writing any query, say the table's **grain** out loud: \"one row per order\". Most wrong answers come from summing at the wrong grain.",
        },
        {
          kind: "traps",
          items: ["A \"customer name\" is not a key: two customers can share one. Always join on IDs."],
        },
      ],
    },
    {
      lecture: "Your first SELECT",
      blocks: [
        {
          kind: "code",
          code: `SELECT name, city
FROM customers;

SELECT *                     -- every column: fine for exploring, not for reports
FROM orders
LIMIT 10;

SELECT order_id,
       amount,
       amount * 0.18 AS gst,             -- calculated column with an alias
       ROUND(amount * 1.18, 2) AS total
FROM orders;

SELECT DISTINCT city FROM customers;     -- unique values`,
        },
        {
          kind: "table",
          title: "Logical order of a query (not the order you write it)",
          head: ["Step", "Clause", "Does"],
          rows: [
            ["1", "`FROM` / `JOIN`", "Pick and combine tables"],
            ["2", "`WHERE`", "Filter rows"],
            ["3", "`GROUP BY`", "Form groups"],
            ["4", "`HAVING`", "Filter groups"],
            ["5", "`SELECT`", "Compute columns, apply aliases"],
            ["6", "`ORDER BY`", "Sort"],
            ["7", "`LIMIT`", "Cut the output"],
          ],
        },
        {
          kind: "traps",
          items: [
            "Because `SELECT` runs after `WHERE`, you can't use a column alias in `WHERE`. Repeat the expression or use a CTE.",
            "String literals use single quotes: `'Pune'`. Double quotes mean an identifier (column name) in PostgreSQL.",
          ],
        },
      ],
    },
    {
      lecture: "WHERE, ORDER BY, LIMIT",
      blocks: [
        {
          kind: "code",
          code: `SELECT order_id, order_date, amount
FROM orders
WHERE status = 'delivered'
  AND amount >= 1000
  AND order_date >= '2026-01-01' AND order_date < '2026-04-01'   -- Q1, half-open range
ORDER BY amount DESC, order_date
LIMIT 20;

WHERE city IN ('Mumbai', 'Delhi', 'Bengaluru')
WHERE name LIKE 'Ra%'          -- starts with Ra (ILIKE = case-insensitive in PostgreSQL)
WHERE amount BETWEEN 500 AND 1000   -- inclusive at both ends
WHERE coupon_code IS NULL`,
        },
        {
          kind: "points",
          items: [
            "`AND` binds tighter than `OR`. Write `WHERE (city = 'Pune' OR city = 'Nagpur') AND amount > 500` with brackets, or use `IN`.",
            "For date ranges, use `>= start AND < next_start`. It works for timestamps too, where `BETWEEN '2026-01-01' AND '2026-03-31'` silently drops orders placed after midnight on the 31st.",
          ],
        },
        {
          kind: "traps",
          items: [
            "`WHERE coupon_code = NULL` never matches anything. NULL isn't equal to anything, even NULL. Use `IS NULL`.",
            "`WHERE city <> 'Pune'` also drops rows where city is NULL. Add `OR city IS NULL` if those should stay.",
            "`LIMIT` is `TOP 10` in SQL Server and `FETCH FIRST 10 ROWS ONLY` in standard SQL.",
          ],
        },
      ],
    },
    {
      lecture: "GROUP BY and HAVING",
      blocks: [
        {
          kind: "code",
          code: `SELECT c.city,
       COUNT(*)                    AS orders,
       COUNT(DISTINCT o.customer_id) AS customers,
       SUM(o.amount)               AS revenue,
       ROUND(AVG(o.amount), 2)     AS avg_order
FROM orders o
JOIN customers c ON c.customer_id = o.customer_id
WHERE o.status = 'delivered'
GROUP BY c.city
HAVING COUNT(*) >= 100              -- filter groups, after aggregation
ORDER BY revenue DESC;

-- Conditional aggregation: several metrics in one pass
SELECT DATE_TRUNC('month', order_date) AS month,
       COUNT(*) FILTER (WHERE status = 'returned') AS returns,
       SUM(CASE WHEN status = 'delivered' THEN amount ELSE 0 END) AS delivered_revenue
FROM orders
GROUP BY 1
ORDER BY 1;`,
        },
        {
          kind: "table",
          head: ["Function", "Counts / computes", "NULLs"],
          rows: [
            ["`COUNT(*)`", "rows", "included"],
            ["`COUNT(col)`", "non-null values", "skipped"],
            ["`COUNT(DISTINCT col)`", "unique non-null values", "skipped"],
            ["`SUM`, `AVG`, `MIN`, `MAX`", "over non-null values", "skipped"],
          ],
        },
        {
          kind: "points",
          items: [
            "Every column in `SELECT` must be either in `GROUP BY` or inside an aggregate. The error \"must appear in the GROUP BY clause\" means you broke this rule.",
            "`WHERE` filters rows before grouping; `HAVING` filters groups after. Filter as early as you can: it's faster and clearer.",
          ],
        },
        {
          kind: "traps",
          items: ["`AVG(col)` ignores NULLs, so it's the average of known values. If NULL means zero, use `AVG(COALESCE(col, 0))`."],
        },
      ],
    },
    {
      lecture: "Aggregation quiz",
      blocks: [
        {
          kind: "example",
          title: "Question 1",
          q: "Monthly count of new customers in 2026, from `customers.signup_date`.",
          steps: [
            "`SELECT DATE_TRUNC('month', signup_date) AS month, COUNT(*) AS new_customers`",
            "`FROM customers WHERE signup_date >= '2026-01-01' AND signup_date < '2027-01-01'`",
            "`GROUP BY 1 ORDER BY 1;`",
          ],
          answer: "Group by the truncated month",
        },
        {
          kind: "example",
          title: "Question 2",
          q: "Which product categories have more than 20 products sold and an average selling price (`order_items.unit_price`) above ₹1,000?",
          steps: [
            "Selling price lives in `order_items`, the category in `products`, so join them.",
            "After the join the grain is one row per order line, so count products with `COUNT(DISTINCT p.product_id)`, not `COUNT(*)`.",
            "`SELECT p.category, AVG(oi.unit_price) AS avg_price, COUNT(DISTINCT p.product_id) AS products FROM order_items oi JOIN products p USING (product_id) GROUP BY p.category HAVING AVG(oi.unit_price) > 1000 AND COUNT(DISTINCT p.product_id) > 20;`",
          ],
          answer: "Both conditions go in HAVING; count DISTINCT products after the join",
        },
        {
          kind: "example",
          title: "Question 3",
          q: "`COUNT(*)` returns 1,000 and `COUNT(email)` returns 940 on `customers`. What does that tell you?",
          steps: ["`COUNT(*)` counts every row; `COUNT(email)` skips NULLs."],
          answer: "60 customers have no email",
        },
      ],
    },
    {
      lecture: "INNER vs LEFT joins",
      blocks: [
        {
          kind: "code",
          code: `-- INNER: only customers who have orders
SELECT c.name, o.order_id, o.amount
FROM customers c
JOIN orders o ON o.customer_id = c.customer_id;

-- LEFT: every customer, with NULLs where there's no order
SELECT c.name, COUNT(o.order_id) AS orders, COALESCE(SUM(o.amount), 0) AS spend
FROM customers c
LEFT JOIN orders o ON o.customer_id = c.customer_id
GROUP BY c.name;`,
        },
        {
          kind: "table",
          head: ["Join", "Rows kept", "Typical question"],
          rows: [
            ["`INNER JOIN`", "Matches only", "\"Revenue by product category\""],
            ["`LEFT JOIN`", "All left rows + matches", "\"Every customer and their order count, including zero\""],
            ["`FULL OUTER JOIN`", "Everything from both", "Reconciling two systems"],
            ["`CROSS JOIN`", "Every combination", "Building a calendar × product grid"],
          ],
        },
        {
          kind: "traps",
          items: [
            "Putting a filter on the right table in `WHERE` turns a LEFT JOIN into an INNER JOIN: `WHERE o.status = 'delivered'` removes customers with no orders. Move it into the `ON`: `LEFT JOIN orders o ON o.customer_id = c.customer_id AND o.status = 'delivered'`.",
            "Use `COUNT(o.order_id)`, not `COUNT(*)`, after a LEFT JOIN. `COUNT(*)` counts the NULL row as 1 for customers with no orders.",
            "Joining orders to order_items changes the grain to one row per item. `SUM(o.amount)` after that join double-counts.",
          ],
        },
      ],
    },
    {
      lecture: "Self joins and anti-joins",
      blocks: [
        {
          kind: "code",
          title: "Anti-join: rows with no match",
          code: `-- Customers who never ordered
SELECT c.*
FROM customers c
LEFT JOIN orders o ON o.customer_id = c.customer_id
WHERE o.order_id IS NULL;

-- Same thing with NOT EXISTS (often the clearest)
SELECT c.*
FROM customers c
WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id);`,
        },
        {
          kind: "code",
          title: "Self join: a table joined to itself",
          code: `-- Employees and their managers (manager_id points into the same table)
SELECT e.name AS employee, m.name AS manager
FROM employees e
LEFT JOIN employees m ON m.employee_id = e.manager_id;

-- Customers in the same city (pairs, each once)
SELECT a.name, b.name, a.city
FROM customers a
JOIN customers b ON a.city = b.city AND a.customer_id < b.customer_id;`,
        },
        {
          kind: "traps",
          items: [
            "`NOT IN (SELECT customer_id FROM orders)` returns **no rows at all** if that subquery contains a single NULL. Prefer `NOT EXISTS`.",
            "In a self join, `a.id < b.id` avoids pairing a row with itself and listing each pair twice.",
          ],
        },
      ],
    },
    {
      lecture: "Join puzzles",
      blocks: [
        {
          kind: "example",
          title: "Puzzle 1",
          q: "Products that have never been sold.",
          steps: ["Anti-join `products` to `order_items` on `product_id`."],
          answer: "`SELECT p.* FROM products p WHERE NOT EXISTS (SELECT 1 FROM order_items oi WHERE oi.product_id = p.product_id);`",
        },
        {
          kind: "example",
          title: "Puzzle 2",
          q: "Revenue per category from `order_items` (qty × unit_price) for delivered orders only.",
          steps: [
            "`SELECT p.category, SUM(oi.qty * oi.unit_price) AS revenue`",
            "`FROM order_items oi JOIN orders o USING (order_id) JOIN products p USING (product_id)`",
            "`WHERE o.status = 'delivered' GROUP BY p.category ORDER BY revenue DESC;`",
          ],
          answer: "Join three tables; compute revenue at the item grain",
        },
        {
          kind: "example",
          title: "Puzzle 3",
          q: "A LEFT JOIN from 1,000 customers to orders returns 3,400 rows. Is something wrong?",
          steps: ["Each customer appears once per order; customers with no orders appear once with NULLs.", "3,400 rows just means customers average more than one order."],
          answer: "No: the grain became one row per customer-order",
        },
        {
          kind: "example",
          title: "Puzzle 4",
          q: "Customers who ordered in January 2026 **and** in February 2026.",
          steps: [
            "Find the set for each month and intersect.",
            "`SELECT customer_id FROM orders WHERE order_date >= '2026-01-01' AND order_date < '2026-02-01' INTERSECT SELECT customer_id FROM orders WHERE order_date >= '2026-02-01' AND order_date < '2026-03-01';`",
          ],
          answer: "`INTERSECT` (or two EXISTS conditions)",
        },
      ],
    },
    {
      lecture: "Subqueries and CTEs",
      blocks: [
        {
          kind: "code",
          code: `-- Subquery in WHERE: orders above the overall average
SELECT order_id, amount
FROM orders
WHERE amount > (SELECT AVG(amount) FROM orders);

-- CTE: name each step, read top to bottom
WITH customer_spend AS (
    SELECT customer_id, SUM(amount) AS spend, COUNT(*) AS orders
    FROM orders
    WHERE status = 'delivered'
    GROUP BY customer_id
),
segmented AS (
    SELECT *,
           CASE WHEN spend >= 50000 THEN 'high'
                WHEN spend >= 10000 THEN 'mid'
                ELSE 'low' END AS tier
    FROM customer_spend
)
SELECT tier, COUNT(*) AS customers, SUM(spend) AS revenue
FROM segmented
GROUP BY tier
ORDER BY revenue DESC;`,
        },
        {
          kind: "points",
          items: [
            "A **CTE** (`WITH name AS (...)`) is a named temporary result. It makes a 40-line query readable as three simple steps.",
            "Use a CTE whenever you'd otherwise nest subqueries more than one level deep, or need the same intermediate result twice.",
            "A **correlated subquery** refers to the outer row (`WHERE o.customer_id = c.customer_id`). It's clear for EXISTS checks; for heavy aggregation, a join to a CTE is usually faster.",
          ],
        },
        {
          kind: "tip",
          text: "Build CTE queries one step at a time: run the first CTE alone with `SELECT * FROM step1 LIMIT 10`, check it, then add the next.",
        },
      ],
    },
    {
      lecture: "Window functions",
      blocks: [
        {
          kind: "points",
          items: [
            "A **window function** computes across related rows **without collapsing them**. GROUP BY gives one row per group; a window keeps every row and adds a column.",
            "Syntax: `FUNCTION() OVER (PARTITION BY ... ORDER BY ...)`. PARTITION BY is the group; ORDER BY sets the order inside it.",
          ],
        },
        {
          kind: "code",
          code: `SELECT customer_id, order_id, order_date, amount,
       ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY order_date)        AS order_seq,
       SUM(amount)  OVER (PARTITION BY customer_id ORDER BY order_date)        AS running_spend,
       amount - LAG(amount) OVER (PARTITION BY customer_id ORDER BY order_date) AS change_vs_prev,
       amount / SUM(amount) OVER (PARTITION BY customer_id)                    AS share_of_customer
FROM orders;

-- Top 3 products per category
WITH ranked AS (
    SELECT p.category, p.name, SUM(oi.qty * oi.unit_price) AS revenue,
           DENSE_RANK() OVER (PARTITION BY p.category ORDER BY SUM(oi.qty * oi.unit_price) DESC) AS rnk
    FROM order_items oi JOIN products p USING (product_id)
    GROUP BY p.category, p.name
)
SELECT * FROM ranked WHERE rnk <= 3;

-- 7-day moving average of daily revenue
SELECT day, revenue,
       AVG(revenue) OVER (ORDER BY day ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS ma_7
FROM daily_revenue;`,
        },
        {
          kind: "table",
          title: "Ranking functions on scores 90, 85, 85, 80",
          head: ["Function", "Result", "Use"],
          rows: [
            ["`ROW_NUMBER()`", "1, 2, 3, 4", "Pick exactly one row (latest order per customer)"],
            ["`RANK()`", "1, 2, 2, 4", "Competition ranking, gaps after ties"],
            ["`DENSE_RANK()`", "1, 2, 2, 3", "\"Top 3 distinct values\""],
            ["`NTILE(4)`", "1, 2, 3, 4", "Quartiles / buckets"],
          ],
        },
        {
          kind: "traps",
          items: [
            "You can't filter on a window function in `WHERE` (it runs before SELECT). Wrap it in a CTE and filter outside. Some databases offer `QUALIFY` for this.",
            "With `ORDER BY` in the window, the default frame runs from the start to the current row, which is why `SUM` becomes a running total. Without `ORDER BY`, it's the whole partition.",
          ],
        },
      ],
    },
    {
      lecture: "Interview-style problems",
      blocks: [
        {
          kind: "example",
          title: "Problem 1 · Second highest",
          q: "Find the second-highest order amount. If there's a tie for first, the second highest is the next distinct value.",
          steps: ["Rank distinct amounts with `DENSE_RANK()`, then keep rank 2.", "`WITH r AS (SELECT amount, DENSE_RANK() OVER (ORDER BY amount DESC) AS rk FROM orders) SELECT DISTINCT amount FROM r WHERE rk = 2;`"],
          answer: "DENSE_RANK = 2",
        },
        {
          kind: "example",
          title: "Problem 2 · Latest order per customer",
          q: "Return each customer's most recent order (one row per customer).",
          steps: [
            "`ROW_NUMBER()` partitioned by customer, ordered by date descending.",
            "`WITH r AS (SELECT *, ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY order_date DESC, order_id DESC) AS rn FROM orders) SELECT * FROM r WHERE rn = 1;`",
          ],
          answer: "ROW_NUMBER, keep rn = 1 (add a tie-breaker column)",
        },
        {
          kind: "example",
          title: "Problem 3 · Month-over-month growth",
          q: "Monthly revenue and % change from the previous month.",
          steps: [
            "`WITH m AS (SELECT DATE_TRUNC('month', order_date) AS month, SUM(amount) AS revenue FROM orders GROUP BY 1)`",
            "`SELECT month, revenue, ROUND(100.0 * (revenue - LAG(revenue) OVER (ORDER BY month)) / LAG(revenue) OVER (ORDER BY month), 1) AS mom_pct FROM m ORDER BY month;`",
          ],
          answer: "Aggregate by month, then LAG",
        },
        {
          kind: "example",
          title: "Problem 4 · Repeat-purchase rate",
          q: "What percentage of customers who ordered placed 2 or more orders?",
          steps: [
            "`WITH c AS (SELECT customer_id, COUNT(*) AS n FROM orders GROUP BY customer_id)`",
            "`SELECT ROUND(100.0 * COUNT(*) FILTER (WHERE n >= 2) / COUNT(*), 1) FROM c;`",
            "Multiply by `100.0`, not `100`, so integer division doesn't round to 0.",
          ],
          answer: "Count per customer, then the share with n ≥ 2",
        },
        {
          kind: "example",
          title: "Problem 5 · Consecutive days",
          q: "Find users who logged in on 3 or more consecutive days (`logins(user_id, login_date)`, one row per user per day).",
          steps: [
            "Trick: `login_date - ROW_NUMBER()` is constant across a run of consecutive days.",
            "`WITH g AS (SELECT user_id, login_date, login_date - (ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY login_date))::int AS grp FROM logins)`",
            "`SELECT user_id FROM g GROUP BY user_id, grp HAVING COUNT(*) >= 3;`",
          ],
          answer: "Gaps-and-islands with ROW_NUMBER",
        },
        {
          kind: "tip",
          text: "In interviews, say the grain and the plan before typing: \"I'll aggregate to one row per month, then use LAG for the previous month.\" Interviewers grade the reasoning as much as the query.",
        },
      ],
    },
  ],
  recap: [
    "Name the grain of every table before you query it, and notice when a join changes it.",
    "Query order of execution: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT.",
    "NULL never equals anything: use `IS NULL`, `COALESCE`, and `NOT EXISTS` instead of `NOT IN`.",
    "Filters on the right table of a LEFT JOIN belong in `ON`, not `WHERE`.",
    "Use CTEs to build big queries as small, checked steps.",
    "Window functions (ROW_NUMBER, RANK, LAG, running SUM) answer \"per row, relative to its group\" questions without losing rows.",
  ],
};
