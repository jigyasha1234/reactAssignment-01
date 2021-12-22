import React from 'react';
import './Postview.css';
import data from './Mock-data/data.json';
import Post from './Component/Post.js';

const Postview = () => {
  return (
    <div className="site-container">

      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Instaclone</span>
          <span class="navbar-brand mb-0 h1"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16">
            <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
            <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
          </svg></span>
        </div>
      </nav>
<div className='container mt-4'>

{data.user.map((elem)=>{
      return(<din className="container d-flex justify-content-center mt-4">
      <Post obj={elem}/>
      </din>);
    })}

</div>


      {/* {data.user.map((elem)=>{
      return(<Post obj={elem}/>);
    })}
    <h1>h11</h1> */}
    </div>
  );
}

export default Postview;
