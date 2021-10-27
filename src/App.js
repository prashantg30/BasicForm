 import { BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "./Header";
import Hero from "./Hero";
import Audition from "./Audition";
import Footer from "./Footer";
import Table from "./Table";
import './App.css';


function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/Status' exact component={Table}/>
        <Route exact path='/form'>
        <div style={{display:'flex', flexDirection:'column', overflowX:'hidden'}}><Hero/><Audition/></div>
        </Route>
      </Switch>
    </div>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
