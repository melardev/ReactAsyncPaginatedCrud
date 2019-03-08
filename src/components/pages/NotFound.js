import React from 'react';
import {Link} from 'react-router-dom'


export default class NotFound extends React.Component {
    render() {
        return (
            <div className="well text-center">
                <h1>Oops! ...</h1>
                <em>Page not found</em>
                <Link to="/"> Home </Link>
            </div>
        )
    }
}