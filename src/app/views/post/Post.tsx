import React, {Component} from 'react';
import './index.css';
import PostInterface from "../interfaces/PostInterface";
import Loading from "../../components/loading/Loading";

class Post extends Component<PostInterface> {

    loadingTime: any;

    state = {
        loading: true
    }

    componentDidMount() {
        this.loadingTime = setTimeout(() =>
            this.loadPost(), 1000);
    }

    componentWillUnmount() {
        clearTimeout(this.loadingTime);
    }

    loadPost() {
        this.setState({loading: false});
        document.title = `Post Title ${this.props.storage.match.params.id} - CBlog`;
    }

    render() {
        return (
            <div className={'content'}>
                <div className={'post'}>
                    {this.state.loading ?
                        <Loading/>
                        :
                        <div>
                            <h1>Post title {this.props.storage.match.params.id}</h1>
                            <p>Description</p>
                            <p>Paragraph</p>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default Post;