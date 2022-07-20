import React from 'react';
import Navbar from './Home/Navbar/Navbar';
 import Slider1 from './Home/Slider/Slider1';
 import Category from './Home/category_digikala/Category';
 import {Helmet} from 'react-helmet'
function App() {
  return (
    <section
    className="h-screen bg-Hero bg-cover
    font-[Poppins] md:bg-top bg-center"
  >
    <Helmet>
      <title>فروشگاه اینترنتی دیجیکالا</title>
    </Helmet>
    <Navbar />
    <Slider1/>   
    <Category></Category> 
  </section>
  );
}

export default App;
