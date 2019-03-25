import React from 'react';
import ReactDOM from 'react-dom';
import Entry from './components/Entry.js' ;
import Action from './components/Action.js' ;
import Options from './components/Options.js' ;
import Header from './components/Header.js' ;
import OptionModal from './components/Modal.js' ;
import './styles/style.scss' ;

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            item:[1,2,3],
            isselected:undefined
        }
        this.pickoption=this.pickoption.bind(this);
        this.setreset=this.setreset.bind(this);
        this.addentry=this.addentry.bind(this);
        this.removeentry=this.removeentry.bind(this);
        this.setselect=this.setselect.bind(this);
    }

    pickoption() {
       let x=Math.floor(Math.random()*this.state.item.length);
       this.setState((prevstate)=>{
         return {
            isselected:prevstate.item[x]
         }
       })
    }

    setselect(){
        this.setState((prevstate)=>{
            return {
                isselected :!prevstate.isselected
            }
        })
    }

    setreset() {
       this.setState(()=>{
            return {
                item:[]
            }
       })
    }

    addentry(entry) {
         this.setState((prevstate)=>{
             let x=prevstate.item;
             x.push(entry);
             return {
                 item:x
             }
         })
    }

    removeentry(x){
        this.setState((prevstate)=>{
            let y=prevstate.item;
            let z=y.filter((a)=>{
                 if(a===x)
                   return false;
                 else
                   return true;
            })
            return {
                item:z
            }
        })
    }

    render() {
        return (
            <div>
                <Header />
                <Action item={this.state.item} pickoption={this.pickoption}/>
                <Options item={this.state.item} setreset={this.setreset}  removeentry={this.removeentry}/>
                <Entry addentry={this.addentry} />
                <OptionModal isselected={this.state.isselected} setselect={this.setselect}/>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));