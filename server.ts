import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Safe Lazy Gemini Client
  let aiClient: GoogleGenAI | null = null;
  function getAI(): GoogleGenAI | null {
    if (!aiClient && process.env.GEMINI_API_KEY) {
      aiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    }
    return aiClient;
  }

  // AI Supplement Advisor Endpoint
  app.post("/api/advisor", async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message || typeof message !== "string") {
        return res.status(400).json({ error: "A message string is required." });
      }

      const client = getAI();
      if (!client) {
        // Fallback intelligent response when API key is not configured in environment
        const fallback = generateExpertAdviceFallback(message);
        return res.json({
          reply: fallback,
          source: "local-advisor",
          note: "Running on PremiumSupps Local Clinical Engine. Add GEMINI_API_KEY in Settings for Live Gemini."
        });
      }

      const systemInstruction = `You are the official AI Supplement Specialist for PremiumSupps (premiumsupps.net), Australia's direct-to-consumer sports nutrition laboratory based in Sydney.
Your mission is to provide straight-talking, clinical, science-backed guidance to athletes and gym-goers.

Brand Philosophy:
- "Pure Doses. No Fillers. No Excuses."
- 100% full label transparency, zero proprietary blends, direct Australian manufacturer pricing.

Available Catalog Formulations:
1. Warrior High-Stimulant Pre-workout ($41.97 AUD): 400mg Caffeine, 6,000mg L-Citrulline, 4,000mg Beta-Alanine, 1,000mg L-Tyrosine. Ideal for heavy morning/afternoon sessions.
2. Warrior KING Ultra High-Stim Pre-workout ($55.97 AUD): 500mg Caffeine, 10,000mg L-Citrulline, 1,200mg Alpha GPC, Synephrine. For experienced high-stim athletes only.
3. Night Warrior Caffeine-Free Pre-Workout ($41.97 AUD): 0mg Caffeine, 10,000mg Citrulline, 4,000mg Beta-Alanine, 2,500mg Betaine, 200mg Himalayan Salt, 100mcg Huperzine A. Ideal for training after 5pm or stimulant-sensitive athletes.
4. Liquid Glycerol 500ml ($25.73 AUD): 1.25g/mL concentrated solution for intracellular hyper-hydration and skin-splitting pumps. Stacks well with Night Warrior or Warrior.
5. Micronised Creatine Monohydrate ($17.47 - $34.97 AUD, 250g/500g/1000g): 200-mesh ultra-pure unflavoured creatine. Recommended 5g daily consistently.
6. Creatine HCL 150g ($34.97 AUD): Ultra-soluble micro-dose creatine for sensitive stomachs.
7. Pure Shilajit Resin 20g ($48.97 AUD): >85% Fulvic Acid, organic Himalayan resin for vitality, stamina, and testosterone support.
8. Methylene Blue 1% Solution 30ml ($34.97 AUD): Pharmaceutical grade for cellular mitochondrial respiration and cognitive stamina.
9. Bacteriostatic Water 30ml ($25.87 AUD): Sterile 0.9% benzyl alcohol solvent.
10. Protein Water 990g ($48.97 AUD): 27g protein/serve from hydrolysed beef collagen.
11. Stacks: Essentials Stack ($79 AUD), Anabolic Stack ($99.95 AUD), Performance Stack ($99.95 AUD), Hydration Stack ($79.95 AUD).

Instructions:
- Tone: Australian athletic coach & formulation chemist. Professional, direct, encouraging, clinical.
- Specifics: Recommend the exact product name, serving size (e.g. 1 scoop vs 2 scoops), and timing (e.g. 20-30 min pre-workout).
- Safety: Remind users to assess tolerance (start with half a scoop on high-stim products) and never combine multiple caffeinated products.
- Keep responses concise (under 180 words), organized with bullet points where appropriate.`;

      // Build recent conversational contents
      const conversationContents: any[] = [];
      if (Array.isArray(history)) {
        for (const item of history.slice(-4)) {
          if (item.sender === "user") {
            conversationContents.push({ role: "user", parts: [{ text: item.text }] });
          } else if (item.sender === "bot") {
            conversationContents.push({ role: "model", parts: [{ text: item.text }] });
          }
        }
      }
      conversationContents.push({ role: "user", parts: [{ text: message }] });

      const response = await client.models.generateContent({
        model: "gemini-3.8-flash",
        contents: conversationContents,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      const replyText = response.text || "I recommend checking our Sydney formulation laboratory pre-workout range.";
      return res.json({
        reply: replyText,
        source: "gemini-3.8-flash"
      });

    } catch (err: any) {
      console.error("Gemini advisor error:", err);
      // Seamlessly fallback so user experience stays pristine
      const fallback = generateExpertAdviceFallback(req.body?.message || "");
      return res.json({
        reply: fallback,
        source: "fallback-advisor"
      });
    }
  });

  // Health check
  app.get("/api/health", (_req, res) => {
    res.json({
      status: "ok",
      geminiConfigured: !!process.env.GEMINI_API_KEY,
      timestamp: new Date().toISOString()
    });
  });

  // Vite middleware in dev, static files in prod
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

function generateExpertAdviceFallback(message: string): string {
  const q = message.toLowerCase();

  if (q.includes("pump") || q.includes("nitric") || q.includes("vascularity")) {
    return "G'day! For maximum muscle pumps and blood flow without stimulants, here is the clinical Sydney stack:\n\n• **Night Warrior Caffeine-Free Pre-Workout** ($41.97 AUD): Delivers a huge 10,000mg of pure L-Citrulline, 4,000mg Beta-Alanine, and 2,500mg Betaine.\n• **Liquid Glycerol 500ml** ($25.73 AUD): Take 20–30ml 30 minutes before training with 500ml of water for cellular hyper-hydration.\n\nTake this 25 minutes before training for skin-splitting fullness and zero post-gym crash!";
  }

  if (q.includes("caffeine") || q.includes("night") || q.includes("evening") || q.includes("sleep") || q.includes("stim")) {
    return "G'day! For evening training (after 5 PM) or if you want to avoid caffeine jitteriness:\n\n• **Night Warrior Caffeine-Free Pre-Workout** ($41.97 AUD) is formulated specifically for you. Zero caffeine, but loaded with 10g L-Citrulline, 4g Beta-Alanine, 2g Tyrosine, and 100mcg Huperzine A for laser focus.\n• Pair with **Micronised Creatine Monohydrate** (5g daily) for continuous ATP strength replenishment without disrupting your sleep cycles.";
  }

  if (q.includes("fat loss") || q.includes("cut") || q.includes("lean") || q.includes("shred")) {
    return "G'day! For lean muscle retention and accelerated fat metabolism:\n\n• **Acetyl-L-Carnitine HCL (ALCAR)** ($23.06 AUD): Take 2g upon waking or 30 mins pre-cardio to facilitate long-chain fatty acid oxidation.\n• **Warrior High-Stimulant Pre-workout** ($41.97 AUD): 400mg caffeine thermogenic stimulus.\n• **Protein Water 990g** ($48.97 AUD): 27g pure hydrolysed bovine collagen protein with zero sugar and near-zero carbs to protect muscle while in a calorie deficit.";
  }

  if (q.includes("creatine") || q.includes("strength") || q.includes("mass")) {
    return "G'day! For pure explosive strength and lean muscle mass:\n\n• **Micronised Creatine Monohydrate (200 Mesh)**: $17.47 for 250g, $25.87 for 500g, or $34.97 for 1kg. Ultra-fine mesh dissolves instantly without stomach bloating.\n• **Dosing**: 5g per day, every single day with water or your protein shake. No loading phase required.\n• Stack with **Beta-Alanine** (4g) to buffer lactic acid during high-rep sets.";
  }

  return "G'day! Welcome to PremiumSupps Sydney. Based on your goals, our two most popular performance recommendations are:\n\n1. **Morning / Daytime Power**: **Warrior High-Stimulant Pre-workout** (400mg caffeine + 6g Citrulline + 4g Beta Alanine) for explosive drive.\n2. **Evening / Hyper-Pumps**: **Night Warrior Caffeine-Free** (10g Citrulline) + **Liquid Glycerol** (for deep intracellular hydration).\n\nAdd 5g of our pure 200-mesh **Micronised Creatine Monohydrate** daily to maximize muscle power. What specific training style are you running right now?";
}

startServer();
