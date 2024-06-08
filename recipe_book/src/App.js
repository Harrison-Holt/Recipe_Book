import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const Header = lazy(() => import('./UI/Header'));
const Footer = lazy(() => import('./UI/Footer'));
const HomePage = lazy(() => import('./Pages/HomePage'));
const Register = lazy(() => import('./Pages/register'));
const Login = lazy(() => import('./Pages/login'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
          <Footer />
        </div>
      </Suspense>
    </Router>
  );
}

export default App;

