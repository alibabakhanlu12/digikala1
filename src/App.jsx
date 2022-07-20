import React from 'react';
import Navbar from './Home/Navbar/Navbar';
 import Slider1 from './Home/Slider/Slider1';
 import Category from './Home/category_digikala/Category';
function App() {
  return (
    <section
    className="h-screen bg-Hero bg-cover
    font-[Poppins] md:bg-top bg-center"
  >
    <Navbar />
    <Slider1/>   
    <Category></Category> 
  </section>
  );
}

export default App;
