export type Lang = "en" | "bm";

export interface Translation {
  pageTitle: string;
  bookTitle: string;
  bookSubtitle: string;
  languageToggle: string;
  tableOfContents: string;
  searchPlaceholder: string;
  searchEmpty: string;
  introduction: string;
  startReading: string;
  footerBy: string;
  copyright: string;
  rightReserved: string;
  chapterLabel: string;
  goals: string;
  keyConcepts: string;
  exampleTitle: string;
  outputTitle: string;
  exerciseTitle: string;
  solutionTitle: string;
  expectedOutput: string;
  tipTitle: string;
  warningTitle: string;
  printButton: string;
  runButton: string;
  resetButton: string;
  outputLabel: string;
  heroTagline: string;
  heroCta: string;
  heroSecondary: string;
  totalChapters: string;
  interactiveNote: string;
  prev: string;
  next: string;
  close: string;
  solution: string;
  showSolution: string;
  hideSolution: string;
  chapterOverview: string;
  finalWords: string;
  introTitle: string;
  introPurpose: string;
  introAudience: string;
  introHowToUse: string;
}

export const translations: Record<Lang, Translation> = {
  en: {
    pageTitle: "Python Mastery — The Complete Beginner's Guide (2026 Edition)",
    bookTitle: "Python Mastery",
    bookSubtitle:
      "The Complete Beginner-to-Advanced Guide for Programming in Python",
    languageToggle: "🌐 Bahasa Melayu",
    tableOfContents: "Table of Contents",
    searchPlaceholder: "Search chapters, terms, or code…",
    searchEmpty: "No results found for your search.",
    introduction: "Introduction",
    startReading: "Start Reading",
    footerBy: "Published under",
    copyright: "© 2026 aimirah.com. All rights reserved.",
    rightReserved:
      "No part of this eBook may be reproduced without prior written permission.",
    chapterLabel: "Chapter",
    goals: "What You Will Learn",
    keyConcepts: "Key Concepts",
    exampleTitle: "Example",
    outputTitle: "Output",
    exerciseTitle: "Exercises",
    solutionTitle: "Solutions",
    expectedOutput: "Expected Output",
    tipTitle: "Tip",
    warningTitle: "Common Mistake",
    printButton: "🖨️ Print / Save as PDF",
    runButton: "▶ Run Code",
    resetButton: "Reset",
    outputLabel: "Console Output",
    heroTagline:
      "A step-by-step, interactive guide — with examples, exercises, and full solutions.",
    heroCta: "Begin Your Journey",
    heroSecondary: "Browse Chapters",
    totalChapters: "15 chapters",
    interactiveNote:
      "All code examples are runnable directly in your browser. No installation required.",
    prev: "← Previous",
    next: "Next →",
    close: "Close",
    solution: "Solution",
    showSolution: "Show Solution",
    hideSolution: "Hide Solution",
    chapterOverview: "Chapter Learning Outcomes",
    finalWords: "Final Words",
    introTitle: "Welcome to Python Mastery",
    introPurpose:
      "This eBook is a complete, self-paced course in the Python programming language. Whether you have never written a line of code before or you want to sharpen your skills, this book will guide you step by step from the absolute basics to advanced topics such as object-oriented design, file handling, error handling, and web automation.",
    introAudience:
      "This book is written for absolute beginners, students, and working professionals who want to learn programming with a modern, practical language. No prior programming experience is required — only curiosity, patience, and a computer.",
    introHowToUse:
      "Read the chapters in order. Each chapter explains a concept, shows working code examples, and ends with exercises. Attempt every exercise yourself before revealing the solution. All examples are interactive — click the Run button to execute the code right in your browser.",
  },
  bm: {
    pageTitle: "Penguasaan Python — Panduan Lengkap Pemula (Edisi 2026)",
    bookTitle: "Penguasaan Python",
    bookSubtitle:
      "Panduan Lengkap Dari Tahap Asas Hingga Mahir dalam Pengaturcaraan Python",
    languageToggle: "🌐 English",
    tableOfContents: "Senarai Kandungan",
    searchPlaceholder: "Cari bab, istilah, atau kod…",
    searchEmpty: "Tiada hasil dijumpai untuk carian anda.",
    introduction: "Pengenalan",
    startReading: "Mula Membaca",
    footerBy: "Diterbitkan di bawah",
    copyright: "© 2026 aimirah.com. Hak cipta terpelihara.",
    rightReserved:
      "Tiada bahagian eBook ini boleh diterbitkan semula tanpa kebenaran bertulis terlebih dahulu.",
    chapterLabel: "Bab",
    goals: "Objektif Pembelajaran",
    keyConcepts: "Konsep Utama",
    exampleTitle: "Contoh",
    outputTitle: "Output",
    exerciseTitle: "Latihan",
    solutionTitle: "Penyelesaian",
    expectedOutput: "Output Dijangka",
    tipTitle: "Tip",
    warningTitle: "Kesilapan Lazim",
    printButton: "🖨️ Cetak / Simpan sebagai PDF",
    runButton: "▶ Jalankan Kod",
    resetButton: "Set Semula",
    outputLabel: "Output Konsol",
    heroTagline:
      "Panduan langkah demi langkah dan interaktif — dengan contoh, latihan, dan penyelesaian penuh.",
    heroCta: "Mulakan Perjalanan Anda",
    heroSecondary: "Lihat Kandungan",
    totalChapters: "15 bab",
    interactiveNote:
      "Semua contoh kod boleh dijalankan terus dalam pelayar anda. Tiada pemasangan diperlukan.",
    prev: "← Sebelumnya",
    next: "Seterusnya →",
    close: "Tutup",
    solution: "Penyelesaian",
    showSolution: "Lihat Penyelesaian",
    hideSolution: "Sembunyi Penyelesaian",
    chapterOverview: "Hasil Pembelajaran Bab",
    finalWords: "Kata Penutup",
    introTitle: "Selamat Datang ke Penguasaan Python",
    introPurpose:
      "eBook ini adalah kursus lengkap dan kendiri dalam bahasa pengaturcaraan Python. Sama ada anda tidak pernah menulis kod sebelum ini atau ingin memantapkan kemahiran, buku ini akan membimbing anda langkah demi langkah daripada asas mutlak kepada topik lanjutan seperti reka bentuk berorientasikan objek, pengendalian fail, pengendalian ralat, dan automasi web.",
    introAudience:
      "Buku ini ditulis untuk pemula mutlak, pelajar, dan profesional yang ingin belajar pengaturcaraan dengan bahasa yang moden dan praktikal. Tiada pengalaman pengaturcaraan diperlukan — hanya ingin tahu, kesabaran, dan komputer.",
    introHowToUse:
      "Baca bab mengikut urutan. Setiap bab menerangkan konsep, menunjukkan contoh kod yang berfungsi, dan diakhiri dengan latihan. Cuba setiap latihan sendiri sebelum mendedahkan penyelesaian. Semua contoh interaktif — klik butang Jalankan Kod untuk melaksanakan kod terus dalam pelayar anda.",
  },
};
