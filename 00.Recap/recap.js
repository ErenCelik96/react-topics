//////////app.js
import './App.css';
import ClassBased from './ClassBased';
import Functional from './Functional';

function App() {
    return (
        <div className="App">
            <ClassBased name="Cedric" surname="kissinger" />
            <Functional />
        </div>
    );
}

export default App;

////////ClassBased (class comp state ve props kullanımı)

import React, { Component } from 'react'
export default class ClassBased extends Component {
    //     constructor(){
    //     super(props);
    //     this.state = {
    //         count: 0
    //     }
    // }
    //componenetDidMount : component oluştu
    //componentDidUpdate : component değişiyor
    //componentDidUnmount : component öldü 

    state = {
        count: 0
    }
    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }
    decrement = () => {
        this.setState({ count: this.state.count - 1 })
    }
    render() {
        return (
            <div>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.setState({ count: this.state.count - 1 })}>-</button>
                <h2>{this.props.name}- {this.props.surname}</h2>
            </div>
        )
    }
}


///////////////Functional
import React, { useState } from 'react'

export default function Functional() {

     /////////////////useState
    const [count, setCount] = useState(0); //count değerimiz, setCount değeri değiştirme yöntemimiz
    const [empty, setEmpty] = useState(0);
    const [full, setFull] = useState(0);
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        if (count > 0){ //count 0 ın altına indiğinde eksiltmeye izin vermez
        setCount(count - 1)}
    }
    //////////////////useEffect
    useEffect(()=>{//effect ilk başlangıçta, bir şey update edildiğinde ve comp öldüğünde çalışır
        setEmpty(empty + 1)//BU YANLIŞ. useEffect içerisine mümkün olduğunca state değişikliği koymamalıyız, loop a sokar
        return () => console.log("Ben gidiyorum") // return ile yazdığımız şey component ölürken (kapanırken) çalışır
    }, [])//Sona ,[] koyarsak sadece başlangıçta çalışır. Boş bırakırsak update edildiğinde çalışır(örneğin: buttonlara tıklanıp count un değiştirilmesi).[count] yazarsak sadece count değeri değiştiğinde çalışır. [empty, full] yazarsak sadece count ve full değeri değiştiğinde çalışır.
    
    return (
        <div>
            <div>
                <button onClick={increment}>+</button>
                <h1> {count} </h1>
                <button onClick={decrement}>-</button>
                <br/>
                <br/>
                <button onClick={()=> setEmpty(empty + 1)}>+</button>
                <h1>{empty}</h1>
                <button onClick={()=> setFull(full + 1)}>+</button>
                <h1>{full}</h1>
            </div>
        </div>
    )
};



