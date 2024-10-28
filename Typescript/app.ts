import { Serie } from './Serie.js';

import {dataSeries} from './dataSeries.js';

let tableBody: HTMLElement = document.getElementById('seriesTabla')!;
const detailCard = document.getElementById('seriesDetalles');
function renderCoursesInTable(series: Serie[]): void {
    console.log('Desplegando cursos');
    series.forEach((Serie) => { // 4. explicar el arrow function
      let trElement = document.createElement("tr");
      trElement.innerHTML = `<td>${Serie.name}</td>
                             <td>${Serie.channel}</td>
                             <td>${Serie.seasons}</td>`;
      tableBody.appendChild(trElement);
    });
  }

renderCoursesInTable(dataSeries);
