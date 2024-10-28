import { dataSeries } from './dataSeries.js';

var tableBody = document.getElementById('seriesTabla');
var detailCard = document.getElementById('seriesDetalles');
renderSeriesInTable(dataSeries);
displayAverage(dataSeries); 

function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie, index) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = `<td class="bold-column">${index + 1}</td>
                               <td class="blue-name">${serie.name}</td>
                               <td>${serie.channel}</td>
                               <td>${serie.seasons}</td>`;
        tableBody.appendChild(trElement);
    });
}

function calculateAverageSeasons(series) {
    const totalSeasons = series.reduce((sum, show) => sum + show.seasons, 0);
    return totalSeasons / series.length; 
}

function displayAverage(series) {
    const average = Math.round(calculateAverageSeasons(series)); 
    const averageRow = document.createElement("tr");
    averageRow.style.backgroundColor = "white";
    averageRow.innerHTML = `<td colspan="3" class="bold-column">Seasons average: ${average}</td>`;
    tableBody.appendChild(averageRow); 
}




