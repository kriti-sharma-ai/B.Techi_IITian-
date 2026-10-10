import type { QualifierMock } from "../../types";

// Programming in Python: IIT Madras BS End Term papers (6 papers, 114 questions).
// Questions, options and answer keys are reproduced from the official question papers.
// Figures, code and maths typeset as images are in public/pyq/<slug>/, embedded inline as
// ![Figure](src#WxH). Range answers are stored as midpoint ± tolerance.
// Generated from the paper PDFs; edit with care.

export const pythonEndTermPapers: QualifierMock[] = [
  {
    slug: "python-end-term-aug-2025-fn",
    title: "Python End Term · 31 Aug 2025 (FN)",
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
        subjectSlug: "programming-in-python",
        title: "Programming in Python",
        short: "Python",
        questions: [
          {
            id: "python-end-term-aug-2025-fn-q1",
            type: "mcq",
            marks: 3,
            prompt: "What will be the output of the following Python code?\nwords = [\"jacket\", \"cap\", \"scarf\", \"hat\", \"sock\"]\nresult = []\nfor idx, word in enumerate(words):\nif idx % 2 == 0:\nresult.append(word[:2].upper() + str(idx))\nelif len(word) > 4:\nresult.append(word[::-1][:3])\nelse:\nresult.append(\"0\" + word[-1])\nprint(result)",
            options: [
              "['JA0', 'pa0', 'SC2', 'tah', 'SO4']",
              "['JA0', '0p', 'SC2', 'tah', 'SO4']",
              "['JA0', '0p', 'SC2', '0t', 'SO4']",
              "['JA0', '0p', 'SC2', '0t', '0k']"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "python-end-term-aug-2025-fn-q2",
            type: "mcq",
            marks: 3,
            prompt: "Consider the following Python code:\ndef evaluate_score(score):\nif score >= 90:\nif score == 100:\nprint(\"Perfect Score\")\nelse:\nprint(\"Excellent\")\nelif score >= 60:\nif score >= 80:\nprint(\"Very Good\")\nelse:\nprint(\"Good\")\nelse:\nif score >= 40:\nif score % 2 == 0:\nprint(\"Needs Improvement\")\nelse:\nprint(\"Barely Passed\")\nelse:\nprint(\"Fail\")\nWhich of the following inputs will produce the output _(Needs Improvement) ?",
            options: [
              "42",
              "47",
              "39",
              "60"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "python-end-term-aug-2025-fn-q3",
            type: "mcq",
            marks: 3,
            prompt: "Consider the following Python code:\nclass Employee:\ndef __init__(self, name):\nself.name = name\nself.role = \"Employee\"\ndef show_details(self):\nprint(f\"{self.name} works as {self.role}\")\nclass Developer(Employee):\ndef __init__(self, name):\nsuper().__init__(name)\nself.role = \"Developer\"\ndef show_details(self):\nprint(f\"{self.name} writes code as a {self.role}\")\nsuper().show_details()\nclass Manager(Employee):\ndef __init__(self, name):\nsuper().__init__(name)\nself.role = \"Manager\"\ndef show_details(self):\nprint(f\"{self.name} manages tasks as a {self.role}\")\nsuper().show_details()\nemployees = [\nDeveloper(\"Ananya\"),\nManager(\"Rajeev\"),\nDeveloper(\"Kiran\")\n]\nfor emp in employees:\nemp.show_details()\nWhat will be the output of the code above?",
            options: [
              "Ananya writes code as a Developer\nAnanya works as Developer\nRajeev manages tasks as a Manager\nRajeev works as Manager\nKiran writes code as a Developer\nKiran works as Developer",
              "Ananya writes code as a Developer\nAnanya works as Employee\nRajeev manages tasks as a Manager\nRajeev works as Employee\nKiran writes code as a Developer\nKiran works as Employee",
              "Ananya works as Developer\nRajeev works as Manager\nKiran works as Developer",
              "Developer\nEmployee\nManager\nEmployee\nDeveloper\nEmployee"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "python-end-term-aug-2025-fn-q4",
            type: "mcq",
            marks: 3,
            prompt: "What will be the total number of lines printed when the following code is executed? scores = {\n\"Aarav\": [10, 20, 30],\n\"Bhavna\": [15, 25],\n\"Chirag\": [12, 18, 24, 30]\n}\nround = 0\ndone = False\nwhile not done:\ndone = True\nfor student in scores:\nif round < len(scores[student]):\nscore = scores[student][round]\nprint(\nf\"Round {round+1}: {student} scored {score}\"\n)\ndone = False\nround += 1",
            options: [
              "9",
              "8",
              "7",
              "10"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "python-end-term-aug-2025-fn-q5",
            type: "mcq",
            marks: 3,
            prompt: "What will be the output of the following code snippet?\ndata = [(4, 7), (5, 8), (6, 6), (9, 3)]\ntotal = 0\nfor a, b in data:\nif a % 2 == 0:\nif a < b:\ntotal += (b - a)\nelif a == b:\ntotal += a + b\nelse:\ntotal += (a * b) % 4\nelse:\nif b % 2 == 0:\ntotal += b\nelse:\ntotal -= a\nprint(total)",
            options: [
              "30",
              "14",
              "16",
              "6"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "python-end-term-aug-2025-fn-q6",
            type: "mcq",
            marks: 3,
            prompt: "What will be the output of the following code?\nitems = [\"apple\", \"banana\", \"cherry\", \"date\", \"fig\", \"grape\", \"kiwi\"]\nsliced = items[::2] # Step of 2\nfiltered = [fruit for fruit in sliced if len(fruit) > 4]\nresult = \"_\".join(filtered[::-1])\nprint(result)",
            options: [
              "apple_cherry",
              "fig_kiwi",
              "grape_fig",
              "cherry_apple"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "python-end-term-aug-2025-fn-q7",
            type: "multi",
            marks: 3,
            prompt: "Consider the use of the _(map()) function in the following code snippets. Select all options that has the value _([4, 9, 16, 25]) in the variable _(squares) after execution.",
            options: [
              "nums = [2, 3, 4, 5]\nsquares = list(map(lambda x: x**2, nums))",
              "nums = [4, 9, 16, 25]\nsquares = map(int, nums)",
              "nums = [2, 3, 4, 5]\ndef square(n):\nreturn n * n\nsquares = list(map(square, nums))",
              "nums = [2, 3, 4, 5]\nsquares = []\nfor x in nums:\nsquares.append(x ** 2)",
              "nums = [2, 3, 4, 5]\nsquares = list(map(pow, nums, [2]*4))"
            ],
            answer: [
              0,
              2,
              3,
              4
            ],
            explanation: ""
          },
          {
            id: "python-end-term-aug-2025-fn-q8",
            type: "multi",
            marks: 3,
            prompt: "Which of the following statements about the exception handling behavior are TRUE? Select ALL that apply.\ndef safe_divide(x, y):\nresult = []\ntry:\nresult.append(\"Trying division\")\nresult.append(x // y)\nexcept ZeroDivisionError:\nresult.append(\"Division by zero\")\nelse:\nresult.append(\"No exception occurred\")\nfinally:\nresult.append(\"Cleanup done\")\nreturn result\noutput = safe_divide(10, 0)\nprint(output)",
            options: [
              "The output will contain the string _(\"Trying division\")",
              "The string _(\"Division by zero\") will appear in the output",
              "The division result will be appended to the output",
              "The string _(\"Cleanup done\") will always appear regardless of exceptions"
            ],
            answer: [
              0,
              1,
              3
            ],
            explanation: ""
          },
          {
            id: "python-end-term-aug-2025-fn-q9",
            type: "multi",
            marks: 3,
            prompt: "Consider the following code snippet:\ndef update_scores(scores, bonus):\nupdated = []\nfor score in scores:\nupdated.append(score + bonus)\nreturn updated\noriginal_scores = [10, 20, 30]\nnew_scores = update_scores(original_scores, 5)\nWhich of the following statements are TRUE?",
            options: [
              "The list _(original_scores) remains unchanged after calling _(update_scores)",
              "The function _(update_scores) returns a new list",
              "The variable _(score) inside the function is local to the function",
              "The function modifies the _(scores) list in place"
            ],
            answer: [
              0,
              1,
              2
            ],
            explanation: ""
          },
          {
            id: "python-end-term-aug-2025-fn-q10",
            type: "numerical",
            marks: 2,
            prompt: "Consider the following Python code:\nnames = [\"Aarav\", \"Bhuvan\", \"Charan\", \"Deepa\"]\nmarks = [88, 76, 92, 81]\nbonus = [5, 3, 4, 2]\ntotal = 0\nfor name, mark, extra in zip(names, marks, bonus):\nif \"a\" in name.lower():\ntotal += mark + extra\nelse:\ntotal += mark\nprint(total)\nWhat will be the output of the above code?",
            answer: 351,
            explanation: ""
          },
          {
            id: "python-end-term-aug-2025-fn-q11",
            type: "numerical",
            marks: 2,
            prompt: "Consider the following Python code:\nwith open(\"data.txt\", \"w\") as f:\nfor i in range(3):\nfor j in range(i + 1):\nf.write(f\"Line {i}-{j}\" + (\"\\n\" * (j + 1)))\nwith open(\"data.txt\", \"r\") as f:\ncount = len(f.readlines())\nprint(count)\nWhat is the output of the given code?",
            answer: 10,
            explanation: ""
          },
          {
            id: "python-end-term-aug-2025-fn-q12",
            type: "numerical",
            marks: 3,
            prompt: "Consider the following Python code:\na1 = (3, 6, 9, 12, 15, 18, 21, 24)\na2 = a1[2:7]\na3 = a2[::-1]\na4 = tuple(x for x in a3 if x % 6 != 0)\na5 = a4[1::2]\nans = sum(a5) + len(a4)\nprint(ans)\nWhat is the output of the given code?",
            answer: 18,
            explanation: ""
          },
          {
            id: "python-end-term-aug-2025-fn-q13",
            type: "numerical",
            marks: 3,
            prompt: "Consider the following Python code:\ndef transform(words):\nif not words:\nreturn []\nfirst = words[0][::-1]\nif first == first[::-1]:\nfirst = \"<|>\"\nreturn [first] + transform(words[1:])\nsentence = \"refer logic noon stats apple radar\"\nwords = sentence.split()\nnew_sentence = \" \".join(transform(words))\nprint(len(new_sentence))\nWhat is the output of the given code?",
            answer: 27,
            explanation: ""
          },
          {
            id: "python-end-term-aug-2025-fn-q14",
            type: "numerical",
            marks: 3,
            prompt: "Consider the following Python code snippet:\ncolors = ['red', 'blue', 'green', 'red', 'blue', 'red', 'yellow']\nfreq = [colors.count(color) for color in colors]\nfiltered = [f for f in freq if f >= 2]\nfiltered.sort(reverse=True)\nif filtered:\nfiltered.pop(0)\nif filtered:\nfiltered.pop(-1)\nprint(len(filtered))\nWhat is the output of the given code?",
            answer: 3,
            explanation: ""
          },
          {
            id: "python-end-term-aug-2025-fn-q15",
            type: "mcq",
            marks: 2,
            passage: "Consider the following Python code and answer the sub-questions:\nstudents = [\n{\n\"name\": \"Arya\",\n\"subjects\": {\n\"Math\": 78, \"Science\": 88, \"English\": 92\n}\n},\n{\n\"name\": \"Bilal\",\n\"subjects\": {\n\"Math\": 65, \"Science\": 55, \"English\": 60\n}\n},\n{\n\"name\": \"Chitra\",\n\"subjects\": {\n\"Math\": 45, \"Science\": 40, \"English\": 42\n}\n},\n{\n\"name\": \"Deep\",\n\"subjects\": {\n\"Math\": 90, \"Science\": 91, \"English\": 85\n}\n},\n{\n\"name\": \"Esha\",\n\"subjects\": {\n\"Math\": 35, \"Science\": 39, \"English\": 55\n}\n},\n]\ndef filter_and_rank(data):\neligible = []\nfor student in data:\nmarks = list(student[\"subjects\"].values())\npassed = 0\nhigh = 0\nfor mark in marks:\nif mark >= 40:\npassed += 1\nif mark >= 90:\nhigh += 1\nif passed == len(marks) and high > 0:\ntotal = sum(marks)\neligible.append((student[\"name\"], total))\neligible.sort(key=lambda x: x[1], reverse=True)\nreturn [name for name, _ in eligible]",
            prompt: "What is the output of filter_and_rank(students) ?",
            options: [
              "['Deep', 'Arya']",
              "['Arya', 'Deep']",
              "['Deep']",
              "['Arya']"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "python-end-term-aug-2025-fn-q16",
            type: "multi",
            marks: 2,
            passage: "Consider the following Python code and answer the sub-questions:\nstudents = [\n{\n\"name\": \"Arya\",\n\"subjects\": {\n\"Math\": 78, \"Science\": 88, \"English\": 92\n}\n},\n{\n\"name\": \"Bilal\",\n\"subjects\": {\n\"Math\": 65, \"Science\": 55, \"English\": 60\n}\n},\n{\n\"name\": \"Chitra\",\n\"subjects\": {\n\"Math\": 45, \"Science\": 40, \"English\": 42\n}\n},\n{\n\"name\": \"Deep\",\n\"subjects\": {\n\"Math\": 90, \"Science\": 91, \"English\": 85\n}\n},\n{\n\"name\": \"Esha\",\n\"subjects\": {\n\"Math\": 35, \"Science\": 39, \"English\": 55\n}\n},\n]\ndef filter_and_rank(data):\neligible = []\nfor student in data:\nmarks = list(student[\"subjects\"].values())\npassed = 0\nhigh = 0\nfor mark in marks:\nif mark >= 40:\npassed += 1\nif mark >= 90:\nhigh += 1\nif passed == len(marks) and high > 0:\ntotal = sum(marks)\neligible.append((student[\"name\"], total))\neligible.sort(key=lambda x: x[1], reverse=True)\nreturn [name for name, _ in eligible]",
            prompt: "Which of the following students failed to be included due to failing at least one subject?",
            options: [
              "Bilal",
              "Chitra",
              "Esha",
              "Arya"
            ],
            answer: [
              1,
              2
            ],
            explanation: ""
          },
          {
            id: "python-end-term-aug-2025-fn-q17",
            type: "numerical",
            marks: 1,
            passage: "Consider the following Python code and answer the sub-questions:\nstudents = [\n{\n\"name\": \"Arya\",\n\"subjects\": {\n\"Math\": 78, \"Science\": 88, \"English\": 92\n}\n},\n{\n\"name\": \"Bilal\",\n\"subjects\": {\n\"Math\": 65, \"Science\": 55, \"English\": 60\n}\n},\n{\n\"name\": \"Chitra\",\n\"subjects\": {\n\"Math\": 45, \"Science\": 40, \"English\": 42\n}\n},\n{\n\"name\": \"Deep\",\n\"subjects\": {\n\"Math\": 90, \"Science\": 91, \"English\": 85\n}\n},\n{\n\"name\": \"Esha\",\n\"subjects\": {\n\"Math\": 35, \"Science\": 39, \"English\": 55\n}\n},\n]\ndef filter_and_rank(data):\neligible = []\nfor student in data:\nmarks = list(student[\"subjects\"].values())\npassed = 0\nhigh = 0\nfor mark in marks:\nif mark >= 40:\npassed += 1\nif mark >= 90:\nhigh += 1\nif passed == len(marks) and high > 0:\ntotal = sum(marks)\neligible.append((student[\"name\"], total))\neligible.sort(key=lambda x: x[1], reverse=True)\nreturn [name for name, _ in eligible]",
            prompt: "If a new student {\"name\": \"Fatima\", \"subjects\": {\"Math\": 90, \"Science\": 90, \"English\": 90}} is added to the list, what will be the new position (1-based index) of _(Fatima) in the ranked output list returned by _(filter_and_rank) ?",
            answer: 1,
            explanation: ""
          },
          {
            id: "python-end-term-aug-2025-fn-q18",
            type: "numerical",
            marks: 2,
            passage: "Consider the following Python code and answer the sub-questions:\nclass Vehicle:\ntotal_vehicles = 0\nall_models = []\ndef __init__(self, model):\nself.model = model\nVehicle.total_vehicles += 1\nVehicle.all_models.append(model)\ndef get_info(self):\nreturn \"Model: \" + self.model\ndef get_total():\nreturn Vehicle.total_vehicles\ndef count_models_starting_with(letter):\ncount = 0\nfor m in Vehicle.all_models:\nif m.startswith(letter):\ncount += 1\nreturn count\nclass ElectricVehicle(Vehicle):\nev_count = 0\ndef __init__(self, model, battery):\nVehicle.__init__(self, model)\nself.battery = battery\nElectricVehicle.ev_count += 1\nif battery < 40:\nself.status = \"Low\"\nelse:\nself.status = \"OK\"\ndef get_info(self):\nreturn (\nf\"{Vehicle.get_info(self)}, \"\nf\"Battery: {self.battery})%, \"\nf\"Status: {self.status}\"\n)\nclass PetrolVehicle(Vehicle):\npv_count = 0\ndef __init__(self, model, fuel):\nVehicle.__init__(self, model)\nself.fuel = fuel\nPetrolVehicle.pv_count += 1\ndef get_info(self):\nreturn f\"{Vehicle.get_info(self)}, Fuel: {self.fuel} L\"\nfleet = [\nElectricVehicle(\"Tesla Model 3\", 75),\nElectricVehicle(\"Mahindra e2o\", 35),\nPetrolVehicle(\"Hyundai i10\", 20),\nPetrolVehicle(\"Swift\", 12),\nElectricVehicle(\"Tata Tigor EV\", 80),\nVehicle(\"Generic Cycle\")\n]\nlow_battery_models = []\nfor v in fleet:\nif isinstance(v, ElectricVehicle):\nif v.status == \"Low\":\nlow_battery_models.append(v.model)\ncount = 0\nfor v in fleet:\nif isinstance(v, Vehicle):\ncount += 1\nprint(count)",
            prompt: "What will the output of the given code?",
            answer: 6,
            explanation: ""
          },
          {
            id: "python-end-term-aug-2025-fn-q19",
            type: "multi",
            marks: 2,
            passage: "Consider the following Python code and answer the sub-questions:\nclass Vehicle:\ntotal_vehicles = 0\nall_models = []\ndef __init__(self, model):\nself.model = model\nVehicle.total_vehicles += 1\nVehicle.all_models.append(model)\ndef get_info(self):\nreturn \"Model: \" + self.model\ndef get_total():\nreturn Vehicle.total_vehicles\ndef count_models_starting_with(letter):\ncount = 0\nfor m in Vehicle.all_models:\nif m.startswith(letter):\ncount += 1\nreturn count\nclass ElectricVehicle(Vehicle):\nev_count = 0\ndef __init__(self, model, battery):\nVehicle.__init__(self, model)\nself.battery = battery\nElectricVehicle.ev_count += 1\nif battery < 40:\nself.status = \"Low\"\nelse:\nself.status = \"OK\"\ndef get_info(self):\nreturn (\nf\"{Vehicle.get_info(self)}, \"\nf\"Battery: {self.battery})%, \"\nf\"Status: {self.status}\"\n)\nclass PetrolVehicle(Vehicle):\npv_count = 0\ndef __init__(self, model, fuel):\nVehicle.__init__(self, model)\nself.fuel = fuel\nPetrolVehicle.pv_count += 1\ndef get_info(self):\nreturn f\"{Vehicle.get_info(self)}, Fuel: {self.fuel} L\"\nfleet = [\nElectricVehicle(\"Tesla Model 3\", 75),\nElectricVehicle(\"Mahindra e2o\", 35),\nPetrolVehicle(\"Hyundai i10\", 20),\nPetrolVehicle(\"Swift\", 12),\nElectricVehicle(\"Tata Tigor EV\", 80),\nVehicle(\"Generic Cycle\")\n]\nlow_battery_models = []\nfor v in fleet:\nif isinstance(v, ElectricVehicle):\nif v.status == \"Low\":\nlow_battery_models.append(v.model)\ncount = 0\nfor v in fleet:\nif isinstance(v, Vehicle):\ncount += 1\nprint(count)",
            prompt: "Which of the following are correct?",
            options: [
              "ElectricVehicle.ev_count is 3",
              "PetrolVehicle.pv_count is 2",
              "\"Mahindra e2o\" is in low_battery_models",
              "Vehicle.get_total() will raise an error"
            ],
            answer: [
              0,
              1,
              2
            ],
            explanation: ""
          },
          {
            id: "python-end-term-aug-2025-fn-q20",
            type: "mcq",
            marks: 1,
            passage: "Consider the following Python code and answer the sub-questions:\nclass Vehicle:\ntotal_vehicles = 0\nall_models = []\ndef __init__(self, model):\nself.model = model\nVehicle.total_vehicles += 1\nVehicle.all_models.append(model)\ndef get_info(self):\nreturn \"Model: \" + self.model\ndef get_total():\nreturn Vehicle.total_vehicles\ndef count_models_starting_with(letter):\ncount = 0\nfor m in Vehicle.all_models:\nif m.startswith(letter):\ncount += 1\nreturn count\nclass ElectricVehicle(Vehicle):\nev_count = 0\ndef __init__(self, model, battery):\nVehicle.__init__(self, model)\nself.battery = battery\nElectricVehicle.ev_count += 1\nif battery < 40:\nself.status = \"Low\"\nelse:\nself.status = \"OK\"\ndef get_info(self):\nreturn (\nf\"{Vehicle.get_info(self)}, \"\nf\"Battery: {self.battery})%, \"\nf\"Status: {self.status}\"\n)\nclass PetrolVehicle(Vehicle):\npv_count = 0\ndef __init__(self, model, fuel):\nVehicle.__init__(self, model)\nself.fuel = fuel\nPetrolVehicle.pv_count += 1\ndef get_info(self):\nreturn f\"{Vehicle.get_info(self)}, Fuel: {self.fuel} L\"\nfleet = [\nElectricVehicle(\"Tesla Model 3\", 75),\nElectricVehicle(\"Mahindra e2o\", 35),\nPetrolVehicle(\"Hyundai i10\", 20),\nPetrolVehicle(\"Swift\", 12),\nElectricVehicle(\"Tata Tigor EV\", 80),\nVehicle(\"Generic Cycle\")\n]\nlow_battery_models = []\nfor v in fleet:\nif isinstance(v, ElectricVehicle):\nif v.status == \"Low\":\nlow_battery_models.append(v.model)\ncount = 0\nfor v in fleet:\nif isinstance(v, Vehicle):\ncount += 1\nprint(count)",
            prompt: "What does fleet[1].get_info() return?",
            options: [
              "Model: Mahindra e2o, Battery: 35%, Status: Low",
              "Model: Mahindra e2o, Fuel: 35L",
              "Model: Mahindra e2o",
              "Model: Mahindra e2o, Battery: 35%"
            ],
            answer: 0,
            explanation: ""
          }
        ]
      }
    ]
  },
  {
    slug: "python-end-term-aug-2025-an",
    title: "Python End Term · 31 Aug 2025 (AN)",
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
        subjectSlug: "programming-in-python",
        title: "Programming in Python",
        short: "Python",
        questions: [
          {
            id: "python-end-term-aug-2025-an-q1",
            type: "mcq",
            marks: 3,
            prompt: "Given the following code snippet, what will be the output?\nif None:\nprint(\"None is True\")\nelif 0:\nprint(\"0 is True\")\nelif \"\":\nprint(\"Empty string is True\")\nelse:\nprint(\"All False\")",
            options: [
              "None is True",
              "0 is True",
              "Empty string is True",
              "All False"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "python-end-term-aug-2025-an-q2",
            type: "mcq",
            marks: 3,
            prompt: "Consider the below code snippet.\ndef updated_val(d, key, val):\nif key in d:\nd[key] += val\nelse:\nd[key] = val\nreturn d[key]\nmy_dict = {'a': 2, 'b': 3}\nprint(\nupdated_val(my_dict, 'c', 4)\n+ updated_val(my_dict, 'c', 2)\n+ updated_val(my_dict, 'a', 2)\n)\nWhat will be the output of the above code",
            options: [
              "6",
              "14",
              "10",
              "Raises KeyError"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "python-end-term-aug-2025-an-q3",
            type: "mcq",
            marks: 3,
            prompt: "Given the following code snippet, what will be the output?\na = (1, 2)\nb = (3, 4)\nc = ((5, 6),)\nd = a + b + c\ne = d[2:]\nf = d[:2] + (e[2],)\nprint(f)",
            options: [
              "(3, 4, (5, 6))",
              "(3, 4, 5, 6)",
              "(1, 2, (5, 6))",
              "(1, 2, 5, 6)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "python-end-term-aug-2025-an-q4",
            type: "mcq",
            marks: 3,
            prompt: "Consider the below output.\n1 4 7\n2 5 8\n3 6 9\nSelect the code snippet that will generate the above output.",
            options: [
              "matrix = [[i + (j+1)*3 for i in range(3)] for j in range(3)]\nfor row in matrix:\nprint(*row)",
              "matrix = [[(i+1) + j*3 for i in range(3)] for j in range(3)]\nfor row in matrix:\nprint(*row)",
              "matrix = [[(j+1) + i*3 for j in range(3)] for i in range(3)]\nfor row in matrix:\nprint(*row)",
              "matrix = [[(i+1) + j*3 for j in range(3)] for i in range(3)]\nfor row in matrix:\nprint(*row)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "python-end-term-aug-2025-an-q5",
            type: "mcq",
            marks: 3,
            prompt: "Given the following code snippet, what will be the output?\ndef update_records(records, updates):\nfor key, value in updates.items():\nif key in records and isinstance(records[key], dict):\nfor sub_key, sub_val in value.items():\nif sub_key in records[key]:\nrecords[key][sub_key] += sub_val\nelse:\nrecords[key][sub_key] = sub_val\nelse:\nrecords[key] = value\nreturn records\ndata = {\n\"A\": {\"x\": 10, \"y\": 20},\n\"B\": {\"x\": 5, \"z\": 15},\n\"C\": 100\n}\nupdates = {\n\"A\": {\"x\": 5, \"z\": 5},\n\"B\": {\"y\": 10},\n\"C\": {\"x\": 10},\n\"D\": {\"w\": 7}\n}\nresult = update_records(data, updates)\nprint(result)",
            options: [
              "A: {'x': 15, 'y': 20, 'z': 5}\nB: {'x': 5, 'z': 15, 'y': 10}\nC: {'x': 10}\nD: {'w': 7}",
              "A: {'x': 15, 'y': 20, 'z': 5}\nB: {'x': 5, 'z': 15, 'y': 10}\nC: {'x': 110}\nD: {'w': 7}",
              "A: {'x': 5, 'z': 5}\nB: {'y': 10}\nC: {'x': 10}\nD: {'w': 7}",
              "A: {'x': 5, 'y': 20, 'z': 5}\nB: {'x': 5, 'z': 15, 'y': 10}\nC: 100\nD: {'w': 7}"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "python-end-term-aug-2025-an-q6",
            type: "mcq",
            marks: 3,
            prompt: "Given the following code snippet, what will be the output?\ndef get_square(items, i):\nreturn items[i]**2\ndef safe_get_square(items,i):\ntry:\nreturn get_square(items,i)\nexcept IndexError:\nreturn 0\nexcept:\nreturn -1\nnums = [5, -2, 3]\nprint(safe_get_square(nums , 1))\nprint(safe_get_square(nums , -1))\nprint(safe_get_square([] , -1))\nprint(safe_get_square(None , 1))",
            options: [
              "25\n0\n-1\n-1",
              "4\n4\n-1\n-1",
              "4\n9\n-1\n-1",
              "4\n9\n0\n-1"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "python-end-term-aug-2025-an-q7",
            type: "multi",
            marks: 3,
            prompt: "Consider the following snippet of code:\nt1 = (1, 2, 3)\nt2 = (4, 5, 6)\nt3 = t1 + t2\nt4 = (t1, t2)\nprint(t3[2:5])\nprint(len(t4))\nprint(5 in t2)\ntry:\nt1[0] = 10\nexcept:\nt1 = t3[0]\nprint(t1)\nSelect all that apply.",
            options: [
              "The First Line of output is _((3, 4, 5, 6))",
              "The First Line of output is _((3, 4, 5))",
              "The Second Line of output is _2",
              "The Third Line of output is _(True)",
              "The Fourth Line of output is _3"
            ],
            answer: [
              1,
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "python-end-term-aug-2025-an-q8",
            type: "multi",
            marks: 3,
            prompt: "Consider the following snippet of code:\nfilename = \"test.txt\"\nwith open(filename, \"w\") as f:\nf.write(\"\\n\".join((f\"Line{i}\" for i in range(1,11))))\nwith open(filename, \"r\") as f:\nf.readline()\nf.readline()\nprint(f.read(5))\nf.readline()\nprint(f.read(10))\nf.seek(0)\nprint(f.read(5))\nf.readline()\nf.readline()\nprint(f.read(5))\nSelect all that apply.\nNote\n• If a value is passed to _(f.read) , it reads that many number of characters from the current position of the file pointer.\n• The _(f.seek) method moves the position of the file pointer to the given number of chars after the start of the file.",
            options: [
              "The first line of the output is _(Line3) .",
              "The second line of the output is _(Line5) .",
              "The second line of the output is _(Line4) .",
              "There are 5 lines in the output.",
              "The output contains empty lines."
            ],
            answer: [
              0,
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "python-end-term-aug-2025-an-q9",
            type: "mcq",
            marks: 3,
            prompt: "Consider the following snippet of code:\nclass Shape:\ndef __init__(self):\npass\ndef area(self):\nreturn \"Area not defined\"\ndef describe(self):\nreturn f\"I am a shape. Area: {self.area()}\"\nclass Rectangle(Shape):\ndef __init__(self, width, height):\nself.width = width\nself.height = height\ndef area(self):\nreturn self.width * self.height\nclass Circle(Shape):\ndef __init__(self, radius):\nself.radius = radius\nr = Rectangle(4, 5)\nc = Circle(3)\nprint(r.describe())\nprint(c.describe())\nWhat will be the output?",
            options: [
              "I am a shape. Area: 20\nI am a shape. Area: Area not defined",
              "I am a shape. Area: Area not defined\nI am a shape. Area: Area not defined",
              "AttributeError: 'Rectangle' object has no attribute 'describe'",
              "NameError: describe is not defined",
              "I am a shape. Area: 20\nI am a shape. Area: 28.26"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "python-end-term-aug-2025-an-q10",
            type: "numerical",
            marks: 3,
            prompt: "Consider the below python code.\nlst = []\nfor i in range(5):\nlst.append(i)\nlst.append(i*10)\nlst[1:4] = [100]\nprint(sum(lst))\nWhat will be the output of the given code?",
            answer: 199,
            explanation: ""
          },
          {
            id: "python-end-term-aug-2025-an-q11",
            type: "numerical",
            marks: 3,
            prompt: "Consider the below python code.\ndef process_array(arr):\ntotal = 0\nfor i, row in enumerate(arr):\ntotal += row[i]\nreturn total\narray = []\nfor i in range(5):\nrow = []\nfor j in range(i + 1):\nrow.append((i + 1) * (j + 1))\narray.append(row)\nprint(process_array(array))\nWhat will be the output of the given code?",
            answer: 55,
            explanation: ""
          },
          {
            id: "python-end-term-aug-2025-an-q12",
            type: "numerical",
            marks: 3,
            prompt: "Consider the below python code.\ndef procedure(child_dict, i):\nif i not in child_dict.keys():\nreturn 1\nans = 1\nfor j in child_dict[i]:\nans += procedure(child_dict, j)\nreturn ans\nchild_dict = dict()\nchild_dict[0] = [1,2]\nchild_dict[1] = [3,4,5]\nchild_dict[2] = [6,7,8]\nprint(procedure(child_dict,0))\nWhat will be the output of the given code?",
            answer: 9,
            explanation: ""
          },
          {
            id: "python-end-term-aug-2025-an-q13",
            type: "numerical",
            marks: 3,
            prompt: "Consider the below python code.\nclass A:\ndef __init__(self):\nself.value = 5\ndef add(self, num):\nself.value += num\nreturn self.value\nclass B(A):\ndef __init__(self):\nsuper().__init__()\nself.value *= 2\ndef add(self, num):\nreturn super().add(num * 2)\nobj = B()\nresult = obj.add(3)\nprint(result)\nWhat will be the output of the given code?",
            answer: 16,
            explanation: ""
          },
          {
            id: "python-end-term-aug-2025-an-q14",
            type: "numerical",
            marks: 2,
            passage: "Consider the below python code.\ndef create_and_write_file(filename, num_lines):\nwith open(filename, \"w\") as f:\nfor i in range(1, num_lines + 1):\nf.write(f\"Line {i}\\n\")\ndef random_access_read(filename, seek_pos):\nwith open(filename, \"r\") as f:\nfirst_chars = f.read(5)\nf.seek(seek_pos)\nline = f.readline()\nrest = f.readlines()\nfor line in rest:\nprint(line.strip())\ndef overwrite_some_text(filename, overwrite_pos, text):\nwith open(filename, \"r+\") as f:\nf.seek(overwrite_pos)\noriginal = f.readline()\nf.seek(overwrite_pos)\nf.write(text + \"\\n\")\nfilename = \"example_file.txt\"\nnum_lines = 6\nseek_pos = 10\noverwrite_pos = 21\noverwrite_text = \"OVERWRITTEN_TEXT\"\ncreate_and_write_file(filename, num_lines)\noverwrite_some_text(filename, overwrite_pos, overwrite_text)\nBased on the given code snippet answer the given subquestions.",
            prompt: "On executing the given code, how many number of lines will be there in the file example_file.txt ?",
            answer: 5,
            explanation: ""
          },
          {
            id: "python-end-term-aug-2025-an-q15",
            type: "mcq",
            marks: 3,
            passage: "Consider the below python code.\ndef create_and_write_file(filename, num_lines):\nwith open(filename, \"w\") as f:\nfor i in range(1, num_lines + 1):\nf.write(f\"Line {i}\\n\")\ndef random_access_read(filename, seek_pos):\nwith open(filename, \"r\") as f:\nfirst_chars = f.read(5)\nf.seek(seek_pos)\nline = f.readline()\nrest = f.readlines()\nfor line in rest:\nprint(line.strip())\ndef overwrite_some_text(filename, overwrite_pos, text):\nwith open(filename, \"r+\") as f:\nf.seek(overwrite_pos)\noriginal = f.readline()\nf.seek(overwrite_pos)\nf.write(text + \"\\n\")\nfilename = \"example_file.txt\"\nnum_lines = 6\nseek_pos = 10\noverwrite_pos = 21\noverwrite_text = \"OVERWRITTEN_TEXT\"\ncreate_and_write_file(filename, num_lines)\noverwrite_some_text(filename, overwrite_pos, overwrite_text)\nBased on the given code snippet answer the given subquestions.",
            prompt: "What will be printed if we call random_access_read(filename, seek_pos) immediately after running the given code?",
            options: [
              "Line 1\nLine 2\nLine 3\nOVERWRITTEN_TEXT\ne 6",
              "Line 3\nOVERWRITTEN_TEXT\ne 6",
              "Line 3\nLinOVERWRITTEN_TEXT",
              "Line 1\nLine 2\nLine 3\nLine 4\nLine 5\nLine 6"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "python-end-term-aug-2025-an-q16",
            type: "mcq",
            marks: 2,
            passage: "Consider the below python code.\ndef categorize_numbers(numbers):\ncategories = {\n\"cat_1\": set(),\n\"cat_2\": set(),\n\"cat_3\": set()\n}\ndef check(n):\nif n % 5 == 0:\nreturn True\nreturn False\nfor num in numbers:\nif num % 2 == 0:\ncategories[\"cat_1\"].add(num)\nelse:\ncategories[\"cat_2\"].add(num)\nif check(num):\ncategories[\"cat_3\"].add(num)\nreturn categories\nresult = categorize_numbers([\n2, 3, 4, 2, 5, 6, 3, 2, 7, 8,\n9, 10, 5, 4, 7, 8, 3, 10, 2\n])\nBased on the given code snippet answer the given subquestions.",
            prompt: "What will be the value of the following expression after running the given code snippet?\nsorted(result[\"cat_1\"] & result[\"cat_3\"])",
            options: [
              "[10]",
              "[5]",
              "[2, 4, 5, 6, 8, 10]",
              "[5, 10]"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "python-end-term-aug-2025-an-q17",
            type: "numerical",
            marks: 2,
            passage: "Consider the below python code.\ndef categorize_numbers(numbers):\ncategories = {\n\"cat_1\": set(),\n\"cat_2\": set(),\n\"cat_3\": set()\n}\ndef check(n):\nif n % 5 == 0:\nreturn True\nreturn False\nfor num in numbers:\nif num % 2 == 0:\ncategories[\"cat_1\"].add(num)\nelse:\ncategories[\"cat_2\"].add(num)\nif check(num):\ncategories[\"cat_3\"].add(num)\nreturn categories\nresult = categorize_numbers([\n2, 3, 4, 2, 5, 6, 3, 2, 7, 8,\n9, 10, 5, 4, 7, 8, 3, 10, 2\n])\nBased on the given code snippet answer the given subquestions.",
            prompt: "What will be the value of the following expression after running the given code snippet?\nlen(result[\"cat_1\"] | result[\"cat_2\"] | result[\"cat_3\"])",
            answer: 9,
            explanation: ""
          },
          {
            id: "python-end-term-aug-2025-an-q18",
            type: "multi",
            marks: 2,
            passage: "Consider the below python code.\ndef categorize_numbers(numbers):\ncategories = {\n\"cat_1\": set(),\n\"cat_2\": set(),\n\"cat_3\": set()\n}\ndef check(n):\nif n % 5 == 0:\nreturn True\nreturn False\nfor num in numbers:\nif num % 2 == 0:\ncategories[\"cat_1\"].add(num)\nelse:\ncategories[\"cat_2\"].add(num)\nif check(num):\ncategories[\"cat_3\"].add(num)\nreturn categories\nresult = categorize_numbers([\n2, 3, 4, 2, 5, 6, 3, 2, 7, 8,\n9, 10, 5, 4, 7, 8, 3, 10, 2\n])\nBased on the given code snippet answer the given subquestions.",
            prompt: "If result = categorize_numbers([1, 2, 10, 15, 20]) , which of the following expression(s) would be evaluated as _(True) ?",
            options: [
              "result == {\n'cat_1': {2, 10, 20},\n'cat_2': {1, 15},\n'cat_3': {10, 20, 15}\n}",
              "len(result[\"cat_1\"] & result[\"cat_3\"]) == 2",
              "len(result[\"cat_1\"] & result[\"cat_2\"]) == 5",
              "(result[\"cat_1\"] & result[\"cat_2\"] | result[\"cat_3\"]) == {10,20,15}"
            ],
            answer: [
              0,
              1,
              3
            ],
            explanation: ""
          }
        ]
      }
    ]
  },
  {
    slug: "python-end-term-apr-2025-fn",
    title: "Python End Term · 13 Apr 2025 (FN)",
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
        subjectSlug: "programming-in-python",
        title: "Programming in Python",
        short: "Python",
        questions: [
          {
            id: "python-end-term-apr-2025-fn-q1",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-apr-2025-fn/q1-1.webp#575x381)",
            options: [
              "It reverses the entire sub-list from left to right, regardless of whether the elements are odd or even.",
              "It reverses only the odd elements in the range [left, right], leaving even elements in their original positions.",
              "It moves all even elements to the left and all odd elements to the right (a partition), but does not change the relative order of the odd elements themselves.",
              "It sorts the sub-list from left to right in ascending order, ignoring whether elements are odd or even."
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "python-end-term-apr-2025-fn-q2",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-apr-2025-fn/q2-1.webp#549x254)",
            options: [
              "2",
              "3",
              "5",
              "It will give an error"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "python-end-term-apr-2025-fn-q3",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-apr-2025-fn/q3-1.webp#444x444)",
            options: [
              "![Figure](/pyq/python-end-term-apr-2025-fn/q3-opt1-1.webp#60x91)",
              "![Figure](/pyq/python-end-term-apr-2025-fn/q3-opt2-1.webp#65x89)",
              "![Figure](/pyq/python-end-term-apr-2025-fn/q3-opt3-1.webp#61x78)",
              "![Figure](/pyq/python-end-term-apr-2025-fn/q3-opt4-1.webp#63x60)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "python-end-term-apr-2025-fn-q4",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-apr-2025-fn/q4-1.webp#575x321)",
            options: [
              "![Figure](/pyq/python-end-term-apr-2025-fn/q4-opt1-1.webp#21x22)",
              "![Figure](/pyq/python-end-term-apr-2025-fn/q4-opt2-1.webp#22x26)",
              "![Figure](/pyq/python-end-term-apr-2025-fn/q4-opt3-1.webp#26x24)",
              "![Figure](/pyq/python-end-term-apr-2025-fn/q4-opt4-1.webp#22x25)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "python-end-term-apr-2025-fn-q5",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-apr-2025-fn/q5-1.webp#519x263)",
            options: [
              "Only X",
              "Only Y",
              "Only Z",
              "X and Z"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "python-end-term-apr-2025-fn-q6",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-apr-2025-fn/q6-1.webp#575x810)",
            options: [
              "![Figure](/pyq/python-end-term-apr-2025-fn/q6-opt1-1.webp#191x23)",
              "![Figure](/pyq/python-end-term-apr-2025-fn/q6-opt2-1.webp#186x25)",
              "![Figure](/pyq/python-end-term-apr-2025-fn/q6-opt3-1.webp#317x23)",
              "![Figure](/pyq/python-end-term-apr-2025-fn/q6-opt4-1.webp#326x25)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "python-end-term-apr-2025-fn-q7",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-apr-2025-fn/q7-1.webp#408x393)",
            answer: 32,
            explanation: ""
          },
          {
            id: "python-end-term-apr-2025-fn-q8",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-apr-2025-fn/q8-1.webp#475x166)",
            answer: 10,
            explanation: ""
          },
          {
            id: "python-end-term-apr-2025-fn-q9",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-apr-2025-fn/q9-1.webp#575x192)",
            answer: 5,
            explanation: ""
          },
          {
            id: "python-end-term-apr-2025-fn-q10",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-apr-2025-fn/q10-1.webp#382x197)",
            answer: 20,
            explanation: ""
          },
          {
            id: "python-end-term-apr-2025-fn-q11",
            type: "numerical",
            marks: 4,
            prompt: "![Figure](/pyq/python-end-term-apr-2025-fn/q11-1.webp#468x220)",
            answer: 39,
            explanation: ""
          },
          {
            id: "python-end-term-apr-2025-fn-q12",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-apr-2025-fn/q12-1.webp#575x316)",
            options: [
              "\"debitcard\", \"badcredit\"",
              "\"admirer\", \"married\"",
              "\"schoolmaster\", \"theclassroom\"",
              "\"aabbcc\", \"abcabc\""
            ],
            answer: [
              0,
              1,
              3
            ],
            explanation: ""
          },
          {
            id: "python-end-term-apr-2025-fn-q13",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-apr-2025-fn/q13-1.webp#383x356)",
            options: [
              "![Figure](/pyq/python-end-term-apr-2025-fn/q13-opt1-1.webp#439x20)",
              "![Figure](/pyq/python-end-term-apr-2025-fn/q13-opt2-1.webp#466x22)",
              "![Figure](/pyq/python-end-term-apr-2025-fn/q13-opt3-1.webp#458x23)",
              "![Figure](/pyq/python-end-term-apr-2025-fn/q13-opt4-1.webp#439x25)"
            ],
            answer: [
              0,
              2
            ],
            explanation: ""
          },
          {
            id: "python-end-term-apr-2025-fn-q14",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-apr-2025-fn/q14-1.webp#575x322)",
            options: [
              "![Figure](/pyq/python-end-term-apr-2025-fn/q14-opt1-1.webp#145x18)",
              "![Figure](/pyq/python-end-term-apr-2025-fn/q14-opt2-1.webp#144x26)",
              "![Figure](/pyq/python-end-term-apr-2025-fn/q14-opt3-1.webp#382x65)",
              "![Figure](/pyq/python-end-term-apr-2025-fn/q14-opt4-1.webp#335x56)"
            ],
            answer: [
              0,
              3
            ],
            explanation: ""
          },
          {
            id: "python-end-term-apr-2025-fn-q15",
            type: "mcq",
            marks: 1.5,
            passage: "![Figure](/pyq/python-end-term-apr-2025-fn/q15-passage-1.webp#495x628)\n\nBased on the above data, answer the given subquestions.",
            prompt: "What will be the output of the given code?",
            options: [
              "Employee Name: Alice Salary: 75000",
              "Employee Name: Alice Salary: 80000 Manager of Department: HR",
              "Employee Name: Alice Salary: 80000",
              "Manager of Department: HR"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "python-end-term-apr-2025-fn-q16",
            type: "numerical",
            marks: 1.5,
            passage: "![Figure](/pyq/python-end-term-apr-2025-fn/q15-passage-1.webp#495x628)\n\nBased on the above data, answer the given subquestions.",
            prompt: "If the below main code is executed after the class definition, what will be the output?\n\n![Figure](/pyq/python-end-term-apr-2025-fn/q16-1.webp#436x151)",
            answer: 3,
            explanation: ""
          },
          {
            id: "python-end-term-apr-2025-fn-q17",
            type: "mcq",
            marks: 1.5,
            passage: "![Figure](/pyq/python-end-term-apr-2025-fn/q17-passage-1.webp#575x229)",
            prompt: "![Figure](/pyq/python-end-term-apr-2025-fn/q17-1.webp#343x70)",
            options: [
              "![Figure](/pyq/python-end-term-apr-2025-fn/q17-opt1-1.webp#254x27)",
              "![Figure](/pyq/python-end-term-apr-2025-fn/q17-opt2-1.webp#205x22)",
              "![Figure](/pyq/python-end-term-apr-2025-fn/q17-opt3-1.webp#206x22)",
              "![Figure](/pyq/python-end-term-apr-2025-fn/q17-opt4-1.webp#210x25)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "python-end-term-apr-2025-fn-q18",
            type: "multi",
            marks: 1.5,
            passage: "![Figure](/pyq/python-end-term-apr-2025-fn/q17-passage-1.webp#575x229)",
            prompt: "![Figure](/pyq/python-end-term-apr-2025-fn/q18-1.webp#269x52)",
            options: [
              "![Figure](/pyq/python-end-term-apr-2025-fn/q18-opt1-1.webp#182x22)",
              "![Figure](/pyq/python-end-term-apr-2025-fn/q18-opt2-1.webp#297x21)",
              "![Figure](/pyq/python-end-term-apr-2025-fn/q18-opt3-1.webp#203x24)",
              "![Figure](/pyq/python-end-term-apr-2025-fn/q18-opt4-1.webp#132x25)"
            ],
            answer: [
              0,
              1
            ],
            explanation: ""
          },
          {
            id: "python-end-term-apr-2025-fn-q19",
            type: "multi",
            marks: 1,
            passage: "![Figure](/pyq/python-end-term-apr-2025-fn/q17-passage-1.webp#575x229)",
            prompt: "![Figure](/pyq/python-end-term-apr-2025-fn/q19-1.webp#273x62)",
            options: [
              "![Figure](/pyq/python-end-term-apr-2025-fn/q19-opt1-1.webp#162x22)",
              "![Figure](/pyq/python-end-term-apr-2025-fn/q19-opt2-1.webp#261x26)",
              "![Figure](/pyq/python-end-term-apr-2025-fn/q19-opt3-1.webp#178x24)",
              "![Figure](/pyq/python-end-term-apr-2025-fn/q19-opt4-1.webp#107x27)"
            ],
            answer: [
              0,
              1,
              3
            ],
            explanation: ""
          }
        ]
      }
    ]
  },
  {
    slug: "python-end-term-apr-2025-an",
    title: "Python End Term · 13 Apr 2025 (AN)",
    description: "End Term paper from the January 2025 term, afternoon session on 13 Apr 2025, with the official answer key.",
    difficulty: "Standard",
    durationMin: 90,
    endTerm: {
      date: "2025-04-13",
      session: "AN",
      term: "January 2025"
    },
    sections: [
      {
        subjectSlug: "programming-in-python",
        title: "Programming in Python",
        short: "Python",
        questions: [
          {
            id: "python-end-term-apr-2025-an-q1",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-apr-2025-an/q1-1.webp#561x416)",
            options: [
              "It converts all vowels to uppercase and consonants to lowercase while leaving digits unchanged.",
              "It reverses the order of characters in the string while converting all letters to lowercase.",
              "It removes all non-alphabetic characters and alternates uppercase and lowercase letters in the remaining string.",
              "It alternates the case of alphabetical characters based on their position, starting with uppercase at index 0, leaving non-alphabetic characters unchanged."
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "python-end-term-apr-2025-an-q2",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-apr-2025-an/q2-1.webp#575x328)",
            options: [
              "2",
              "3",
              "4",
              "6"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "python-end-term-apr-2025-an-q3",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-apr-2025-an/q3-1.webp#525x527)",
            options: [
              "![Figure](/pyq/python-end-term-apr-2025-an/q3-opt1-1.webp#100x91)",
              "![Figure](/pyq/python-end-term-apr-2025-an/q3-opt2-1.webp#96x110)",
              "![Figure](/pyq/python-end-term-apr-2025-an/q3-opt3-1.webp#93x114)",
              "![Figure](/pyq/python-end-term-apr-2025-an/q3-opt4-1.webp#94x93)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "python-end-term-apr-2025-an-q4",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-apr-2025-an/q4-1.webp#419x414)",
            options: [
              "8",
              "4",
              "12",
              "3"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "python-end-term-apr-2025-an-q5",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-apr-2025-an/q5-1.webp#416x295)",
            options: [
              "Only A",
              "Only B",
              "Only C",
              "A and C"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "python-end-term-apr-2025-an-q6",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-apr-2025-an/q6-1.webp#575x842)",
            options: [
              "Only Snippet-1 is correct",
              "Only Snippet-2 is correct",
              "Both Snippet-1 and Snippet-2 are correct",
              "Both Snippet-1 and Snippet-2 are incorrect"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "python-end-term-apr-2025-an-q7",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-apr-2025-an/q7-1.webp#444x562)",
            answer: 46,
            explanation: ""
          },
          {
            id: "python-end-term-apr-2025-an-q8",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-apr-2025-an/q8-1.webp#539x279)",
            answer: 60,
            explanation: ""
          },
          {
            id: "python-end-term-apr-2025-an-q9",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-apr-2025-an/q9-1.webp#575x248)",
            answer: 6,
            explanation: ""
          },
          {
            id: "python-end-term-apr-2025-an-q10",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-apr-2025-an/q10-1.webp#465x463)",
            answer: 80,
            explanation: ""
          },
          {
            id: "python-end-term-apr-2025-an-q11",
            type: "numerical",
            marks: 4,
            prompt: "![Figure](/pyq/python-end-term-apr-2025-an/q11-1.webp#575x312)",
            answer: 4,
            explanation: ""
          },
          {
            id: "python-end-term-apr-2025-an-q12",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-apr-2025-an/q12-1.webp#575x433)",
            options: [
              "\"taco cat\"",
              "\"civic room\"",
              "\"racecar\"",
              "\"level up\""
            ],
            answer: [
              0,
              2
            ],
            explanation: ""
          },
          {
            id: "python-end-term-apr-2025-an-q13",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-apr-2025-an/q13-1.webp#484x470)",
            options: [
              "![Figure](/pyq/python-end-term-apr-2025-an/q13-opt1-1.webp#575x39)",
              "![Figure](/pyq/python-end-term-apr-2025-an/q13-opt2-1.webp#575x37)",
              "![Figure](/pyq/python-end-term-apr-2025-an/q13-opt3-1.webp#575x39)",
              "![Figure](/pyq/python-end-term-apr-2025-an/q13-opt4-1.webp#573x38)"
            ],
            answer: [
              1,
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "python-end-term-apr-2025-an-q14",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-apr-2025-an/q14-1.webp#575x371)",
            options: [
              "![Figure](/pyq/python-end-term-apr-2025-an/q14-opt1-1.webp#542x34)",
              "![Figure](/pyq/python-end-term-apr-2025-an/q14-opt2-1.webp#541x38)",
              "![Figure](/pyq/python-end-term-apr-2025-an/q14-opt3-1.webp#360x108)",
              "![Figure](/pyq/python-end-term-apr-2025-an/q14-opt4-1.webp#378x110)"
            ],
            answer: [
              1,
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "python-end-term-apr-2025-an-q15",
            type: "multi",
            marks: 1.5,
            passage: "Based on the below data answer the given subquestions.\n\n![Figure](/pyq/python-end-term-apr-2025-an/q15-passage-1.webp#575x826)",
            prompt: "Which of the following statements about method overriding in PrimeProduct is true?",
            options: [
              "![Figure](/pyq/python-end-term-apr-2025-an/q15-opt1-1.webp#284x98)",
              "![Figure](/pyq/python-end-term-apr-2025-an/q15-opt2-1.webp#365x86)",
              "![Figure](/pyq/python-end-term-apr-2025-an/q15-opt3-1.webp#325x62)",
              "![Figure](/pyq/python-end-term-apr-2025-an/q15-opt4-1.webp#298x84)"
            ],
            answer: [
              0,
              1,
              3
            ],
            explanation: ""
          },
          {
            id: "python-end-term-apr-2025-an-q16",
            type: "mcq",
            marks: 1.5,
            passage: "Based on the below data answer the given subquestions.\n\n![Figure](/pyq/python-end-term-apr-2025-an/q15-passage-1.webp#575x826)",
            prompt: "![Figure](/pyq/python-end-term-apr-2025-an/q16-1.webp#311x65)",
            options: [
              "1",
              "2",
              "3",
              "Cannot be determined"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "python-end-term-apr-2025-an-q17",
            type: "numerical",
            marks: 1,
            passage: "Based on the below code answer the given subquestions.\n\n![Figure](/pyq/python-end-term-apr-2025-an/q17-passage-1.webp#396x185)",
            prompt: "![Figure](/pyq/python-end-term-apr-2025-an/q17-1.webp#284x66)",
            answer: 10,
            explanation: ""
          },
          {
            id: "python-end-term-apr-2025-an-q18",
            type: "numerical",
            marks: 1.5,
            passage: "Based on the below code answer the given subquestions.\n\n![Figure](/pyq/python-end-term-apr-2025-an/q17-passage-1.webp#396x185)",
            prompt: "![Figure](/pyq/python-end-term-apr-2025-an/q18-1.webp#308x96)",
            answer: 5,
            explanation: ""
          },
          {
            id: "python-end-term-apr-2025-an-q19",
            type: "numerical",
            marks: 1.5,
            passage: "Based on the below code answer the given subquestions.\n\n![Figure](/pyq/python-end-term-apr-2025-an/q17-passage-1.webp#396x185)",
            prompt: "What will be the value passed to the function in the call before the base case, if the function is called with the input 32456 ?",
            answer: 3,
            explanation: ""
          }
        ]
      }
    ]
  },
  {
    slug: "python-end-term-dec-2024-fn",
    title: "Python End Term · 22 Dec 2024 (FN)",
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
        subjectSlug: "programming-in-python",
        title: "Programming in Python",
        short: "Python",
        questions: [
          {
            id: "python-end-term-dec-2024-fn-q1",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-dec-2024-fn/q1-1.webp#575x337)",
            options: [
              "![Figure](/pyq/python-end-term-dec-2024-fn/q1-opt1-1.webp#346x26)",
              "![Figure](/pyq/python-end-term-dec-2024-fn/q1-opt2-1.webp#343x24)",
              "![Figure](/pyq/python-end-term-dec-2024-fn/q1-opt3-1.webp#575x27)",
              "![Figure](/pyq/python-end-term-dec-2024-fn/q1-opt4-1.webp#575x30)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "python-end-term-dec-2024-fn-q2",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-dec-2024-fn/q2-1.webp#489x492)",
            options: [
              "![Figure](/pyq/python-end-term-dec-2024-fn/q2-opt1-1.webp#117x87)",
              "![Figure](/pyq/python-end-term-dec-2024-fn/q2-opt2-1.webp#140x47)",
              "![Figure](/pyq/python-end-term-dec-2024-fn/q2-opt3-1.webp#112x65)",
              "![Figure](/pyq/python-end-term-dec-2024-fn/q2-opt4-1.webp#144x128)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "python-end-term-dec-2024-fn-q3",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-dec-2024-fn/q3-1.webp#575x587)",
            options: [
              "![Figure](/pyq/python-end-term-dec-2024-fn/q3-opt1-1.webp#349x72)",
              "![Figure](/pyq/python-end-term-dec-2024-fn/q3-opt2-1.webp#307x90)",
              "![Figure](/pyq/python-end-term-dec-2024-fn/q3-opt3-1.webp#307x71)",
              "![Figure](/pyq/python-end-term-dec-2024-fn/q3-opt4-1.webp#307x88)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "python-end-term-dec-2024-fn-q4",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-dec-2024-fn/q4-1.webp#367x415)",
            options: [
              "![Figure](/pyq/python-end-term-dec-2024-fn/q4-opt1-1.webp#112x48)",
              "![Figure](/pyq/python-end-term-dec-2024-fn/q4-opt2-1.webp#181x45)",
              "![Figure](/pyq/python-end-term-dec-2024-fn/q4-opt3-1.webp#121x47)",
              "![Figure](/pyq/python-end-term-dec-2024-fn/q4-opt4-1.webp#312x46)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "python-end-term-dec-2024-fn-q5",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-dec-2024-fn/q5-1.webp#575x176)",
            options: [
              "The return statement in line 3 which is inside the if-block",
              "The return statement in line 4 which is outside the if-block",
              "Both the return statements are executed",
              "Neither of the return statements is executed"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "python-end-term-dec-2024-fn-q6",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-dec-2024-fn/q6-1.webp#575x270)",
            options: [
              "![Figure](/pyq/python-end-term-dec-2024-fn/q6-opt1-1.webp#412x28)",
              "![Figure](/pyq/python-end-term-dec-2024-fn/q6-opt2-1.webp#421x29)",
              "![Figure](/pyq/python-end-term-dec-2024-fn/q6-opt3-1.webp#387x28)",
              "![Figure](/pyq/python-end-term-dec-2024-fn/q6-opt4-1.webp#379x25)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "python-end-term-dec-2024-fn-q7",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-dec-2024-fn/q7-1.webp#419x263)",
            answer: 8,
            explanation: ""
          },
          {
            id: "python-end-term-dec-2024-fn-q8",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-dec-2024-fn/q8-1.webp#410x255)",
            answer: 3,
            explanation: ""
          },
          {
            id: "python-end-term-dec-2024-fn-q9",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-dec-2024-fn/q9-1.webp#565x522)",
            answer: 1,
            explanation: ""
          },
          {
            id: "python-end-term-dec-2024-fn-q10",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-dec-2024-fn/q10-1.webp#521x224)",
            answer: 5,
            explanation: ""
          },
          {
            id: "python-end-term-dec-2024-fn-q11",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-dec-2024-fn/q11-1.webp#567x715)",
            answer: 76000,
            explanation: ""
          },
          {
            id: "python-end-term-dec-2024-fn-q12",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-dec-2024-fn/q12-1.webp#575x85)",
            options: [
              "![Figure](/pyq/python-end-term-dec-2024-fn/q12-opt1-1.webp#427x47)",
              "![Figure](/pyq/python-end-term-dec-2024-fn/q12-opt2-1.webp#363x48)",
              "![Figure](/pyq/python-end-term-dec-2024-fn/q12-opt3-1.webp#426x48)",
              "![Figure](/pyq/python-end-term-dec-2024-fn/q12-opt4-1.webp#359x49)",
              "![Figure](/pyq/python-end-term-dec-2024-fn/q12-opt5-1.webp#425x50)"
            ],
            answer: [
              0,
              1,
              4
            ],
            explanation: ""
          },
          {
            id: "python-end-term-dec-2024-fn-q13",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-dec-2024-fn/q13-1.webp#367x31)",
            options: [
              "![Figure](/pyq/python-end-term-dec-2024-fn/q13-opt1-1.webp#148x48)",
              "![Figure](/pyq/python-end-term-dec-2024-fn/q13-opt2-1.webp#192x48)",
              "![Figure](/pyq/python-end-term-dec-2024-fn/q13-opt3-1.webp#164x45)",
              "![Figure](/pyq/python-end-term-dec-2024-fn/q13-opt4-1.webp#207x49)"
            ],
            answer: [
              0,
              1
            ],
            explanation: ""
          },
          {
            id: "python-end-term-dec-2024-fn-q14",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-dec-2024-fn/q14-1.webp#575x454)",
            options: [
              "![Figure](/pyq/python-end-term-dec-2024-fn/q14-opt1-1.webp#372x27)",
              "![Figure](/pyq/python-end-term-dec-2024-fn/q14-opt2-1.webp#262x21)",
              "![Figure](/pyq/python-end-term-dec-2024-fn/q14-opt3-1.webp#275x25)",
              "![Figure](/pyq/python-end-term-dec-2024-fn/q14-opt4-1.webp#288x21)"
            ],
            answer: [
              0,
              1
            ],
            explanation: ""
          },
          {
            id: "python-end-term-dec-2024-fn-q15",
            type: "mcq",
            marks: 2,
            passage: "![Figure](/pyq/python-end-term-dec-2024-fn/q15-passage-1.webp#483x334)",
            prompt: "![Figure](/pyq/python-end-term-dec-2024-fn/q15-1.webp#312x55)",
            options: [
              "![Figure](/pyq/python-end-term-dec-2024-fn/q15-opt1-1.webp#58x26)",
              "![Figure](/pyq/python-end-term-dec-2024-fn/q15-opt2-1.webp#62x27)",
              "![Figure](/pyq/python-end-term-dec-2024-fn/q15-opt3-1.webp#61x27)",
              "![Figure](/pyq/python-end-term-dec-2024-fn/q15-opt4-1.webp#47x28)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "python-end-term-dec-2024-fn-q16",
            type: "mcq",
            marks: 2,
            passage: "![Figure](/pyq/python-end-term-dec-2024-fn/q15-passage-1.webp#483x334)",
            prompt: "![Figure](/pyq/python-end-term-dec-2024-fn/q16-1.webp#368x50)",
            options: [
              "![Figure](/pyq/python-end-term-dec-2024-fn/q16-opt1-1.webp#142x27)",
              "![Figure](/pyq/python-end-term-dec-2024-fn/q16-opt2-1.webp#140x27)",
              "![Figure](/pyq/python-end-term-dec-2024-fn/q16-opt3-1.webp#157x25)",
              "![Figure](/pyq/python-end-term-dec-2024-fn/q16-opt4-1.webp#141x26)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "python-end-term-dec-2024-fn-q17",
            type: "mcq",
            marks: 1.5,
            passage: "![Figure](/pyq/python-end-term-dec-2024-fn/q17-passage-1.webp#575x400)",
            prompt: "![Figure](/pyq/python-end-term-dec-2024-fn/q17-1.webp#301x49)",
            options: [
              "![Figure](/pyq/python-end-term-dec-2024-fn/q17-opt1-1.webp#206x28)",
              "![Figure](/pyq/python-end-term-dec-2024-fn/q17-opt2-1.webp#153x26)",
              "![Figure](/pyq/python-end-term-dec-2024-fn/q17-opt3-1.webp#156x26)",
              "![Figure](/pyq/python-end-term-dec-2024-fn/q17-opt4-1.webp#157x22)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "python-end-term-dec-2024-fn-q18",
            type: "multi",
            marks: 1.5,
            passage: "![Figure](/pyq/python-end-term-dec-2024-fn/q17-passage-1.webp#575x400)",
            prompt: "![Figure](/pyq/python-end-term-dec-2024-fn/q18-1.webp#310x49)",
            options: [
              "![Figure](/pyq/python-end-term-dec-2024-fn/q18-opt1-1.webp#133x24)",
              "![Figure](/pyq/python-end-term-dec-2024-fn/q18-opt2-1.webp#157x24)",
              "![Figure](/pyq/python-end-term-dec-2024-fn/q18-opt3-1.webp#131x26)",
              "![Figure](/pyq/python-end-term-dec-2024-fn/q18-opt4-1.webp#153x26)"
            ],
            answer: [
              0,
              1
            ],
            explanation: ""
          },
          {
            id: "python-end-term-dec-2024-fn-q19",
            type: "mcq",
            marks: 1,
            passage: "![Figure](/pyq/python-end-term-dec-2024-fn/q17-passage-1.webp#575x400)",
            prompt: "![Figure](/pyq/python-end-term-dec-2024-fn/q19-1.webp#224x46)",
            options: [
              "![Figure](/pyq/python-end-term-dec-2024-fn/q19-opt1-1.webp#87x29)",
              "![Figure](/pyq/python-end-term-dec-2024-fn/q19-opt2-1.webp#110x25)",
              "![Figure](/pyq/python-end-term-dec-2024-fn/q19-opt3-1.webp#133x27)",
              "![Figure](/pyq/python-end-term-dec-2024-fn/q19-opt4-1.webp#87x28)"
            ],
            answer: 0,
            explanation: ""
          }
        ]
      }
    ]
  },
  {
    slug: "python-end-term-dec-2024-an",
    title: "Python End Term · 22 Dec 2024 (AN)",
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
        subjectSlug: "programming-in-python",
        title: "Programming in Python",
        short: "Python",
        questions: [
          {
            id: "python-end-term-dec-2024-an-q1",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-dec-2024-an/q1-1.webp#575x358)",
            options: [
              "![Figure](/pyq/python-end-term-dec-2024-an/q1-opt1-1.webp#95x35)",
              "![Figure](/pyq/python-end-term-dec-2024-an/q1-opt2-1.webp#55x35)",
              "![Figure](/pyq/python-end-term-dec-2024-an/q1-opt3-1.webp#82x34)",
              "![Figure](/pyq/python-end-term-dec-2024-an/q1-opt4-1.webp#53x33)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "python-end-term-dec-2024-an-q2",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-dec-2024-an/q2-1.webp#440x316)",
            options: [
              "An empty file",
              "A file with three lines of student data",
              "A file with student names only",
              "A file with student grades only"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "python-end-term-dec-2024-an-q3",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-dec-2024-an/q3-1.webp#537x517)",
            options: [
              "![Figure](/pyq/python-end-term-dec-2024-an/q3-opt1-1.webp#129x92)",
              "![Figure](/pyq/python-end-term-dec-2024-an/q3-opt2-1.webp#177x116)",
              "![Figure](/pyq/python-end-term-dec-2024-an/q3-opt3-1.webp#179x98)",
              "![Figure](/pyq/python-end-term-dec-2024-an/q3-opt4-1.webp#128x116)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "python-end-term-dec-2024-an-q4",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-dec-2024-an/q4-1.webp#531x401)",
            options: [
              "![Figure](/pyq/python-end-term-dec-2024-an/q4-opt1-1.webp#45x40)",
              "![Figure](/pyq/python-end-term-dec-2024-an/q4-opt2-1.webp#41x38)",
              "![Figure](/pyq/python-end-term-dec-2024-an/q4-opt3-1.webp#42x36)",
              "![Figure](/pyq/python-end-term-dec-2024-an/q4-opt4-1.webp#41x32)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "python-end-term-dec-2024-an-q5",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-dec-2024-an/q5-1.webp#396x345)",
            options: [
              "![Figure](/pyq/python-end-term-dec-2024-an/q5-opt1-1.webp#44x35)",
              "![Figure](/pyq/python-end-term-dec-2024-an/q5-opt2-1.webp#38x37)",
              "![Figure](/pyq/python-end-term-dec-2024-an/q5-opt3-1.webp#42x32)",
              "![Figure](/pyq/python-end-term-dec-2024-an/q5-opt4-1.webp#49x30)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "python-end-term-dec-2024-an-q6",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-dec-2024-an/q6-1.webp#338x322)",
            options: [
              "![Figure](/pyq/python-end-term-dec-2024-an/q6-opt1-1.webp#41x34)",
              "![Figure](/pyq/python-end-term-dec-2024-an/q6-opt2-1.webp#37x34)",
              "![Figure](/pyq/python-end-term-dec-2024-an/q6-opt3-1.webp#41x35)",
              "![Figure](/pyq/python-end-term-dec-2024-an/q6-opt4-1.webp#41x35)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "python-end-term-dec-2024-an-q7",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-dec-2024-an/q7-1.webp#320x274)",
            answer: 18,
            explanation: ""
          },
          {
            id: "python-end-term-dec-2024-an-q8",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-dec-2024-an/q8-1.webp#355x295)",
            answer: 6,
            explanation: ""
          },
          {
            id: "python-end-term-dec-2024-an-q9",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-dec-2024-an/q9-1.webp#572x526)",
            answer: 9,
            explanation: ""
          },
          {
            id: "python-end-term-dec-2024-an-q10",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-dec-2024-an/q10-1.webp#540x255)",
            answer: 4,
            explanation: ""
          },
          {
            id: "python-end-term-dec-2024-an-q11",
            type: "numerical",
            marks: 4,
            prompt: "![Figure](/pyq/python-end-term-dec-2024-an/q11-1.webp#429x601)",
            answer: 88,
            explanation: ""
          },
          {
            id: "python-end-term-dec-2024-an-q12",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-dec-2024-an/q12-1.webp#575x83)",
            options: [
              "![Figure](/pyq/python-end-term-dec-2024-an/q12-opt1-1.webp#422x59)",
              "![Figure](/pyq/python-end-term-dec-2024-an/q12-opt2-1.webp#375x51)",
              "![Figure](/pyq/python-end-term-dec-2024-an/q12-opt3-1.webp#424x53)",
              "![Figure](/pyq/python-end-term-dec-2024-an/q12-opt4-1.webp#360x51)",
              "![Figure](/pyq/python-end-term-dec-2024-an/q12-opt5-1.webp#424x54)"
            ],
            answer: [
              1,
              4
            ],
            explanation: ""
          },
          {
            id: "python-end-term-dec-2024-an-q13",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-dec-2024-an/q13-1.webp#575x382)",
            options: [
              "![Figure](/pyq/python-end-term-dec-2024-an/q13-opt1-1.webp#330x37)",
              "![Figure](/pyq/python-end-term-dec-2024-an/q13-opt2-1.webp#417x22)",
              "![Figure](/pyq/python-end-term-dec-2024-an/q13-opt3-1.webp#461x36)",
              "![Figure](/pyq/python-end-term-dec-2024-an/q13-opt4-1.webp#375x40)"
            ],
            answer: [
              0,
              1,
              2
            ],
            explanation: ""
          },
          {
            id: "python-end-term-dec-2024-an-q14",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/python-end-term-dec-2024-an/q14-1.webp#575x273)",
            options: [
              "![Figure](/pyq/python-end-term-dec-2024-an/q14-opt1-1.webp#399x30)",
              "![Figure](/pyq/python-end-term-dec-2024-an/q14-opt2-1.webp#531x26)",
              "![Figure](/pyq/python-end-term-dec-2024-an/q14-opt3-1.webp#340x23)",
              "![Figure](/pyq/python-end-term-dec-2024-an/q14-opt4-1.webp#459x27)"
            ],
            answer: [
              0,
              1,
              2
            ],
            explanation: ""
          },
          {
            id: "python-end-term-dec-2024-an-q15",
            type: "mcq",
            marks: 1.5,
            passage: "![Figure](/pyq/python-end-term-dec-2024-an/q15-passage-1.webp#522x280)",
            prompt: "![Figure](/pyq/python-end-term-dec-2024-an/q15-1.webp#388x61)",
            options: [
              "![Figure](/pyq/python-end-term-dec-2024-an/q15-opt1-1.webp#72x30)",
              "![Figure](/pyq/python-end-term-dec-2024-an/q15-opt2-1.webp#82x32)",
              "![Figure](/pyq/python-end-term-dec-2024-an/q15-opt3-1.webp#70x34)",
              "![Figure](/pyq/python-end-term-dec-2024-an/q15-opt4-1.webp#58x39)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "python-end-term-dec-2024-an-q16",
            type: "mcq",
            marks: 1.5,
            passage: "![Figure](/pyq/python-end-term-dec-2024-an/q15-passage-1.webp#522x280)",
            prompt: "![Figure](/pyq/python-end-term-dec-2024-an/q16-1.webp#373x60)",
            options: [
              "![Figure](/pyq/python-end-term-dec-2024-an/q16-opt1-1.webp#162x26)",
              "![Figure](/pyq/python-end-term-dec-2024-an/q16-opt2-1.webp#171x30)",
              "![Figure](/pyq/python-end-term-dec-2024-an/q16-opt3-1.webp#138x38)",
              "![Figure](/pyq/python-end-term-dec-2024-an/q16-opt4-1.webp#161x33)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "python-end-term-dec-2024-an-q17",
            type: "mcq",
            marks: 1.5,
            passage: "![Figure](/pyq/python-end-term-dec-2024-an/q17-passage-1.webp#575x382)",
            prompt: "![Figure](/pyq/python-end-term-dec-2024-an/q17-1.webp#383x62)",
            options: [
              "![Figure](/pyq/python-end-term-dec-2024-an/q17-opt1-1.webp#236x27)",
              "![Figure](/pyq/python-end-term-dec-2024-an/q17-opt2-1.webp#197x32)",
              "![Figure](/pyq/python-end-term-dec-2024-an/q17-opt3-1.webp#194x26)",
              "![Figure](/pyq/python-end-term-dec-2024-an/q17-opt4-1.webp#203x39)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "python-end-term-dec-2024-an-q18",
            type: "multi",
            marks: 1.5,
            passage: "![Figure](/pyq/python-end-term-dec-2024-an/q17-passage-1.webp#575x382)",
            prompt: "![Figure](/pyq/python-end-term-dec-2024-an/q18-1.webp#439x60)",
            options: [
              "![Figure](/pyq/python-end-term-dec-2024-an/q18-opt1-1.webp#161x33)",
              "![Figure](/pyq/python-end-term-dec-2024-an/q18-opt2-1.webp#306x29)",
              "![Figure](/pyq/python-end-term-dec-2024-an/q18-opt3-1.webp#273x33)",
              "![Figure](/pyq/python-end-term-dec-2024-an/q18-opt4-1.webp#214x29)"
            ],
            answer: [
              0,
              1
            ],
            explanation: ""
          },
          {
            id: "python-end-term-dec-2024-an-q19",
            type: "multi",
            marks: 1,
            passage: "![Figure](/pyq/python-end-term-dec-2024-an/q17-passage-1.webp#575x382)",
            prompt: "![Figure](/pyq/python-end-term-dec-2024-an/q19-1.webp#449x36)",
            options: [
              "![Figure](/pyq/python-end-term-dec-2024-an/q19-opt1-1.webp#169x29)",
              "![Figure](/pyq/python-end-term-dec-2024-an/q19-opt2-1.webp#162x28)",
              "![Figure](/pyq/python-end-term-dec-2024-an/q19-opt3-1.webp#164x27)",
              "![Figure](/pyq/python-end-term-dec-2024-an/q19-opt4-1.webp#145x26)"
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
