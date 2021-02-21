import React, {ChangeEvent, Component} from 'react';
import './index.css';
import Toast from "../../components/toast/Toast";
import Loading from "../../components/loading/Loading";

class Login extends Component {

    state = {
        toastMessage: null,
        toastType: null,
        open: false,
        loading: false,
        formData: {
            email: '',
            password: ''
        },
        checkFormData: false
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
                    <div>
                        {this.state.loading ?
                            <button type={'button'} disabled={true}><Loading/>Login</button>
                            :
                            this.state.checkFormData ?
                                <button type={'button'} onClick={this.handleSubmit}>Login</button>
                                :
                                <button type={'button'} disabled={true}>Login</button>
                        }
                    </div>
                </div>
                {this.state.open &&
                <Toast text={this.state.toastMessage} type={this.state.toastType} toastFunction={this.closeToast}/>
                }
            </div>
        );
    }
}

export default Login;