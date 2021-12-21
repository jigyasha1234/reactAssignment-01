import React from 'react';   //(rfc)

export default function Navbar(props) {
    return (
        <div>
            <ul className="nav nav-pills nav-fill">
                <li className="nav-item nav-arrow my-3">
                    <a className="nav-link"  href="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg></a>
                </li>
                <li className="nav-item my-3">
                    <ul className="nav flex-column"><li className='nav-arrow'><strong>{props.name}</strong></li><li>{props.id}</li></ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/"><button type="button" className="btn btn-dark my-3">Dark</button></a>
                </li>                
            </ul>
        </div>
    )
}