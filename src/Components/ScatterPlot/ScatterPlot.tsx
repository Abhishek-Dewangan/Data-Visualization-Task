import styles from './ScatterPlot.module.css';
import {scatterData, minimumHue, maximumHue} from '../../Assets/WineData';
import ReactEcharts from 'echarts-for-react';

const ScatterPlot = () => {
  console.log(minimumHue);
  const option = {
    title: {text: 'Scatter Plot of Wine Data', left: 'center', textStyle: {}},
    visualMap: {
      min: minimumHue['Hue'],
      max: maximumHue['Hue'],
      orient: 'vertical',
      right: -1,
      top: 100,
      text: ['HIGH', 'LOW'],
      calculable: true,
      inRange: {
        color: ['#f2c31a', '#24b7f2'],
      },
    },
    tooltip: {
      axisPointer: {
        type: 'cross'
      }
    },
    xAxis: {
      name: 'Color Intencity',
      nameGap: 30,
      nameLocation: 'middle',
      nameTextStyle: {
        verticalAlign: 'top',
        fontSize: 16,
        fontWeight: 'bold',
      },
    },
    yAxis: {
      name: 'Hue',
      nameGap: 20,
      nameLocation: 'middle',
      nameTextStyle: {
        horizontalAlign: 'top',
        fontSize: 16,
        fontWeight: 'bold',
      },
    },
    series: [
      {
        symbolSize: 6,
        data: scatterData,
        type: 'scatter',
        colorBy: 'data',
      },
    ],
    grid: {
      height: '60%',
    },
  };
  return (
    <div className={styles.scatterPlotContainer}>
      <ReactEcharts option={option} style={{height: 500}} />
    </div>
  );
};

export default ScatterPlot;
