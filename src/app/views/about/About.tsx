import React, {Component} from 'react';
import './index.css';

class About extends Component {

    render() {
        return (
            <div className={'content'}>
                <div className={'about'}>
                    <h1>About the Blog</h1>
                    <p>The blog's idea is to bring content related to technology to cover information and experiences of others in this area.</p>
                    <p>However, our goal is to bring together research and solutions to problems related to the infinite technologies in the market.</p>
                    <p>If you want to be part of this union and help everyone who seeks information, you are in the right place.</p>
                    <p><b>Big hug from collaborator Charles.</b></p>
                </div>
            </div>
        );
    }
}

export default About;