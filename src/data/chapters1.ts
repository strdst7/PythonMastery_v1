import type { Chapter } from "./types";

export const chapters1: Chapter[] = [
  {
    id: 1,
    title: {
      en: "Welcome to Python & Setting Up Your Environment",
      bm: "Selamat Datang ke Python & Persediaan Persekitaran",
    },
    subtitle: {
      en: "Why Python, how to install it, and your first program.",
      bm: "Mengapa Python, cara memasang, dan program pertama anda.",
    },
    icon: "🐍",
    color: "from-emerald-500 to-teal-600",
    category: "Foundations",
    learningGoals: [
      ["Understand what Python is and why it is popular.", "Memahami apa itu Python dan mengapa ia popular."],
      ["Install Python on your operating system.", "Memasang Python pada sistem pengendalian anda."],
      ["Run your first Python program.", "Menjalankan program Python pertama anda."],
      ["Understand the Python interpreter and IDLE.", "Memahami penginterpretasi Python dan IDLE."],
    ],
    keyConcepts: [
      ["Interpreted vs compiled languages", "Bahasa ditafsir vs disusun"],
      ["The Python REPL", "REPL Python"],
      ["Run interface and venv", "Antara muka run dan venv"],
      ["Print statements", "Pernyataan print"],
    ],
    blocks: [
      {
        type: "paragraph",
        text: "Python is a high-level, interpreted programming language created by Guido van Rossum and first released in 1991. It was designed with an emphasis on code readability, using significant whitespace to delimit blocks instead of curly braces or keywords. Today, Python is one of the most widely used languages in the world, powering everything from small automation scripts to the artificial intelligence systems running in the cloud.",
      },
      {
        type: "paragraph",
        text: "Why learn Python? It is beginner-friendly, has a massive standard library ('batteries included'), a huge community, and it is the language of choice for data science, machine learning, and web development. As of 2026, the latest stable release line is Python 3.14.x, which brings faster performance, optional free-threading, and deferred evaluation of type annotations.",
      },
      {
        type: "heading",
        heading: { en: "Installing Python", bm: "Memasang Python" },
      },
      {
        type: "list",
        items: [
          "Windows — Download the installer from python.org and tick \u201cAdd Python to PATH\u201d before installing.",
          "macOS — Use Homebrew: brew install python, or download the official installer.",
          "Linux — Use your package manager, e.g. sudo apt install python3 on Ubuntu.",
          "Whatever the platform, verify with: python --version (or python3 --version).",
        ],
      },
      {
        type: "tip",
        tipText:
          "Use a version manager like pyenv on macOS/Linux to install and switch between multiple Python versions safely.",
      },
      {
        type: "heading",
        heading: { en: "Your First Program", bm: "Program Pertama Anda" },
      },
      {
        type: "paragraph",
        text: "Open a text editor (or the IDLE editor that ships with Python), type the classic 'Hello, World' program, and run it. This is the traditional first step in learning any language.",
      },
      {
        type: "code",
        code: {
          title: { en: "Hello, World", bm: "Hello, World" },
          description: {
            en: "The simplest possible Python program.",
            bm: "Program Python yang paling ringkas.",
          },
          code: "# My first Python program\nprint(\"Hello, World!\")\nprint(\"Welcome to Python Mastery!\")",
          output: "Hello, World!\nWelcome to Python Mastery!",
        },
      },
      {
        type: "paragraph",
        text: "The print() function displays text to the console. The # symbol starts a comment — text that Python ignores. Comments help humans understand the code and are a crucial habit to build early.",
      },
      {
        type: "heading",
        heading: { en: "The Python REPL", bm: "REPL Python" },
      },
      {
        type: "paragraph",
        text: "Opening a terminal and typing python (or python3) launches the REPL — Read, Evaluate, Print, Loop. It is an interactive shell where you type a line of code and instantly see the result. It is perfect for experimenting and testing small snippets without creating a file.",
      },
      {
        type: "warning",
        warningText:
          "If \u201cpython\u201d is not recognised on Windows, you likely forgot to check \u201cAdd Python to PATH\u201d. Re-run the installer — there is a \u201cModify\u201d option to fix this.",
      },
    ],
    exercises: [
      {
        question:
          "Add a second print() call that displays your name and the current year.",
        hint: "print(\"YourName\", \"2026\")",
        solutionCode: "print(\"Hello, World!\")\nprint(\"YourName\", \"2026\")",
        solutionExplanation:
          "print() accepts multiple comma-separated values and separates them with spaces by default.",
      },
      {
        question:
          "Write a comment on the line above your print() statement explaining what it does.",
        solutionCode: "# This line prints a greeting to the console\nprint(\"Hello, Python!\")",
        solutionExplanation:
          "Comments start with # and are ignored by Python but read by humans.",
      },
      {
        question:
          "Use the REPL or this editor to calculate 7 * 8 and print the result.",
        solutionCode: "print(7 * 8)",
        solutionOutput: "56",
        solutionExplanation:
          "Python evaluates the expression 7 * 8 to 56 before printing.",
      },
    ],
    pages: 5,
  },
  {
    id: 2,
    title: {
      en: "Variables, Data Types & Operators",
      bm: "Pemboleh Ubah, Jenis Data & Pengendali",
    },
    subtitle: {
      en: "Storing data and working with numbers, text, and booleans.",
      bm: "Menyimpan data dan bekerja dengan nombor, teks, dan boolean.",
    },
    icon: "📦",
    color: "from-sky-500 to-indigo-600",
    category: "Foundations",
    learningGoals: [
      ["Create and reassign variables.", "Mencipta dan menetapkan semula pemboleh ubah."],
      ["Use the core data types: int, float, str, bool.", "Menggunakan jenis data teras: int, float, str, bool."],
      ["Perform arithmetic and logical operations.", "Melakukan operasi aritmetik dan logik."],
      ["Understand type conversion.", "Memahami penukaran jenis."],
    ],
    keyConcepts: [
      ["Dynamic typing", "Penaipan dinamik"],
      ["int, float, str, bool", "int, float, str, bool"],
      ["Arithmetic operators", "Pengendali aritmetik"],
      ["Type casting", "Pemapanan jenis"],
    ],
    blocks: [
      {
        type: "paragraph",
        text: "A variable is a named container that stores a value. In Python, you create a variable with the = assignment operator. Python is dynamically typed — you do not declare the type; the interpreter infers it from the value you assign.",
      },
      {
        type: "code",
        code: {
          title: { en: "Variables", bm: "Pemboleh Ubah" },
          description: {
            en: "Assigning and reassigning variables.",
            bm: "Menetapkan dan menetapkan semula pemboleh ubah.",
          },
          code: "name = \"Aisyah\"        # str\nyear = 2026           # int\nprice = 19.99         # float\nis_fun = True         # bool\n\nprint(name, year, price, is_fun)\nprint(type(name))     # <class 'str'>",
          output: "Aisyah 2026 19.99 True\n<class 'str'>",
        },
      },
      {
        type: "heading",
        heading: { en: "Core Data Types", bm: "Jenis Data Teras" },
      },
      {
        type: "table",
        items: [
          "Type | Example | Description",
          "int | 42, -7 | Whole numbers",
          "float | 3.14, 2.0 | Decimal numbers",
          "str | \"hello\" | Text, a sequence of characters",
          "bool | True, False | Logical truth values",
        ],
      },
      {
        type: "paragraph",
        text: "Strings can be enclosed in single quotes or double quotes. To embed a value inside a string, use an f-string — place an f before the opening quote and wrap expressions in curly braces.",
      },
      {
        type: "code",
        code: {
          title: { en: "f-strings", bm: "f-string" },
          description: {
            en: "Formatting strings with f-strings.",
            bm: "Memformat string dengan f-string.",
          },
          code: "name = \"Amir\"\nage = 25\nprint(f\"{name} is {age} years old.\")",
          output: "Amir is 25 years old.",
        },
      },
      {
        type: "heading",
        heading: { en: "Arithmetic Operators", bm: "Pengendali Aritmetik" },
      },
      {
        type: "table",
        items: [
          "Operator | Name | Example | Result",
          "+ | Addition | 5 + 3 | 8",
          "- | Subtraction | 5 - 3 | 2",
          "* | Multiplication | 5 * 3 | 15",
          "/ | Division | 5 / 2 | 2.5",
          "// | Floor division | 5 // 2 | 2",
          "% | Modulus / remainder | 5 % 2 | 1",
          "** | Exponentiation | 2 ** 3 | 8",
        ],
      },
      {
        type: "warning",
        warningText:
          "Watch the difference between / and //. A single slash always returns a float; the double slash returns an integer by truncating the decimal part.",
      },
      {
        type: "heading",
        heading: { en: "Type Conversion", bm: "Penukaran Jenis" },
      },
      {
        type: "code",
        code: {
          title: { en: "Casting", bm: "Pemapanan" },
          description: {
            en: "Converting between data types.",
            bm: "Menukar antara jenis data.",
          },
          code: "age_str = \"25\"\nage = int(age_str) + 1\nprint(age)              # 26\nprice_float = float(\"19.99\")\nprint(round(price_float, 1))  # 20.0",
          output: "26\n20.0",
        },
      },
      {
        type: "tip",
        tipText:
          "The input() function always returns a string. Convert it with int() or float() before doing math.",
      },
    ],
    exercises: [
      {
        question:
          "Write a program that asks the user for their birth year and prints how old they will be in 2030.",
        solutionCode: "birth = int(input(\"Birth year: \"))\nprint(f\"In 2030 you will be {2030 - birth} years old.\")",
        solutionExplanation:
          "We convert the string from input() to an int, then subtract from 2030 inside the f-string.",
      },
      {
        question:
          "Compute and print the area of a rectangle with width 5 and height 12.",
        solutionCode: "w, h = 5, 12\narea = w * h\nprint(area)",
        solutionOutput: "60",
        solutionExplanation:
          "Tuple unpacking assigns 5 to w and 12 to h in one line; area is the product.",
      },
      {
        question:
          "Convert the float 3.14159 to an integer and print the result. Explain what happens.",
        solutionCode: "print(int(3.14159))",
        solutionOutput: "3",
        solutionExplanation:
          "int() truncates toward zero, dropping the decimal part — it does not round.",
      },
    ],
    pages: 5,
  },
  {
    id: 3,
    title: {
      en: "Strings & Text Processing",
      bm: "String & Pemprosesan Teks",
    },
    subtitle: {
      en: "Mastering the most used data type in Python.",
      bm: "Menguasai jenis data paling kerap digunakan dalam Python.",
    },
    icon: "🔤",
    color: "from-rose-500 to-pink-600",
    category: "Foundations",
    learningGoals: [
      ["Work with string methods.", "Bekerja dengan kaedah string."],
      ["Slice and index strings.", "Menghiris dan mengindeks string."],
      ["Format strings with f-strings and format().", "Memformat string dengan f-string dan format()."],
      ["Search within strings.", "Mencari dalam string."],
    ],
    keyConcepts: [
      ["Indexing & slicing", "Pengindeksan & penghirisan"],
      ["String methods (upper, split, join)", "Kaedah string (upper, split, join)"],
      ["f-strings", "f-string"],
      ["In operator", "Pengendali in"],
    ],
    blocks: [
      {
        type: "paragraph",
        text: "A string is an immutable sequence of characters. Because it is a sequence, you can index individual characters and slice out substrings. The first character is at index 0, and negative indices count from the end.",
      },
      {
        type: "code",
        code: {
          title: { en: "Indexing & Slicing", bm: "Pengindeksan & Penghirisan" },
          description: {
            en: "Accessing characters and substrings.",
            bm: "Mengakses aksara dan substring.",
          },
          code: "s = \"Python\"\nprint(s[0])     # P\nprint(s[-1])    # n\nprint(s[0:3])   # Pyt\nprint(s[2:])    # thon\nprint(s[::-1])  # nohtyP (reversed)",
          output: "P\nn\nPyt\nthon\nnohtyP",
        },
      },
      {
        type: "heading",
        heading: { en: "Common String Methods", bm: "Kaedah String Lazim" },
      },
      {
        type: "code",
        code: {
          title: { en: "String methods", bm: "Kaedah string" },
          description: {
            en: "Useful built-in string methods.",
            bm: "Kaedah string terbina yang berguna.",
          },
          code: "text = \"  Hello, World!  \"\nprint(text.strip())          # 'Hello, World!'\nprint(text.lower())          # '  hello, world!  '\nprint(text.upper())          # '  HELLO, WORLD!  '\nprint(len(text))             # 17\nwords = \"apple,banana,cherry\".split(\",\")\nprint(words)                 # ['apple', 'banana', 'cherry']\nprint(\"-\".join(words))        # apple-banana-cherry\nprint(\"Python\".startswith(\"Py\"))  # True",
          output: "Hello, World!\n  hello, world!  \n  HELLO, WORLD!  \n17\n['apple', 'banana', 'cherry']\napple-banana-cherry\nTrue",
        },
      },
      {
        type: "heading",
        heading: { en: "Splitting & Joining", bm: "Memisah & Menggabung" },
      },
      {
        type: "paragraph",
        text: "split() turns a string into a list of words using a delimiter (default is whitespace). join() is the reverse — it stitches a list of strings together using a separator. These two methods are workhorses in text processing.",
      },
      {
        type: "code",
        code: {
          title: { en: "Real-world text processing", bm: "Pemprosesan teks dunia sebenar" },
          description: {
            en: "Cleaning and standardising user input.",
            bm: "Membersih dan menyeragamkan input pengguna.",
          },
          code: "name = input(\"Enter your name: \")\ncleaned = name.strip().title()\nprint(f\"Welcome, {cleaned}!\")",
        },
      },
      {
        type: "tip",
        tipText:
          "chain strings: methods are immutable, so text.strip().lower().title() returns a new string each time.",
      },
    ],
    exercises: [
      {
        question:
          "Write code that takes an email address, finds the index of the '@', and prints the username (everything before it).",
        solutionCode: "email = \"nur.amirah@example.com\"\nat = email.index(\"@\")\nprint(email[:at])",
        solutionOutput: "nur.amirah",
        solutionExplanation:
          "index() returns the position of the '@' and slicing takes everything before it.",
      },
      {
        question:
          "Reverse the words in the sentence 'Python is amazing' so the output is 'amazing is Python'.",
        solutionCode: "s = \"Python is amazing\"\nprint(\" \".join(reversed(s.split())))",
        solutionOutput: "amazing is Python",
        solutionExplanation:
          "split into words, reversed() flips the order, join recombines with spaces.",
      },
      {
        question:
          "Check if the string 'madam' is a palindrome (the same forward and backward).",
        solutionCode: "s = \"madam\"\nprint(s == s[::-1])",
        solutionOutput: "True",
        solutionExplanation:
          "s[::-1] reverses the string; comparing it to the original checks the palindrome property.",
      },
    ],
    pages: 5,
  },
  {
    id: 4,
    title: {
      en: "Lists, Tuples & Dictionaries",
      bm: "Senarai, Tuple & Kamus",
    },
    subtitle: {
      en: "Python's built-in collection data structures.",
      bm: "Struktur data koleksi terbina Python.",
    },
    icon: "🗂️",
    color: "from-amber-500 to-orange-600",
    category: "Data Structures",
    learningGoals: [
      ["Create and manipulate lists.", "Mencipta dan memanipulasi senarai."],
      ["Understand the difference between lists and tuples.", "Memahami perbezaan antara senarai dan tuple."],
      ["Use dictionaries to store key-value pairs.", "Menggunakan kamus untuk menyimpan pasangan kunci-nilai."],
      ["Iterate through collections.", "Menghurai melalui koleksi."],
    ],
    keyConcepts: [
      ["Mutable vs immutable", "Boleh ubah vs tidak boleh ubah"],
      ["List methods (append, pop, sort)", "Kaedah senarai (append, pop, sort)"],
      ["Dictionaries & keys", "Kamus & kunci"],
      ["Comprehensions", "Kefahaman (comprehension)"],
    ],
    blocks: [
      {
        type: "paragraph",
        text: "Collections let you store multiple values in a single variable. A list is an ordered, mutable collection enclosed in square brackets. It can hold items of any type, even a mix of types, and you can modify it after creation.",
      },
      {
        type: "code",
        code: {
          title: { en: "Lists", bm: "Senarai" },
          description: {
            en: "Creating and modifying lists.",
            bm: "Mencipta dan mengubah suai senarai.",
          },
          code: "fruits = [\"apple\", \"banana\", \"cherry\"]\nfruits.append(\"mango\")   # add to the end\nfruits.insert(1, \"kiwi\") # add at index 1\nfruits.remove(\"banana\")\nprint(fruits)            # ['apple', 'kiwi', 'cherry', 'mango']\nprint(len(fruits))       # 4\nprint(fruits[2])         # cherry\nfruits.sort()\nprint(fruits)",
          output: "['apple', 'kiwi', 'cherry', 'mango']\n4\ncherry\n['apple', 'cherry', 'kiwi', 'mango']",
        },
      },
      {
        type: "heading",
        heading: { en: "Lists vs Tuples", bm: "Senarai vs Tuple" },
      },
      {
        type: "paragraph",
        text: "A tuple is like a list but immutable — once created you cannot change it. Tuples are written with parentheses (or just commas). They are useful for data that should never change, like coordinates or fixed database records.",
      },
      {
        type: "code",
        code: {
          title: { en: "Tuples", bm: "Tuple" },
          description: {
            en: "Immutable ordered sequences.",
            bm: "Jujukan tersusun yang tidak boleh diubah.",
          },
          code: "point = (3, 5)\nx, y = point        # tuple unpacking\nprint(x, y)         # 3 5\n# point[0] = 10    # ERROR — tuples are immutable\n",
          output: "3 5",
        },
      },
      {
        type: "heading",
        heading: { en: "Dictionaries", bm: "Kamus" },
      },
      {
        type: "code",
        code: {
          title: { en: "Dictionaries", bm: "Kamus" },
          description: {
            en: "Storing key-value pairs.",
            bm: "Menyimpan pasangan kunci-nilai.",
          },
          code: "student = {\n    \"name\": \"Aisyah\",\n    \"age\": 21,\n    \"courses\": [\"Math\", \"Python\"]\n}\nprint(student[\"name\"])\nstudent[\"age\"] = 22   # update\nstudent[\"city\"] = \"Kuala Lumpur\"  # add\nprint(student)\nprint(student.keys())\nprint(list(student.values()))",
          output: "Aisyah\n{'name': 'Aisyah', 'age': 22, 'courses': ['Math', 'Python'], 'city': 'Kuala Lumpur'}\ndict_keys(['name', 'age', 'courses', 'city'])\n['Aisyah', 22, ['Math', 'Python'], 'Kuala Lumpur']",
        },
      },
      {
        type: "heading",
        heading: { en: "List Comprehensions", bm: "Kefahaman Senarai" },
      },
      {
        type: "code",
        code: {
          title: { en: "Comprehensions", bm: "Kefahaman" },
          description: {
            en: "Concise loop-like construction of lists.",
            bm: "Pembinaan senarai yang ringkas seperti gelung.",
          },
          code: "squares = [n * n for n in range(10)]\nprint(squares)\nevens = [n for n in range(20) if n % 2 == 0]\nprint(evens)",
          output: "[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]\n[0, 2, 4, 6, 8, 10, 12, 14, 16, 18]",
        },
      },
      {
        type: "tip",
        tipText:
          "Use dict.get(key, default) to avoid a KeyError when a key may not exist.",
      },
      {
        type: "warning",
        warningText:
          "Lists and dictionaries are mutable; tuples are not. If a function accidentally modifies a list you passed in, that change persists outside the function.",
      },
    ],
    exercises: [
      {
        question:
          "Create a list of 5 numbers, add 100 to each using a comprehension, and print the result.",
        solutionCode: "nums = [1, 2, 3, 4, 5]\nprint([n + 100 for n in nums])",
        solutionOutput: "[101, 102, 103, 104, 105]",
        solutionExplanation:
          "A list comprehension applies n + 100 to every element.",
      },
      {
        question:
          "Build a dictionary that maps city names to their country, then print the country for 'Kuala Lumpur'.",
        solutionCode: "cities = {\"Kuala Lumpur\": \"Malaysia\", \"Jakarta\": \"Indonesia\"}\nprint(cities[\"Kuala Lumpur\"])",
        solutionOutput: "Malaysia",
        solutionExplanation:
          "Dictionary keys can be looked up directly with square brackets.",
      },
      {
        question:
          "Swap the first and last element of the list [10, 20, 30, 40] without a temporary variable.",
        solutionCode: "a = [10, 20, 30, 40]\na[0], a[-1] = a[-1], a[0]\nprint(a)",
        solutionOutput: "[40, 20, 30, 10]",
        solutionExplanation:
          "Tuple unpacking swaps the two elements in a single assignment.",
      },
    ],
    pages: 5,
  },
  {
    id: 5,
    title: {
      en: "Control Flow: Conditionals & Loops",
      bm: "Aliran Kawalan: Bersyarat & Gelung",
    },
    subtitle: {
      en: "Making decisions and repeating actions in your programs.",
      bm: "Membuat keputusan dan mengulang tindakan dalam program anda.",
    },
    icon: "🔀",
    color: "from-fuchsia-500 to-purple-600",
    category: "Control Flow",
    learningGoals: [
      ["Use if, elif, else statements.", "Menggunakan pernyataan if, elif, else."],
      ["Write effective boolean comparisons.", "Menulis perbandingan boolean yang berkesan."],
      ["Use for and while loops.", "Menggunakan gelung for dan while."],
      ["Control loops with break and continue.", "Mengawal gelung dengan break dan continue."],
    ],
    keyConcepts: [
      ["if / elif / else", "if / elif / else"],
      ["Comparison operators", "Pengendali perbandingan"],
      ["for and while loops", "Gelung for dan while"],
      ["break / continue / range()", "break / continue / range()"],
    ],
    blocks: [
      {
        type: "paragraph",
        text: "Control flow lets your program make decisions and repeat work. The most important keyword is if, which runs a block of code only when a condition is True. Indentation (4 spaces is convention) defines which lines belong inside the block.",
      },
      {
        type: "code",
        code: {
          title: { en: "Conditionals", bm: "Bersyarat" },
          description: {
            en: "if / elif / else in action.",
            bm: "if / elif / else dalam tindakan.",
          },
          code: "score = 85\nif score >= 90:\n    grade = \"A\"\nelif score >= 75:\n    grade = \"B\"\nelse:\n    grade = \"C\"\nprint(f\"Grade: {grade}\")",
          output: "Grade: B",
        },
      },
      {
        type: "heading",
        heading: { en: "The for Loop & range()", bm: "Gelung for & range()" },
      },
      {
        type: "code",
        code: {
          title: { en: "For loop", bm: "Gelung for" },
          description: {
            en: "Iterating over a range and a list.",
            bm: "Menghurai melalui range dan senarai.",
          },
          code: "# Iterating over a range\nfor i in range(5):\n    print(i, end=\" \")\nprint()\n\n# Iterating over a list\nfor fruit in [\"apple\", \"banana\", \"cherry\"]:\n    print(fruit.upper())",
          output: "0 1 2 3 4 \nAPPLE\nBANANA\nCHERRY",
        },
      },
      {
        type: "heading",
        heading: { en: "The while Loop", bm: "Gelung while" },
      },
      {
        type: "code",
        code: {
          title: { en: "While loop", bm: "Gelung while" },
          description: {
            en: "Repeating until a condition is false.",
            bm: "Berulang sehingga keadaan menjadi palsu.",
          },
          code: "count = 0\nwhile count < 5:\n    print(count)\n    count += 1",
          output: "0\n1\n2\n3\n4",
        },
      },
      {
        type: "heading",
        heading: { en: "break & continue", bm: "break & continue" },
      },
      {
        type: "code",
        code: {
          title: { en: "Controlling loops", bm: "Mengawal gelung" },
          description: {
            en: "Exiting early and skipping iterations.",
            bm: "Keluar awal dan melangkau lelaran.",
          },
          code: "for i in range(10):\n    if i == 3:\n        continue   # skip 3\n    if i == 7:\n        break      # stop at 7\n    print(i)",
          output: "0\n1\n2\n4\n5\n6",
        },
      },
      {
        type: "tip",
        tipText:
          "The enumerate() function gives you both the index and the value: for i, item in enumerate(items).",
      },
      {
        type: "warning",
        warningText:
          "A while loop with a condition that never becomes False creates an infinite loop. Always make sure something inside the loop changes the condition.",
      },
    ],
    exercises: [
      {
        question:
          "Print the multiplication table for 7, from 7 × 1 to 7 × 10.",
        solutionCode: "for i in range(1, 11):\n    print(f\"7 x {i} = {7 * i}\")",
        solutionExplanation:
          "Loop over 1..10 and use an f-string to display each multiplication.",
      },
      {
        question:
          "Count down from 10 to 1 using a while loop, then print 'Liftoff!'.",
        solutionCode: "n = 10\nwhile n > 0:\n    print(n)\n    n -= 1\nprint(\"Liftoff!\")",
        solutionExplanation:
          "The loop runs while n > 0, decrementing n each time; after exit it prints Liftoff.",
      },
      {
        question:
          "Given a list of numbers, print only the even ones and stop the loop entirely if a negative number appears.",
        solutionCode: "nums = [2, 9, 4, 7, -1, 8]\nfor n in nums:\n    if n < 0:\n        break\n    if n % 2 == 0:\n        print(n)",
        solutionOutput: "2\n4",
        solutionExplanation:
          "break stops at the first negative; continue skips odd numbers via the if n % 2 == 0 check.",
      },
    ],
    pages: 6,
  },
];
