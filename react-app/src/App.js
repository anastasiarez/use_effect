
import './App.css';
import IntervalCounter from './components/IntervalCounter';
import TitleComponent from './components/TitleComponent';
import FoxPic from './components/FoxPic';
import FoxPicAxios from './components/FoxPicAxios';
import Locations from './components/Locations';

function App() {
  return (
    <div className="App">
     <h2>**Learn useEffect**</h2>
     <TitleComponent />
     <IntervalCounter />
     <Locations /> 
     <FoxPic /> 
     <FoxPicAxios /> 
    </div>
  );
}

export default App;
