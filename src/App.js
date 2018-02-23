import React, { Component } from 'react';
import './App.css';
import Ball from './balls/ball'
class App extends Component {
    constructor(props){
        super(props);
        this.state={
            termialX:"",
            termialY:"",
            originX:"",
            originY:"",
            balls:[]
        };
        this.complete = this.complete.bind(this)
    }
    componentDidMount(){
        document.addEventListener('click',this.click)
    }

    click=e=>{
        let ball = {
            id: `${e.timeStamp}`,
            termialX:this.refs.terminal.offsetLeft+15,
            termialY:this.refs.terminal.offsetTop,
            originX:e.pageX,
            originY:e.pageY
        };
        this.state.balls.push(ball);
        this.setState({},()=>{
            this.refs.ball.init()
        })

    };
    complete(id){
        this.state.balls.forEach((v,i)=>{
            if(v.id === id){
                this.state.balls.splice(i,1);
                this.setState({});
                return
            }
        })
    }
      render() {
        return (
          <div className="App">
            <div className="terminal" ref="terminal"></div>
              {
                  this.state.balls.map(v=>(
                      <Ball ref="ball"
                            key={v.id}
                            terminal={{x:v.termialX,y:v.termialY}}
                            origin={{x:v.originX,y:v.originY}}
                            id={v.id}
                            complete={this.complete}
                      />
                  ))
              }
          </div>
        );
      }
}

export default App;
