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
                    open: true,
                    loading: false,
                    title: null
                });
            }

            return this.setState({
                toastMessage: 'An error has occurred.',
                open: true,
            });
        });
    }

    handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        this.setState({
            ...this.state,
            [name]: value.trim()
        });
    }

    changeUsername = () => {
        this.setState({
            loading: true
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
                            <p>Change Username:</p>
                            <label>
                                <input type={'text'} name={'name'} value={this.state.name}
                                       onChange={this.handleInputChange}/>
                            </label>
                            <span>
                                <button type={'button'} onClick={this.changeUsername}>Ok</button>
                            </span>
                        </>
                    }
                </div>
                {this.state.open &&
                <Toast text={this.state.toastMessage} type={'danger'} toastFunction={this.closeToast}/>
                }
            </div>
        );
    }
}

export default Profile;