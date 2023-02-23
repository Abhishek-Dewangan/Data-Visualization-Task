import {wineData} from './WineData';

const barChart = new Array(wineData.length);

wineData.forEach((elem, i) => {
  barChart[i] = [elem['Alcohol'], elem['Malic Acid']];
});

const minimumMalicAcid = wineData.reduce((prev, curr) =>
  prev['Malic Acid'] < curr['Malic Acid'] ? prev : curr
);
const maximumMalicAcid = wineData.reduce((prev, curr) =>
  prev['Malic Acid'] > curr['Malic Acid'] ? prev : curr
);

export {barChart, minimumMalicAcid, maximumMalicAcid};
