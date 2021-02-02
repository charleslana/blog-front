import React, {Component} from 'react';
import './index.css';
import BgHome from '../../assets/layout/images/home.jpg';

class Home extends Component {

    render() {
        return (
            <div>
                <div className={'home-bg'} style={{backgroundImage: `url(${BgHome})`}}>
                    <input type={'text'} placeholder={'Search'}/>
                </div>
                <div className={'home-content'}>
                    {Array(10).fill(1).map((el, i) =>
                        <div key={i}>
                            <div className={'home-content-separator'}>
                                <div className={'home-content-post-card'}>
                                    Linux
                                </div>
                                <div className={'home-content-post-title'}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </div>
                                <div className={'home-content-post-description'}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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