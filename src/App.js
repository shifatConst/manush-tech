import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Cart from './components/Cart/Cart';
import { createContext, useState } from 'react';
import ConfirmOrder from './components/ConfirmOrder/ConfirmOrder';


export const cartContext = createContext();

function App() {
  
  const [cart, setCart] = useState([]);

  return (
    <cartContext.Provider value={[cart, setCart]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route path='/confirmOrder'>
            <ConfirmOrder />
          </Route>
        </Switch>
      </Router>
    </cartContext.Provider>
  );
}

export default App;
