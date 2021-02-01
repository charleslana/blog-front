import React, {Component} from 'react';
import BgHome from '../../assets/layout/images/home.jpg';
import './index.scss';

class Home extends Component {

    render() {
        return (
            <div>
                <div className={'home-bg'} style={{backgroundImage: `url(${BgHome})`}}>
                    <input type={'text'} placeholder={'Search'}/>
                </div>
            </div>
        );
    }
}

export default Home;