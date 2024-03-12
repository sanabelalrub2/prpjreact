import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import SignInPage from './components/SignInPage';
import RegisterPage from './components/RegisterPage';
import CartPage from './components/CartPage';
import CategoriesComponent from './components/CategoriesComponent';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/categories" element={<CategoriesComponent />} />
          {/* إضافة المزيد من الطرق هنا حسب الحاجة */}
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
