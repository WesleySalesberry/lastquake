import React, {Fragment} from 'react'

export const Card = () => {
    return (
        <Fragment>
            <div className="card mb-3" style={{maxWidth: "400px"}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="https://source.unsplash.com/random/100x100" alt=""/>
                    </div>
                    <div className="col-md-8">
                        <h5 className="card-title">Title</h5>
                        <p className="card-text">Lorem ipsum dolor sit.</p>
                        <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
