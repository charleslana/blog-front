import React, {Component} from 'react';
import './index.css';
import Loading from "../../components/loading/Loading";

class Register extends Component {

    state = {
        loading: false
    }

    handleSubmit() {
        this.setState({loading: true});
    }

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
                        {this.state.loading ?
                            <button type={'button'} disabled={true}><Loading/>Register</button>
                            :
                            <button type={'button'} onClick={() => this.handleSubmit()}>Register</button>
                        }
                    </label>
                </div>
            </div>
        );
    }
}

export default Register;