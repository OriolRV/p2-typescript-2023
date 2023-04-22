export const buildIndividualPage = (Pokemon: Pokemon) => {
	return `
    <html>
        <head>
        <title>${Pokemon.name}</title>
        </head>
      <body>
        <p>${Pokemon.name}</p>
      </body>
    </html>`;
};
