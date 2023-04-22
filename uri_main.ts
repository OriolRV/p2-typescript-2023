import { writeFile } from "fs/promises";
import { buildPage } from "./uri_createHTML.js";
import { buildIndividualPage } from "./uri_createIndividualHTML.js";
import { getPokemon } from "./uri_pokemons.js";

const PokemonObj = await getPokemon(1);
const PokemonHtml = buildPage(PokemonObj);
await writeFile("pokemon.html", PokemonHtml);

for (const monster of PokemonObj) {
	let miniPage = buildIndividualPage(monster);
	await writeFile(`${monster.name}.html`, miniPage);
}
