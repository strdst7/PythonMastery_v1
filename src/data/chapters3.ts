import type { Chapter } from "./types";

export const chapters3: Chapter[] = [
  {
    id: 11,
    title: {
      en: "Web Scraping & Working with APIs",
      bm: "Menyelongkar Web & Bekerja dengan API",
    },
    subtitle: {
      en: "Fetching data from the internet with requests.",
      bm: "Mengambil data dari internet dengan requests.",
    },
    icon: "🌐",
    color: "from-sky-600 to-blue-700",
    category: "Networking",
    learningGoals: [
      ["Make HTTP requests with the requests library.", "Membuat permintaan HTTP dengan perpustakaan requests."],
      ["Parse JSON responses.", "Mentafsir respons JSON."],
      ["Scrape static HTML with BeautifulSoup.", "Menyelongkar HTML statik dengan BeautifulSoup."],
      ["Respect rate limits and robots.txt.", "Menghormati had kadar dan robots.txt."],
    ],
    keyConcepts: [
      ["HTTP verbs (GET, POST)", "Kata kerja HTTP (GET, POST)"],
      ["requests.get / .json()", "requests.get / .json()"],
      ["BeautifulSoup parsing", "Mentafsir BeautifulSoup"],
      ["Error handling for requests", "Pengendalian ralat untuk permintaan"],
    ],
    blocks: [
      {
        type: "paragraph",
        text: "The internet runs on HTTP. The requests library lets your Python programs talk to web servers and APIs, fetching data programmatically. An API (Application Programming Interface) exposes data and actions over HTTP, usually returning JSON. This powers everything from weather apps to stock tickers.",
      },
      {
        type: "code",
        code: {
          title: { en: "GET requests & JSON", bm: "Permintaan GET & JSON" },
          description: {
            en: "Fetching JSON from a public API.",
            bm: "Mengambil JSON daripada API awam.",
          },
          code: "import requests\n\nurl = \"https://api.example.com/weather?city=KL\"\nresponse = requests.get(url, timeout=10)\n\nif response.status_code == 200:\n    data = response.json()\n    print(data.get(\"temperature\"))\nelse:\n    print(f\"Error {response.status_code}\")",
        },
      },
      {
        type: "paragraph",
        text: "The .json() method parses the response body into Python dictionaries and lists. Always check response.status_code before trusting the data. The timeout parameter prevents the program hanging forever on a slow server.",
      },
      {
        type: "heading",
        heading: { en: "Sending parameters", bm: "Menghantar parameter" },
      },
      {
        type: "code",
        code: {
          title: { en: "Query parameters", bm: "Parameter pertanyaan" },
          description: {
            en: "Passing parameters cleanly with params.",
            bm: "Menghantar parameter dengan kemas menggunakan params.",
          },
          code: "import requests\n\nparams = {\"q\": \"python\", \"page\": 1, \"per_page\": 10}\nresp = requests.get(\"https://api.example.com/search\", params=params)\ndata = resp.json()\nprint(data)",
        },
      },
      {
        type: "heading",
        heading: { en: "Scraping HTML with BeautifulSoup", bm: "Menyelongkar HTML dengan BeautifulSoup" },
      },
      {
        type: "code",
        code: {
          title: { en: "BeautifulSoup", bm: "BeautifulSoup" },
          description: {
            en: "Extracting text and links from a page.",
            bm: "Mengekstrak teks dan pautan daripada halaman.",
          },
          code: "import requests\nfrom bs4 import BeautifulSoup\n\nresp = requests.get(\"https://example.com\", timeout=10)\nsoup = BeautifulSoup(resp.text, \"html.parser\")\n\nfor a in soup.find_all(\"a\")[:3]:\n    print(a.get(\"href\"))\n\nprint(soup.title.string)",
        },
      },
      {
        type: "tip",
        tipText:
          "Always add a delay between requests (time.sleep(1)) and include a descriptive User-Agent. Be polite to servers you scrape.",
      },
      {
        type: "warning",
        warningText:
          "Check a site's robots.txt and terms before scraping. Some data requires an API key; never hardcode secrets in your code — use environment variables.",
      },
    ],
    exercises: [
      {
        question:
          "Write a function get_joke() that fetches a random joke from a JSON API and prints the text.",
        solutionCode: "import requests\n\ndef get_joke():\n    r = requests.get(\"https://official-joke-api.appspot.com/random_joke\", timeout=10)\n    if r.status_code == 200:\n        j = r.json()\n        print(j[\"setup\"], j[\"punchline\"])\n    else:\n        print(\"Could not fetch joke\")\n\nget_joke()",
        solutionExplanation:
          "The helper sends a GET, checks status, and reads the setup/punchline fields from JSON.",
      },
      {
        question:
          "Fetch a list of items from an API and print only the titles, handling the case where the list is empty.",
        solutionCode: "import requests\n\nr = requests.get(\"https://jsonplaceholder.typicode.com/todos\", timeout=10)\ntodos = r.json()\nfor t in todos[:5]:\n    print(t.get(\"title\"))",
        solutionExplanation:
          "Looping over the JSON array prints each title; .get returns None for missing keys.",
      },
      {
        question:
          "Wrap an API call in try/except to handle network errors gracefully.",
        solutionCode: "import requests\ntry:\n    r = requests.get(\"https://api.example.com\", timeout=5)\n    r.raise_for_status()\n    print(r.json())\nexcept requests.RequestException as e:\n    print(f\"Request failed: {e}\")",
        solutionExplanation:
          "raise_for_status() throws on HTTP errors, and the except catches any network-level failure.",
      },
    ],
    pages: 5,
  },
  {
    id: 12,
    title: {
      en: "Advanced Python: Decorators, Generators & Context Managers",
      bm: "Python Lanjutan: Dekorator, Penjana & Pengurus Konteks",
    },
    subtitle: {
      en: "Powerful patterns that make Python code elegant.",
      bm: "Corak berkuasa yang menjadikan kod Python elegan.",
    },
    icon: "⚙️",
    color: "from-indigo-600 to-violet-700",
    category: "Advanced",
    learningGoals: [
      ["Write and apply decorators.", "Menulis dan menerapkan dekorator."],
      ["Build memory-efficient generators.", "Membina penjana yang cekap memori."],
      ["Create context managers with with.", "Mencipta pengurus konteks dengan with."],
      ["Understand lambda functions.", "Memahami fungsi lambda."],
    ],
    keyConcepts: [
      ["Decorators & functools.wraps", "Dekorator & functools.wraps"],
      ["Yield generators", "Penjana yield"],
      ["with / contextlib.contextmanager", "with / contextlib.contextmanager"],
      ["lambda expressions", "Ungkapan lambda"],
    ],
    blocks: [
      {
        type: "paragraph",
        text: "Decorators wrap a function to extend its behaviour without changing its code. They are used everywhere — in web frameworks (Flask/Django routes), test runners, and caching. A decorator is simply a function that takes a function and returns a new function.",
      },
      {
        type: "code",
        code: {
          title: { en: "A timing decorator", bm: "Dekorator masa" },
          description: {
            en: "Measuring how long a function takes.",
            bm: "Mengukur berapa lama fungsi mengambil.",
          },
          code: "import time\nfrom functools import wraps\n\ndef timer(func):\n    @wraps(func)\n    def wrapper(*args, **kwargs):\n        start = time.perf_counter()\n        result = func(*args, **kwargs)\n        print(f\"{func.__name__}: {time.perf_counter()-start:.4f}s\")\n        return result\n    return wrapper\n\n@timer\ndef slow_add(a, b):\n    time.sleep(0.1)\n    return a + b\n\nprint(slow_add(2, 3))",
          output: "slow_add: 0.1001s\n5",
        },
      },
      {
        type: "heading",
        heading: { en: "Generators", bm: "Penjana" },
      },
      {
        type: "paragraph",
        text: "A generator produces values on demand instead of storing them all in memory. It is defined like a function but uses yield instead of return. Generators are perfect for streaming huge files or infinite sequences.",
      },
      {
        type: "code",
        code: {
          title: { en: "Generator", bm: "Penjana" },
          description: {
            en: "A memory-friendly sequence of squares.",
            bm: "Jujukan kuasa dua yang mesra memori.",
          },
          code: "def squares(limit):\n    n = 0\n    while n < limit:\n        yield n * n\n        n += 1\n\nfor val in squares(5):\n    print(val)\n\n# One-liner generator expression\ntotal = sum(x * x for x in range(1000))\nprint(total)",
          output: "0\n1\n4\n9\n16\n332833500",
        },
      },
      {
        type: "heading",
        heading: { en: "Context managers", bm: "Pengurus konteks" },
      },
      {
        type: "code",
        code: {
          title: { en: "Context manager", bm: "Pengurus konteks" },
          description: {
            en: "Automating setup and teardown with yield.",
            bm: "Mengautomatikkan persediaan dan penutup dengan yield.",
          },
          code: "from contextlib import contextmanager\n\n@contextmanager\ndef track(name):\n    print(f\"Entering {name}\")\n    try:\n        yield\n    finally:\n        print(f\"Exiting {name}\")\n\nwith track(\"data loading\"):\n    print(\"  doing work...\")",
          output: "Entering data loading\n  doing work...\nExiting data loading",
        },
      },
      {
        type: "heading",
        heading: { en: "Lambda functions", bm: "Fungsi lambda" },
      },
      {
        type: "code",
        code: {
          title: { en: "Lambda", bm: "Lambda" },
          description: {
            en: "Short, anonymous single-expression functions.",
            bm: "Fungsi tanpa nama satu-ungkapan yang ringkas.",
          },
          code: "add = lambda x, y: x + y\nprint(add(3, 4))          # 7\n\npeople = [{\"name\": \"Wei\", \"age\": 30}, {\"name\": \"A\", \"age\": 20}]\npeople.sort(key=lambda p: p[\"age\"])\nprint([p[\"name\"] for p in people])",
          output: "7\n['A', 'Wei']",
        },
      },
      {
        type: "tip",
        tipText:
          "Use generators for large data, decorators for cross-cutting concerns (logging, timing, auth), and context managers for anything needing setup/cleanup.",
      },
      {
        type: "warning",
        warningText:
          "Generators are single-use: once exhausted you cannot iterate them again. Recreate or use a list if you need to go back.",
      },
    ],
    exercises: [
      {
        question:
          "Write a decorator that logs the arguments and return value of any function.",
        solutionCode: "from functools import wraps\ndef log(func):\n    @wraps(func)\n    def wrapper(*a, **k)\n        print(f\"Calling {func.__name__} with args={a} kwargs={k}\")\n        r = func(*a, **k)\n        print(f\"Returned {r}\")\n        return r\n    return wrapper\n\n@log\ndef multiply(x, y):\n    return x * y\n\nmultiply(3, 4)",
        solutionExplanation:
          "wrapper captures arguments, calls the original, logs both sides and returns the result.",
      },
      {
        question:
          "Create a generator fibonacci(n) that yields the first n Fibonacci numbers.",
        solutionCode: "def fibonacci(n):\n    a, b = 0, 1\n    for _ in range(n):\n        yield a\n        a, b = b, a + b\n\nprint(list(fibonacci(7)))",
        solutionOutput: "[0, 1, 1, 2, 3, 5, 8]",
        solutionExplanation:
          "Tuple unpacking advances the sequence; yield hands each number to the caller.",
      },
      {
        question:
          "Use a lambda with sorted() to sort a list of strings by their length.",
        solutionCode: "words = [\"python\", \"ai\", \"data\", \"code\"]\nprint(sorted(words, key=lambda s: len(s)))",
        solutionOutput: "['ai', 'code', 'data', 'python']",
        solutionExplanation:
          "The key lambda returns the length, which sorted() uses as the sort key.",
      },
    ],
    pages: 6,
  },
  {
    id: 13,
    title: {
      en: "Concurrency: Multithreading & Async",
      bm: "Konkurensi: Multithreading & Async",
    },
    subtitle: {
      en: "Running work simultaneously for faster, responsive programs.",
      bm: "Menjalankan kerja serentak untuk program yang lebih pantas dan responsif.",
    },
    icon: "⚡",
    color: "from-yellow-500 to-amber-600",
    category: "Advanced",
    learningGoals: [
      ["Compare threads, processes, and async.", "Membandingkan thread, proses, dan async."],
      ["Use threading.Thread for I/O tasks.", "Menggunakan threading.Thread untuk tugas I/O."],
      ["Use concurrent.futures executors.", "Menggunakan pelaksana concurrent.futures."],
      ["Understand the GIL and async/await.", "Memahami GIL dan async/await."],
    ],
    keyConcepts: [
      ["threading.Thread", "threading.Thread"],
      ["GIL (Global Interpreter Lock)", "GIL (Kunci Penginterpretasi Global)"],
      ["concurrent.futures", "concurrent.futures"],
      ["asyncio & async/await", "asyncio & async/await"],
    ],
    blocks: [
      {
        type: "paragraph",
        text: "Concurrency lets a program do multiple things at once. Python offers several models: threads (cheap, good for I/O), processes (side-step the GIL, good for CPU work), and asyncio (single-threaded event loop). Since Python 3.14, free-threaded builds make true parallelism optional.",
      },
      {
        type: "heading",
        heading: { en: "Threads for I/O-bound tasks", bm: "Thread untuk tugas I/O" },
      },
      {
        type: "code",
        code: {
          title: { en: "Threading", bm: "Threading" },
          description: {
            en: "Running functions in parallel.",
            bm: "Menjalankan fungsi secara selari.",
          },
          code: "import threading\nimport time\n\ndef work(name, seconds):\n    time.sleep(seconds)\n    print(f\"{name} done after {seconds}s\")\n\nthreads = []\nfor i in range(3):\n    t = threading.Thread(target=work, args=(f\"Task{i}\", i))\n    t.start()\n    threads.append(t)\n\nfor t in threads:\n    t.join()\n\nprint(\"All tasks finished\")",
          output: "Task0 done after 0s\nTask1 done after 1s\nTask2 done after 2s\nAll tasks finished",
        },
      },
      {
        type: "paragraph",
        text: "t.start() launches a thread; t.join() makes the main program wait for it. The three sleep calls overlap, so the whole block finishes in about 2 seconds instead of 3.",
      },
      {
        type: "heading",
        heading: { en: "concurrent.futures", bm: "concurrent.futures" },
      },
      {
        type: "code",
        code: {
          title: { en: "Thread pool", bm: "Kumpulan thread" },
          description: {
            en: "A clean high-level executor API.",
            bm: "API pelaksana peringkat tinggi yang kemas.",
          },
          code: "from concurrent.futures import ThreadPoolExecutor\n\ndef square(n):\n    return n * n\n\nwith ThreadPoolExecutor(max_workers=4) as ex:\n    results = list(ex.map(square, range(10)))\n\nprint(results)",
          output: "[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]",
        },
      },
      {
        type: "heading",
        heading: { en: "asyncio", bm: "asyncio" },
      },
      {
        type: "code",
        code: {
          title: { en: "Async ", bm: "Async" },
          description: {
            en: "A single-threaded event loop with await.",
            bm: "Gelung acara satu-thread dengan await.",
          },
          code: "import asyncio\n\nasync def greet(name, delay):\n    await asyncio.sleep(delay)\n    print(f\"Hello, {name}\")\n\nasync def main():\n    await asyncio.gather(\n        greet(\"A\", 1),\n        greet(\"B\", 2),\n    )\n\nasyncio.run(main())",
          output: "Hello, A\nHello, B",
        },
      },
      {
        type: "tip",
        tipText:
          "Rule of thumb: threads/async for network and disk I/O; multiprocessing (or free-threaded 3.14) for CPU-heavy pure-math work.",
      },
      {
        type: "warning",
        warningText:
          "The GIL serialises CPU-bound Python code across threads. For heavy computation use multiprocessing.Pool or numpy instead of many threads.",
      },
    ],
    exercises: [
      {
        question:
          "Write a program that downloads three URLs in parallel using a ThreadPoolExecutor.",
        solutionCode: "from concurrent.futures import ThreadPoolExecutor\nimport requests\n\ndef fetch(u):\n    return (u, requests.get(u, timeout=10).status_code)\n\nurls = [\"https://example.com\"] * 3\nwith ThreadPoolExecutor(max_workers=3) as ex:\n    for url, code in ex.map(fetch, urls):\n        print(url, code)",
        solutionExplanation:
          "The pool runs fetch() concurrently across the three URLs.",
      },
      {
        question:
          "Use asyncio to run three async tasks that each sleep 1s and confirm the total time is ~1s.",
        solutionCode: "import asyncio\n\nasync def task(name):\n    await asyncio.sleep(1)\n    return f\"{name} done\"\n\nasync def main():\n    results = await asyncio.gather(task(\"a\"), task(\"b\"), task(\"c\"))\n    print(results)\n\nasyncio.run(main())",
        solutionExplanation:
          "gather() runs the three coroutines concurrently on one event loop.",
      },
      {
        question:
          "Compare and state whether threads or processes fit a CPU-bound numeric loop, and why.",
        solutionCode: "# Answer:\n# CPU-bound work should use processes (or free-threaded Python)\n# because the GIL prevents threads from running Python bytecode in parallel.\nprint(\"Use multiprocessing for CPU-bound tasks\")",
        solutionExplanation:
          "The GIL means threads share the interpreter; separate processes get real parallel cores.",
      },
    ],
    pages: 5,
  },
  {
    id: 14,
    title: {
      en: "Web Development with Flask & FastAPI",
      bm: "Pembangunan Web dengan Flask & FastAPI",
    },
    subtitle: {
      en: "Building REST APIs and web apps with Python.",
      bm: "Membina API REST dan aplikasi web dengan Python.",
    },
    icon: "🖥️",
    color: "from-teal-600 to-emerald-600",
    category: "Web",
    learningGoals: [
      ["Build a Flask web application.", "Membina aplikasi web Flask."],
      ["Create REST API routes.", "Mencipta laluan API REST."],
      ["Send and receive JSON with FastAPI.", "Menghantar dan menerima JSON dengan FastAPI."],
      ["Understand routing and templates.", "Memahami laluan dan templat."],
    ],
    keyConcepts: [
      ["Flask routes & render_template", "Laluan Flask & render_template"],
      ["@app.route decorators", "Dekorator @app.route"],
      ["FastAPI & Pydantic", "FastAPI & Pydantic"],
      ["REST resources & methods", "Sumber & kaedah REST"],
    ],
    blocks: [
      {
        type: "paragraph",
        text: "Python shines on the back end. Flask is a lightweight, friendly micro-framework; FastAPI is a modern, high-performance option with automatic validation and OpenAPI docs. Both let you expose URLs that return HTML or JSON.",
      },
      {
        type: "heading",
        heading: { en: "A minimal Flask app", bm: "Aplikasi Flask yang minima" },
      },
      {
        type: "code",
        code: {
          title: { en: "Flask", bm: "Flask" },
          description: {
            en: "A basic web server (save as app.py).",
            bm: "Pelayan web asas (simpan sebagai app.py).",
          },
          code: "from flask import Flask, jsonify\n\napp = Flask(__name__)\n\n@app.route(\"/\")\ndef home():\n    return \"<h1>Welcome to my site</h1>\"\n\n@app.route(\"/api/hello\")\ndef api_hello():\n    return jsonify({\"message\": \"Hello from Flask!\"})\n\nif __name__ == \"__main__\":\n    app.run(debug=True)",
        },
      },
      {
        type: "paragraph",
        text: "The @app.route decorator binds a URL path to a Python function. When a browser hits /, home() runs and returns HTML. The /api/hello route returns JSON — the shape of a simple API.",
      },
      {
        type: "heading",
        heading: { en: "FastAPI with type hints", bm: "FastAPI dengan petunjuk jenis" },
      },
      {
        type: "code",
        code: {
          title: { en: "FastAPI", bm: "FastAPI" },
          description: {
            en: "Automatic validation from Pydantic models.",
            bm: "Pengesahan automatik daripada model Pydantic.",
          },
          code: "from fastapi import FastAPI\nfrom pydantic import BaseModel\n\napp = FastAPI()\n\nclass Item(BaseModel):\n    name: str\n    price: float\n\n@app.post(\"/items/\")\ndef create_item(item: Item):\n    return {\"received\": item.name, \"price\": item.price}\n\n# Run with: uvicorn main:app --reload",
        },
      },
      {
        type: "heading",
        heading: { en: "REST methods", bm: "Kaedah REST" },
      },
      {
        type: "table",
        items: [
          "HTTP Verb | Purpose | Typical route",
          "GET | Retrieve data | /items",
          "POST | Create a resource | /items",
          "PUT | Replace a resource | /items/1",
          "DELETE | Remove a resource | /items/1",
        ],
      },
      {
        type: "tip",
        tipText:
          "FastAPI auto-generates interactive docs at /docs — great for testing your endpoints while developing.",
      },
      {
        type: "warning",
        warningText:
          "Never run a Flask/FastAPI dev server in production. Use a production WSGI/ASGI server like gunicorn or uvicorn and reverse proxy behind nginx.",
      },
    ],
    exercises: [
      {
        question:
          "Create a Flask route /about that returns an HTML heading about your favourite hobby.",
        solutionCode: "from flask import Flask\napp = Flask(__name__)\n\n@app.route(\"/about\")\ndef about():\n    return \"<h2>I love programming with Python!</h2>\"\n\n# access at http://localhost:5000/about",
        solutionExplanation:
          "A route returns a string which Flask serves as HTML to the browser.",
      },
      {
        question:
          "Build a SimpleFastAPI endpoint that adds two query parameters using Pydantic-ish validation.",
        solutionCode: "from fastapi import FastAPI\napp = FastAPI()\n\n@app.get(\"/add\")\ndef add(a: int, b: int):\n    return {\"sum\": a + b}\n\n# /add?a=2&b=5  ->  {\"sum\": 7}",
        solutionExplanation:
          "FastAPI coerces query params to the declared int types automatically.",
      },
      {
        question:
          "Add a DELETE-style route to a FastAPI app that returns a confirmation message.",
        solutionCode: "from fastapi import FastAPI\napp = FastAPI()\n\n@app.delete(\"/items/{id}\")\ndef delete_item(id: int):\n    return {\"deleted\": id}\n\n# /items/3  ->  {\"deleted\": 3}",
        solutionExplanation:
          "Path parameters in braces become function arguments, typed and validated by FastAPI.",
      },
    ],
    pages: 5,
  },
  {
    id: 15,
    title: {
      en: "Projects, Best Practices & Next Steps",
      bm: "Projek, Amalan Terbaik & Langkah Seterusnya",
    },
    subtitle: {
      en: "Putting it all together and your roadmap to mastery.",
      bm: "Menggabungkan semuanya dan peta jalan ke arah penguasaan.",
    },
    icon: "🚀",
    color: "from-orange-500 to-red-600",
    category: "Capstone",
    learningGoals: [
      ["Follow Python best practices & PEP 8.", "Mengikuti amalan terbaik Python & PEP 8."],
      ["Use venv and requirements.txt.", "Menggunakan venv dan requirements.txt."],
      ["Write tests with unittest/pytest.", "Menulis ujian dengan unittest/pytest."],
      ["Build a capstone project with version control.", "Membina projek ijazah akhir dengan kawalan versi."],
    ],
    keyConcepts: [
      ["PEP 8 style guide", "Panduan gaya PEP 8"],
      ["Type hints & docstrings", "Petunjuk jenis & docstring"],
      ["Virtual environments", "Persekitaran maya"],
      ["Unit testing", "Ujian unit"],
    ],
    blocks: [
      {
        type: "paragraph",
        text: "You have covered a huge amount of ground. This final chapter ties everything together with professional practices that separate hobby scripts from maintainable software. Adopting these habits will make your code cleaner, safer, and easier to collaborate on.",
      },
      {
        type: "heading",
        heading: { en: "PEP 8 fundamentals", bm: "Asas PEP 8" },
      },
      {
        type: "list",
        items: [
          "Use 4 spaces for indentation, never tabs.",
          "Limit lines to 79 characters (Django/Google style allows 88/79).",
          "Use snake_case for variables/functions and CamelCase for classes.",
          "Add a blank line (or two) around functions and classes.",
          "Use spaces around operators and after commas.",
        ],
      },
      {
        type: "heading",
        heading: { en: "Virtual environments", bm: "Persekitaran maya" },
      },
      {
        type: "code",
        code: {
          title: { en: "venv & deps", bm: "venv & kebergantungan" },
          description: {
            en: "Isolating project dependencies.",
            bm: "Mengasingkan kebergantungan projek.",
          },
          code: "# In your project folder:\npython -m venv .venv\nsource .venv/bin/activate    # Windows: .venv\\Scripts\\activate\npip install requests\npip freeze > requirements.txt",
        },
      },
      {
        type: "heading",
        heading: { en: "Unit testing", bm: "Ujian unit" },
      },
      {
        type: "code",
        code: {
          title: { en: "pytest", bm: "pytest" },
          description: {
            en: "Testing a function with pytest.",
            bm: "Menguji fungsi dengan pytest.",
          },
          code: "# test_maths.py\nfrom maths import add\n\ndef test_add():\n    assert add(2, 3) == 5\n    assert add(-1, 1) == 0\n\n# run with: pytest -v",
        },
      },
      {
        type: "heading",
        heading: { en: "Capstone projects to try", bm: "Projek ijazah akhir untuk dicuba" },
      },
      {
        type: "list",
        items: [
          "A CLI to-do list app with file persistence.",
          "A weather dashboard that calls an API and displays data.",
          "A web scraper that tracks prices or news and emails you.",
          "A Flask/FastAPI note-taking REST API.",
          "A small data-analysis project with Pandas on a public dataset.",
        ],
      },
      {
        type: "paragraph",
        text: "Finally, master the build tools of the trade: python -m pip install, virtualenvs, and Git for version control. Pair your editor with an AI assistant or linter for feedback. Most of all, keep building — every project is a step toward fluency.",
      },
      {
        type: "tip",
        tipText:
          "Read the official Python docs, join the community, and contribute to open source. The best way to learn is to teach and build.",
      },
      {
        type: "warning",
        warningText:
          "Do not rush to production. Always keep requirements.txt updated, pin versions, and run your tests before deploying.",
      },
    ],
    exercises: [
      {
        question:
          "Write a function add(a, b) in a module called maths.py, then write a unit test for it with pytest.",
        solutionCode: "# maths.py\ndef add(a, b):\n    return a + b\n\n# test_maths.py\nfrom maths import add\n\ndef test_add():\n    assert add(2, 3) == 5\n    assert add(-1, 1) == 0\n\n# Run: pytest -v",
        solutionExplanation:
          "Keeping logic in a function makes it trivially testable; assertions verify behaviour.",
      },
      {
        question:
          "Refactor this badly named code: x=q(5) meaning computing the factorial of 5.",
        solutionCode: "def factorial(n):\n    result = 1\n    for i in range(2, n + 1):\n        result *= i\n    return result\n\nprint(factorial(5))  # 120",
        solutionOutput: "120",
        solutionExplanation:
          "Clear function names and purposeful variable names improve readability dramatically.",
      },
      {
        question:
          "Plan and outline a data-analysis capstone: choose a dataset, the questions, and the steps.",
        solutionCode: "# Outline\n# 1. Choose dataset (e.g., iris)\n# 2. Load with pandas.read_csv\n# 3. explore with .describe()/.head()\n# 4. clean missing values\n# 5. answer questions with groupby/plot\n# 6. summarise findings\nprint(\"Plan documented\")",
        solutionExplanation:
          "Structuring a project into clear data, question, and analysis steps is good engineering practice.",
      },
    ],
    pages: 6,
  },
];
