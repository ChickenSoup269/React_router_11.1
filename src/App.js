import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navigation from './components/navigate';
import Home from './pages/home'; 
import About from './pages/about';
import Menu from './pages/menu';
import MenuItem from './pages/menuItem';

function App() {
  return (
    <Router>
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:id" element={<MenuItem />} />
        </Routes>
      </main>
    </div>
  </Router>
  );
}

export default App;
