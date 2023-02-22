import './App.css';
import BarChart from './Components/BarChart/BarChart';
import ScatterPlot from './Components/ScatterPlot/ScatterPlot';

function App() {
  return (
    <div className='app'>
      <ScatterPlot />
      <BarChart />
    </div>
  );
}

export default App;
