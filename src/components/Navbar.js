import React from 'react'
import Logo from '../img/kennect.png'
import '../styles/Navbar.css'

function Navbar() {
    return (
        <div>
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="www.google.com">
                            <img src={Logo} alt='logo' style={{ height: 80, width: 90, marginLeft:70}} />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="www.google.com" style={{ marginLeft: 20, color: 'green', fontWeight: 'bold' }}>Solutions</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="www.google.com" style={{ marginLeft: 20, color: 'green', fontWeight: 'bold' }}>Industries</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="www.google.com" style={{ marginLeft: 20, color: 'green', fontWeight: 'bold' }}>Resources</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="www.google.com" style={{ marginLeft: 20, color: 'green', fontWeight: 'bold' }}>Company</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="www.google.com" style={{ marginLeft: 20, color: 'green', fontWeight: 'bold' }}>Pricing</a>
                                </li>
                            </ul>
                            <form className="navbar-nav ms-auto mb-2 mb-lg-0" role="search">
                                <div className='booking'>
                                    <button type="button" className="btn btn-danger me-md-2 mb-2 mb-md-0" style={{ borderRadius: 130, marginRight: 30, marginLeft: 30 }}>BOOK A MEETING</button>
                                </div>
                                <div className='login'>
                                    <button className="btn btn-outline-success" id="loginBtn" style={{ borderRadius: 130, marginRight: 30, marginLeft: 30 }}>Login</button>
                                </div>
                            </form>
                            <div className='justbethere ms-auto mb-2 mb-lg-0'></div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
