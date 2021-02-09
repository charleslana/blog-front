import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import Logo from '../../../assets/layout/images/logo.png';

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
                            <li><Link to={'/'} className={'navBar'}>Home</Link></li>
                            <li><Link to={'/about'} className={'navBar'}>About</Link></li>
                            <li><Link to={'/login'} className={'navBar'}>Login</Link></li>
                            <li><Link to={'/register'} className={'navBar'}>Register</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;