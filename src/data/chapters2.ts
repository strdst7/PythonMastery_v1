import type { Chapter } from "./types";

export const chapters2: Chapter[] = [
  {
    id: 6,
    title: {
      en: "Functions & Modules",
      bm: "Fungsi & Modul",
    },
    subtitle: {
      en: "Reusing code with functions and organising it into modules.",
      bm: "Menggunakan semula kod dengan fungsi dan menyusunnya ke dalam modul.",
    },
    icon: "🧩",
    color: "from-violet-500 to-purple-700",
    category: "Reusability",
    learningGoals: [
      ["Define and call your own functions.", "Menentukan dan memanggil fungsi sendiri."],
      ["Use parameters and return values.", "Menggunakan parameter dan nilai pulangan."],
      ["Understand scope and default arguments.", "Memahami skop dan argumen lalai."],
      ["Import and create modules.", "Mengimport dan mencipta modul."],
    ],
    keyConcepts: [
      ["def statements", "Pernyataan def"],
      ["Parameters & arguments", "Parameter & argumen"],
      ["Return values", "Nilai pulangan"],
      ["Import statements", "Pernyataan import"],
    ],
    blocks: [
      {
        type: "paragraph",
        text: "A function is a reusable block of code that performs a specific task. Defining a function with def lets you use it many times without rewriting the logic. Functions help you break large problems into smaller, testable pieces — a practice called decomposition.",
      },
      {
        type: "code",
        code: {
          title: { en: "Defining functions", bm: "Menentukan fungsi" },
          description: {
            en: "A basic function with parameters and a return value.",
            bm: "Fungsi asas dengan parameter dan nilai pulangan.",
          },
          code: "def greet(name, greeting=\"Hello\"):\n    \"\"\"Return a friendly greeting.\"\"\"\n    return f\"{greeting}, {name}!\"\n\nprint(greet(\"Aisyah\"))\nprint(greet(\"Amir\", \"Selamat datang\"))",
          output: "Hello, Aisyah!\nSelamat datang, Amir!",
        },
      },
      {
        type: "paragraph",
        text: "Notice the docstring \u2014 a triple-quoted string right after the def line that documents what the function does. The return statement sends a value back to the caller. If a function has no return, it returns None implicitly.",
      },
      {
        type: "heading",
        heading: { en: "Parameters & Arguments", bm: "Parameter & Argumen" },
      },
      {
        type: "table",
        items: [
          "Concept | Effect",
          "Positional arguments (name, age) | Matched by order",
          "Keyword arguments (age=25, name=\"A\") | Matched by name",
          "Default values (greeting=\"Hello\") | Optional at call time",
          "*args | Accept any number of positional args",
          "**kwargs | Accept any number of keyword args",
        ],
      },
      {
        type: "code",
        code: {
          title: { en: "args and kwargs", bm: "args dan kwargs" },
          description: {
            en: "Flexible function signatures.",
            bm: "Tandatangan fungsi yang fleksibel.",
          },
          code: "def total(*numbers):\n    return sum(numbers)\n\nprint(total(1, 2, 3))       # 6\nprint(total(10, 20))        # 30\n\n\ndef describe(**info):\n    return \", \".join(f\"{k}={v}\" for k, v in info.items())\n\nprint(describe(name=\"A\", age=21))",
          output: "6\n30\nname=A, age=21",
        },
      },
      {
        type: "heading",
        heading: { en: "Modules & the Standard Library", bm: "Modul & Perpustakaan Standard" },
      },
      {
        type: "paragraph",
        text: "A module is a file of Python code (with a .py extension) that you can import. The Python standard library ships hundreds of modules. You can also write your own module and import it in another file.",
      },
      {
        type: "code",
        code: {
          title: { en: "Importing modules", bm: "Mengimport modul" },
          description: {
            en: "Using the standard library.",
            bm: "Menggunakan perpustakaan standard.",
          },
          code: "import math\nfrom random import randint\nimport datetime as dt\n\nprint(math.sqrt(144))            # 12.0\nprint(randint(1, 6))            # random dice roll\nprint(dt.date.today())           # today's date",
          output: "12.0\n4\n2026-01-01",
        },
      },
      {
        type: "tip",
        tipText:
          "Name your module files with lowercase letters and underscores (e.g., my_utils.py), then use from my_utils import my_function.",
      },
      {
        type: "warning",
        warningText:
          "A common bug: defining a function but forgetting the return statement, so the caller receives None and crashes later. Always check what a function actually returns.",
      },
    ],
    exercises: [
      {
        question:
          "Write a function is_even(n) that returns True if n is even and False otherwise. Test it with 4 and 7.",
        solutionCode: "def is_even(n):\n    return n % 2 == 0\n\nprint(is_even(4))  # True\nprint(is_even(7))  # False",
        solutionOutput: "True\nFalse",
        solutionExplanation:
          "n % 2 == 0 is a boolean expression; returning it directly is clean and readable.",
      },
      {
        question:
          "Create a function max_of_three that returns the largest of three numbers.",
        solutionCode: "def max_of_three(a, b, c):\n    return max(a, b, c)\n\nprint(max_of_three(3, 9, 5))",
        solutionOutput: "9",
        solutionExplanation:
          "The built-in max() handles the comparison; wrapping it in a function keeps logic reusable.",
      },
      {
        question:
          "Import the math module and write a function that returns the area of a circle given its radius.",
        solutionCode: "import math\n\ndef circle_area(r):\n    return math.pi * r ** 2\n\nprint(round(circle_area(5), 2))",
        solutionOutput: "78.54",
        solutionExplanation:
          "math.pi gives pi; the area formula is pi * r squared.",
      },
    ],
    pages: 5,
  },
  {
    id: 7,
    title: {
      en: "Object-Oriented Programming (OOP)",
      bm: "Pengaturcaraan Berorientasikan Objek (OOP)",
    },
    subtitle: {
      en: "Classes, objects, inheritance, and encapsulation.",
      bm: "Kelas, objek, pewarisan, dan enkapsulasi.",
    },
    icon: "🏛️",
    color: "from-blue-600 to-cyan-600",
    category: "OOP",
    learningGoals: [
      ["Define classes and create objects.", "Menentukan kelas dan mencipta objek."],
      ["Use __init__ and self.", "Menggunakan __init__ dan self."],
      ["Understand inheritance and methods.", "Memahami pewarisan dan kaedah."],
      ["Apply encapsulation with properties.", "Menerapkan enkapsulasi dengan sifat (property)."],
    ],
    keyConcepts: [
      ["Class vs object", "Kelas vs objek"],
      ["__init__ constructor", "Pembina __init__"],
      ["Inheritance", "Pewarisan"],
      ["Encapsulation & properties", "Enkapsulasi & sifat"],
    ],
    blocks: [
      {
        type: "paragraph",
        text: "Object-oriented programming (OOP) is a paradigm that organises code around 'objects' — bundles of data (attributes) and behaviour (methods). A class is the blueprint; an object is an instance built from that blueprint. OOP makes complex programs easier to model and maintain.",
      },
      {
        type: "image",
        image: {
          src: `${import.meta.env.BASE_URL}images/oop-diagram.jpg`,
          alt: { en: "Inheritance hierarchy diagram", bm: "Gambar rajah hierarki pewarisan" },
          caption: {
            en: "Figure 7.1 — A base class (Animal) and its subclasses inherit shared attributes.",
            bm: "Rajah 7.1 — Kelas asas (Animal) dan subkelasnya mewarisi atribut yang dikongsi.",
          },
        },
      },
      {
        type: "code",
        code: {
          title: { en: "Defining a class", bm: "Menentukan kelas" },
          description: {
            en: "A simple class with an initialiser and a method.",
            bm: "Kelas ringkas dengan penggerak dan kaedah.",
          },
          code: "class BankAccount:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self.balance = balance\n\n    def deposit(self, amount):\n        self.balance += amount\n        return self.balance\n\n    def withdraw(self, amount):\n        if amount > self.balance:\n            return \"Insufficient funds\"\n        self.balance -= amount\n        return self.balance\n\nacc = BankAccount(\"Aisyah\", 100)\nprint(acc.deposit(50))    # 150\nprint(acc.withdraw(30))   # 120\nprint(acc.withdraw(500))  # Insufficient funds",
          output: "150\n120\nInsufficient funds",
        },
      },
      {
        type: "paragraph",
        text: "The __init__ method, the constructor, runs automatically when you create an object. The first parameter, by convention named self, refers to the current instance and is how you access its attributes.",
      },
      {
        type: "heading",
        heading: { en: "Inheritance", bm: "Pewarisan" },
      },
      {
        type: "code",
        code: {
          title: { en: "Inheritance", bm: "Pewarisan" },
          description: {
            en: "A subclass extends a base class.",
            bm: "Subkelas memanjangkan kelas asas.",
          },
          code: "class Animal:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        return \"...\"\n\nclass Dog(Animal):\n    def speak(self):\n        return \"Woof!\"\n\nclass Cat(Animal):\n    def speak(self):\n        return \"Meow!\"\n\nfor pet in [Dog(\"Rex\"), Cat(\"Kitty\")]:\n    print(f\"{pet.name} says {pet.speak()}\")",
          output: "Rex says Woof!\nKitty says Meow!",
        },
      },
      {
        type: "paragraph",
        text: "Dog and Cat inherit name from Animal but override speak with their own behaviour. This is polymorphism — the same method name behaves differently on different objects.",
      },
      {
        type: "heading",
        heading: { en: "Encapsulation & Properties", bm: "Enkapsulasi & Sifat" },
      },
      {
        type: "code",
        code: {
          title: { en: "Properties", bm: "Sifat" },
          description: {
            en: "Controlling attribute access.",
            bm: "Mengawal akses atribut.",
          },
          code: "class Temperature:\n    def __init__(self, celsius=0):\n        self._celsius = celsius\n\n    @property\n    def fahrenheit(self):\n        return (self._celsius * 9 / 5) + 32\n\n    @fahrenheit.setter\n    def fahrenheit(self, value):\n        self._celsius = (value - 32) * 5 / 9\n\nt = Temperature(25)\nprint(round(t.fahrenheit, 1))   # 77.0\nt.fahrenheit = 100\nprint(round(t._celsius, 1))     # 37.8",
          output: "77.0\n37.8",
        },
      },
      {
        type: "tip",
        tipText:
          "The @classmethod and @staticmethod decorators let you call methods on the class itself rather than on an instance.",
      },
      {
        type: "warning",
        warningText:
          "Forgetting the self parameter (or self in the call) is one of the most common OOP errors in Python — the first error message you will likely see references missing self.",
      },
    ],
    exercises: [
      {
        question:
          "Create a class Rectangle with width and height, and an area() method.",
        solutionCode: "class Rectangle:\n    def __init__(self, w, h):\n        self.width = w\n        self.height = h\n    def area(self):\n        return self.width * self.height\n\nr = Rectangle(5, 4)\nprint(r.area())  # 20",
        solutionOutput: "20",
        solutionExplanation:
          "area() multiplies the two instance attributes stored during construction.",
      },
      {
        question:
          "Add a __str__ method to Rectangle so print(r) shows 'Rectangle(5x4)'.",
        solutionCode: "class Rectangle:\n    def __init__(self, w, h):\n        self.width = w\n        self.height = h\n    def __str__(self):\n        return f\"Rectangle({self.width}x{self.height})\"\n\nprint(Rectangle(5, 4))",
        solutionOutput: "Rectangle(5x4)",
        solutionExplanation:
          "The dunder __str__ returns the human-friendly string used by print().",
      },
      {
        question:
          "Create a subclass Square of Shape (a base class with area()=0) that computes its own area.",
        solutionCode: "class Shape:\n    def area(self):\n        return 0\n\nclass Square(Shape):\n    def __init__(self, side):\n        self.side = side\n    def area(self):\n        return self.side ** 2\n\nprint(Square(6).area())  # 36",
        solutionOutput: "36",
        solutionExplanation:
          "Square inherits from Shape but overrides area() with the correct formula.",
      },
    ],
    pages: 6,
  },
  {
    id: 8,
    title: {
      en: "File Handling",
      bm: "Pengendalian Fail",
    },
    subtitle: {
      en: "Reading and writing text and CSV files on disk.",
      bm: "Membaca dan menulis fail teks dan CSV pada cakera.",
    },
    icon: "📄",
    color: "from-emerald-600 to-green-600",
    category: "I/O",
    learningGoals: [
      ["Open, read, and close files safely.", "Membuka, membaca, dan menutup fail dengan selamat."],
      ["Write text to files with with statements.", "Menulis teks ke fail dengan pernyataan with."],
      ["Work with CSV files.", "Bekerja dengan fail CSV."],
      ["Understand file modes.", "Memahami mod fail."],
    ],
    keyConcepts: [
      ["open() modes (r, w, a)", "Mod open() (r, w, a)"],
      ["with context manager", "Pengurus konteks with"],
      ["read / readline / write", "read / readline / write"],
      ["csv module", "Modul csv"],
    ],
    blocks: [
      {
        type: "paragraph",
        text: "Programs often need to persist data beyond runtime. Python's built-in open() function returns a file object you can read from or write to. The safest way to work with files is the with statement — it automatically closes the file even if an error occurs.",
      },
      {
        type: "code",
        code: {
          title: { en: "Writing files", bm: "Menulis fail" },
          description: {
            en: "Writing lines to a text file.",
            bm: "Menulis baris ke fail teks.",
          },
          code: "with open(\"notes.txt\", \"w\") as f:\n    f.write(\"Line one\\n\")\n    f.write(\"Line two\\n\")\n\n# 'w' overwrites; 'a' appends\nwith open(\"notes.txt\", \"a\") as f:\n    f.write(\"Line three\\n\")\n\nprint(\"File written successfully.\")",
          output: "File written successfully.",
        },
      },
      {
        type: "heading",
        heading: { en: "Reading files", bm: "Membaca fail" },
      },
      {
        type: "code",
        code: {
          title: { en: "Reading files", bm: "Membaca fail" },
          description: {
            en: "Reading the whole file or line by line.",
            bm: "Membaca keseluruhan fail atau baris demi baris.",
          },
          code: "with open(\"notes.txt\", \"r\") as f:\n    content = f.read()          # whole file\n    print(\"--- whole file ---\")\n    print(content)\n\nwith open(\"notes.txt\", \"r\") as f:\n    print(\"--- line by line ---\")\n    for line in f:\n        print(line.strip())     # strip newline",
          output: "--- whole file ---\nLine one\nLine two\nLine three\n--- line by line ---\nLine one\nLine two\nLine three",
        },
      },
      {
        type: "heading",
        heading: { en: "Working with CSV", bm: "Bekerja dengan CSV" },
      },
      {
        type: "code",
        code: {
          title: { en: "CSV reading & writing", bm: "Membaca & menulis CSV" },
          description: {
            en: "Using the csv module for tabular data.",
            bm: "Menggunakan modul csv untuk data berjadual.",
          },
          code: "import csv\n\nrows = [[\"name\", \"score\"], [\"Aisyah\", 85], [\"Amir\", 92]]\nwith open(\"scores.csv\", \"w\", newline=\"\") as f:\n    writer = csv.writer(f)\n    writer.writerows(rows)\n\nwith open(\"scores.csv\", \"r\") as f:\n    reader = csv.reader(f)\n    for row in reader:\n        print(row)",
          output: "['name', 'score']\n['Aisyah', '85']\n['Amir', '92']",
        },
      },
      {
        type: "tip",
        tipText:
          "Use pathlib instead of string paths for cross-platform code: from pathlib import Path; Path(\"data\").mkdir(exist_ok=True).",
      },
      {
        type: "warning",
        warningText:
          "Opening a file for writing with 'w' will erase its existing contents. Use 'a' to append or 'x' to create only if it does not already exist.",
      },
    ],
    exercises: [
      {
        question:
          "Write a program that writes the numbers 1 to 100, one per line, to numbers.txt.",
        solutionCode: "with open(\"numbers.txt\", \"w\") as f:\n    for i in range(1, 101):\n        f.write(f\"{i}\\n\")",
        solutionExplanation:
          "A for loop writes each number followed by a newline; with closes safely after.",
      },
      {
        question:
          "Read numbers.txt and print the sum of all the numbers.",
        solutionCode: "total = 0\nwith open(\"numbers.txt\", \"r\") as f:\n    for line in f:\n        total += int(line.strip())\nprint(total)",
        solutionOutput: "5050",
        solutionExplanation:
          "Each line is converted to int and accumulated; 1+2+...+100 = 5050.",
      },
      {
        question:
          "Write a CSV file with columns 'city' and 'population', then read it back and print each row.",
        solutionCode: "import csv\n\nwith open(\"cities.csv\", \"w\", newline=\"\") as f:\n    writer = csv.writer(f)\n    writer.writerow([\"city\", \"population\"])\n    writer.writerow([\"Kuala Lumpur\", 8300000])\n\nwith open(\"cities.csv\", \"r\") as f:\n    for row in csv.reader(f):\n        print(row)",
        solutionExplanation:
          "writer() builds tabular rows; csv.reader() reconstructs them line by line.",
      },
    ],
    pages: 5,
  },
  {
    id: 9,
    title: {
      en: "Error Handling & Debugging",
      bm: "Pengendalian Ralat & Penyahpepijatan",
    },
    subtitle: {
      en: "Handling exceptions gracefully and fixing bugs.",
      bm: "Mengendalikan pengecualian dengan baik dan membaiki pepijat.",
    },
    icon: "🐞",
    color: "from-red-500 to-rose-600",
    category: "Robustness",
    learningGoals: [
      ["Raise and catch exceptions.", "Meningkatkan dan menangkap pengecualian."],
      ["Use try / except / else / finally.", "Menggunakan try / except / else / finally."],
      ["Understand common error types.", "Memahami jenis ralat biasa."],
      ["Apply debugging strategies.", "Menerapkan strategi penyahpepijatan."],
    ],
    keyConcepts: [
      ["try / except / finally", "try / except / finally"],
      ["Exception hierarchy", "Hierarki pengecualian"],
      ["Raising errors", "Meningkatkan ralat"],
      ["Tracebacks", "Jejak balik (traceback)"],
    ],
    blocks: [
      {
        type: "paragraph",
        text: "Bugs are inevitable, but good programs handle errors gracefully instead of crashing. Python tells you what went wrong with exceptions and tracebacks. You can 'catch' exceptions with try/except and respond appropriately, and you can also raise your own errors when something is invalid.",
      },
      {
        type: "code",
        code: {
          title: { en: "Handling errors", bm: "Mengendalikan ralat" },
          description: {
            en: "Catching specific exception types.",
            bm: "Menangkap jenis pengecualian tertentu.",
          },
          code: "try:\n    num = int(input(\"Enter a number: \"))\n    result = 100 / num\n    print(f\"Result: {result}\")\nexcept ValueError:\n    print(\"That was not a valid number.\")\nexcept ZeroDivisionError:\n    print(\"Cannot divide by zero.\")\nelse:\n    print(\"No error occurred.\")\nfinally:\n    print(\"This always runs.\")",
        },
      },
      {
        type: "heading",
        heading: { en: "Error vs Exception", bm: "Ralat vs Pengecualian" },
      },
      {
        type: "table",
        items: [
          "Exception | Raised when",
          "ValueError | An argument has the right type but a wrong value",
          "TypeError | An operation is applied to an object of the wrong type",
          "KeyError | A dictionary key is not found",
          "IndexError | A sequence index is out of range",
          "ZeroDivisionError | Division by zero",
          "FileNotFoundError | A file could not be opened",
        ],
      },
      {
        type: "heading",
        heading: { en: "Raising your own errors", bm: "Menaikkan ralat sendiri" },
      },
      {
        type: "code",
        code: {
          title: { en: "Raise", bm: "Raise" },
          description: {
            en: "Validating input with custom errors.",
            bm: "Mengesahkan input dengan ralat tersuai.",
          },
          code: "def set_age(age):\n    if age < 0:\n        raise ValueError(\"Age cannot be negative.\")\n    return age\n\ntry:\n    set_age(-5)\nexcept ValueError as e:\n    print(f\"Error: {e}\")",
          output: "Error: Age cannot be negative.",
        },
      },
      {
        type: "heading",
        heading: { en: "Debugging strategies", bm: "Strategi penyahpepijatan" },
      },
      {
        type: "list",
        items: [
          "Read the traceback from the bottom up — it points to the failing line.",
          "Insert print() statements to inspect variable values at key points.",
          "Reduce the problem: comment out code until you find the culprit.",
          "Use assert to document expected conditions and catch violations early.",
          "Use the built-in pdb debugger: import pdb; pdb.set_trace().",
        ],
      },
      {
        type: "tip",
        tipText:
          "Keep exception handling narrow. Catching bare Exception hides real bugs; catch only what you expect and let the rest propagate.",
      },
      {
        type: "warning",
        warningText:
          "Avoid empty except: blocks. Swallowing errors silently makes problems nearly impossible to diagnose.",
      },
    ],
    exercises: [
      {
        question:
          "Write code that safely divides two integers and handles both ValueError and ZeroDivisionError.",
        solutionCode: "try:\n    a = int(input(\"a: \"))\n    b = int(input(\"b: \"))\n    print(a / b)\nexcept ValueError:\n    print(\"Please enter integers.\")\nexcept ZeroDivisionError:\n    print(\"Cannot divide by zero.\")",
        solutionExplanation:
          "Two except clauses handle the two distinct failure modes separately.",
      },
      {
        question:
          "Write a function that validates a password is at least 8 characters, raising ValueError otherwise.",
        solutionCode: "def check_password(pw):\n    if len(pw) < 8:\n        raise ValueError(\"Password too short.\")\n    return \"OK\"\n\nprint(check_password(\"verysecret\"))",
        solutionOutput: "OK",
        solutionExplanation:
          "Validation functions raise meaningful errors rather than returning a silent failure.",
      },
      {
        question:
          "Explain and fix this buggy code: it crashes when the list is empty. print([10,20,30].pop() [IndexError...]) — write safe code.",
        solutionCode: "items = []\nif items:\n    print(items.pop())\nelse:\n    print(\"List is empty\")",
        solutionOutput: "List is empty",
        solutionExplanation:
          "Checking truthiness first avoids popping from an empty list.",
      },
    ],
    pages: 5,
  },
  {
    id: 10,
    title: {
      en: "Libraries & Data Science: NumPy & Pandas",
      bm: "Perpustakaan & Sains Data: NumPy & Pandas",
    },
    subtitle: {
      en: "High-performance arrays and tabular data analysis.",
      bm: "Tatasusunan berprestasi tinggi dan analisis data berjadual.",
    },
    icon: "📊",
    color: "from-cyan-600 to-teal-500",
    category: "Data Science",
    learningGoals: [
      ["Install packages with pip.", "Memasang pakej dengan pip."],
      ["Use NumPy arrays and operations.", "Menggunakan tatasusunan NumPy dan operasi."],
      ["Load and explore data with Pandas DataFrames.", "Muat dan teroka data dengan DataFrame Pandas."],
      ["Filter, group, and compute with Pandas.", "Menapis, mengumpul, dan mengira dengan Pandas."],
    ],
    keyConcepts: [
      ["pip install", "pip install"],
      ["numpy.ndarray", "numpy.ndarray"],
      ["pandas.DataFrame", "pandas.DataFrame"],
      ["Vectorisation & broadcasting", "Penyahvektoran & penyiaran"],
    ],
    blocks: [
      {
        type: "paragraph",
        text: "The real power of Python for data analysis comes from third-party libraries. NumPy adds fast, n-dimensional arrays; Pandas builds on it to provide the DataFrame, a spreadsheet-like structure for tabular data. These are installed with the pip package manager.",
      },
      {
        type: "code",
        code: {
          title: { en: "Installing with pip", bm: "Memasang dengan pip" },
          description: {
            en: "Terminal commands (not run in editor).",
            bm: "Arahan terminal (bukan dijalankan dalam editor).",
          },
          code: "# Run these in your terminal, not in Python\npip install numpy\npip install pandas\n# or install everything at once\npip install numpy pandas matplotlib",
        },
      },
      {
        type: "heading",
        heading: { en: "NumPy basics", bm: "Asas NumPy" },
      },
      {
        type: "code",
        code: {
          title: { en: "NumPy arrays", bm: "Tatasusunan NumPy" },
          description: {
            en: "Vectorised operations avoid slow Python loops.",
            bm: "Operasi yang disvektorkan mengelakkan gelung Python yang perlahan.",
          },
          code: "import numpy as np\n\na = np.array([1, 2, 3, 4])\nb = np.array([10, 20, 30, 40])\n\nprint(a + b)              # [11 22 33 44]\nprint(a * 3)              # [3 6 9 12]\nprint(a.mean())           # 2.5\nprint(np.arange(0, 10, 2))  # [0 2 4 6 8]",
          output: "[11 22 33 44]\n[ 3  6  9 12]\n2.5\n[0 2 4 6 8]",
        },
      },
      {
        type: "heading",
        heading: { en: "Pandas DataFrames", bm: "DataFrame Pandas" },
      },
      {
        type: "code",
        code: {
          title: { en: "Pandas", bm: "Pandas" },
          description: {
            en: "Creating and analysing tabular data.",
            bm: "Mencipta dan menganalisis data berjadual.",
          },
          code: "import pandas as pd\n\ndf = pd.DataFrame({\n    \"name\": [\"Aisyah\", \"Amir\", \"Wei\"],\n    \"score\": [85, 92, 74]\n})\n\nprint(df)\nprint(df[\"score\"].mean())\nprint(df[df[\"score\"] > 80 ])\nprint(df.groupby(\"name\")[\"score\"].count())",
          output: "     name  score\n0  Aisyah     85\n1    Amir     92\n2     Wei     74\n83.66666666666667\n     name  score\n0  Aisyah     85\n1    Amir     92\nname\nAisyah    1\nAmir      1\nWei       1\nName: score, dtype: int64",
        },
      },
      {
        type: "heading",
        heading: { en: "Reading real data", bm: "Membaca data sebenar" },
      },
      {
        type: "code",
        code: {
          title: { en: "CSV to DataFrame", bm: "CSV ke DataFrame" },
          description: {
            en: "Loading data from a file for analysis.",
            bm: "Memuat data daripada fail untuk analisis.",
          },
          code: "import pandas as pd\n\ndf = pd.read_csv(\"scores.csv\")\nprint(df.head())\nprint(df.describe())\nprint(df.isnull().sum())",
        },
      },
      {
        type: "tip",
        tipText:
          "Prefer vectorised NumPy/Pandas operations over Python for-loops on large datasets — they are usually 10–100× faster.",
      },
      {
        type: "warning",
        warningText:
          "NumPy and Pandas are not part of the standard library. If import numpy fails, you forgot to pip install it.",
      },
    ],
    exercises: [
      {
        question:
          "Using NumPy, create an array of the numbers 1–100 and print the sum and mean.",
        solutionCode: "import numpy as np\na = np.arange(1, 101)\nprint(a.sum())    # 5050\nprint(a.mean())   # 50.5",
        solutionOutput: "5050\n50.5",
        solutionExplanation:
          "sum() and mean() are vectorised over the 100-element array.",
      },
      {
        question:
          "With a DataFrame, find all rows where score is between 80 and 90 inclusive.",
        solutionCode: "import pandas as pd\ndf = pd.DataFrame({\"name\": [\"A\",\"B\",\"C\"], \"score\":[85,92,74]})\nprint(df[(df[\"score\"] >= 80) & (df[\"score\"] <= 90)])",
        solutionExplanation:
          "Boolean masks combined with & filter the DataFrame rows.",
      },
      {
        question:
          "Add a new column to a DataFrame that categorises each score as 'Pass' or 'Fail' based on 60.",
        solutionCode: "import pandas as pd\ndf = pd.DataFrame({\"score\": [85, 50, 92, 40]})\ndf[\"grade\"] = df[\"score\"].apply(lambda s: \"Pass\" if s >= 60 else \"Fail\")\nprint(df)",
        solutionExplanation:
          "apply() maps each row through a function, building the new grade column.",
      },
    ],
    pages: 6,
  },
];
