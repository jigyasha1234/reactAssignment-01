import React from 'react'

export default function Product(props) {
    return (
        <div>
            <ul className="nav nav-pills nav-fill">
                {/* <li className="nav-item my-3 squareimg">
                    <img src={props.square} class="img-fluid rounded-start" alt="..." />
                </li> */}
                <li className="nav-item my-4 myimg">
                <ul><li>
                    <div class="card mb-3">
                        <div class="row g-1">
                            <div class="col-md-4">
                                <img src={props.img} class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">{props.productname}</h5>
                                    <p class="card-text">{props.productdiscription}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li></ul>
                </li>
                <li className="nav-item my-6 arrowright">
                    <a className="nav-link" href="/">{props.arrowright}</a>
                </li>
            </ul>
        </div>
    )
}
