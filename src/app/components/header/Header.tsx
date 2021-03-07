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
        role: null,
        dropdown: false
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
                localStorage.clear();
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

    toggleDropdown = () => {
        this.setState({dropdown: !this.state.dropdown});
    }

    exitDropdown = () => {
        this.setState({dropdown: false});
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
                            <Link to={'/'} className={'navBar'}><li>Home</li></Link>
                            <Link to={'/about'} className={'navBar'}><li>About</li></Link>
                            {this.state.token ?
                                <>
                                    {this.state.role !== UsersRoleEnum.USER &&
                                    <li className={'arrow'} onMouseLeave={this.exitDropdown}
                                        onClick={this.toggleDropdown}>
                                        <p>Panel Admin</p>
                                        {this.state.dropdown &&
                                        <ul>
                                            <Link to={'/admin/comments'}><li>Comments</li></Link>
                                        </ul>
                                        }
                                    </li>
                                    }
                                    <li className={'text'}>{this.state.name}</li>
                                    <li className={'arrow'} onMouseLeave={this.exitDropdown}
                                        onClick={this.toggleDropdown}>
                                        <img src={this.state.avatar ? this.state.avatar : Avatar} alt={'Avatar'}/>
                                        {this.state.dropdown &&
                                        <ul>
                                            <Link to={'/profile'}><li>Profile</li></Link>
                                            <Link to={'/'} onClick={() => this.logout()}><li>Logout</li></Link>
                                        </ul>
                                        }
                                    </li>
                                </>
                                :
                                <>
                                    <Link to={'/login'} className={'navBar'}><li>Login</li></Link>
                                    <Link to={'/register'} className={'navBar'}><li>Register</li></Link>
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