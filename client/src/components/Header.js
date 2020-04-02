import React from 'react';
import { Link } from 'react-router-dom';

// Header component must be into BrowserRouter as Link cann't be used outside a router
const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Streamy
            </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    All Streams
                </Link>
            </div>            
        </div>
    )
}

export default Header;