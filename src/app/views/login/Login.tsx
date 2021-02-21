import React, {ChangeEvent, Component} from 'react';
import './index.css';
import Toast from "../../components/toast/Toast";
import Loading from "../../components/loading/Loading";
import api from "../../../service/api";
import {Redirect} from "react-router";

class Login extends Component {

    state = {
        toastMessage: null,
        open: false,
        loading: false,
        formData: {
            email: '',
            password: ''
        },
        checkFormData: false,
        redirect: false
    }

    openToast() {
        this.setState({
            toastMessage: 'Test message',
            toastType: 'danger',
            open: true,
            loading: true
        });
    }

    closeToast = () => {
        this.setState({
            open: false
        });
    }

    handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        this.setState({
            formData: {
                ...this.state.formData,
                [name]: value.trim()
            }
        });
    }

    handleSubmit = () => {
        this.setState({
            loading: true
        });

        api.post('users/session', this.state.formData).then(response => {
            this.setState({
                redirect: true
            });
        }).catch((error) => {
            if (error.response) {

                if(error.response.data.error === 'Bad Request') {
                    return this.setState({
                        toastMessage: error.response.data.validation.body.message,
                        open: true,
                        loading: false
                    });
                }

                if(error.response.data.status === 'error') {
                    return this.setState({
                        toastMessage: error.response.data.message,
                        open: true,
                        loading: false
                    });
                }
            }

            return this.setState({
                toastMessage: 'An error has occurred.',
                open: true,
            });
        });
    }

    componentDidUpdate() {
        let check = true;
        for (const [, value] of Object.entries(this.state.formData)) {
            if (!value) {
                check = false;
            }
        }
        if (this.state.checkFormData !== check) {
            this.setState({checkFormData: check});
        }
    }

    render() {
        return (
            <div className={'content'}>
                {this.state.redirect &&
                <Redirect to={'/'}/>
                }
                <div className={'login'}>
                    <h1>Login</h1>
                    <p>Log in to your account</p>
                    <label>
                        <input type={'email'} name={'email'} placeholder={'Inform your email'}
                               onChange={this.handleInputChange}/>
                    </label>
                    <label>
                        <input type={'password'} name={'password'} placeholder={'Inform your password'}
                               onChange={this.handleInputChange}/>
                    </label>
                    <span>
                        {this.state.loading ?
                            <button type={'button'} disabled={true}><Loading/>Login</button>
                            :
                            this.state.checkFormData ?
                                <button type={'button'} onClick={this.handleSubmit}>Login</button>
                                :
                                <button type={'button'} disabled={true}>Login</button>
                        }
                    </span>
                </div>
                {this.state.open &&
                <Toast text={this.state.toastMessage} type={'danger'} toastFunction={this.closeToast}/>
                }
            </div>
        );
    }
}

export default Login;