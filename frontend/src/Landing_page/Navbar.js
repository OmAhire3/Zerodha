import React from 'react';
import {Link} from "react-router-dom"
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg border-bottom fixed-top" style={{ backgroundColor: "#FBFBFB", height: "1.8cm" }}>

            <div className="container-fluid">
                <Link to="/" ><img src="media/images/logo.svg" alt="logo" style={{ width: "3.4cm", marginLeft: "5cm" }} /></Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex" role="search" style={{ marginLeft: "12cm" }}>
                        <ul className="navbar-nav">
                            <li className="nav-item ms-4">
                                <Link className="nav-link active" aria-current="page" to="/signup">Signup</Link>
                            </li>
                            <li className="nav-item ms-4">
                                <Link className="nav-link active" to="/about">About</Link>
                            </li>
                            <li className="nav-item ms-4">
                                <Link className="nav-link active" to="/product">Products</Link>
                            </li>
                            <li className="nav-item ms-4">
                                <Link className="nav-link active" to="pricing">Pricing</Link>
                            </li>
                            <li className="nav-item ms-4">
                                <Link className="nav-link active" to="support">Support</Link>
                            </li>
                            <li className="nav-item ms-4 p-2">
                                <i className="fa-solid fa-bars"></i>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;