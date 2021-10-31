
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Footer from './components/Header/Footer/Footer';
import Booking from './components/Booking/Booking';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './components/AuthProvider/AuthProvider';
import MyOrders from './components/MyOrders/MyOrders';
import NotFound from './components/NotFound/NotFound';
import ManageOrders from './components/ManageOrders/ManageOrders';
import Offers from './components/Home/Offers/Offers';
import About from './components/About/About';
import AddOffer from './components/AddOffer/AddOffer';
import Registation from './components/Registation/Registation';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='/register'>
              <Registation></Registation>
            </Route>
            <Route exact path='/services'>
              <Offers></Offers>
            </Route>
            <Route exact path='/myOrders'>
              <MyOrders></MyOrders>
            </Route>
            <Route exact path='/about'>
              <About></About>
            </Route>
            <Route exact path="/add-service">
              <AddOffer></AddOffer>
            </Route>
            <Route exact path='/manage-orders'>
              <ManageOrders></ManageOrders>
            </Route>
            <PrivateRoute exact path='/booking/:id'>
              <Booking></Booking>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
