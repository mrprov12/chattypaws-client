import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
// import Home from './views/Home';
// import Login from './views/Login';
// import Register from './views/Register';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} /> */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
