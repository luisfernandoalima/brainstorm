import express from "express"
const router = express.Router()

router.get('/perfil', (req, res)=>{
    res.render('user/profile', {titulo: "Meu Perfil", css: "profile.css", js: "profile.mjs"})
})

export {router as userRouter}