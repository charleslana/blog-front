import React, {Component} from 'react';
import './index.css';
import ToastInterface from "../interfaces/ToastInterface";

class Toast extends Component<ToastInterface> {

    timeout: any;

    componentDidMount() {
        this.timeout = setTimeout(() => this.closeToast(), 6000);
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    closeToast() {
        this.props.toastFunction();
    }

    render() {
        return (
            <div className={'toast'}>
                <div className={`toast-${this.props.type}`}>
                    <p>{this.props.text}</p>
                    <button onClick={() => this.closeToast()}>X</button>
                </div>
            </div>
        );
    }
}

export default Toast;