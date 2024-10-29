import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { titulo: "Página Inicial",css: "home.css" });
});

export default router;