import React, {Component} from 'react';
import './index.css';
import Logo from '../../../assets/layout/images/logo.png';

class Footer extends Component {

    render() {
        const date = new Date();
        return (
            <footer>
                <div className={'footer-black'}>
                    <div className={'footer-a'}>
                        <ul>
                            <li>CBlog by Charles</li>
                            <li>Copyright {date.getFullYear()}</li>
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