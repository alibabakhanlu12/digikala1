import React from 'react';
import Navbar from './Home/Navbar/Navbar';
 import Slider1 from './Home/Slider/Slider1';
function App() {
  return (
    <section
    className="h-screen bg-Hero bg-cover
    font-[Poppins] md:bg-top bg-center"
  >
    <Navbar />
    <Slider1/>    
  </section>
  );
}

export default App;
