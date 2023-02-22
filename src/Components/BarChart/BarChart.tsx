import styles from './BarChart.module.css';
import ReactEchart from 'echarts-for-react';
import {barChart} from '../../Assets/WineData';

const BarChart = () => {
    console.log(barChart)
  const option = {
    xAxis: {type:''},
    yAxis: {type:''},
    series: {
      data: barChart,
      type: 'bar',
    },
  };
  return (
    <div>
      <h1>BarChart</h1>
      <ReactEchart option={option} />
    </div>
  );
};

export default BarChart;
