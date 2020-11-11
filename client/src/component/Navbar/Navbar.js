import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="d-flex flex-grow-1">
        <span className="w-100 d-lg-none d-block"></span>
        <Link className="navbar-brand" to="#">
            LastQuake
        </Link>
        <div className="w-100 text-right">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar7">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
    </div>
    <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar7">
        <ul className="navbar-nav ml-auto flex-nowrap">
            <li className="nav-item">
                <Link to="#" className="nav-link">Past Hour</Link>
            </li>
            <li className="nav-item">
                <Link to="#" className="nav-link">Past Day</Link>
            </li>
            <li className="nav-item">
                <Link to="#" className="nav-link">Past Week</Link>
            </li>
            <li className="nav-item">
                <Link to="#" className="nav-link">Past Month</Link>
            </li>
        </ul>
    </div>
</nav>
            
        </Fragment>
    )
}
