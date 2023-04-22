import { Pokemon } from "./uri_pokemons.js";

const head = (title: string) => `
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      font-family: Georgia, serif;
    }
    body {
        background-color: lightgreen;
    }
    #centralSquare {
        margin: 5rem 5rem;
        background-color: lightblue;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .pokemon {
        width: 90%;
        background-color: white;
        margin: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: stretch;
        border-radius: 5%;
    }
    .pokemon img {
        width: 100%;
    }
    .leftSection {
        width: 20%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
    }
    .middleSection {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    .rightSection {
        width: 15%;
    }
    .id {
        line-height: 3rem;
        font-size: 3rem;
    }
    .name {
        font-size: 1.5rem;
    }
    .types, .abilities {
        justify-content: space-between;
    }
  </style>
</head>`;

const obj2html = (Pokemon: Array<Pokemon>) => {
	let pageCode = "";
	for (const monster of Pokemon) {
		pageCode += `<div class="pokemon">
                <div class="leftSection">
                    <div class="name">${monster.name}</div>
                    <div class="id">${monster.id}</div>
                </div>
                <div class="middleSection">
                    <div class="types">${monster.types}</div>
                    <div class="abilties">${monster.abilities}</div> 
                </div>
                <div class="rightSection">
                    <img src="${monster.picture}" alt="${monster.name}"/>
                </div>
          </div>`;
	}
	return pageCode;
};

export const buildpage = (Pokemon: Array<Pokemon>) => {
	return `
    <html>
      ${head("Random Pokedex")}
      <body>
        <div id=centralSquare>
            ${obj2html(Pokemon)}
        </div>
      </body>
    </html>`;
};
