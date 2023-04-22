import { writeFile } from "fs/promises";
import { buildpage } from "./uri_createHTML.js";
import { getPokemon } from "./uri_pokemons.js";

const PokemonObj = await getPokemon(100);
const PokemonHtml = buildpage(PokemonObj);
await writeFile("pokemon.html", PokemonHtml);
