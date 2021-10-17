import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About/About';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/services'>
            <Services></Services>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
