import React, { Component } from 'react'
import './CounterStyle.css'

export default class Counter extends Component {
    constructor(props) { 
        super(props);
        this.state = {
           name:"Eren",
           count:0, 
        };
        console.log("constructor")        
      };

      increase = () => {
          this.setState({count:this.state.count + 1})
      }

      decrease = () => {
          this.setState({count:this.state.count - 1})
      }

      reset = () => {
          this.setState({count:this.state.count=0})
      }

      static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps", state)
        return null
      } //state in son halini gösterir

      shouldComponentUpdate(){
          console.log("should update?")
          return true //true olursa değişikliği ekranda gösterir, false olursa değişkliği ekranda göstermez (render olmaz)
      }

    componentDidMount = () => {
        console.log("Component mounted!")
        console.log("----------------")
    }
    
    componentDidUpdate = () => {
        console.log("component did update")
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("snapshot", prevState)
        return null
    } //bir önceki state i gösterir

    componentWillUnmount(){
        console.log("will unmount bye!")
    }

    render() {
        console.log("render")
        return (
            <div className="container">
                <p>counter: {this.state.count}</p>
                <button onClick={()=>this.increase()}>Arttır</button>
                <button onClick={()=>this.decrease()}>Azalt</button>
                <button onClick={()=>this.reset()}>Reset</button>
            </div>
        )
    }
}
