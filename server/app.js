const express = require("express");
const app = express();

const bodyParser = require("./bodyParser");

const { readData, updateData } = require("./fileSystem");

app.use(express.static("public"));

const PORT = process.env.PORT || 3001;

app.use((req, res, next) => {
  console.log(`${req.method} Request Received`);
  next();
});

app.use("/pokemons/comments/:pokemon", (req, res, next) => {
  const data = readData();
  const { pokemon } = req.params;
  if (data.pokemon) {
    return res.status(404).send("Bean with that name does not exist");
  }
  req.pokemon_comments = data[pokemon];
  req.pokemon_name = pokemon;
  next();
});

app.get("/pokemons/comments/", (req, res, next) => {
  const data = readData();
  res.send(data);
});

app.get("/pokemons/comments/:pokemon", (req, res, next) => {
  const data = readData();
  if (req.pokemon_name in data) {
    res.send(req.pokemon_comments);
  } else {
    res.status(404).send("JSON hasn't this ELEM yet");
  }
});

app.post("/pokemons/comments/:pokemon", bodyParser, (req, res, next) => {
  const data = readData();
  const body = req.body;
  const pokemonName = req.pokemon_name;

  if (pokemonName in data) {
    data[pokemonName].push(body);
  } else {
    const pokemonCommentsEmpty = [];
    pokemonCommentsEmpty.push(body);
    data[pokemonName] = pokemonCommentsEmpty;
  }

  updateData(data, res);
});

app.put("/pokemons/comments/:pokemon/", bodyParser, (req, res, next) => {
  const data = readData();
  const body = req.body;
  const id = body.id;
  const pokemonName = req.pokemon_name;

  data[pokemonName][id] = body;

  updateData(data, res);
});

app.delete("/pokemons/comments/:pokemon/", bodyParser, (req, res, next) => {
  const data = readData();
  const body = req.body;
  const id = body.id;
  const pokemonName = req.pokemon_name;

  data[pokemonName].splice(id, 1);
  data[pokemonName].map((item, index) => (item["id"] = index));
  updateData(data, res);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
