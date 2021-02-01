import React, {Component} from 'react';
import './index.scss';
import Logo from '../../assets/layout/images/logo.png';

class Header extends Component {

    render() {
        return (
            <header>
                <div className={'header-black'}>
                    <div className={'header-a'}>
                        <img src={Logo} alt={'Logo'}/>
                        <h4>CBlog</h4>
                    </div>
                    <div className={'header-b'}>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Login</li>
                            <li>Register</li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;