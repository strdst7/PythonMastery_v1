import type { Chapter } from "./types";
import { chapters1 } from "./chapters1";
import { chapters2 } from "./chapters2";
import { chapters3 } from "./chapters3";

export type { Chapter, Localized, CodeExample, Exercise } from "./types";

export const chapters: Chapter[] = [...chapters1, ...chapters2, ...chapters3];

export const introContent: {
  title: { en: string; bm: string };
  paragraphs: { en: string; bm: string }[];
  cards: { icon: string; title: { en: string; bm: string }; text: { en: string; bm: string } }[];
} = {
  title: { en: "Welcome to Python Mastery", bm: "Selamat Datang ke Penguasaan Python" },
  paragraphs: [
    {
      en: "Python Mastery is a complete, self-paced course in the Python programming language. Whether you have never written a line of code before or you want to sharpen your skills, this book will guide you step by step from the absolute basics to advanced topics such as object-oriented design, generators, concurrency, and web development.",
      bm: "Penguasaan Python adalah kursus lengkap dan kendiri dalam bahasa pengaturcaraan Python. Sama ada anda tidak pernah menulis kod sebelum ini atau ingin memantapkan kemahiran, buku ini akan membimbing anda langkah demi langkah daripada asas mutlak kepada topik lanjutan seperti reka bentuk berorientasikan objek, penjana, konkurensi, dan pembangunan web.",
    },
    {
      en: "Each of the 15 chapters introduces a concept, explains it with clear reasoning, shows working code examples, and ends with exercises you should attempt before revealing the solutions. Everything is interactive — you can run every code sample directly in your browser without installing anything.",
      bm: "Setiap daripada 15 bab memperkenalkan konsep, menerangkannya dengan jelas, menunjukkan contoh kod yang berfungsi, dan diakhiri dengan latihan yang anda patut cuba sebelum mendedahkan penyelesaian. Semuanya interaktif — anda boleh menjalankan setiap contoh kod terus dalam pelayar anda tanpa memasang apa-apa.",
    },
  ],
  cards: [
    {
      icon: "🎯",
      title: { en: "Who This Book Is For", bm: "Sasaran Pembaca" },
      text: {
        en: "Absolute beginners, students, and working professionals who want to learn coding with a modern, practical language. No prior programming experience is required.",
        bm: "Pemula mutlak, pelajar, dan profesional yang ingin belajar pengaturcaraan dengan bahasa yang moden dan praktikal. Tiada pengalaman pengaturcaraan diperlukan.",
      },
    },
    {
      icon: "📖",
      title: { en: "How to Use This Book", bm: "Cara Menggunakan Buku Ini" },
      text: {
        en: "Read the chapters in order. Attempt every exercise yourself before revealing the solution. Run the interactive examples to see the output live.",
        bm: "Baca bab mengikut urutan. Cuba setiap latihan sendiri sebelum mendedahkan penyelesaian. Jalankan contoh interaktif untuk melihat output secara langsung.",
      },
    },
    {
      icon: "🔬",
      title: { en: "What Makes It Interactive", bm: "Apa Yang Menjadikannya Interaktif" },
      text: {
        en: "A built-in code runner executes Python right in your browser. Type or edit any example, press Run, and watch the console output appear instantly.",
        bm: "Pelari kod terbina melaksanakan Python terus dalam pelayar anda. Taip atau edit mana-mana contoh, tekan Jalankan, dan lihat output konsol muncul serta-merta.",
      },
    },
  ],
};
