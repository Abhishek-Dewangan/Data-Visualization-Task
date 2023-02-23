import {useRef, useEffect, useState} from 'react';
import styles from './BarChart.module.css';
import ReactEchart from 'echarts-for-react';
import {
  barChart,
  minimumMalicAcid,
  maximumMalicAcid,
} from '../../Assets/BarGraph';

const BarChart = () => {
  const [windowSize, setWindowsize] = useState(window.innerWidth);
  const [calculateStatus, setCalculateStatus] = useState(true);

  useEffect(() => {
    window.addEventListener('resize', () => setWindowsize(window.innerWidth));
  });

  useEffect(() => {
    if (windowSize < 820) setCalculateStatus(false);
    else setCalculateStatus(true);
  }, [windowSize]);
  
  const option = {
    title: {text: 'Bar Graph of Wine Data', left: 'center'},
    visualMap: {
      min: minimumMalicAcid['Malic Acid'],
      max: maximumMalicAcid['Malic Acid'],
      orient: 'vertical',
      right: -1,
      top: 100,
      text: ['HIGH', 'LOW'],
      calculable: calculateStatus,
      inRange: {
        color: ['#f2c31a', '#24b7f2'],
      },
    },
    tooltip: {
      axisPointer: {
        type: 'cross',
      },
    },
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
      boxplot: {hoverAnimation: true},
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
