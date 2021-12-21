import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Customer from './component/Customer';
import Order from './component/Order';
import Product from './component/Product';

const customerinfo = {
  name: "Alan Ford",
  id: "00005152",
  Appointment: "9:00 AM (24-05-2016)",
  email: "alan.from@email.nl",
  phone: "+31123456789",
  status: "in progress",
  door: "mark",
  time: "10:30(25-03-2016)",
  img: "https://thumbs.dreamstime.com/b/businesswoman-profile-icon-female-portrait-flat-design-vector-illustration-47075248.jpg",
  productname: "Boltaart Bosbessen",
  productdiscription: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
}

function App() {
  return (
    <>
      <div className="site-container">
        {/* Start Your code here */}
        
        <div className='container my-4 nav-hr'>
          <Navbar leftarrow="<" name={customerinfo.name} id={customerinfo.id} />
        </div>

        <div className='container customer-info'>
          <Customer Appointment='in progress' Email='jigrani@0987@gmail.com' phone={customerinfo.phone} />
        </div>

        <div className='container order-info'>
          <Order status={customerinfo.status} door={customerinfo.door} time={customerinfo.time} />
        </div>

        <div className='container product-list'>
          <Product img={customerinfo.img} productname={customerinfo.productname} productdiscription={customerinfo.productdiscription} arrowright=">" />
        </div> 
      </div>
    </>
  );
}

export default App;