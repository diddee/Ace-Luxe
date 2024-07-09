
import React from 'react';
import Header from './Components/Nav/Nav'
import LandingPage from './Components/LandingPage/Hero'
import Products from './Components/Products/Products'
import Order from './Components/Order/Order'
import Review from './Components/CustomerReview/Review'
import Footer from './Components/Footer/Footer'
// import CheckOut from './Components/CheckOut/Checkout'
// import Cart from './Components/CartPage/Cart'





function App() {
  return (
    <div className='App'>
      
      <Header />
      <LandingPage />
      <Products />
      <Order />
      <Review />
      <Footer />
      
    </div>
  );
}

export default App;

{/* <Header />
      <LandingPage />
      <Products />
      <Order />
      <Review />
      <Footer /> */}