import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

app.get("/gpt", async (req, res) => {
  const r = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENAI_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4.1-mini",
      messages: [{ role: "user", content: "hello" }]
    })
  });

  const data = await r.json();
  res.json(data);
});

app.listen(3000, () => console.log("API running"));
