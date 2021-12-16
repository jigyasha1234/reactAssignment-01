import logo from './logo.svg';
import './App.css';

const employee = {
  name: 'Tom',
  location: 'NewYork',
  bloodGroup: 'B+',
  age: 28,
  profileImg: 'https://www.w3schools.com/howto/img_avatar.png'
}

function App() {
  return (
    <div className="App">
    <img src={employee.profileImg} alt="image"/>
    <h1 className="name">Tom</h1>

      <div className="loc">
        <lable className="lable">Location</lable>
        <div className="div1">{employee.location}</div>
      </div>


      <div className="bgroup">
        <lable className="lable">BloodGroup</lable>
        <div>{employee.bloodGroup}</div>
      </div>


      <div className="age">
        <lable className="lable">Age</lable>
        <div>{employee.age}</div>
      </div>


    </div>
  );
}

export default App;
