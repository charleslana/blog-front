import React, {ChangeEvent, Component} from 'react';
import './index.css';
import api from "../../../service/api";
import Toast from "../../components/toast/Toast";
import Loading from "../../components/loading/Loading";

class Profile extends Component {

    state = {
        name: '',
        email: '',
        avatar: undefined,
        oldPassword: null,
        newPassword: null,
        confirmNewPassword: null,
        open: false,
        toastMessage: null,
        toastType: null,
        loading: true
    }

    fetchProfile() {
        api.get('users/profile').then(response => {
            this.setState({
                name: response.data.name,
                email: response.data.email,
                avatar: response.data.avatar_url,
                loading: false
            });
        }).catch((error) => {
            if (error.response) {
                return this.setState({
                    toastMessage: error.response.data.message,
                    toastType: 'danger',
                    open: true,
                    loading: false
                });
            }

            return this.setState({
                toastMessage: 'An error has occurred.',
                toastType: 'danger',
                open: true
            });
        });
    }

    handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        this.setState({
            ...this.state,
            [name]: value
        });
    }

    changeUsername = () => {
        if (!this.state.name.trim()) {
            return this.setState({
                toastMessage: 'Username must not be empty.',
                toastType: 'danger',
                open: true
            });
        }

        if (!this.state.email.trim()) {
            return this.setState({
                toastMessage: 'Email must not be empty.',
                toastType: 'danger',
                open: true
            });
        }

        this.setState({
            loading: true
        });

        api.put('users/profile', {
            name: this.state.name.trim(),
            email: this.state.email.trim()
        }).then(response => {
            this.setState({
                toastMessage: response.data.message,
                toastType: 'success',
                open: true,
                loading: false
            });
            localStorage.setItem('name', this.state.name);
        }).catch((error) => {
            if (error.response) {

                if(error.response.data.error === 'Bad Request') {
                    return this.setState({
                        toastMessage: error.response.data.validation.body.message,
                        toastType: 'danger',
                        open: true,
                        loading: false
                    });
                }

                if(error.response.data.status === 'error') {
                    return this.setState({
                        toastMessage: error.response.data.message,
                        toastType: 'danger',
                        open: true,
                        loading: false
                    });
                }
            }

            return this.setState({
                toastMessage: 'An error has occurred.',
                toastType: 'danger',
                open: true
            });
        });
    }

    closeToast = () => {
        this.setState({
            open: false
        });
    }

    componentDidMount() {
        this.fetchProfile();
    }

    render() {
        return (
            <div className={'content'}>
                <div className={'profile'}>
                    {this.state.loading ?
                        <Loading/>
                        :
                        <>
                            <h1>Profile</h1>
                            <p>Change Profile:</p>
                            <label>
                                <input type={'text'} name={'name'} value={this.state.name}
                                       onChange={this.handleInputChange}/>
                            </label>
                            <label>
                                <input type={'text'} name={'email'} value={this.state.email}
                                       onChange={this.handleInputChange}/>
                            </label>
                            <span>
                                <button type={'button'} onClick={this.changeUsername}>Ok</button>
                            </span>
                        </>
                    }
                </div>
                {this.state.open &&
                <Toast text={this.state.toastMessage} type={this.state.toastType} toastFunction={this.closeToast}/>
                }
            </div>
        );
    }
}

export default Profile;