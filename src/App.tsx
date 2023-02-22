import styles from './App.module.css';
import BarChart from './Components/BarChart/BarChart';
import ScatterPlot from './Components/ScatterPlot/ScatterPlot';

function App() {
  return (
    <div className={styles.app}>
      <ScatterPlot />
      <BarChart />
    </div>
  );
}

export default App;
