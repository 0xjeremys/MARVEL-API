// characters.js

const express = require("express");
const router = express.Router();
const axios = require("axios");

// route characters tested on postman: ok

router.get("/characters", async (req, res) => {
  try {
    const { limit, skip, title } = req.query;

    let marvelApiUrl = `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}`;

    //if  querys exist
    if (limit) {
      marvelApiUrl += `&limit=${limit}`;
    }

    if (skip) {
      marvelApiUrl += `&skip=${skip}`;
    }
    if (title) {
      marvelApiUrl += `&title=${title}`;
    }
    const response = await axios.get(marvelApiUrl);

    res.status(200).json({ data: response.data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//route charactres ID tested on postman: ok
router.get("/character/:characterId", async (req, res) => {
  try {
    const { characterId } = req.params;

    const marvelApiUrl = `https://lereacteur-marvel-api.herokuapp.com/character/${characterId}?apiKey=${process.env.API_KEY}`;

    const response = await axios.get(marvelApiUrl);

    res.status(200).json({ data: response.data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
