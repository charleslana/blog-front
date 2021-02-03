import React, {Component} from 'react';
import './index.css';

class Login extends Component {

    render() {
        return (
            <div className={'content'}>
                <div className={'login'}>
                    <h1>Login</h1>
                    <p>Log in to your account</p>
                    <label>
                        <input type={'email'} id={'email'} placeholder={'Inform your email'}/>
                    </label>
                    <label>
                        <input type={'password'} id={'password'} placeholder={'Inform your password'}/>
                    </label>
                    <label>
                        <button type={'button'}>Login</button>
                    </label>
                </div>
            </div>
        );
    }
}

export default Login;