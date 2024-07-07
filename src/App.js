
import React from 'react';
import Header from './Components/Nav/Nav'
import LandingPage from './Components/LandingPage/Hero'
import Products from './Components/Products/Products'
import Order from './Components/Order/Order'
import Review from './Components/CustomerReview/Review'





function App() {
  return (
    <div className='App'>
      <Header />
      <LandingPage />
      <Products />
      <Order/>
      <Review/>
    </div>
  );
}

export default App;
