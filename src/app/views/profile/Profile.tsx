import React, {Component} from 'react';
import './index.css';

class Profile extends Component {
    render() {
        return (
            <div className={'content'}>
                <div className={'profile'}>
                    <h1>Profile</h1>
                    <p>Change Username:</p>
                </div>
            </div>
        );
    }
}

export default Profile;