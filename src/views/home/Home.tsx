import React, {Component} from 'react';
import './index.css';
import BgHome from '../../assets/layout/images/home.jpg';
import Posts from "../../api/Posts";
import Loading from "../../components/loading/Loading";
import {Link} from 'react-router-dom';
import Pagination from "../../components/pagination/Pagination";
import HomeInterface from "../interfaces/HomeInterface";

class Home extends Component<HomeInterface> {

    items = Posts.items;

    loadingTime: any;

    state = {
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
        this.loadingTime = setTimeout(() => this.setState({loading: false}), 1000);
    }

    updateFetchPosts() {
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
        this.fetchPosts();
    }

    componentDidUpdate() {
        this.updateFetchPosts();
    }

    componentWillUnmount() {
        clearTimeout(this.loadingTime);
    }

    render() {
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
                            {this.items.map(item =>
                                <Link to={`/post/${item.id}`} key={item.id}>
                                    <div className={'home-content-separator'}>
                                        <div
                                            className={`home-content-post-card category-${item.category.toLowerCase()}`}>
                                            {item.category}
                                        </div>
                                        <div className={'home-content-post-title'}>
                                            {item.title}
                                        </div>
                                        <div className={'home-content-post-description'}>
                                            {item.description}
                                        </div>
                                    </div>
                                </Link>
                            )}
                            <Pagination link={'/'} previous={1} page={2} next={3}/>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default Home;