import React, {ChangeEvent, Component} from 'react';
import './index.css';
import BgHome from '../../../assets/layout/images/home.jpg';
import Loading from "../../components/loading/Loading";
import {Link} from 'react-router-dom';
import Pagination from "../../components/pagination/Pagination";
import HomeInterface from "../interfaces/HomeInterface";
import api from "../../../service/api";
import PostApiInterface from "../../../service/interfaces/PostApiInterface";
import Toast from "../../components/toast/Toast";

class Home extends Component<HomeInterface> {

    state = {
        posts: [],
        prev_page: null,
        next_page: null,
        from: null,
        loading: true,
        update: undefined,
        open: false,
        toastMessage: null,
        text: '',
        preventText: '',
        inputSearch: false
    }

    convertToObject(url: any) {
        const arr = url.slice(1).split(/[&=]/);
        let params: any;
        params = {};
        for (let i = 0; i < arr.length; i += 2) {
            const key = arr[i];
            params[key] = arr[i + 1];
        }
        return params;
    }

    fetchPosts(page = 1) {
        if (page === 1) {
            this.setState({update: 1});
        }

        api.post(`posts/filter?page=${page}`, {text: this.state.text}).then(response => {
            this.setState({
                posts: response.data.data,
                prev_page: response.data.prev_page,
                next_page: response.data.next_page,
                from: response.data.from,
                loading: false,
                inputSearch: false
            });
        }).catch((error) => {
            if (error.response) {
                return this.setState({
                    toastMessage: error.response.data.message,
                    open: true,
                    loading: false
                });
            }

            return this.setState({
                toastMessage: 'An error has occurred.',
                open: true,
            });
        });
    }

    handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({text: event.target.value.trim()});
    }

    filterText = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && this.state.text !== this.state.preventText) {
            this.setState({
                loading: true,
                inputSearch: true,
                preventText: this.state.text
            });
            this.fetchPosts();
        }
    }

    closeToast = () => {
        this.setState({
            open: false
        });
    }

    componentDidMount() {
        const object = this.convertToObject(this.props.storage.location.search);

        if (object.page < 1) {
            object.page = 1;
        }

        this.setState({
            update: object.page
        });
        this.fetchPosts(object.page);
    }

    componentDidUpdate() {
        const object = this.convertToObject(this.props.storage.location.search);

        if (object.page < 1 || object.page === undefined) {
            object.page = 1;
        }

        if (object.page !== this.state.update) {
            this.setState({
                update: object.page,
                loading: true
            });
            this.fetchPosts(object.page);
        }
    }

    render() {
        return (
            <div>
                <div className={'home-bg'} style={{backgroundImage: `url(${BgHome})`}}>
                    <input type={'text'} placeholder={'Type a search and press enter'} disabled={this.state.inputSearch}
                           onChange={this.handleInputChange} onKeyDown={this.filterText}/>
                </div>
                <div className={'home-content'}>
                    {this.state.loading ?
                        <Loading/>
                        :
                        this.state.posts.length ?
                            <div>
                                {this.state.posts.map((post: PostApiInterface) =>
                                    <Link to={`/post/${post.id}`} key={post.id}>
                                        <div className={'home-content-separator'}>
                                            <div
                                                className={`home-content-post-card category-${post.category.toLowerCase()}`}>
                                                {post.category}
                                            </div>
                                            <div className={'home-content-post-title'}>
                                                {post.title}
                                            </div>
                                            <div className={'home-content-post-description'}>
                                                {post.description}
                                            </div>
                                        </div>
                                    </Link>
                                )}
                                <Pagination link={'/'} previous={this.state.prev_page} page={this.state.update}
                                            next={this.state.next_page} from={this.state.from}/>
                            </div>
                            :
                            <p>Posts not found.</p>
                    }
                </div>
                {this.state.open &&
                <Toast text={this.state.toastMessage} type={'danger'} toastFunction={this.closeToast}/>
                }
            </div>
        );
    }
}

export default Home;