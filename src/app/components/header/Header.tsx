import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import Logo from '../../../assets/layout/images/logo.png';

class Header extends Component {

    state = {
        token: null
    }

    componentDidMount() {
        console.log('mount');
        this.updateToken();
    }

    componentDidUpdate() {
        const token = localStorage.getItem('token');
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