import "./App.css";
//Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
//global dependencies
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//pages import
import Home from "./pages/Homepage/Home";
import Services from "./pages/Homepage/Services";
import SignUp from "./pages/Homepage/SignUp";
import Products from "./pages/Homepage/Products";

function App() {
  return (
    <Router className="App">
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/products" exact component={Products} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
