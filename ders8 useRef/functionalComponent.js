import { useState, useRef ,useEffect } from "react";
const FunctionalComponent = () => {

    const inputRef = useRef(null)
    const value = useRef(0)
    console.log(`value`, value)
    const [counter, setCounter] = useState(0);
    const [text, setText] = useState("")

    // useEffect(() => {
    //   console.log("useEffect");
    //   return () => {console.log("func. comp. unmount")}
    // },[counter])
    console.log("Func Comp Rendered!")
    const increase = () => {
        setCounter(counter + 1);
    }
    const changeBGColor = () => {
        console.log(inputRef.current.value)
        inputRef.current.parentElement.style.backgroundColor = text //current ile bağladık
        // const newInput = document.getElementById("new")
        // console.log(newInput.value)
        // newInput.parentElement.style.backgroundColor = text
    }
    const handleText = (e) => {
        setText(e.target.value)
    }
    return (
        <div className="function">
            <h2>Functional Component</h2>
            <p>Counter: {counter}</p>
            <button onClick={() => increase()}>Increase</button>
            <hr />
            <input
                id="new"
                ref={inputRef} //ref ile useRef imizi buraya yerleştirdik
                type="text"
                value={text}
                onChange={handleText}
            />
            <button onClick={() => changeBGColor()}>BG Color</button>
        </div>
    );
};
export default FunctionalComponent;