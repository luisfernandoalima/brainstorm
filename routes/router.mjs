import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { titulo: "Página Inicial",css: "home.css", js: "home.mjs" });
});

export default router;