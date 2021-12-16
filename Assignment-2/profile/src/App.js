import logo from './logo.svg';
import './App.css';

const employee = {
  name: 'Tom',
  location: 'New York',
  bloodGroup: 'B+',
  age: 28,
  profileImg: 'https://www.w3schools.com/howto/img_avatar.png'
}

function App() {
  return (
    <div className="text">
    <div className="App">
      <img src={employee.profileImg} alt="image" />
      <div className="name">
      <h2><strong>{employee.name}</strong></h2>
      </div>
      <div className="loc">
      <lable>Location</lable>
      </div>
      <div>{employee.location}</div>
      <div className="bg">
      <lable>BloodGroup</lable>
      </div>
      <div>{employee.bloodGroup}</div>
      <div className="age">
      <lable>Age</lable>
      </div>
      <div>{employee.age}</div>
    </div>
    </div>
  );
}

export default App;
