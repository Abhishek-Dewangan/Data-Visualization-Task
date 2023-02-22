import styles from './BarChart.module.css';
import ReactEchart from 'echarts-for-react';
import {barChart} from '../../Assets/WineData';

const BarChart = () => {
  const option = {
    title: {text: 'Bar Graph of Wine Data', left: 'center'},
    xAxis: {
      name: 'Alcohol',
      nameGap: 30,
      nameLocation: 'middle',
      nameTextStyle: {
        verticleAlign: 'top',
        fontSize: 16,
        fontWeight: 'bold',
      },
      max: 3.5,
    },
    yAxis: {
      name: 'Malic Acid',
      nameGap: 20,
      nameLocation: 'middle',
      nameTextStyle: {
        horizontalAlign: 'top',
        fontSize: 16,
        fontWeight: 'bold',
      },
    },
    series: {
      data: barChart,
      type: 'bar',
      colorBy: 'data',
    },
    grid: {
      height: '60%',
    },
  };
  return (
    <div className={styles.barChartContainer}>
      <ReactEchart option={option} style={{height: 500}} />
    </div>
  );
};

export default BarChart;
