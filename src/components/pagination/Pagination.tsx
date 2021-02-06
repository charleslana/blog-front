import React, {Component} from 'react';
import './index.css';
import PaginationInterface from "../interfaces/PaginationInterface";
import {Link} from 'react-router-dom';

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
                    <Link to={`/?page=${this.state.previous}&per_page=10`}>
                        <div className={'pagination-separator'}>
                            <p>Previous</p>
                        </div>
                    </Link>
                }
                <div className={'pagination-separator'}>
                    <p>{this.state.page}</p>
                </div>
                {this.state.next == null ?
                    <div className={'pagination-separator disabled'}>
                        <p>Next</p>
                    </div>
                    :
                    <Link to={`/?page=${this.state.next}&per_page=10`}>
                        <div className={'pagination-separator'}>
                            <p>Next</p>
                        </div>
                    </Link>
                }
            </div>
        );
    }
}

export default Pagination;