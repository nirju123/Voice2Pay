import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout1, Layout2 } from './Components/Layout';
import Dashboard from './Components/Dashboard';
import Pay from './Components/Pay';
import Get from './Components/Get';
import ProtectedRoute from './ProtectedRoute'; // Import the ProtectedRoute component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout1><Login /></Layout1>} />
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout2><Dashboard/></Layout2>} path="/home" />
        </Route>
        <Route path="/pay" element={<Layout2><Pay /></Layout2>} />
        <Route path="/get" element={<Layout2><Get /></Layout2>} />
      </Routes>
    </Router>
  );
}

export default App;
