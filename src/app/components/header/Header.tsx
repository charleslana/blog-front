import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import Logo from '../../../assets/layout/images/logo.png';
import jwt_decode from 'jwt-decode';
import TokenInterface from "../interfaces/TokenInterface";
import Toast from "../toast/Toast";
import Avatar from '../../../assets/layout/images/avatar.png';
import UsersRoleEnum from "../../../service/interfaces/enums/UsersRoleEnum";

class Header extends Component {

    state = {
        open: false,
        toastMessage: null,
        token: null,
        name: null,
        avatar: undefined,
        role: null
    }

    componentDidMount() {
        this.updateToken();
        this.getLocalStorageProfile();
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
            this.getLocalStorageProfile();
        }
    }

    getLocalStorageProfile() {
        const token = localStorage.getItem('token');
        if (token) {
            this.setState({
                name: localStorage.getItem('name'),
                avatar: localStorage.getItem('avatar'),
                role: localStorage.getItem('role')
            });
        }
    }

    updateToken() {
        this.setState({token: localStorage.getItem('token')});
    }

    logout() {
        localStorage.clear();
    }

    closeToast = () => {
        this.setState({
            open: false
        });
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
                                <>
                                    {this.state.role !== UsersRoleEnum.USER &&
                                    <li><Link to={'/admin/comments'} className={'navBar'}>Comments</Link></li>
                                    }
                                    <li className={'separator'}>{this.state.name}</li>
                                    <li className={'arrow'}>
                                        <img src={this.state.avatar ? this.state.avatar : Avatar} alt={'Avatar'}/>
                                        <ul>
                                            <li><Link to={'/'} onClick={() => this.logout()}>Logout</Link></li>
                                        </ul>
                                    </li>
                                </>
                                :
                                <>
                                    <li><Link to={'/login'} className={'navBar'}>Login</Link></li>
                                    <li><Link to={'/register'} className={'navBar'}>Register</Link></li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
                {this.state.open &&
                <Toast text={this.state.toastMessage} type={'danger'} toastFunction={this.closeToast}/>
                }
            </header>
        );
    }
}

export default Header;