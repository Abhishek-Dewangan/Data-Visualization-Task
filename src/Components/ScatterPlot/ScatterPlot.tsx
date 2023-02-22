import styles from './ScatterPlot.module.css';
import {scatterData} from '../../Assets/WineData';
import ReactEcharts from 'echarts-for-react';

const ScatterPlot = () => {
  const option = {
    title: {text: 'Scatter Plot of Wine Data', left: 'center', textStyle: {}},
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
      nameGap: 30,
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
      <ReactEcharts option={option} className={styles.echart} />
    </div>
  );
};

export default ScatterPlot;
