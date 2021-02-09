import React, {Component} from 'react';
import './index.css';
import PaginationInterface from "../interfaces/PaginationInterface";
import {Link} from 'react-router-dom';

class Pagination extends Component<PaginationInterface> {

    state = {
        link: this.props.link,
        previous: this.props.previous,
        page: this.props.page,
        next: this.props.next,
        from: this.props.from
    }

    render() {
        return (
            <div className={'pagination'}>
                {this.state.from == null ?
                    <div>No post found on this page.</div>
                    :
                    <div>
                        {this.state.previous == null ?
                            <div className={'pagination-separator disabled'}>
                                <p>Previous</p>
                            </div>
                            :
                            <div className={'pagination-separator'}>
                                {this.state.previous === 1 ?
                                    <Link to={this.state.link}>
                                        <p>Previous</p>
                                    </Link>
                                    :
                                    <Link to={`${this.state.link}?page=${this.state.previous}`}>
                                        <p>Previous</p>
                                    </Link>
                                }
                            </div>
                        }
                        <div className={'pagination-separator'}>
                            <p>{this.state.page}</p>
                        </div>
                        {this.state.next == null ?
                            <div className={'pagination-separator disabled'}>
                                <p>Next</p>
                            </div>
                            :
                            <div className={'pagination-separator'}>
                                <Link to={`${this.state.link}?page=${this.state.next}`}>
                                    <p>Next</p>
                                </Link>
                            </div>
                        }
                    </div>
                }
            </div>
        );
    }
}

export default Pagination;