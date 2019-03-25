import React from 'react';
import ReactDom from 'react-dom';
import Modal from 'react-modal';

class  OptionModal  extends React.Component{
    render(){
        return(
            <Modal
               isOpen={!!this.props.isselected}
               contentLabel="selected Option"
            >
             {this.props.isselected && <p>{this.props.isselected}</p>}
             <button onClick={this.props.setselect}>okay</button>
            </Modal>
        )
    }
}

export default OptionModal;