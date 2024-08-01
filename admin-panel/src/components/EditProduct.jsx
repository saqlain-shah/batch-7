import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductManagement from './ProductManagement';
import EditProduct from './EditProduct'; // Import the EditProduct component

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ProductManagement} />
        <Route path="/edit/:id" component={EditProduct} /> // Route for EditProduct component
      </Switch>
    </Router>
  );
};

export default App;
