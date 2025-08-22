import express from "express";
const app = express();
const PORT = process.env.PORT || 5001;
app.use(express.json());
app.get("/health", (req, res) => {
  res.status(200).json({ ok: true, message: "Server is healthy " });
});
app.get("/", (req, res) => {
  res.status(200).send("Welcome to the API. Try GET /health or POST /register.");
});
app.post("/register", (req, res) => {
  const userData = req.body; 

  console.log(" Incoming /register payload:", userData);

});
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});