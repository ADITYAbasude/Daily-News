import React, { Component } from 'react'
import '../layout Css/nav.css';
import newsImg from '../img/news.png'
import { Link } from "react-router-dom";
export class Navbar extends Component {
    render() {
        return (
            <>

                <nav className="navbar navbar-expand-lg navbar-light sticky-top">
                    <div className="container-fluid">
                        <Link className='navbar-brand' to="/">DailyNews<img id="imgControle" src={newsImg}></img></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item dropdown">
                                    <a className="navcolor nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Filter
                                    </a>
                                    <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                                        <li className="dropdown-item"><Link className="nav-link" to="/business">Business</Link></li>
                                        <li className="dropdown-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                                        <li className="dropdown-item"><Link className="nav-link" to="/general">General</Link></li>
                                        <li className="dropdown-item"><Link className="nav-link" to="/health">Health</Link></li>
                                        <li className="dropdown-item"><Link className="nav-link" to="/science">Science</Link></li>
                                        <li className="dropdown-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                                        <li className="dropdown-item"><Link className="nav-link" to="/technology">Technology</Link></li>

                                    </ul>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar