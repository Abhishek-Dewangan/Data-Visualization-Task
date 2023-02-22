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
    },
    yAxis: {
      name: 'Malic Acid',
      nameGap: 30,
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
      colorBy:'data',
      barWidth:100
    },
    grid:{
        height:'60%'
    }
  };
  return (
    <div className={styles.barChartContainer}>
      <ReactEchart option={option} />
    </div>
  );
};

export default BarChart;
