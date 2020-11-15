import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => {

    const options = [
        { 
            id: 1,
            className: "dropdown-item", 
            to: '#',
            name: 'Past Hour'
        },
        { 
            id: 2,
            className: "dropdown-item", 
            to: '#',
            name: 'Past Day'
        },
        { 
            id: 3,
            className: "dropdown-item", 
            to: '#',
            name: 'Past Week'
        },
        { 
            id: 4,
            className: "dropdown-item", 
            to: '#',
            name: 'Past Month'
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
                                            <div>
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

