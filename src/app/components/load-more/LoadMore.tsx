import React, {Component} from 'react';
import './index.css';
import LoadMoreInterface from "../interfaces/LoadMoreInterface";
import Loading from "../loading/Loading";

class LoadMore extends Component<LoadMoreInterface> {

    loadFunction = () => {
        this.props.function();
    }

    render() {
        return (
            <div className={'load-more'}>
                {this.props.next &&
                <>
                    {this.props.loading ?
                        <button type={'button'} disabled={true}><Loading/>Load more {this.props.text}</button>
                        :
                        <button type={'button'} onClick={this.loadFunction}>Load more {this.props.text}</button>
                    }
                </>
                }
            </div>
        );
    }
}

export default LoadMore;