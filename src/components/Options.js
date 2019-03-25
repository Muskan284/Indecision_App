import React from 'react';
import ReactDOM from 'react-dom';

class Options extends React.Component{
    render(){
        return(
            <div>
                
                <button onClick={this.props.setreset}>Reset</button>
                {   
                    this.props.item.map((item)=>{
                       return  <Option key={item} item={item} removeentry={this.props.removeentry}/>
                    })
                }
            </div>
        )
    }
}

class Option extends  React.Component{
    constructor(props){
      super(props);
      this.remove=this.remove.bind(this);
    }
    remove(){
       //console.log(this.props);
       this.props.removeentry(this.props.item);
    }
    render(){
        return(
            <div>
                <p>{this.props.item}</p>
                <button onClick={this.remove}>remove</button>
            </div>
        )
    }
}

export default Options;