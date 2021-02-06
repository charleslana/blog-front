import React, {Component} from 'react';
import './index.css';
import PaginationInterface from "../interfaces/PaginationInterface";

class Pagination extends Component<PaginationInterface> {

    state = {
        previous: this.props.previous,
        page: this.props.page,
        next: this.props.next
    }

    render() {
        return (
            <div className={'pagination'}>
                {this.state.previous == null ?
                    <div className={'pagination-separator disabled'}>
                        <p>Previous</p>
                    </div>
                    :
                    <div className={'pagination-separator'}>
                        <p>Previous</p>
                    </div>
                }
                <div className={'pagination-separator'}>
                    <p>1</p>
                </div>
                <div className={'pagination-separator'}>
                    <p>Next</p>
                </div>
            </div>
        );
    }
}

export default Pagination;