import type { CheatSheet } from "../../types";

// Computational Thinking, weeks 1–4 (qualifier syllabus). Pseudocode follows the style of the
// qualifier papers in data/ct-pyqs.ts ("while(Table 1 has more rows)", "Move X to Table 2").

export const ct: CheatSheet = {
  slug: "ct",
  subjectSlug: "computational-thinking",
  short: "CT",
  description: "Datasets, iteration, filtering, max/min, procedures, slabs, multiple passes, nested pairs and binning. The code patterns behind every 'What does A represent?' question.",
  quickLabel: "Patterns",
  sections: [
    {
      id: "datasets",
      week: 1,
      title: "The datasets & datatypes",
      hits: "every",
      blocks: [
        {
          kind: "table",
          title: "Know these card layouts",
          head: ["Dataset", "One card is", "Fields you'll filter on"],
          rows: [
            ["Scores", "One student (30 cards, CardNo 0–29)", "Name, Gender (M/F), Date of Birth, Town/City, Mathematics, Physics, Chemistry, Total"],
            ["Words", "One word of a paragraph, in order", "Word, Part of Speech, Letter count; a sentence ends at a word with a full stop"],
            ["Shopping Bills", "One bill", "Shop name, Customer name, items (name, category, quantity, price, cost), bill total"],
            ["Library, Olympics, others", "One book or player record", "The question prints the card: read every field name before tracing"],
          ],
        },
        {
          kind: "points",
          items: [
            "Total = Mathematics + Physics + Chemistry · cost = quantity × price · bill total = sum of item costs · letter count = number of letters in the word.",
            "**Sanity of data:** every value must be valid for its type. Marks within 0–100, Gender ∈ {M, F}, real dates, totals that add up. A card that breaks these is an error.",
          ],
        },
        {
          kind: "table",
          title: "Datatypes",
          head: ["Type", "Values", "Operations that make sense"],
          rows: [
            ["Boolean", "True, False", "and, or, not"],
            ["Integer", "…, −1, 0, 1, …", "+ − × ÷ mod, comparisons"],
            ["Character", "One letter or symbol", "`==`, `!=`, alphabetical order"],
            ["String", "A sequence of characters (names, words)", "`==`, joining, length"],
            ["Subtypes", "Marks (integer 0–100), Gender (M/F), Date", "Only what the meaning allows: adding two names is invalid"],
          ],
        },
      ],
    },
    {
      id: "iteration",
      week: 1,
      title: "Variables, iteration & flowcharts",
      hits: "often",
      blocks: [
        {
          kind: "table",
          title: "Flowchart symbols",
          head: ["Shape", "Meaning"],
          rows: [
            ["Oval / rounded rectangle", "Start or End (terminal)"],
            ["Rectangle", "Process, e.g. count = count + 1"],
            ["Diamond", "Decision: a condition with Yes and No exits"],
            ["Parallelogram", "Input or output"],
            ["Arrow", "Flow of control"],
          ],
        },
        {
          kind: "points",
          items: [
            "Iterator: Pile 1 (unseen) → pick card X → process X → move X to Pile 2 → repeat until Pile 1 is empty.",
            "Initialise every variable **before** the loop (count = 0, sum = 0).",
            "Filtering: process a card only when a condition holds (a decision box, or an if).",
            "Average = sum ÷ count, computed **after** the loop ends.",
          ],
        },
        {
          kind: "code",
          title: "Count + sum in one pass",
          code: `count = 0
sum = 0
while(Table 1 has more rows){
    Read the first row X in Table 1
    if(X.Gender == "F"){
        count = count + 1
        sum = sum + X.Mathematics
    }
    Move X to Table 2
}
avg = sum / count`,
          note: "avg = average Maths marks of female students.",
        },
        {
          kind: "traps",
          items: [
            "Initialising inside the loop resets the variable on every card, so it ends up holding only the last card's value.",
            "A loop that never moves X to Table 2 never ends.",
          ],
        },
      ],
    },
    {
      id: "filtering",
      week: 2,
      title: "Pseudocode, filtering & AND / OR",
      hits: "every",
      blocks: [
        {
          kind: "code",
          title: "Exam-style pseudocode",
          code: `count = 0
while(Table 1 has more rows){
    Read the first row X in Table 1
    if(X.Gender == "F" and X.CityTown == "Chennai"){
        count = count + 1
    }
    Move X to Table 2
}`,
          note: "count = number of female students from Chennai.",
        },
        {
          kind: "table",
          title: "Operators",
          head: ["Write", "Means"],
          rows: [
            ["`a = b`", "Assign: store the value of b in a"],
            ["`a == b`", "Compare: is a equal to b?"],
            ["`a != b`", "Not equal"],
            ["`and`", "True only when both sides are true"],
            ["`or`", "True when at least one side is true"],
            ["`not`", "Flips True and False"],
            ["`a mod b`", "Remainder: 17 mod 5 = 2"],
          ],
        },
        {
          kind: "formulas",
          title: "Logic you'll use",
          items: [
            { label: "De Morgan", f: "not (A and B) = (not A) or (not B)" },
            { label: "De Morgan", f: "not (A or B) = (not A) and (not B)" },
            { label: "Count of A or B", f: "count(A) + count(B) − count(A and B)" },
            { label: "Exactly one of A, B", f: "(A and not B) or (B and not A)" },
          ],
        },
        {
          kind: "example",
          q: "In Scores, 14 students are female, 12 are from Chennai, and 5 are female and from Chennai. What does an `X.Gender == \"F\" or X.CityTown == \"Chennai\"` filter count?",
          steps: ["Count(A or B) = 14 + 12 − 5."],
          answer: "21 students",
        },
        {
          kind: "points",
          items: [
            "Brackets change meaning: (A and B) or C ≠ A and (B or C).",
            "Check whether each update sits inside or outside the if. Indentation and braces decide.",
            "`A = A + 1` counts cards. `A = A + X.Marks` adds up a field.",
          ],
        },
      ],
    },
    {
      id: "max-min",
      week: 2,
      title: "Max, min & 'who has it'",
      hits: "every",
      blocks: [
        {
          kind: "code",
          title: "Highest mark and who scored it",
          code: `max = 0
topper = "None"
while(Table 1 has more rows){
    Read the first row X in Table 1
    if(X.Mathematics > max){
        max = X.Mathematics
        topper = X.Name
    }
    Move X to Table 2
}`,
        },
        {
          kind: "code",
          title: "Filtered min (PYQ May 2023: lowest Chemistry, male, Vellore)",
          code: `min = 100
while(Table 1 has more rows){
    Read the first row X in Table 1
    if(X.Gender == "M" and X.CityTown == "Vellore"){
        if(X.Chemistry < min){
            min = X.Chemistry
        }
    }
    Move X to Table 2
}`,
        },
        {
          kind: "table",
          title: "Ties: which card wins?",
          head: ["Comparison", "On a tie, keeps"],
          rows: [
            ["`X.M > max`", "the **first** card with the maximum"],
            ["`X.M >= max`", "the **last** card with the maximum"],
            ["`X.M < min`", "the first card with the minimum"],
            ["`X.M <= min`", "the last card with the minimum"],
          ],
        },
        {
          kind: "points",
          items: [
            "max = 0 is safe only when every value is ≥ 0. For min, start above the largest possible value (100 for marks) or with the first card's value.",
            "Second highest: `if X > max { second = max; max = X } else if X > second { second = X }`.",
          ],
        },
        {
          kind: "traps",
          items: [
            "**min = 0 bug:** no mark is below 0, so min never changes. A favourite 'find the mistake' option.",
            "Setting topper outside the if stores the last card's name, not the topper's.",
            "If no card passes the filter, max and min keep their starting values.",
          ],
        },
      ],
    },
    {
      id: "procedures",
      week: 3,
      title: "Procedures, parameters & return",
      hits: "every",
      blocks: [
        {
          kind: "code",
          title: "A procedure",
          code: `Procedure isVowel(c)
    if(c == 'a' or c == 'e' or c == 'i' or c == 'o' or c == 'u'){
        return(True)
    }
    return(False)
End isVowel`,
        },
        {
          kind: "points",
          items: [
            "Parameters are the inputs. A call like `isVowel(letter)` substitutes the argument for c.",
            "`return(v)` hands v back **and exits immediately**. Nothing after it runs.",
            "Side effect: the procedure changes something outside itself (moves rows between tables, changes an outside variable). Ask whether the table is the same after the call.",
            "Loop counting: `i = 1; while(i <= 20){ i = i * 2 }` runs for i = 1, 2, 4, 8, 16: five times.",
          ],
        },
        {
          kind: "table",
          title: "Standard procedures: learn the trick",
          head: ["Task", "Trick"],
          rows: [
            ["Sum of the two smallest of a, b, c (PYQ Jan 2024)", "a + b + c − max(a, b, c)"],
            ["Largest of three", "compare a with b, then the winner with c"],
            ["Even or odd", "`n mod 2 == 0` ⇒ even"],
            ["Last digit / drop it", "`n mod 10` / `floor(n / 10)`"],
            ["Sum of digits", "repeat `s = s + n mod 10`, `n = floor(n / 10)` until n = 0"],
            ["Reverse a number", "repeat `r = r × 10 + n mod 10`, `n = floor(n / 10)`"],
            ["GCD (Euclid)", "`while(b != 0){ t = b; b = a mod b; a = t }` → answer a"],
            ["Divisible by k", "`n mod k == 0`"],
          ],
        },
        {
          kind: "example",
          title: "Trace the GCD loop",
          q: "Run the Euclid loop with a = 36, b = 24.",
          steps: ["(36, 24): t = 24, b = 36 mod 24 = 12, a = 24.", "(24, 12): t = 12, b = 24 mod 12 = 0, a = 12.", "b = 0, so the loop stops."],
          answer: "12",
        },
        {
          kind: "example",
          q: "Sum of digits of 4096 with the mod-10 loop?",
          steps: ["6 → n = 409", "6 + 9 = 15 → n = 40", "15 + 0 = 15 → n = 4", "15 + 4 = 19 → n = 0"],
          answer: "19",
        },
      ],
    },
    {
      id: "slabs",
      week: 3,
      title: "Slab and bill problems (if / else if)",
      hits: "often",
      blocks: [
        {
          kind: "code",
          title: "₹5 for the first 100 units, ₹7 for the next 100, ₹10 after that",
          code: `if(unit <= 100){
    cost = unit * 5
}
else if(unit <= 200){
    cost = 100 * 5 + (unit - 100) * 7
}
else{
    cost = 100 * 5 + 100 * 7 + (unit - 200) * 10
}`,
        },
        {
          kind: "points",
          items: [
            "Each rate applies only to the units inside its own slab.",
            "An else-if chain checks top to bottom and stops at the first true condition, so the order of the checks matters.",
          ],
        },
        {
          kind: "example",
          title: "PYQ pattern (May 2023)",
          q: "Using the slabs above, what is the bill for 250 units?",
          steps: ["First 100: 100 × 5 = 500.", "Next 100: 100 × 7 = 700.", "Last 50: 50 × 10 = 500."],
          answer: "₹1700",
        },
        {
          kind: "traps",
          items: [
            "Wrong-option pattern: `cost = unit * 10` for unit > 200, which charges every unit at the top rate.",
            "Boundaries: is exactly 100 units in slab 1 (`<=`) or slab 2 (`<`)? Check the comparison sign.",
          ],
        },
      ],
    },
    {
      id: "multiple-passes",
      week: 3,
      title: "Multiple (non-nested) iterations",
      hits: "often",
      blocks: [
        {
          kind: "code",
          title: "PYQ (Jan 2024): students above the class average",
          code: `sum = 0
n = 0
while(Table 1 has more rows){
    Read the first row X in Table 1
    sum = sum + X.Total
    n = n + 1
    Move X to Table 2
}
avg = sum / n
Move all rows from Table 2 to Table 1
count = 0
while(Table 1 has more rows){
    Read the first row X in Table 1
    if(X.Total > avg){
        count = count + 1
    }
    Move X to Table 2
}`,
        },
        {
          kind: "points",
          items: [
            "You can't compare with the average until you know it, so it takes two passes.",
            "Restore Table 1 between passes, or the second loop runs zero times.",
            "Three prizes problem: keep first, second and third in one pass, shifting values down whenever a bigger total arrives.",
          ],
        },
      ],
    },
    {
      id: "nested-pairs",
      week: 4,
      title: "Nested iterations: comparing pairs",
      hits: "every",
      blocks: [
        {
          kind: "code",
          title: "Every pair exactly once",
          code: `count = 0
while(Table 1 has more rows){
    Read the first row X in Table 1
    Move X to Table 2
    while(Table 1 has more rows){
        Read the first row Y in Table 1
        if(X.CityTown == Y.CityTown){
            count = count + 1
        }
        Move Y to Table 3
    }
    Move all rows from Table 3 to Table 1
}`,
          note: "count = number of pairs of students from the same city.",
        },
        {
          kind: "formulas",
          items: [
            { label: "Unordered pairs (each once)", f: "[[n(n − 1) // 2]]", note: "n = 30 ⇒ 435" },
            { label: "Ordered pairs, X ≠ Y", f: "n(n − 1)" },
            { label: "Every X with every Y, itself included", f: "n²" },
            { label: "Pairs within groups of sizes k₁, k₂, …", f: "Σ [[k_{i}(k_{i} − 1) // 2]]" },
            { label: "Pairs across two groups", f: "k_{1} × k_{2}" },
          ],
        },
        {
          kind: "points",
          items: [
            "Moving X out before the inner loop means X never meets itself and each pair is met once.",
            "If the inner loop also sees X and the cards before it, each pair is counted twice. Halve it.",
            "Birthday paradox: with just 23 people there's about a 50% chance two share a birthday (about 70% with 30), because the number of pairs grows like n².",
          ],
        },
        {
          kind: "example",
          q: "Scores has 30 cards: 10 from Chennai, 8 from Vellore, 12 from Madurai. How many pairs are from the same city? From different cities?",
          steps: ["Same city: 45 + 28 + 66 = 139.", "All pairs: [[30 × 29 // 2]] = 435.", "Different cities: 435 − 139."],
          answer: "139 same-city pairs, 296 different-city pairs",
        },
        {
          kind: "traps",
          items: [
            "Read whether the question asks for matching pairs or for comparisons made. Comparisons = n(n − 1)/2, whatever the if says.",
            "'Either same gender or same city, but not both' is exclusive or: (A and not B) or (B and not A).",
          ],
        },
      ],
    },
    {
      id: "binning",
      week: 4,
      title: "Binning",
      hits: "sometimes",
      blocks: [
        {
          kind: "points",
          items: [
            "Binning: first sort the cards into bins by a field (city, birth month, gender), then compare pairs only inside each bin.",
            "Comparisons drop from n(n − 1)/2 to the sum of k(k − 1)/2 over the bins, plus one pass to fill the bins.",
          ],
        },
        { kind: "formulas", items: [{ label: "Comparisons with bins", f: "Σ [[k_{i}(k_{i} − 1) // 2]]" }] },
        {
          kind: "example",
          q: "30 cards split evenly into 3 bins. How many comparisons with and without binning?",
          steps: ["Without: [[30 × 29 // 2]] = 435.", "With: 3 × [[10 × 9 // 2]] = 3 × 45."],
          answer: "435 without, 135 with",
        },
      ],
    },
    {
      id: "tracing",
      week: 4,
      title: "Tracing: 'What does A represent?'",
      hits: "every",
      blocks: [
        {
          kind: "points",
          title: "Five-step checklist",
          items: [
            "**Start value:** 0 → count or sum; large → min; True/False → flag.",
            "**Update:** `+ 1` → count; `+ X.field` → sum; `= X.field` → max, min or 'last seen'.",
            "**Filter:** list every condition; note and/or and strict (>) vs non-strict (≥).",
            "**Scope:** reset inside the outer loop? Then it's per-card, and the final value belongs to the last card.",
            "**Dry-run** 3–4 cards in a trace table (one column per variable) when unsure.",
          ],
        },
        {
          kind: "code",
          title: "Flag pattern",
          code: `found = False
while(Table 1 has more rows){
    Read the first row X in Table 1
    if(X.Total > 250){
        found = True
    }
    Move X to Table 2
}`,
          note: "found = True if at least one student scored above 250.",
        },
        {
          kind: "points",
          title: "Dataset-specific patterns",
          items: [
            "**Words:** a word ending in a full stop closes a sentence. Per-sentence counters reset there.",
            "**Shopping Bills, 'bought both Bread and Milk' (PYQ Jan 2024):** set two flags while scanning a bill's items, then count bills where both are True. A ratio like frac is that count ÷ whatever count the question puts in the denominator.",
          ],
        },
        {
          kind: "traps",
          items: [
            "Options often differ only by > vs ≥, and vs or, or first vs last. Check those three first.",
            "A count or sum with no filter is about **all** cards, not the group the option names.",
          ],
        },
      ],
    },
  ],
  lastMinute: [
    "Initialise before the loop. No 'Move X to Table 2' means the loop never ends.",
    "> keeps the first maximum; ≥ keeps the last.",
    "min starts large (100 for marks), never 0.",
    "count = count + 1 counts; sum = sum + X.field adds.",
    "not (A and B) = not A or not B.",
    "count(A or B) = count(A) + count(B) − count(A and B).",
    "return exits the procedure immediately.",
    "Pairs: n(n − 1)/2. 30 cards ⇒ 435 pairs.",
    "Same-group pairs: Σ k(k − 1)/2.",
    "Comparing with an average takes two passes; restore Table 1 in between.",
    "Sum of the two smallest = a + b + c − max(a, b, c).",
    "Euclid: gcd(a, b) = gcd(b, a mod b).",
  ],
};
