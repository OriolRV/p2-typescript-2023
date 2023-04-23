import { Pokemon } from "./uri_pokemons.js";

//https://www.chartjs.org/docs/latest/charts/radar.html
export const buildIndividualPage = (Pokemon: Pokemon) => {
	let moveList = "";
	for (let i = 0; i < Pokemon.moves.length; i++) {
		moveList += `<li>${Pokemon.moves[i]}</li>`;
	}
	console.log(Pokemon.stats);

	return `
    <html>
        <head>
        <title>${Pokemon.name}</title>
        </head>
        <body>
            <div class="leftSection">
                <div class="name">
                    <a href="./${Pokemon.name}.html" target="_blank">${
		Pokemon.name
	}</a></div>
                    <div class="id">${Pokemon.id}</div>
            </div>
            <div class="middleSection">
                <div class="types">${Pokemon.types}</div>
                <div class="abilties">${Pokemon.abilities}</div> 
            </div>
            <div class="rightSection">
                <img src="${Pokemon.picture}" alt="${Pokemon.name}"/>
            </div>
            <div class="moves"><ul>${moveList}</ul></div>
            <div><canvas id="stats"></div>;
            <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
            <script>
            const ctx = document.getElementById('stats');
            new Chart(ctx, {
                type: "radar",
                data: {
                    labels: ["HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed"],
                    datasets: [{
                        label: "${Pokemon.name}'s base stats",
                        data: ${JSON.stringify(Pokemon.stats)},
                        fill: true,
                    backgroundColor: "rgba(255, 99, 132, 0.2)",
                    borderColor: "rgb(255, 99, 132)",
                    pointBackgroundColor: "rgb(255, 99, 132)",
                    pointBorderColor: "#fff"
                    }]
                },
                options: {
                    scales: {
                        r: {
                            beginAtZero: true
                        }
                    }
                }
            });
            </script>
      </body>
    </html>`;
};
