import { Pokemon } from "./uri_pokemons.js";

/*.user {
      
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: .4rem;
      border-bottom: 1px solid #ddd;
    }
    .user img {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      margin-right: 0.7rem;
    }
    .user .name {
      font-weight: bold;
    }
    .user .email {
      font-family: monospace;*/

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
        background-color: lightpink;
    }
    #centralSquare {
        padding: 1rem;
        position: relative;
        margin: 5rem 5rem;
        max-height: 75%;
        background-color: grey;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow-y: scroll;
    }
    .pokemon {
        height: 30%;
        width: 90%;
        background-color: lightblue;
        margin: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: stretch;
    }
    .pokemon img {
        width: 100%;
    }
    .leftSection {
        background-color: yellow;
        width: 20%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }
    .middleSection {
        background-color: green;
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .rightSection {
        background-color: blue;
        width: 10%;
    }
    .id, .name {
        font-size: 150%;
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
                    <img src="${monster.picture}" alt=${monster.name}/>
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
