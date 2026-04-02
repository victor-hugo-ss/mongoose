import express from "express";
import exphbs from "express-handlebars";

const app = express();

import conn from "./db/conn.js";

import productsRoutes from "./routes/productsRoutes.js";

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

// read body
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.json());

app.use(express.static("public"));

app.use("/products", productsRoutes);

app.listen(3000, () => {
  console.log("app rodando na porta: 3000");
});
