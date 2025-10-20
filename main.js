import { Serie } from './Serie.js';
import { dataSeries } from './dataSeries.js';
let seriesTbody = document.getElementById('series');
let averageSeasonsElm = document.getElementById('average-seasons');
renderSeriesInTable(dataSeries);
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach((s) => {
        let trElement = document.createElement('tr');
        trElement.innerHTML = `
      <td>${s.id}</td>
      <td><a href="#" class="text-primary">${s.name}</a></td>
      <td>${s.channel}</td>
      <td>${s.seasons}</td>
    `;
        seriesTbody.appendChild(trElement);
    });
    function getAverageSeasons(series) {
        let totalSeasons = 0;
        series.forEach(s => totalSeasons += s.seasons);
        return Math.round(totalSeasons / series.length);
    }
    const average = getAverageSeasons(dataSeries);
    averageSeasonsElm.innerHTML = `Seasons average: ${average}`;
}
