import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

import Services from './Components/Sevices/Services';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/classes">
            <Services></Services>
          </Route>
          <Route exact path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
