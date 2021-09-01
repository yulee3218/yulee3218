import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './navigation/Navigation';
import Main from './main/Main.js'
import Product from './product/Product.js';
import Cart from './cart/Cart.js';


const App = (props) => [
  <Navigation key={1} />,
  <Routes key={2} />
];

const Routes = (props) => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/product" component={Product} />
    <Route exact path="/cart" component={Cart} />
  </Switch>
)
export default App;
