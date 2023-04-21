import { Pokemon } from "./uri_pokemons.js";

/*.user {
      font-family: sans-serif;
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
    body {
      margin: 0;
      padding: 0;
    }
  </style>
</head>`;

const obj2html = (Pokemon: Array<Pokemon>) => {
	let pageCode = "";
	for (const monster of Pokemon) {
		pageCode += `<div class="pokemon">
      <img src="${monster.picture}" />
      <div class="info">
        <div class="name">${monster.name}</div>
        <div class="id">${monster.id}</div>
        <div class="types">${monster.typeNames}</div>
        <div class="abilties">${monster.abilityNames}</div>
    </div>`;
	}
	return pageCode;
};

export const buildpage = (Pokemon: Array<Pokemon>) => {
	return `
    <html>
      ${head("Avore")}
      <body>
        ${obj2html(Pokemon)}
      </body>
    </html>`;
};
