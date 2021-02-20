import React, {Component} from 'react';
import './index.css';
import LoadMoreInterface from "../interfaces/LoadMoreInterface";

class LoadMore extends Component<LoadMoreInterface> {

    loadFunction = () => {
        this.props.function();
    }

    render() {
        return (
            <div className={'load-more'}>
                {this.props.next &&
                    <button type={'button'} onClick={this.loadFunction}>Load more {this.props.text}</button>
                }
            </div>
        );
    }
}

export default LoadMore;