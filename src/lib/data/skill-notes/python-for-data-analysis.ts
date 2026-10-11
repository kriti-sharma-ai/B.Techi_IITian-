import type { SkillNotes } from "../../types";

// Text lessons for "Python for Data Analysis: Zero to Pandas". Lecture titles must match
// data/skills.ts exactly; skillModules() throws at build time if one doesn't.

export const pythonNotes: SkillNotes = {
  skill: "python-for-data-analysis",
  quickLabel: "Code",
  lessons: [
    {
      lecture: "Welcome and how to use this course",
      blocks: [
        {
          kind: "points",
          items: [
            "This course takes you from your first line of Python to answering real business questions with **pandas**. No installation, no prior coding.",
            "Each module has short lessons, a few code patterns to copy, worked examples you should try before opening the solution, and one practice set.",
            "The **Code** view at the top of this page shows only the code blocks and tables. Use it as a cheat sheet once you've read a module.",
            "The **Traps** view shows the mistakes that cost beginners hours. Read it before every practice set.",
          ],
        },
        {
          kind: "table",
          title: "How to study each lesson",
          head: ["Step", "What to do", "Time"],
          rows: [
            ["1. Read", "Read the lesson once, without typing", "5 min"],
            ["2. Type", "Retype every code block in Colab. Don't paste: typing is how syntax sticks", "10 min"],
            ["3. Break it", "Change one value, predict the output, then run it", "5 min"],
            ["4. Test", "Try the worked example yourself before revealing the solution", "5 min"],
          ],
        },
        {
          kind: "tip",
          text: "Two lessons a day, every day, beats a 6-hour Sunday binge. Programming is a skill like cycling: frequency matters more than duration.",
        },
      ],
    },
    {
      lecture: "Setting up Google Colab",
      blocks: [
        {
          kind: "points",
          items: [
            "Google Colab is a free Jupyter notebook in your browser. Go to **colab.research.google.com**, sign in with a Google account, and click **New notebook**.",
            "A notebook is a list of **cells**. A code cell runs Python; a text cell holds notes. Run a cell with **Shift + Enter**.",
            "pandas, NumPy and Matplotlib come preinstalled. For anything else, run `!pip install package-name` in a cell.",
            "Notebooks save to your Google Drive under *Colab Notebooks*. Rename yours on day one: *Untitled3.ipynb* helps nobody.",
          ],
        },
        {
          kind: "table",
          title: "Shortcuts worth learning now",
          head: ["Shortcut", "Action"],
          rows: [
            ["Shift + Enter", "Run cell, move to the next"],
            ["Ctrl + Enter", "Run cell, stay on it"],
            ["Ctrl + M  B", "New code cell below"],
            ["Ctrl + M  D", "Delete cell"],
            ["Ctrl + /", "Comment or uncomment selected lines"],
          ],
        },
        {
          kind: "code",
          title: "Load a CSV from your computer",
          code: `from google.colab import files
uploaded = files.upload()          # opens a file picker

import pandas as pd
df = pd.read_csv("sales.csv")      # the file you just uploaded
df.head()`,
          note: "Uploaded files disappear when the runtime restarts. For anything you'll reuse, mount Drive instead: `from google.colab import drive; drive.mount('/content/drive')`.",
        },
        {
          kind: "traps",
          items: [
            "Cells run in the order **you** ran them, not top to bottom. If results look impossible, use **Runtime → Restart and run all**.",
            "A variable from a deleted cell still exists until you restart. That's how notebooks work on your laptop but fail for everyone else.",
          ],
        },
      ],
    },
    {
      lecture: "Your first Python program",
      blocks: [
        {
          kind: "code",
          code: `print("Hello, BTechi!")

name = "Asha"
marks = 87
print(name, "scored", marks)
print(f"{name} scored {marks}/100")   # f-string: the cleanest way to format`,
        },
        {
          kind: "points",
          items: [
            "`print()` shows a value. In a notebook, the **last line** of a cell is also displayed automatically, so `df.head()` works without print.",
            "An **f-string** starts with `f\"` and lets you put any expression inside `{}`: `f\"{marks / 100:.1%}\"` prints *87.0%*.",
            "Python reads top to bottom, one line at a time. Indentation (4 spaces) isn't decoration: it decides which lines belong to a loop or function.",
            "`#` starts a comment. Write comments that explain **why**, not what: `# exclude test orders` beats `# filter rows`.",
          ],
        },
        {
          kind: "example",
          q: "Print *Total: ₹1,250.50* from `price = 1250.5` using an f-string with a thousands separator and two decimals.",
          steps: ["Format spec `,.2f` adds a comma separator and two decimals.", "`print(f\"Total: ₹{price:,.2f}\")`"],
          answer: "`print(f\"Total: ₹{price:,.2f}\")`",
        },
        {
          kind: "traps",
          items: [
            "Python is case-sensitive: `Print` and `print` are different names. `NameError` usually means a typo.",
            "Mixing tabs and spaces gives `IndentationError`. Let the editor indent for you.",
          ],
        },
      ],
    },
    {
      lecture: "Variables and data types",
      blocks: [
        {
          kind: "table",
          title: "The types you'll use daily",
          head: ["Type", "Example", "Notes"],
          rows: [
            ["`int`", "`42`, `-7`", "Whole numbers, any size"],
            ["`float`", "`3.14`, `1e6`", "Decimals. `0.1 + 0.2` is `0.30000000000000004`"],
            ["`str`", "`\"Chennai\"`", "Text. Immutable: methods return a new string"],
            ["`bool`", "`True`, `False`", "Result of comparisons. `True + True == 2`"],
            ["`None`", "`None`", "\"No value\". pandas shows missing values as `NaN` or `<NA>`"],
          ],
        },
        {
          kind: "code",
          code: `revenue = "1200"          # text from a CSV is often a string
type(revenue)             # <class 'str'>
revenue = int(revenue)    # convert: int(), float(), str(), bool()

city = "  new delhi "
city.strip().title()      # 'New Delhi'
"delhi" in city           # True
len(city)                 # 12, spaces count`,
        },
        {
          kind: "points",
          items: [
            "A variable is a **name pointing to a value**, not a box. `b = a` makes both names point at the same object, which matters for lists (next lesson).",
            "Names: lowercase with underscores (`total_sales`), never start with a digit, never reuse built-in names like `list`, `sum` or `type`.",
            "Integer division `//` drops the decimal; `%` gives the remainder; `**` is power. `17 // 5 == 3`, `17 % 5 == 2`, `2 ** 10 == 1024`.",
          ],
        },
        {
          kind: "example",
          q: "`\"5\" * 3` and `5 * 3`: what does each give, and why?",
          steps: ["Multiplying a string by an int repeats it.", "Multiplying two ints does arithmetic."],
          answer: "`\"555\"` and `15`",
        },
        {
          kind: "traps",
          items: [
            "Naming a variable `sum = 0` breaks the built-in `sum()` for the rest of the notebook. Restart the runtime to get it back.",
            "Never compare floats with `==`. Use `round(a, 2) == round(b, 2)` or `math.isclose(a, b)`.",
          ],
        },
      ],
    },
    {
      lecture: "Lists, tuples and dictionaries",
      blocks: [
        {
          kind: "table",
          head: ["Structure", "Syntax", "Ordered", "Changeable", "Use it for"],
          rows: [
            ["List", "`[1, 2, 3]`", "✓", "✓", "A sequence you'll add to or sort"],
            ["Tuple", "`(28.6, 77.2)`", "✓", "✗", "Fixed records: coordinates, (name, marks) pairs"],
            ["Dictionary", "`{\"id\": 7, \"city\": \"Pune\"}`", "✓ (insertion)", "✓", "Look up a value by a key"],
            ["Set", "`{\"a\", \"b\"}`", "✗", "✓", "Unique values, fast membership tests"],
          ],
        },
        {
          kind: "code",
          title: "Lists",
          code: `scores = [72, 88, 95, 61]
scores[0]          # 72   (indexing starts at 0)
scores[-1]         # 61   (last item)
scores[1:3]        # [88, 95]  (stop index excluded)
scores.append(79)
scores.sort(reverse=True)
max(scores), sum(scores) / len(scores)`,
        },
        {
          kind: "code",
          title: "Dictionaries",
          code: `student = {"name": "Ravi", "level": "Foundation", "cgpa": 8.4}
student["cgpa"]                 # 8.4
student.get("email", "n/a")     # safe lookup with a default
student["email"] = "ravi@x.in"  # add or update

for key, value in student.items():
    print(key, "→", value)`,
        },
        {
          kind: "code",
          title: "Comprehensions: the Pythonic loop",
          code: `prices = [120, 450, 89, 1200]
with_gst = [round(p * 1.18, 2) for p in prices]
expensive = [p for p in prices if p > 100]
price_map = {f"item{i}": p for i, p in enumerate(prices)}`,
        },
        {
          kind: "example",
          q: "`a = [1, 2]; b = a; b.append(3)`. What is `a` now?",
          steps: ["`b = a` doesn't copy the list: both names point at the same list.", "Appending through `b` changes the one shared list."],
          answer: "`[1, 2, 3]`. Use `b = a.copy()` for an independent copy.",
        },
        {
          kind: "traps",
          items: [
            "`list.sort()` sorts in place and returns `None`. `x = scores.sort()` leaves `x` as `None`. Use `sorted(scores)` for a new list.",
            "Dictionary keys must be unique and immutable: strings, numbers or tuples, never lists.",
            "`d[\"missing\"]` raises `KeyError`; `d.get(\"missing\")` returns `None`.",
          ],
        },
      ],
    },
    {
      lecture: "Loops and conditions",
      blocks: [
        {
          kind: "code",
          code: `marks = {"Asha": 87, "Ravi": 54, "Meera": 39}

for name, m in marks.items():
    if m >= 80:
        grade = "A"
    elif m >= 50:
        grade = "B"
    else:
        grade = "Fail"
    print(f"{name}: {grade}")

# while: repeat until a condition changes
balance, years = 10_000, 0
while balance < 20_000:
    balance *= 1.08
    years += 1
print(years)   # 10 years to double at 8%`,
        },
        {
          kind: "table",
          title: "Comparison and logic",
          head: ["Operator", "Meaning"],
          rows: [
            ["`==`  `!=`", "equal, not equal (one `=` assigns)"],
            ["`<  <=  >  >=`", "order; chains work: `0 <= x < 100`"],
            ["`and`  `or`  `not`", "combine conditions in plain Python"],
            ["`in`", "membership: `\"x\" in \"text\"`, `3 in [1, 2, 3]`"],
          ],
        },
        {
          kind: "points",
          items: [
            "`range(5)` gives 0, 1, 2, 3, 4. `range(1, 11)` gives 1 to 10. `range(0, 100, 10)` steps by 10.",
            "`enumerate(items)` gives (index, item) pairs; `zip(a, b)` walks two lists together.",
            "`break` leaves the loop; `continue` skips to the next item.",
          ],
        },
        {
          kind: "example",
          q: "Count how many numbers in `[12, 7, 30, 45, 2]` are divisible by 3 without using a list comprehension.",
          steps: ["Start a counter at 0.", "Loop; if `n % 3 == 0`, add 1.", "12, 30 and 45 qualify."],
          answer: "3",
        },
        {
          kind: "traps",
          items: [
            "In pandas, use `&`, `|` and `~` with brackets, **not** `and`/`or`. `df[(df.a > 1) & (df.b < 5)]`.",
            "A `while` loop whose condition never changes runs forever. In Colab, stop it with the ■ button.",
          ],
        },
      ],
    },
    {
      lecture: "Functions you can reuse",
      blocks: [
        {
          kind: "code",
          code: `def gst_price(price, rate=0.18):
    """Price including GST, rounded to paise."""
    return round(price * (1 + rate), 2)

gst_price(1000)           # 1180.0
gst_price(1000, 0.05)     # 1050.0
gst_price(rate=0.12, price=500)

# lambda: a one-line function, mostly used inside pandas
discount = lambda p: p * 0.9`,
        },
        {
          kind: "points",
          items: [
            "Write a function the **second** time you copy-paste code. Three copies of the same logic means three places to fix a bug.",
            "`return` sends a value back. A function without `return` returns `None`, the most common beginner bug.",
            "Default arguments (`rate=0.18`) make the common case short. Never use a mutable default like `def f(x=[])`; use `None` and create the list inside.",
            "Variables created inside a function are local. Pass data in through parameters and get it out through `return`.",
          ],
        },
        {
          kind: "example",
          q: "Write `cagr(start, end, years)` that returns compound annual growth as a percentage rounded to 1 decimal. What is `cagr(100, 200, 5)`?",
          steps: ["CAGR = (end / start)^(1 / years) − 1.", "`return round(((end / start) ** (1 / years) - 1) * 100, 1)`", "(2)^(0.2) = 1.1487 → 14.87%."],
          answer: "`14.9`",
        },
        {
          kind: "traps",
          items: ["`print` inside a function shows a value but doesn't return it. `x = f()` will be `None` if `f` only prints."],
        },
      ],
    },
    {
      lecture: "Fundamentals check",
      blocks: [
        {
          kind: "example",
          title: "Question 1",
          q: "What does `[x ** 2 for x in range(1, 6) if x % 2]` return?",
          steps: ["`x % 2` is truthy for odd numbers: 1, 3, 5.", "Square each: 1, 9, 25."],
          answer: "`[1, 9, 25]`",
        },
        {
          kind: "example",
          title: "Question 2",
          q: "`d = {\"a\": 1}; d[\"b\"] = d.get(\"b\", 0) + 5`. What is `d`?",
          steps: ["`d.get(\"b\", 0)` returns the default 0 because \"b\" is missing.", "0 + 5 = 5 is stored under \"b\"."],
          answer: "`{\"a\": 1, \"b\": 5}`",
        },
        {
          kind: "example",
          title: "Question 3",
          q: "`s = \"Data Science\"`. What are `s[5:]`, `s[::-1][:4]` and `s.split()`?",
          steps: ["`s[5:]` starts at index 5: \"Science\".", "`s[::-1]` reverses the string: \"ecneicS ataD\"; its first 4 characters are \"ecne\".", "`split()` splits on whitespace."],
          answer: "`\"Science\"`, `\"ecne\"`, `[\"Data\", \"Science\"]`",
        },
        {
          kind: "example",
          title: "Question 4",
          q: "Write a function `top_n(scores, n)` that returns the n highest scores in descending order.",
          steps: ["`sorted()` returns a new list; `reverse=True` sorts descending.", "Slice the first n."],
          answer: "`def top_n(scores, n): return sorted(scores, reverse=True)[:n]`",
        },
        {
          kind: "tip",
          text: "If you got 3 of 4, move on. If fewer, retype the code blocks from the last three lessons and try again tomorrow.",
        },
      ],
    },
    {
      lecture: "Why arrays beat lists",
      blocks: [
        {
          kind: "points",
          items: [
            "A Python list can hold anything, so every item is a full Python object scattered in memory. A **NumPy array** holds one type in one contiguous block, like a column in a spreadsheet.",
            "That's why NumPy is typically **10–100× faster** for maths on large data: the loop runs in compiled C, not in Python.",
            "pandas columns are NumPy (or Arrow) arrays under the hood. Learning arrays is learning how pandas thinks.",
          ],
        },
        {
          kind: "code",
          code: `import numpy as np

prices = [120, 450, 89, 1200]
[p * 1.18 for p in prices]        # list: needs a loop

arr = np.array(prices)
arr * 1.18                        # array: maths on every element at once
arr.dtype                         # dtype('int64')
arr.shape                         # (4,)
np.arange(0, 1, 0.25)             # array([0.  , 0.25, 0.5 , 0.75])
np.zeros((2, 3))                  # 2 rows, 3 columns of 0.0`,
        },
        {
          kind: "table",
          head: ["", "List", "NumPy array"],
          rows: [
            ["`x * 2`", "Repeats the list", "Doubles each element"],
            ["`x + y`", "Concatenates", "Adds element-wise"],
            ["Types", "Mixed allowed", "One dtype"],
            ["Speed on 1M numbers", "Slow (Python loop)", "Fast (vectorised C)"],
          ],
        },
        {
          kind: "traps",
          items: ["`np.array([1, \"2\", 3])` silently makes everything a string. Check `.dtype` after loading data."],
        },
      ],
    },
    {
      lecture: "Vectorised operations",
      blocks: [
        {
          kind: "code",
          code: `sales = np.array([250, 410, 380, 520, 190])
target = 300

sales - target                  # array([-50, 110,  80, 220, -110])
sales > target                  # boolean mask
sales[sales > target]           # array([410, 380, 520])
(sales > target).sum()          # 3 days above target (True counts as 1)
(sales > target).mean()         # 0.6 → 60% of days

sales.mean(), sales.std(), np.median(sales)
np.where(sales > target, "hit", "miss")
np.percentile(sales, 90)`,
        },
        {
          kind: "points",
          items: [
            "**Vectorising** means replacing an explicit loop with one array operation. If you're writing `for i in range(len(arr))`, look for the vectorised version.",
            "A **boolean mask** is an array of True/False. Indexing with it keeps the True positions. This is exactly how pandas filtering works.",
            "`.sum()` on a mask counts; `.mean()` on a mask gives a proportion. You'll use both constantly.",
          ],
        },
        {
          kind: "example",
          q: "Given `m = np.array([45, 78, 32, 90, 66])`, find the share of students who scored 40 or more, as a percentage.",
          steps: ["`(m >= 40)` → [True, True, False, True, True].", "`.mean()` → 0.8."],
          answer: "80%",
        },
        {
          kind: "traps",
          items: ["Combine masks with `&` and `|` and wrap each condition in brackets: `(m > 40) & (m < 80)`. Without brackets, operator precedence breaks it."],
        },
      ],
    },
    {
      lecture: "Broadcasting explained",
      blocks: [
        {
          kind: "points",
          items: [
            "**Broadcasting** is how NumPy combines arrays of different shapes: the smaller one is stretched (virtually, without copying) to match.",
            "Rule: compare shapes **from the right**. Two dimensions are compatible if they're equal or one of them is 1.",
            "`arr * 1.18` already used broadcasting: a scalar stretches to every element.",
          ],
        },
        {
          kind: "code",
          code: `# 3 stores × 4 quarters of sales
sales = np.array([[100, 120, 130, 150],
                  [ 80,  90,  85, 110],
                  [200, 210, 190, 240]])

sales.sum(axis=0)       # per quarter (collapse rows)    shape (4,)
sales.sum(axis=1)       # per store (collapse columns)   shape (3,)

# Share of each store's annual total, per quarter
share = sales / sales.sum(axis=1, keepdims=True)   # (3,4) / (3,1) ✓

# Subtract each quarter's average
centred = sales - sales.mean(axis=0)               # (3,4) - (4,) ✓`,
        },
        {
          kind: "table",
          title: "Will it broadcast?",
          head: ["Shape A", "Shape B", "Result"],
          rows: [
            ["(3, 4)", "(4,)", "✓ (3, 4)"],
            ["(3, 4)", "(3, 1)", "✓ (3, 4)"],
            ["(3, 4)", "(3,)", "✗ 4 vs 3 on the right"],
            ["(5, 1)", "(1, 6)", "✓ (5, 6)"],
          ],
        },
        {
          kind: "tip",
          text: "`axis=0` means \"go down the rows\" (one result per column); `axis=1` means \"go across the columns\" (one result per row).",
        },
      ],
    },
    {
      lecture: "DataFrames and Series",
      blocks: [
        {
          kind: "points",
          items: [
            "A **Series** is one labelled column. A **DataFrame** is a table of Series that share an **index** (the row labels).",
            "Your first five commands on any new dataset: `df.shape`, `df.head()`, `df.info()`, `df.describe()`, `df.isna().sum()`.",
          ],
        },
        {
          kind: "code",
          code: `import pandas as pd

df = pd.read_csv("orders.csv", parse_dates=["order_date"])
df.shape            # (rows, columns)
df.info()           # column types and non-null counts
df.describe()       # numeric summary
df.columns.tolist()

df["revenue"]                   # one column → Series
df[["city", "revenue"]]         # several columns → DataFrame (double brackets)
df["unit_price"] = df["revenue"] / df["qty"]   # new column, vectorised
df = df.rename(columns={"cust_id": "customer_id"})`,
        },
        {
          kind: "table",
          title: "loc vs iloc",
          head: ["", "Selects by", "Example"],
          rows: [
            ["`.loc`", "labels and boolean masks", "`df.loc[df.city == \"Pune\", \"revenue\"]`"],
            ["`.iloc`", "integer positions", "`df.iloc[:5, :3]` first 5 rows, 3 columns"],
          ],
        },
        {
          kind: "traps",
          items: [
            "`df.loc[0:5]` **includes** label 5; `df.iloc[0:5]` excludes position 5.",
            "Numbers stored as text (\"1,200\") show `object` or `str` dtype in `info()`. Fix with `pd.to_numeric(df.col.str.replace(\",\", \"\"))`.",
          ],
        },
      ],
    },
    {
      lecture: "Filtering and sorting",
      blocks: [
        {
          kind: "code",
          code: `big = df[df["revenue"] > 5000]
pune_big = df[(df.city == "Pune") & (df.revenue > 5000)]
metros = df[df.city.isin(["Mumbai", "Delhi", "Bengaluru"])]
no_test = df[~df.customer_id.str.startswith("TEST")]
q = df.query("revenue > 5000 and city == 'Pune'")   # same as pune_big

df.sort_values("revenue", ascending=False).head(10)
df.sort_values(["city", "revenue"], ascending=[True, False])
df.nlargest(5, "revenue")

df.loc[df.revenue < 0, "status"] = "refund"   # conditional update`,
        },
        {
          kind: "example",
          q: "From an orders table, get the 3 most recent orders from Chennai with qty of at least 2.",
          steps: [
            "Mask: `(df.city == \"Chennai\") & (df.qty >= 2)`.",
            "Sort by `order_date`, descending, then take 3.",
            "`df[(df.city == \"Chennai\") & (df.qty >= 2)].sort_values(\"order_date\", ascending=False).head(3)`",
          ],
          answer: "Filter, then sort, then head(3)",
        },
        {
          kind: "traps",
          items: [
            "`df[df.revenue > 5000][\"flag\"] = 1` does nothing to `df` (chained assignment). Always use `df.loc[mask, \"flag\"] = 1`.",
            "String filters are case-sensitive. Normalise first: `df.city.str.strip().str.title()`.",
          ],
        },
      ],
    },
    {
      lecture: "groupby and aggregation",
      blocks: [
        {
          kind: "points",
          items: [
            "`groupby` is **split → apply → combine**: split rows into groups, compute something per group, glue the results into a table.",
            "It's the pandas version of SQL's `GROUP BY` and Excel's pivot table. Most business questions (\"by region\", \"per month\", \"for each product\") are a groupby.",
          ],
        },
        {
          kind: "code",
          code: `df.groupby("city")["revenue"].sum().sort_values(ascending=False)

summary = (
    df.groupby("city")
      .agg(orders=("order_id", "count"),
           revenue=("revenue", "sum"),
           avg_order=("revenue", "mean"),
           customers=("customer_id", "nunique"))
      .sort_values("revenue", ascending=False)
      .reset_index()
)

# By month
df.groupby(df.order_date.dt.to_period("M"))["revenue"].sum()

# Pivot table: rows × columns
pd.pivot_table(df, index="city", columns="category", values="revenue", aggfunc="sum", fill_value=0)

# Share of total within each group
df["city_share"] = df.revenue / df.groupby("city").revenue.transform("sum")`,
        },
        {
          kind: "table",
          head: ["Method", "Returns", "Use when"],
          rows: [
            ["`.agg()`", "One row per group", "Summary tables"],
            ["`.transform()`", "Same length as the data", "Adding a group stat back to every row"],
            ["`.filter()`", "Rows of qualifying groups", "\"Keep cities with 100+ orders\""],
          ],
        },
        {
          kind: "traps",
          items: [
            "`count` counts non-null values; `size` counts rows including nulls. They differ when the column has missing values.",
            "Average of averages is wrong when groups differ in size. Compute `sum / count` from totals instead.",
          ],
        },
      ],
    },
    {
      lecture: "Merging datasets",
      blocks: [
        {
          kind: "code",
          code: `orders = pd.read_csv("orders.csv")        # order_id, customer_id, revenue
customers = pd.read_csv("customers.csv")  # customer_id, name, segment

merged = orders.merge(customers, on="customer_id", how="left", validate="many_to_one")

# Different key names
orders.merge(products, left_on="sku", right_on="product_code", how="inner")

# Stack tables with the same columns (e.g. one file per month)
all_months = pd.concat([jan, feb, mar], ignore_index=True)

# Find orders with no matching customer
check = orders.merge(customers, on="customer_id", how="left", indicator=True)
check[check["_merge"] == "left_only"]`,
        },
        {
          kind: "table",
          head: ["how=", "Keeps", "SQL equivalent"],
          rows: [
            ["`inner`", "Only keys in both", "INNER JOIN"],
            ["`left`", "All left rows; NaN where no match", "LEFT JOIN"],
            ["`outer`", "Everything from both", "FULL OUTER JOIN"],
            ["`right`", "All right rows", "RIGHT JOIN"],
          ],
        },
        {
          kind: "traps",
          items: [
            "**Row explosion:** if the right table has duplicate keys, every left row multiplies. Always compare `len()` before and after, or pass `validate=\"many_to_one\"`.",
            "Keys must have the same dtype. `\"101\"` (string) won't match `101` (int).",
          ],
        },
      ],
    },
    {
      lecture: "Handling missing values",
      blocks: [
        {
          kind: "code",
          code: `df.isna().sum()                         # missing per column
df.isna().mean().round(3) * 100         # % missing per column

df.dropna(subset=["customer_id"])       # drop rows missing a key field
df["city"] = df["city"].fillna("Unknown")
df["qty"] = df["qty"].fillna(df["qty"].median())
df["price"] = df.groupby("category")["price"].transform(lambda s: s.fillna(s.median()))
df["stock"] = df["stock"].ffill()       # carry last value forward (time series)

df.duplicated().sum()
df = df.drop_duplicates(subset=["order_id"])`,
        },
        {
          kind: "table",
          title: "Which fix?",
          head: ["Situation", "Usually"],
          rows: [
            ["ID or key missing", "Drop the row: you can't link it anyway"],
            ["Category missing", "Fill with \"Unknown\" so it stays visible in counts"],
            ["Numeric, skewed (income, price)", "Median, ideally within a group"],
            ["Time series gap", "Forward-fill or interpolate"],
            [">40% missing in a column", "Question whether the column is usable"],
          ],
        },
        {
          kind: "points",
          items: [
            "Before filling anything, ask **why** it's missing. Blank \"discount\" might mean zero discount, which is a fill with 0, not the median.",
            "Write down every cleaning decision in a text cell. Whoever reads your analysis (including you in a month) needs to know.",
          ],
        },
        {
          kind: "traps",
          items: ["`np.nan == np.nan` is `False`. Always test with `.isna()`, never `== np.nan`."],
        },
      ],
    },
    {
      lecture: "pandas drill",
      blocks: [
        {
          kind: "example",
          title: "Drill 1",
          q: "Orders table `df` with `city`, `revenue`. Which city has the highest **average** order value, among cities with at least 50 orders?",
          steps: [
            "`g = df.groupby(\"city\").revenue.agg([\"count\", \"mean\"])`",
            "`g[g[\"count\"] >= 50].sort_values(\"mean\", ascending=False).head(1)`",
          ],
          answer: "Group, filter on count, sort on mean",
        },
        {
          kind: "example",
          title: "Drill 2",
          q: "Add a column `rank_in_city` ranking each order by revenue within its city (1 = biggest).",
          steps: ["`df[\"rank_in_city\"] = df.groupby(\"city\").revenue.rank(ascending=False, method=\"dense\")`"],
          answer: "`groupby(...).rank(ascending=False)`",
        },
        {
          kind: "example",
          title: "Drill 3",
          q: "Month-over-month revenue growth in %, from `order_date` and `revenue`.",
          steps: [
            "`m = df.groupby(df.order_date.dt.to_period(\"M\")).revenue.sum()`",
            "`(m.pct_change() * 100).round(1)`",
          ],
          answer: "Monthly sum, then `pct_change()`",
        },
        {
          kind: "example",
          title: "Drill 4",
          q: "What share of customers ordered more than once?",
          steps: ["`orders_per = df.groupby(\"customer_id\").order_id.nunique()`", "`(orders_per > 1).mean()`"],
          answer: "Count per customer, then the mean of a boolean",
        },
      ],
    },
    {
      lecture: "Retail sales analysis brief",
      blocks: [
        {
          kind: "points",
          items: [
            "You're a junior analyst at a mid-sized retailer with stores and an online channel across India. The head of sales wants answers before Monday's review.",
            "Use any public retail dataset with order-level rows (order id, date, customer, product category, city or region, quantity, revenue). The *Superstore* sales dataset on Kaggle works well.",
            "Deliverable: **one notebook** with a cleaning section, ten answered questions, and a five-bullet summary at the top for someone who will never read your code.",
          ],
        },
        {
          kind: "table",
          title: "What \"good\" looks like",
          head: ["Area", "Standard"],
          rows: [
            ["Cleaning", "Types fixed, duplicates and missing values handled, every decision written down"],
            ["Answers", "Each question has code, a table or chart, and a one-sentence answer in plain English"],
            ["Numbers", "Formatted for humans: ₹ and commas, percentages to one decimal"],
            ["Summary", "Leads with the most important finding, not the first one you computed"],
          ],
        },
      ],
    },
    {
      lecture: "Capstone: answer 10 business questions",
      blocks: [
        {
          kind: "points",
          title: "The ten questions",
          items: [
            "1. What were total revenue, orders and average order value for the full period?",
            "2. How did revenue trend month by month, and which month grew fastest?",
            "3. Which five products or sub-categories earn the most revenue? Which five lose money (if profit is available)?",
            "4. Which region or city contributes the most revenue, and what share of the total?",
            "5. What share of revenue comes from the top 20% of customers?",
            "6. How many customers ordered only once? What share of all customers is that?",
            "7. Which day of the week has the highest average sales?",
            "8. Does a higher discount go with lower profit? Show it with a grouped table by discount band.",
            "9. Which category grew fastest year over year?",
            "10. If you could recommend one action to the head of sales, what would it be, and which numbers support it?",
          ],
        },
        {
          kind: "code",
          title: "Starter for question 5 (Pareto check)",
          code: `cust = df.groupby("customer_id").revenue.sum().sort_values(ascending=False)
top_n = int(len(cust) * 0.2)
share = cust.iloc[:top_n].sum() / cust.sum()
print(f"Top 20% of customers bring {share:.1%} of revenue")`,
        },
        {
          kind: "tip",
          text: "Question 10 is the one hiring managers read. A clear recommendation backed by two numbers beats ten charts.",
        },
        {
          kind: "traps",
          items: [
            "Don't report a 300% growth figure without the base. \"From ₹2,000 to ₹8,000\" is honest; \"+300%\" alone misleads.",
            "Correlation in Q8 isn't proof that discounts cause losses. Say \"is associated with\".",
          ],
        },
      ],
    },
  ],
  recap: [
    "Explore every new dataset with `shape`, `head()`, `info()`, `describe()` and `isna().sum()` before writing any analysis.",
    "Vectorise: if you're looping over rows in pandas, there is almost always a column operation that does it faster.",
    "Filter with boolean masks joined by `&` and `|`, each condition in brackets; update with `.loc[mask, col]`.",
    "Most business questions are a **groupby**: pick the grouping column, the value, and the aggregation.",
    "Check row counts before and after every merge, and write down every cleaning decision.",
    "End every analysis with plain-English answers. The code is how you found it; the sentence is what people use.",
  ],
};
