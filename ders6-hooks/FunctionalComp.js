import React, { useState, useEffect } from 'react';

const FunctionalComp = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log("useEffect");
        return () => {console.log('func. comp. willUnmount')}
    }, [counter]);
    
    const increase = () => {
        setCounter(counter+1);
    }
    return(
        <div className="function">
            <h2>Functional Component</h2>
            <p>Counter: {counter}</p>
            <button onClick={()=>{increase()}}>Increase</button>
        </div>
    );
};
export default FunctionalComp;