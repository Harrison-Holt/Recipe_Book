import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const Header = lazy(() => import('./UI/header'));
const Footer = lazy(() => import('./UI/footer'));
const HomePage = lazy(() => import('./Pages/homepage'));
const Login = lazy(() => import('./Pages/login'));
const Register = lazy(() => import('./Pages/register'));


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

