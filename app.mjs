// Módulos
import express from "express";
import handlebars from "express-handlebars";
import bodyParser from "body-parser";
// Configurações
// Express
const app = express();
const PORT = 8081;
// HandleBars
app.engine(
  "handlebars",
  handlebars.engine({
    defaultLayout: "main",
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
  })
);
app.set('view engine', 'handlebars')

// Body-Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Arquivos estáticos
app.use(express.static("public"))

// Rotas
import router from "./routes/router.mjs";
import { userRouter } from "./routes/user.mjs";

app.use("/", router);
app.use("/user", userRouter)

app.listen(PORT, () => {
  console.log("Servidor Online!");
});
