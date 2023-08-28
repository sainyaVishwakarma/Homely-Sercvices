import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Header from './components/Header';
// import App from '../App';
import Categoryservices from './components/Categoryservices';
import 'bootstrap/dist/css/bootstrap.min.css';
import HealthList from './components/HealthList';


import OutdoorList from './components/OutdoorList';
import CleanerList from './components/CleanerList';
import MaintenanceList from './components/MaintenanceList';
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Contact from './components/Contact'; 
import ForgotPass from './components/Forgotpass';
import Footer from './components/Footer';
import AdminHeader from './components/Adminheader';
import ViewUser from './components/Viewuser';
import ServiceProviderPage from './components/ServiceProviderPage';
import AdminHome from './components/AdminHome';
import UserHeader from './components/UserHeader';
import UserHome from './components/UserHome';
import ServicesList from './components/ServicesList';
import Electrician from './components/Electrician';
import HomeCleaner from './components/HomeCleaner';
import Mechanic from './components/Mechanic';
import Plumber from './components/Plumber';
import GeneralPhysician from './components/GeneralPhysician';
import WindowCleaner from './components/WindowCleaner';
import Gardener from './components/Gardener';
import ServiceProviderHome from './components/ServiceProviderHome';
import ServiceCard from './components/ServiceCard';

//import {  Route, Routes } from "react-router-dom";
function App() {
  return (

   
      
      <BrowserRouter>
    
      <Switch>
        <Route exact={true} path="/forgot_password">
        <Header />
          <ForgotPass />
          <Footer />
        </Route>
        <Route exact={true} path="/">
        <Header />
          <Home />
          <Footer />
        </Route>
        <Route exact={true} path="/about">
        <Header />
          <About />
          <Footer />
        </Route>
        <Route exact={true} path="/contact">
        <Header />
          <Contact />
          <Footer />
        </Route>
        <Route exact={true} path="/login">
        <Header />
          <Login />
          <Footer />
        </Route>
        <Route exact={true} path="/signup">
        <Header />
          <SignUp />
          <Footer />
        </Route>
        <Route exact={true} path="/categoryservices">
        <UserHeader />
          <Categoryservices />
          <Footer />
        </Route>
        <Route exact={true} path="/healthlist">
        <UserHeader />
          <HealthList />
          <Footer />
        </Route>
        <Route exact={true} path="/maintenancelist">
        <UserHeader />
          <MaintenanceList />
          <Footer />
        </Route>
        <Route exact={true} path="/cleanerlist">
        <UserHeader />
          <CleanerList />
          <Footer />
        </Route>
        <Route exact={true} path="/outdoorlist">
        <UserHeader />
          <OutdoorList />
          <Footer />
        </Route>
        <Route exact={true} path="/serviceproviderhome">
        <AdminHeader />
          <ServiceProviderHome />
          <Footer />
        </Route>
        <Route exact={true} path="/adminhome">
          <AdminHeader />
          <AdminHome />
          <Footer />
        </Route>

        <Route exact={true} path="/viewuser">
          <AdminHeader />
          <ViewUser />
          <Footer />
        </Route>

        <Route exact={true} path="/viewserviceprovider">
          <AdminHeader />
          <ServiceProviderPage />
          <Footer />
        </Route>
        <Route exact={true} path="/service-providers/1">
          <UserHeader />
          <HomeCleaner specialization={"home cleaner"} />
          <Footer />
        </Route>

        <Route exact={true} path="/service-providers/2">
          <UserHeader />
          <WindowCleaner specialization={"window cleaner"} />
          <Footer />
        </Route>

        <Route exact={true} path="/serviceproviders/1">
          <UserHeader />
          <Electrician specialization={"electrician"} />
          <Footer />
        </Route>

        <Route exact={true} path="/serviceproviders/2">
          <UserHeader />
          <Mechanic specialization={"mechanic"} />
          <Footer />
        </Route>

        <Route exact={true} path="/serviceproviders/3">
          <UserHeader />
          <Plumber specialization={"plumber"} />
          <Footer />
        </Route>
       
        <Route exact={true} path="/generalphysician">
          <UserHeader />
          <GeneralPhysician specialization={"general physician"} />
          <Footer />
        </Route>
        <Route exact={true} path="/gardener">
          <UserHeader />
          <Gardener specialization={"gardener"} />
          <Footer />
        </Route>

        <Route exact={true} path="/userhome">
          <UserHeader />
          <UserHome />
          <Footer />
        </Route>
        <Route exact={true} path="/servicecard">
          <UserHeader />
          <ServiceCard />
          <Footer />
        </Route>
       

        <Route exact={true} path="/maintenanceservices">
          <UserHeader />
          <ServicesList categoryId={101}/>
          <Footer />
        </Route>

        <Route exact={true} path="/healthservices">
          <UserHeader />
          <ServicesList categoryId={102}/>
          <Footer />
        </Route>

        <Route exact={true} path="/cleaningservices">
          <UserHeader />
          <ServicesList categoryId={103}/>
          <Footer />
        </Route>

        <Route exact={true} path="/outdoorservices">
          <UserHeader />
          <ServicesList categoryId={104}/>
          <Footer />
        </Route>
      </Switch>

      
      
  </BrowserRouter>
   
  );
}

export default App;
