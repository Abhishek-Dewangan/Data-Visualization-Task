import styles from './ScatterPlot.module.css';
import {scatterData} from '../../Assets/WineData';
import ReactEcharts from 'echarts-for-react';

const ScatterPlot = () => {
  console.log(scatterData);
  const option = {
    xAxis: {},
    yAxis: {},
    series: [{symbolSize: 5, data: scatterData, type: 'scatter', color:'red'}],
  };
  return (
    <div className={styles.scatterPlotContainer}>
      <h1>ScatterPlot</h1>
      <ReactEcharts option={option} />
    </div>
  );
};

export default ScatterPlot;
