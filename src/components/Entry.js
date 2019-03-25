import React from 'react';
import ReactDOM from 'react-dom';

class Entry extends React.Component{
    constructor(props){
        super(props);
        this.add=this.add.bind(this);
    }
    add(e){
      e.preventDefault();
      let entry=e.target.elements.name.value.trim();
      if(entry)
      this.props.addentry(entry);
      e.target.elements.name.value='';
    }
    render(){
        return(
            <div>
                <form onSubmit={this.add} >
                    <input type="text" name="name" ></input>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default Entry;