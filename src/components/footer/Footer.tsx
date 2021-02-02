import React, {Component} from 'react';
import './index.scss';
import Logo from '../../assets/layout/images/logo.png';

class Footer extends Component {

    render() {
        return (
            <footer>
                <div className={'footer-black'}>
                    <div className={'footer-a'}>
                        <ul>
                            <li>CBlog by Charles</li>
                            <li>Copyright 2021</li>
                            <li>Brazil</li>
                        </ul>
                    </div>
                    <div className={'footer-b'}>
                        <img src={Logo} alt={'Logo'}/>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;