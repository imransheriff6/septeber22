import React from "react";
import './App.css'
import ArrayExample from "./components/ArrayExample/ArrayExample";
import ClassExample from "./components/classExample/classExample";
import StateExample from "./components/classExample/stateExample";
import FormValidation from "./components/formValidation/formValidation";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import MainContent from "./components/layout/main";
import SideA from "./components/layout/sideA";
import About from "./components/Routing/About";
import Contact from "./components/Routing/Contact";
import Home from "./components/Routing/Home";
import DataLoad from "./components/useEffectExample/dataLoad";
import InputBox from "./components/useEffectExample/useEffectExample";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Counter from "./components/reduxExample/counter";
import store from "./redux/store";
import { Provider } from "react-redux";
// import {StateExample} from "./components/StateExample/stateExample";

function App() {
  return (
    // <StateExample />
    <>
      {/* <Header />
      <div id="splitter">
        <SideA />
        <MainContent />
        <SideA />
      </div>
      <Footer /> */}
      {/* <InputBox /> */}
      {/* <ArrayExample /> */}
      {/* <DataLoad /> */}
      {/* <FormValidation /> */}
      {/* <ClassExample /> */}
      {/* <StateExample /> */}
      <BrowserRouter>
        <Provider store={store}>
          <Link to='/'>Home</Link>{'|'}
          <Link to='/about'>About</Link> {'|'}
          <Link to='/contact'>Contact</Link>
          <Switch>
            <Route exact path='/'><Home /></Route>
            <Route path='/about'><About /></Route>
            <Route path='/contact'><Contact /></Route>
            <Route path='/redux'><Counter /></Route>
          </Switch> 
        </Provider>
      </BrowserRouter>
    </>
  )
}
export default App