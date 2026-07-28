import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "10mb" }));

  // Initialize Gemini Client
  const getGemini = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return null;
    return new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  };

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", hasApiKey: !!process.env.GEMINI_API_KEY });
  });

  // AI Profile Enhancer & Project Description Polish
  app.post("/api/ai/enhance-profile", async (req, res) => {
    try {
      const { prompt, type } = req.body;
      const ai = getGemini();

      if (!ai) {
        return res.status(400).json({
          error: "API key Gemini tidak terkonfigurasi. Menggunakan data default.",
        });
      }

      let systemInstruction = "Kamu adalah Konsultan Karir Senior & Portfolio Strategist profesional untuk Software Engineer. Tulis respon dalam bahasa Indonesia yang sangat elegan, percaya diri, modern, dan profesional.";

      if (type === "bio") {
        systemInstruction += " Buatkan ringkasan Bio/Tentang Saya yang singkat, memukau, dan berdampak tinggi untuk website portofolio siswa/developer RPL.";
      } else if (type === "project") {
        systemInstruction += " Tuliskan deskripsi proyek software/aplikasi web yang menonjolkan fitur utama, arsitektur, dan nilai tambah bisnis/teknis secara ringkas.";
      } else if (type === "headline") {
        systemInstruction += " Buatkan headline 1-kalimat super eye-catching untuk hero section portofolio.";
      }

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt || "Buatkan bio profesional untuk pengembang web muda berprestasi.",
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      res.json({ result: response.text || "" });
    } catch (err: any) {
      console.error("Gemini API error:", err);
      res.status(500).json({ error: err.message || "Gagal memproses dengan Gemini AI" });
    }
  });

  // AI Portfolio Copilot Chat
  app.post("/api/ai/chat", async (req, res) => {
    try {
      const { message, profileData } = req.body;
      const ai = getGemini();

      if (!ai) {
        return res.status(400).json({
          error: "API Key belum terpasang di environment variable GEMINI_API_KEY.",
        });
      }

      const systemInstruction = `Kamu adalah Assistant AI Resmi ("Aura Royal Copilot") untuk portofolio ${profileData?.name || "Taqi Alfaht"}.
Tugasmu adalah menjawab pertanyaan dari pengunjung, recruiter, atau klien potensial tentang keahlian, proyek, dan kontak sang developer secara ramah, profesional, cepat, dan elegan dalam Bahasa Indonesia.

Data Portofolio Saat Ini:
Nama: ${profileData?.name || "Taqi Alfaht"}
Title: ${profileData?.title || "Siswa RPL & Future Software Engineer"}
Bio: ${profileData?.about || ""}
Keahlian: ${(profileData?.skills || []).map((s: any) => s.name).join(", ")}
Proyek Teratas: ${(profileData?.projects || []).map((p: any) => p.title + ": " + p.desc).join(" | ")}
Kontak: WhatsApp (${profileData?.whatsapp || ""}), Email (${profileData?.email || ""})

Aturan:
- Jawab dengan singkat, lugas, dan terstruktur.
- Pakai bullet points jika menjelaskan beberapa skill atau proyek.
- Berikan saran terbaik jika penanya adalah recruiter yang mencari developer web / mobile.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: message,
        config: {
          systemInstruction,
          temperature: 0.6,
        },
      });

      res.json({ reply: response.text || "Maaf, tidak dapat menghasilkan jawaban saat ini." });
    } catch (err: any) {
      console.error("AI Chat error:", err);
      res.status(500).json({ error: err.message || "Terjadi kesalahan pada AI Chat" });
    }
  });

  // Vite middleware for development vs static build for production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
