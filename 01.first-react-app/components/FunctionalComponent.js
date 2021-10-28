import React from 'react'; //react i import etmemiz gerekir en önce

function FunctionalComponent(props) { //props kullanacağımız zaman bunu ekliyoruz
    return (
        <div>
            <h1>Functional Component</h1>
            <p>{props.name}</p>
        </div>// props.propsAdı 
    );
};//import etmeden önce export etmemiz lazım, aşağıdaki şekilde export edebiliriz

export default FunctionalComponent;