  //class component lerde kullanımı
  
  /**
   * TODO List
   * create class component
   * 1. Binding in render method
   * 2. Binding in render method using arrow function
   * 3. Binding in the constructor
   * 4. Class property as an arrow function
   * 5.send argument to event handler
   */
  import {Component} from "react";

  class EventBind extends Component {
    constructor (props) {
      super(props);
      this.state = {
        message: "Hello"
      };
    }

    // handleClick() { //tıklandığında mesaj değişecek
    //   this.setState({message:"Goodbye!"});
    //   console.log("this: ", this);
    // } [1,2,3]

    // handleClick = () => { //arrow func yöntemi ile
    //   this.setState({message:"Goodbye!"});
    //   console.log("this: ", this);
    // } [4]

    handleClick(name){ //arrow func yöntemi ile
      this.setState({message:`Goodbye! ${name}`});
      console.log("this: ", this);
    } //[5] aşağıya this.handleClick("roy") yazılır

    render () {
      return(
        <div>
          <p>{this.state.message}</p>
          {/* <button onClick={this.handleClick.bind(this)}>click</button> //direk this.handleClick yazarsak undefined verir, sonuna bind(this) ekleyip manuel olarak yolladık düzeldi*/}
          <button onClick={() => this.handleClick("roy")}>click</button>
        </div> // bind kullanmazsak handle.Click() de yapabiliriz
      )}
    };

export default EventBind;