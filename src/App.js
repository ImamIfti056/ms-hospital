import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Departments from './Components/Departments/Departments';
import Footer from './Components/Footer/Footer';
import GetTreatment from './Components/GetTreatment/GetTreatment';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Register from './Components/Register/Register';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import Services from './Components/Services/Services';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
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
          <Route path='/departments'>
            <Departments></Departments>
          </Route>
          <PrivateRoute path='/treatment'>
            <GetTreatment></GetTreatment>
          </PrivateRoute>
          <PrivateRoute path='/servicedetails/:serviceId'>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
