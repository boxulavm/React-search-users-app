import React, { Component } from 'react'
import { Consumer } from '../../context'
import Spinner from '../layout/Spinner'
import User from './User'

export default class Users extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { user_list, heading } = value;
                    if (user_list === undefined || user_list.length === 0) {
                        return(
                            <Spinner />
                        )
                    } else {
                        return (
                            <React.Fragment>
                                <h3 className='text-center m-5 text-warning'>{heading}</h3>
                                <div className="row">
                                    {user_list.map(item => (
                                        <User key={item.id} user={item} />
                                    ))}
                                </div>
                            </React.Fragment>
                        );
                    }
                }}
            </Consumer>
        )
    }
}
