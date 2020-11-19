import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'



// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown'

export const Navbar = () => {

    const options = [
        { 
            id: 1,
            className: "dropdown-item", 
            to: '#',
            name: 'hour'
        },
        { 
            id: 2,
            className: "dropdown-item", 
            to: '#',
            name: 'day'
        },
        { 
            id: 3,
            className: "dropdown-item", 
            to: '#',
            name: 'week'
        },
        { 
            id: 4,
            className: "dropdown-item", 
            to: '#',
            name: 'month'
        }
    ]

    return (

         <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <div className="d-flex flex-grow-1">
                        <span className="w-100 d-lg-none d-block"></span>
                        <Link className="navbar-brand" to="#">LastQuake</Link>
                        <div className="w-100 text-right">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar7">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar7">
                        <ul className="navbar-nav ml-auto flex-nowrap">
                            <li className="nav-item">
                                <Link to="#" className="nav-link">Sign In</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link">Register</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Past Events
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {
                                        options.map(link => (
                                            <div key={link.id}>
                                            <Link key={link.id} className={link.className} to={link.to}>{link.name}</Link>
                                            <div className="dropdown-divider"></div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
        
       
    )
}



