import React, {Component} from 'react';
import './index.css';
import BgHome from '../../assets/layout/images/home.jpg';
import Posts from "../../api/Posts";
import Loading from "../../components/loading/Loading";
import {Link} from 'react-router-dom';

class Home extends Component {

    items = Posts.items;

    loadingTime: any;

    state = {
        loading: true
    }

    componentDidMount() {
        this.loadingTime = setTimeout(() => this.setState({loading: false}), 1000);
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
                        this.items.map(item =>
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
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Home;