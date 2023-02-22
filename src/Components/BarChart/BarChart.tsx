import styles from './BarChart.module.css';
import ReactEchart from 'echarts-for-react';
import {barChart} from '../../Assets/WineData';

const BarChart = () => {
  const option = {
    xAxis: {},
    yAxis: {},
    series: {
      data: barChart,
      type: 'bar',
    },
  };
  return (
    <div>
      <ReactEchart option={option} />
    </div>
  );
};

export default BarChart;
