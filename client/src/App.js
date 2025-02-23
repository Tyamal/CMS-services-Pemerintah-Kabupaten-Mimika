// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ServiceDetail from './components/ServiceDetail';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/service/:id" component={ServiceDetail} />
        <Route path="/admin" component={AdminDashboard} />
      </Switch>
    </Router>
  );
}

export default App;
