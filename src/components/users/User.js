import React from 'react'
import {Spring} from 'react-spring/renderprops'
import { Link } from 'react-router-dom'

const User = (props) => {
    const { user } = props;
    return (
        <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{delay: 400}} 
        >
        {props =>
        <div style={props} className="col-md-6">
            <div className="card mb-4 shadow-bg">
                <div className="card-body">
                    <h5 className='text-info'>{user.name}</h5>
                    <p className="card-text">
                        Company: <strong>{user.company.name}</strong>
                    </p>
                    <Link to={`moreinfo/user/${user.id}`} className='btn btn-dark btn-block' >
                        More Info <i className='fas fa-chevron-right'></i>
                    </Link>
                </div>
            </div>
        </div>}
        </Spring>
    )
}

export default User
