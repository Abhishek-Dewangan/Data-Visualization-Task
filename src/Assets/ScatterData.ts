import {wineData} from './WineData';

const scatterData = new Array(wineData.length);

wineData.forEach((elem, i) => {
  scatterData[i] = [elem['Color intensity'], elem['Hue']];
});

// Calculating Minimum Hue value of wine
const minimumHue = wineData.reduce((prev, curr) =>
  prev['Hue'] < curr['Hue'] ? prev : curr
);

// Calculating Maximum Hue value of wine
const maximumHue = wineData.reduce((prev, curr) =>
  prev['Hue'] > curr['Hue'] ? prev : curr
);

export {scatterData, minimumHue, maximumHue};
