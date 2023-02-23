import {useState, useEffect} from 'react';
import styles from './ScatterPlot.module.css';
import {scatterData, minimumHue, maximumHue} from '../../Assets/ScatterData';
import ReactEcharts from 'echarts-for-react';

const ScatterPlot = () => {
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
    title: {
      text: 'Scatter Plot of Wine Data',
      subtext: 'Color Intensity / Hue',
      left: 'center',
    },
    visualMap: {
      min: minimumHue['Hue'],
      max: maximumHue['Hue'],
      orient: 'vertical',
      right: -1,
      top: 'middle',
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
      <ReactEcharts
        option={option}
        style={{height: windowSize < 820 ? 300 : 500}}
      />
    </div>
  );
};

export default ScatterPlot;
