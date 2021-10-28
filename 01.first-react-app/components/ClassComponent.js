//ClassComponent.js isminde dosya oluşturuyoruz

import React from 'react'; //react i import etmemiz gerekir en önce

class ClassComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {surname:"Celik"}
    }
    render() {
        return(
            <div className="App"> 
                <div>
                    <h1>CLARUSWAY</h1>
                    <p>Class Component</p>
                    <p>{this.props.name}</p> 
                    <p>{this.state.surname}</p> 
                </div>
            </div>//props için {this.props.propsname}
        ) //her şey tek divin içerisinde olacak mutlaka
    }//import etmeden önce export etmemiz lazım, aşağıdaki şekilde export edebiliriz
}//state i constructor ile yerleştiriyoruz

export default ClassComponent; 

//export işleminden sonra app.js sayfasına gidip:

//import ClassComponent from './components/ClassComponent'; //dosyayı import ediyoruz
/* function App() {
    return (
      <div className="App">
        <ClassComponent/>
      </div>
    );
} //app functionunun içini dolduruyoruz  */

//işlemlerini yapıyoruz
// app index.html deki root id sine sahip div in içerisine gidiyor