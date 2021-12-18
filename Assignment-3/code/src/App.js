import React from 'react';
import './App.css';

const customerinfo={
  name:"Alan Ford",
  id:"00005152",
  appointment: "9:00 AM (24-05-2016)",
  email:"alan.from@email.nl",
  phone:"+31123456789",
  status:"in progress",
  door:"mark",
  time:"10:30(25-03-2016)",
  img:"https://thumbs.dreamstime.com/b/businesswoman-profile-icon-female-portrait-flat-design-vector-illustration-47075248.jpg",
  square:"https://th.bing.com/th/id/R.741f4121e40335a5d47470d256289710?rik=Qgf4jQ9sG9Pf9g&riu=http%3a%2f%2fpngimg.com%2fuploads%2fsquare%2fsmall%2fsquare_PNG87.png&ehk=F5C43%2fUEw0mMySZ5nnTNhlQHBrvT8iItexP90Km%2f7MQ%3d&risl=&pid=ImgRaw&r=0"
}

var arrow="<"
var arrowl=">"
function App() {
  return (
    <div className="site-container">
    {/* Start Your code here */}
    <div className='navbar'>
      <div className='inside1'>{arrow}</div>
      <div className='inside2'>
      <ul>
      <li><strong>{customerinfo.name}</strong></li>
      <li>{customerinfo.id}</li>
      </ul>
      </div>
      <div className='inside3'>
        <button >Print</button>
      </div>
    </div>


    <div className='customer-info'>
      <p>Appointment:{customerinfo.appointment}</p>
      <p>Email:{customerinfo.email}</p>
      <p>Phone:{customerinfo.phone}</p>
    </div>


    <div className='order-info'>
    <table>
  <tr>
    <th>Status</th>
    <th>Door</th>
    <th>Time</th>
  </tr>
  <tr>
    <td><ul><li>{customerinfo.status}</li></ul></td>
    <td>{customerinfo.door}</td>
    <td>{customerinfo.time}</td>
  </tr>
  </table>
    </div>


    <div className='product-list'>
      
      <div className='img-1'>
          <img src={customerinfo.square} alt='list-style' width={20}></img>
      </div>
      <div className='img-2'>
          <img src={customerinfo.img} alt="profile" width={120}></img>
      </div>
      
       
          <div>
          <h2>Boltaart Bosbessen</h2>
          <p>bjyhi jokplm hyuiiomjj kolpbrn gfdthgtr jjhfuen uhhndfjdfu.</p>
          </div>
          <div className='inside'>{arrowl}</div>
    </div>


    </div>
  );
}

export default App;
