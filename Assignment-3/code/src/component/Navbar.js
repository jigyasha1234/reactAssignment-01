import React from 'react';   //(rfc)

export default function Navbar(props) {
    return (
        <div>
            <ul className="nav nav-pills nav-fill">
                <li className="nav-item nav-arrow my-3">
                    <a className="nav-link"  href="/">{props.leftarrow}</a>
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
