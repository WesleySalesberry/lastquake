import React, {Fragment} from 'react'
import { CardDisplay } from '../component/Display/CardDisplay'
import {Link} from 'react-router-dom'
import './Landing.css'

export const Landing = () => {
    return (
        <main role="main">
            <section className="jumbotron text-center bg-color">
                <div className="container">
                    <h1>Last<span className="main_text_color">Quake</span></h1>
                    <p className="lead text-muted">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, odio? Quasi, in voluptas! Ad laboriosam tempora quaerat aperiam eligendi, unde minus esse dignissimos, nemo vero cumque autem qui quos perferendis nihil maxime maiores inventore odit?
                    </p>
                    <p>
                        <a className="btn btn-secondary my2">Sign Up</a>
                        <a className="btn btn-secondary my2">Register</a>
                    </p>
                </div>
            </section>

            <CardDisplay name={"month"}/>
        </main>
    )
}
