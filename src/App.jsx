import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import ListOfCompanies from './Components/ListOfCompanies';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/companies' element={<ListOfCompanies />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
