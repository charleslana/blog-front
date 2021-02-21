import React, {ChangeEvent, Component} from 'react';
import './index.css';
import Loading from "../../components/loading/Loading";
import Modal from "../../components/modal/Modal";
import {Redirect} from 'react-router';
import api from "../../../service/api";
import Toast from "../../components/toast/Toast";

class Register extends Component {

    state = {
        toastMessage: null,
        open: false,
        loading: false,
        success: false,
        redirect: false,
        formData: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        checkFormData: false
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

        api.post('users/details', this.state.formData).then(response => {
            this.setState({
                success: true
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

    closeModal = () => {
        this.setState({success: false});
    }

    closeToast = () => {
        this.setState({
            open: false
        });
    }

    redirectPage = () => {
        this.setState({redirect: true});
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
                <Redirect to={'/login'}/>
                }
                <div className={'register'}>
                    <h1>Register</h1>
                    <p>Register an account to participate in the blog</p>
                    <label>
                        <input type={'text'} name={'name'} placeholder={'Inform your name'}
                               onChange={this.handleInputChange}/>
                    </label>
                    <label>
                        <input type={'email'} name={'email'} placeholder={'Inform your email'}
                               onChange={this.handleInputChange}/>
                    </label>
                    <label>
                        <input type={'password'} name={'password'} placeholder={'Inform your password'}
                               onChange={this.handleInputChange}/>
                    </label>
                    <label>
                        <input type={'password'} name={'confirmPassword'} placeholder={'Confirm your password'}
                               onChange={this.handleInputChange}/>
                    </label>
                    <span>
                        {this.state.loading ?
                            <button type={'button'} disabled={true}><Loading/>Register</button>
                            :
                            this.state.checkFormData ?
                                <button type={'button'} onClick={this.handleSubmit}>Register</button>
                                :
                                <button type={'button'} disabled={true}>Register</button>
                        }
                    </span>
                    {this.state.success &&
                    <Modal message={'Your account has been successfully created.'}
                           buttonMessage={'Redirect to Login'}
                           function={this.redirectPage}
                    />
                    }
                </div>
                {this.state.open &&
                <Toast text={this.state.toastMessage} type={'danger'} toastFunction={this.closeToast}/>
                }
            </div>
        );
    }
}

export default Register;