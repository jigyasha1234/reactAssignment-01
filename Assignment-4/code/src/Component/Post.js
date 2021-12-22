import React from 'react'

export default function Post(props) {
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <nav className="navbar navbar-light bg-light">
                        <div className="container-fluid">
                            <p className="navbar-brand" >
                                <div><h5 className="card-title">{props.obj.name}</h5></div>
                                <div><h6 className="card-title">{props.obj.location}</h6></div>
                            </p>
                            <p>...</p>
                        </div>
                    </nav>
                </div>
                <div className="card-body">
                    <figure className="figure">
                        <img src={props.obj.PostImage} className="figure-img img-fluid rounded" alt="..." width="400px" />
                        <figcaption className="figure-caption">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <div className="container-fluid">
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarText">
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li className="nav-item">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    {props.obj.likes} Likes
                                                </div>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                                                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                                                </svg></a>
                                            </li>
                                        </ul>
                                        <span className="navbar-text">
                                            {props.obj.date}
                                        </span>
                                    </div>
                                </div>
                            </nav>
                        </figcaption>
                    </figure>
                    <p class="card-text">{props.obj.description}</p>
                </div>
            </div>
        </div>
    )
}
