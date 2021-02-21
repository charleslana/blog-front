import React, {Component} from 'react';
import './index.css';
import api from "../../../../service/api";
import {Redirect} from "react-router";
import Loading from "../../../components/loading/Loading";
import Toast from "../../../components/toast/Toast";

class Comments extends Component {

    state = {
        open: false,
        toastMessage: null,
        loading: true,
        redirect: false
    }

    fetchComments() {
        api.get('/comments').then(response => {
            this.setState({
                loading: false,
            });
        }).catch((error) => {
            if (error.response) {
                return this.setState({
                    redirect: true
                });
            }

            return this.setState({
                toastMessage: 'An error has occurred.',
                open: true,
            });
        });
    }

    closeToast = () => {
        this.setState({
            open: false
        });
    }

    componentDidMount() {
        this.fetchComments();
    }

    render() {
        return (
            <div className={'content'}>
                {this.state.redirect &&
                <Redirect to={'/'}/>
                }
                <div className={'admin-comments'}>
                    {this.state.loading ?
                        <Loading/>
                        :
                        <h1>Comments</h1>
                    }
                </div>
                {this.state.open &&
                <Toast text={this.state.toastMessage} type={'danger'} toastFunction={this.closeToast}/>
                }
            </div>
        );
    }
}

export default Comments;