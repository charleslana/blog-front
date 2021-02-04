import React, {Component} from 'react';
import './index.css';
import BgHome from '../../assets/layout/images/home.jpg';
import Posts from "../../api/Posts";

class Home extends Component {

    items = Posts.items;

    render() {
        return (
            <div>
                <div className={'home-bg'} style={{backgroundImage: `url(${BgHome})`}}>
                    <input type={'text'} placeholder={'Search'}/>
                </div>
                <div className={'home-content'}>
                    {this.items.map(item =>
                        <div key={item.id}>
                            <div className={'home-content-separator'}>
                                <div className={`home-content-post-card category-${item.category.toLowerCase()}`}>
                                    {item.category}
                                </div>
                                <div className={'home-content-post-title'}>
                                    {item.title}
                                </div>
                                <div className={'home-content-post-description'}>
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Home;