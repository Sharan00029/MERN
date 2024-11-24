import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import EmployeeForm from './components/EmployeeForm';
import SubmittedData from './components/SubmittedData';
import Navbar from './components/Navbar';

const App = () => {
  const [username, setUsername] = useState('');

  const handleLogin = (user) => {
    setUsername(user);
  };

  const handleLogout = () => {
    setUsername('');
  };

  return (
    <Router>
      <Navbar username={username} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employee-form" element={<EmployeeForm />} />
        <Route path="/submitted-data" element={<SubmittedData />} />
      </Routes>
    </Router>
  );
};

export default App;
