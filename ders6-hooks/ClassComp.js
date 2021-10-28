import React from 'react';

class ClassComp extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         counter:0,
    //     };
    //     this.increase=this.increase.bind(this);
    // }
    state = {
        counter:0,
    }

    componentDidMount() {
        console.log("ComponentDidMount");
    }

    componentDidUpdate() {
        console.log("ComponentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    increase = () => {
        this.setState({counter:this.state.counter+1})
    }

    render() {
        console.log("Class Counter:", this.state.counter)
        return (
            <div className="class">
                <h2>Class Component</h2>
                <p>Counter:{this.state.counter}</p>
                <button onClick={()=>this.increase()} type="button" className="">click me</button>
            </div>
        );
    }
};
export default ClassComp;