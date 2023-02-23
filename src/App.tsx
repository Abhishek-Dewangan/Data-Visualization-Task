import './App.css';
import {useState, useEffect} from 'react';
import BarChart from './Components/BarChart/BarChart';
import ScatterPlot from './Components/ScatterPlot/ScatterPlot';

function App() {
  const [windowSize, setWindowsize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => setWindowsize(window.innerWidth));
  });

  return (
    <div className='app'>
      <ScatterPlot />
      {windowSize > 820 && <hr />}
      <BarChart />
    </div>
  );
}

export default App;
