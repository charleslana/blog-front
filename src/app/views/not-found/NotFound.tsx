import React, {Component} from 'react';
import './index.css';
import {Link} from 'react-router-dom';

class NotFound extends Component {
    render() {
        return (
            <div className={'content'}>
                <div className={'not-found'}>
                    <h1>Page Not Found</h1>
                    <span>
                        <Link to={'/'}>Go to Home</Link>
                    </span>
                </div>
            </div>
        );
    }
}

export default NotFound;