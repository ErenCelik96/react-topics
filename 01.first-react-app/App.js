import React from 'react';
import ReactDom from 'react-dom';
import logo from './logo.svg';
import './App.css';

import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';

function App() {
  return (

    <div className="App">

      <ClassComponent name="Jane Doe"/>
      <FunctionalComponent name="John Doe"/>
      <Hosgeldiniz ad="Eren">
        <h3>Selamlar.</h3>
      </Hosgeldiniz>  
    </div>
    //name: props john doe : değeri
    //hosgeldiniz taginin children ı h3
  );
}
export default App;

ReactDom.render(App, document.getElementById("root")); //burada react.dom u import edip, render sayesinde app fonksiyonunu index.html deki root id si içerisine gönderdik

//aynı sayfa içerisine de fonk. yazabiliriz
function Hosgeldiniz(props) {
  return (
  <div>
      <p>Hosgeldiniz, {props.ad || "misafir."}</p>
      {props.children}
  </div> //props.children ile tag arasına yazılmış olan elemanlara ulaşırız (children larına)
  )//p taginde props.ad varsa onu yoksa misafir text ini göster dedik
}