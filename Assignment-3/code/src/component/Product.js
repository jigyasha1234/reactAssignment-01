import React from "react";

export default function Product(props) {
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <div class="container colr">
          <img
            src="https://th.bing.com/th/id/R.4010fe5267256919f58caaeb44caf248?rik=s5XG4x7IM5kDuw&riu=http%3a%2f%2fpngimg.com%2fuploads%2fsquare%2fsquare_PNG87.png&ehk=xKrq6cFPVDe9gNEmn%2f6tLvWNNzJIPULAZMQ%2fxS1fF2w%3d&risl=&pid=ImgRaw&r=0"
            alt="square"
            width="24"
            height="24"
          />
          <img src={props.img} alt="" width="150" height="150"></img>
          <div>
              <h1>{props.productname}</h1>
              <p>{props.productdiscription}</p>
          </div>
          <span className="arrowright">
          <a className="nav-link"  href="/"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg></a>
          </span>
        </div>
      </nav>
    </div>
  );
}
