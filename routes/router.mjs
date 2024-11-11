import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {
    titulo: "Página Inicial",
    css: "home.css",
    js: "home.mjs",
  });
});

router.get("/login", (req, res) => {
  res.render("login", { titulo: "Login", css: "login.css", js: "login.mjs" });
});

router.get("/signin", (re1, res) => {
  res.render("signin", {titulo: "Cadastre-se", css:"signin.css", js:"signin.mjs"})
})

export default router;
