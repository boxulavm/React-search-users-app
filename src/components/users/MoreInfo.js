import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Spinner from '../layout/Spinner'
import {Spring} from 'react-spring/renderprops'

export default class MoreInfo extends Component {
    state = {
        user_info: []
    }

    componentDidMount(){
        setTimeout(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
            .then(res => {
                this.setState({user_info: res.data});
            })
            .catch(err => console.log(err));
        }, 300)
    }

    render() {
        const { user_info } = this.state;
        if(user_info === undefined || user_info.length === 0) {
            return <Spinner />
        } else {
            return(
                <>
                <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{delay: 400}} 
                >
                {props =>
                    <div style={props} className="card">
                        <h2 className="card-header text-info">
                            {user_info.name}
                        </h2>
                        <div className="card-body">
                            <h3><strong className='text-warning'>Info</strong>: {user_info.company.catchPhrase}</h3>
                            <div className="text-center ">
                                <img className='img-fluid rounded-circle bg-dark p-2' src={`https://robohash.org/${user_info.id}`} alt="user_image"/>
                            </div>

                        </div>

                        <ul className='list-group mt-3'>
                            <li className='list-group-item'>
                                <strong>From: </strong>{user_info.address.city}
                            </li>
                            <li className='list-group-item'>
                                <strong>Company: </strong>{user_info.company.name}
                            </li>
                            <li className='list-group-item'>
                            <strong>Email</strong>: {user_info.email}
                            </li>
                        </ul>
                    </div>}
                    </Spring>
                    <Link to='/' className='btn btn-dark mt-4 mb-2'><i className='fas fa-chevron-left'></i> Go Back</Link>
                    </>
            )
        }
    }
}
