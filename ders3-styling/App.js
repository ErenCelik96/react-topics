import Inline from "./components/inline/Inline";
import StyleSheet from "./components/regular-style/StyleSheet";
import Sassy from "./components/sassy/Sassy";
import './app.css'; //external olarak eklemek
import styles from './app.module.css'; //module olarak eklemek, className={styles.success} veya className={styles.[className]} şekillerinde ulaşılabilir
import ModuleBtn from './components/moduleCss/ModuleBtn';
const App = () => {
  return (
    <div>
      <Inline/>
      <StyleSheet primary={true}/>
      <Sassy/> 
      <h3 className="error">Something went wrong</h3>
      <h3 className={styles.success}>200 ok Success</h3>
      <ModuleBtn btnClass="primary" btnName="Module"/>
      <ModuleBtn btnClass="secondary" btnName="CSS"/>
    </div>//primary true olduğu için p salmon rengi olacak
  );
};

export default App;
