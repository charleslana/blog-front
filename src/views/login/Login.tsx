import React, {Component} from 'react';
import './index.css';
import Toast from "../../components/toast/Toast";

class Login extends Component {

    state = {
        toastMessage: null,
        toastType: null,
        open: false
    }

    openToast() {
        this.setState({
            toastMessage: 'Test message',
            toastType: 'danger',
            open: true
        });
    }

    closeToast = () => {
        this.setState({
            open: false
        });
    }

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
                        <button type={'button'} onClick={() => this.openToast()}>Login</button>
                    </label>
                </div>
                {this.state.open &&
                    <Toast text={this.state.toastMessage} type={this.state.toastType} toastFunction={this.closeToast}/>
                }
            </div>
        );
    }
}

export default Login;