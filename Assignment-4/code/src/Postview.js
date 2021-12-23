import React from 'react';
import './Postview.css';
import data from './Mock-data/data.json';
import Post from './Component/Post.js';

const Postview = () => {
  return (
    <div className="site-container">

      <nav class="navbar navbar-dark bg-dark ">
        <div class="container-fluid">
          <span class="navbar-brand mb-1 h1 topnavbar" >Instaclone</span>
          <span class="navbar-brand mb-0 h1"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-camera" viewBox="0 0 16 16">
  <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/>
  <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
</svg></span>
        </div>
      </nav>
<div className='container mt-4 backview'>

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
