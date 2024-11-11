import express from "express";
const router = express.Router();

router.get("/perfil", (req, res) => {
  res.render("user/profile", {
    titulo: "Meu Perfil",
    css: "profile.css",
    js: "profile.mjs",
  });
});

router.get("/editar-perfil", (req, res) => {
    res.render("user/editProfile", {
        titulo: "Editar perfil",
        css: "editProfile.css",
        js: "editProfile.mjs"
    })
});

export { router as userRouter };
