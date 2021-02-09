import React, {Component} from 'react';
import './index.css';
import BgHome from '../../../assets/layout/images/home.jpg';
import Loading from "../../components/loading/Loading";
import {Link} from 'react-router-dom';
import Pagination from "../../components/pagination/Pagination";
import HomeInterface from "../interfaces/HomeInterface";
import api from "../../../service/api";
import PostApiInterface from "../../../service/interfaces/PostApiInterface";

class Home extends Component<HomeInterface> {

    state = {
        posts: [],
        prev_page: null,
        next_page: null,
        from: null,
        loading: true,
        update: undefined,
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

        api.get(`posts?page=${page}`).then(response => {
            this.setState({
                posts: response.data.data,
                prev_page: response.data.prev_page,
                next_page: response.data.next_page,
                from: response.data.from,
                loading: false
            })
        }).catch((error) => {

        });
    }

    updatePostsWithPagination() {
        const object = this.convertToObject(this.props.storage.location.search);

        if (object.page !== undefined && object.page !== this.state.update) {
            this.setState({
                update: object.page,
                loading: true
            });
            this.fetchPosts(object.page);
        }
    }

    componentDidMount() {
        const object = this.convertToObject(this.props.storage.location.search);
        this.fetchPosts(object.page);
    }

    componentDidUpdate() {
        this.updatePostsWithPagination();
    }

    render() {
        console.log(this.state.posts);
        return (
            <div>
                <div className={'home-bg'} style={{backgroundImage: `url(${BgHome})`}}>
                    <input type={'text'} placeholder={'Search'}/>
                </div>
                <div className={'home-content'}>
                    {this.state.loading ?
                        <Loading/>
                        :
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
                    }
                </div>
            </div>
        );
    }
}

export default Home;