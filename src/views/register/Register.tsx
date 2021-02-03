import React, {Component} from 'react';
import './index.css';

class Register extends Component {

    render() {
        return (
            <div className={'content'}>
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
                        <button type={'button'}>Register</button>
                    </label>
                </div>
            </div>
        );
    }
}

export default Register;