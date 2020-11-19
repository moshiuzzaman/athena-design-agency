import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Services from './Components/Services/Services';
import Features from './Components/Features/Features';
import Achievements from './Components/Achievements/Achievements';

function App() {
  return (
    <div>
      <Header/>
      <Services/>
      <Features/>
      <Achievements/>
    </div>
  );
}

export default App;
