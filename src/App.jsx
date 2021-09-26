import Cart from "./paginas/Cart";
import Contato from "./paginas/Contato";
import Home from "./paginas/Home";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        
      </div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/contato" component={Contato}/>
        <Route exact path="/carrinho" component={Cart}/>
      </Switch>
      </Router>
    
  );
}

export default App;
