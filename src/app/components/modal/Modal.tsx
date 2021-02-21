import React, {Component} from 'react';
import './index.css';
import Success from '../../../assets/layout/images/success.png';
import ModalInterface from "../interfaces/ModalInterface";

class Modal extends Component<ModalInterface> {

    componentDidMount() {
        document.body.style.overflow = 'hidden';
    }

    componentWillUnmount() {
        document.body.style.overflow = '';
    }

    modalFunction = () => {
        this.props.function();
    }

    render() {
        return (
            <div className={'backDrop'}>
                <div className={'message'}>
                    <img src={Success} alt={'Success'}/>
                    <p>{this.props.message}</p>
                    <button type={'button'} onClick={this.modalFunction}>{this.props.buttonMessage}</button>
                </div>
            </div>
        );
    }
}

export default Modal;