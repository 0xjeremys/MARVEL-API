const express = require("express");
// cors
const cors = require("cors");

//dotenv
require("dotenv").config();

//lancement du serveur
const app = express();

//midlwarre
app.use(cors());
app.use(express.json());

//comics routes
const comicsRoutes = require("./routes/comics");
app.use(comicsRoutes);

//characteres routes
const characteresRoutes = require("./routes/characters");
app.use(characteresRoutes);

//page home
app.get("/", async (req, res) => {
  try {
    res.status(404).json({ message: "Hello world" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//routes inexistantes
app.all("*", (req, res) => {
  res.status(404).json({ message: "this route not found" });
});

//server starting
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${process.env.PORT}`);
});
