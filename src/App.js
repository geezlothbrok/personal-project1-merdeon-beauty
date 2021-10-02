
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import Bookings from './pages/Bookings';
import Products from './pages/Products';
import NavBar from './component/NavBar';




function App() {
  return (
    <div >
     <Router>
       <NavBar />
        <Switch>
          <Route exact path = "/" component = {Home} />
          <Route path = "/services" component = {Services} />
          <Route path = "/bookings" component = {Bookings} />
          <Route path = "/products" component = {Products} />
        </Switch>
      </Router>


     
    </div>
  );
}

export default App;
