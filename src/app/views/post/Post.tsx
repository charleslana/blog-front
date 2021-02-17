import React, {Component} from 'react';
import './index.css';
import PostInterface from "../interfaces/PostInterface";
import Loading from "../../components/loading/Loading";
import api from "../../../service/api";
import Toast from "../../components/toast/Toast";
import Title from "../../components/title/Title";
import '../home/index.css';
import Avatar from '../../../assets/layout/images/avatar.png';

class Post extends Component<PostInterface> {

    state = {
        category: '',
        title: '',
        description: null,
        userOwnerName: null,
        userOwnerAvatar: undefined,
        open: false,
        toastMessage: null,
        loading: true
    }

    fetchPostId() {
        api.get(`posts/${this.props.storage.match.params.id}`).then(response => {
            this.setState({
                category: response.data.category,
                title: response.data.title,
                description: response.data.description,
                userOwnerName: response.data.user.name,
                userOwnerAvatar: response.data.user.avatar_url,
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

    closeToast = () => {
        this.setState({
            open: false
        });
    }

    componentDidMount() {
        this.fetchPostId();
    }

    render() {
        const category = this.state.category;
        return (
            <div className={'content'}>
                <div className={'post'}>
                    {this.state.loading ?
                        <Loading/>
                        :
                        this.state.title != null &&
                        <div>
                            <Title text={this.state.title} children={''}/>
                            <div className={`post-category category-${category.toLowerCase()}`}>
                                {category}
                            </div>
                            <div className={'post-size'}>
                                <h1>{this.state.title}</h1>
                                <p>{this.state.description}</p>
                                <h2>Author</h2>
                                <div className={'author'}>
                                    <div className={'author-a'}>
                                        <img className={'author-avatar'}
                                             src={this.state.userOwnerAvatar ? this.state.userOwnerAvatar : Avatar}
                                             alt={'Avatar'}
                                        />
                                    </div>
                                    <div className={'author-b'}>
                                        {this.state.userOwnerName}
                                    </div>
                                </div>
                                <h1>Comments</h1>
                            </div>
                        </div>
                    }
                </div>
                {this.state.open &&
                <Toast text={this.state.toastMessage} type={'danger'} toastFunction={this.closeToast}/>
                }
            </div>
        );
    }
}

export default Post;