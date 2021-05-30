import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import Header from './Components/Header/Header.js'
import Footer from './Components/Footer/Footer';
import Navigation from './Components/Navigation/Navigation.js'
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Order from './Components/Order/Order';
import Admin from './Components/Admin/Admin';
import Services from './Components/ServicesSearched/Services';
import SignUp from './Components/SignUp/SignUp';
import Customer from './Components/Customer/Customer';
import Servic from './Components/Services/Servic'
import ParticularService from './Components/ParticularService/Particular Service';
import TracknBill from './Components/TrackingNbilling/TracknBill';
import Forgot from './Components/ForgotPassword/Forgot';
import Dealer from './Components/Dealer/Dealer';
import Dealerdetail from './Components/Admin/AdminDealer/Dealerdetail';
import BookSaloon from './Components/Booking/BookSaloon/BookSaloon';
import BookDecorPhotoCar from './Components/Booking/BookDecorPhotoCar/BookDecorPhotoCar'
import BookHallCatEvent from './Components/Booking/BookHallCatEvent/BookHallCatEvent';
import Dorder from './Components/Order/Dorder';
import UpdateStatus from './Components/Order/UpdateStatus';
import AboutUs from './Components/AboutUs/AboutUs';
import Contact from './Components/Contact/Contact';
import Payment from './Components/Payment/Payment';
import OrderDetail from './Components/Order/OrderDetail';
import Map, { MapContainer } from './Components/Map/Map';
import ViewTemplates from './Components/DesignCard/ViewTemplates/ViewTemplates';
import InputData from './Components/DesignCard/InputData/InputData';
import Templates from './Components/TextEditor/Templates/Templates';
import Notification from './Components/Notification';
import Chat from './Components/Chat/Chat';
import Stage from './Components/Stage Decor/Stage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation/>
      <div className="content">
          <Switch>
              <Route component={Templates} path="/Templates"></Route>
              <Route path="/InputData/:temp" component={InputData}/>
              <Route path="/ViewTemplates"><ViewTemplates/></Route>
              <Route path="/OrderDetail/:id" component={OrderDetail}/>
              <Route path="/Services/:search" component={Services}/>
              <Route path="/Payment"><Payment/></Route>
              <Route path="/Chat"><Chat/></Route>
              <Route path="/Stage"><Stage/></Route>
              <Route path="/AboutUs"><AboutUs/></Route>
              <Route path="/Contact"><Contact/></Route>
              <Route path="/Order"><Order/></Route>
              <Route  path="/UpdateStatus/:id" component={UpdateStatus}/>
              <Route  path="/BookHallCatEvent/:sername" component={BookHallCatEvent}/>
              <Route  path="/BookDecorPhotoCar/:sername" component={BookDecorPhotoCar}/>
              <Route  path="/BookSaloon/:sername" component={BookSaloon}/>
              <Route  path="/ParticularService/:id" component={ParticularService}/>
              <Route  path="/Admin/Admindealer/:profile" component={Dealerdetail}/>
              <Route  path="/Admin/:profile" component={Admin}/>
              <Route path="/Dealer/:profile" component={Dealer}/>
              <Route  path="/Customer/:profile" component={Customer}/>
              <Route path="/Dorder"><Dorder/></Route>
              <Route  path="/Login"> <Login /> </Route>
              <Route  path="/Forgot" > <Forgot/></Route>
              <Route  path="/SignUp" > <SignUp/> </Route>
              <Route  path="/Servic/:service" component={Servic}/>
              <Route  path="/" ><Home/></Route>
          </Switch>
          </div>
      <Footer/>
    </div>
  );
}

export default App;
