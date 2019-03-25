import React from 'react';
import ReactDOM from 'react-dom';

class Action extends React.Component{
    render(){
        return(
            <div>
                <button onClick={this.props.pickoption}
                        disabled={this.props.item.length===0? true:false}>what should i do</button>
            </div>
        )
    }
}

export default Action;