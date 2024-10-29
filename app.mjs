// Módulos
import express from "express";
import handlebars from "express-handlebars";

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

// Arquivos estáticos
app.use(express.static("public"))

// Rotas
import router from "./routes/router.mjs";
app.use("/", router);

app.listen(PORT, () => {
  console.log("Servidor Online!");
});
