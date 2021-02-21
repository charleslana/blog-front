import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import Logo from '../../../assets/layout/images/logo.png';
import jwt_decode from 'jwt-decode';
import TokenInterface from "../interfaces/TokenInterface";

class Header extends Component {

    state = {
        token: null
    }

    componentDidMount() {
        this.updateToken();
    }

    componentDidUpdate() {
        let token = localStorage.getItem('token');
        if (token) {
            const {exp} = jwt_decode(token as string) as TokenInterface;
            if (Date.now() > (exp * 1000)) {
                localStorage.removeItem('token');
                token = null;
            }
        }
        if (this.state.token !== token) {
            this.updateToken();
        }
    }

    updateToken() {
        this.setState({token: localStorage.getItem('token')});
    }

    logout() {
        localStorage.removeItem('token');
    }

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
                            {this.state.token ?
                                <li><Link to={'/'} onClick={() => this.logout()}>Logout</Link></li>
                                :
                                <>
                                    <li><Link to={'/login'} className={'navBar'}>Login</Link></li>
                                    <li><Link to={'/register'} className={'navBar'}>Register</Link></li>
                                </>
                            }
                            <li><Link to={'/admin/comments'} className={'navBar'}>Comments</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;