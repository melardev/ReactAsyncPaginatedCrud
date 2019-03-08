import React from 'react';
import {Link, NavLink} from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {active: ''};
    }

    componentWillMount() {
        if (window.location.pathname === '/' || window.location.pathname === '/todos')
            this.setState({active: 'home'});
        else if (window.location.pathname === '/about')
            this.setState({active: 'about'});
    }

    render() {
        console.log(this.state.active);
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">React Crud</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Home
                                    {this.state.active === 'home' && <span className="sr-only">(current)</span>}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/about'>About</Link>
                                {this.state.active === 'about' && <span className="sr-only">(current)</span>}
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

// We want is_authenticated boolean from the redux's store so we connect
// our component to redux
export default Header;
