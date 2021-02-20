import React, {Component} from 'react';
import './index.css';
import Loading from "../../components/loading/Loading";
import Modal from "../../components/modal/Modal";
import {Redirect} from 'react-router';

class Register extends Component {

    state = {
        loading: false,
        success: false,
        redirect: false
    }

    handleSubmit() {
        this.setState({
            loading: true,
            success: true
        });
    }

    closeModal = () => {
        this.setState({success: false});
    }

    redirectPage = () => {
        this.setState({redirect: true});
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
                        <input type={'text'} id={'name'} placeholder={'Inform your name'}/>
                    </label>
                    <label>
                        <input type={'email'} id={'email'} placeholder={'Inform your email'}/>
                    </label>
                    <label>
                        <input type={'password'} id={'password'} placeholder={'Inform your password'}/>
                    </label>
                    <label>
                        <input type={'password'} id={'confirm_password'} placeholder={'Confirm your password'}/>
                    </label>
                    <label>
                        {this.state.loading ?
                            <button type={'button'} disabled={true}><Loading/>Register</button>
                            :
                            <button type={'button'} onClick={() => this.handleSubmit()}>Register</button>
                        }
                    </label>
                    {this.state.success &&
                    <Modal message={'Your account has been successfully created.'}
                           buttonMessage={'Redirect to Login'}
                           function={this.redirectPage}
                    />
                    }
                </div>
            </div>
        );
    }
}

export default Register;