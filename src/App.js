import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Components/Navigation/Header'
import Card from './Components/Cards/Card'
import Slider from './Components/Slider/Slider';
import BoatRental from './Components/BoatRental/BoatRental';
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import BoatDetails from './Components/BoatDetails/BoatDetails'
import boats from './Components/Cards/CardData';


function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch/>
          <Route exact path='/'>
            <Slider/>
            <BoatRental/>
            <Card title='Featured Boats'/>
          </Route>
          <Route exact path='/boats'>
            <Card title='Our Boats' />
          </Route>
          <Route path='/about'>
            <About/>
          </Route>
          <Route path='/contact'>
            <Contact/>
          </Route>
          <Route path='/boats/:id'>
            <BoatDetails boats={boats}/>
          </Route>
        <Switch/>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
