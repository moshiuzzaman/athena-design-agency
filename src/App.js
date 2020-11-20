import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Services from './Components/Services/Services';
import Features from './Components/Features/Features';
import Achievements from './Components/Achievements/Achievements';
import Footer from './Components/Footer/Footer';
import Pricing from './Components/Pricing/Pricing';
import Newsletter from './Components/Newsletter/Newsletter';

function App() {
  return (
    <div>
      <Header/>
      <Services/>
      <Features/>
      <Achievements/>
      <Pricing/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
