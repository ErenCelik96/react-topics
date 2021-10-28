// route : sayfalar arası geçişi sağlayan component

//npm install react-router-dom  ile yüklenir

import React from 'react;
import Header from './Header';
import About from './About';
import Home from './Home';
import Profile from './Profile';
import {BrowserRouter as Rounter, Route, Switch, Link} from 'router-router-dom'; //router ı import ettik

const App = () => {
    return (
        <Rounter>
            <div className="App">
                <Header/>
                <ul>
                    <Link to="/about">
                    <li>About</li>
                    </Link>
                    <Link to="/profile">
                    <li>Profile</li>
                    </Link>
                </ul>
            </div> 
            <Switch>
            <Route path="/about" component={About} />
            <Route path="/profile" component={Profile} />
            <Route exact path="/" component={Home} /> 
            </Switch>
        </Rounter> 
    )
}
//exact : sadece / gördüğünde bu comp a git  Bkz.29 
//Switch : yukarıdan aşağı okuyup farklılıkları karşılaştırmaya yarar, sayfa geçişlerindeki ışığı engeller(sayfayı baştan komple yenilemez), switch edeceğimiz kısımları <Switch> ile sarmamız gerekir Bkz.26
//Link: her butonu link içine alıp nereye gideceğini girmemiz gerekir Bkz.18, 21

//Route etmek istediğimiz alanı <Rounter> ile sarmamız gerekiyor Bkz.15
//<Route path="spesifik path" component={comp adı} Bkz.27, 28, 29
