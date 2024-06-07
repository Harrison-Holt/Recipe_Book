import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
const Header = lazy(() => import('./UI/header'));
const Footer = lazy(() => import('./UI/hooter'));
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
        </Routes>
        <Footer />
      </div>
    </Suspense>
  </Router>
  );
}

export default App;
