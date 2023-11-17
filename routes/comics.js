// comics.js

const express = require("express");
const router = express.Router();
const axios = require("axios");

//route comics tested on postman: ok
router.get("/comics", async (req, res) => {
  try {
    const { limit, skip, title } = req.query;

    let marvelApiUrl = `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY}`;

    //if  querys  exist
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

//route comics characterid tested on postman: ok
router.get("/comics/:characterId", async (req, res) => {
  try {
    const { characterId } = req.params;

    const marvelApiUrl = `https://lereacteur-marvel-api.herokuapp.com/comics/${characterId}?apiKey=${process.env.API_KEY}`;

    const response = await axios.get(marvelApiUrl);

    res.status(200).json({ data: response.data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//route comicID tested on postman: ok
router.get("/comic/:comicId", async (req, res) => {
  try {
    const { comicsId } = req.params;

    const marvelApiUrl = `https://lereacteur-marvel-api.herokuapp.com/comic/${comicsId}?apiKey=${process.env.API_KEY}`;

    const response = await axios.get(marvelApiUrl);

    res.status(200).json({ data: response.data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
