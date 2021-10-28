import { Card, Checkbox } from "@material-ui/core";
import "./App.css";
import Buttons from "./components/material-ui/buttons/Buttons";
import CheckBoxComp from "./components/material-ui/checkbox/CheckBoxComp";
import TextField from '@material-ui/core/TextField/TextField'
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import {orange, green} from "@material-ui/core/colors";
import TypographyComp from "./components/material-ui/typography/TypographyComp";
import Wrapper from "./components/material-ui/wrapper/Wrapper"
import Cards from "./components/material-ui/cards/Cards";
import AppBarComp from "./components/material-ui/app-bar/AppBarComp";
import StyledButton from "./components/material-ui/styled-button/StyledButton";


// import StyledComponents from "./components/styled-comp";
const theme = createMuiTheme({
  palaette:{
    primary: {
      main: orange[400],
    },
    secondary: {
      main: green[300],
    }
  },
  typography:{
    h2:{
      fontSize:38,
      padding:2,
    },
    subtitle1:{
      marginBottom:5,
    }
  }
}) 
function App() {
  return (
    <ThemeProvider theme={theme}> {/*sarmalladığımız alan içindeki child ların primary-secondary isimli değerleri theme içindeki değerleri alacak*/}
    <Wrapper>
      <AppBarComp/>
    <div className="App">
      <header className="App-header">
        {/* <StyledComponents /> */}
        <StyledButton/>
        <TypographyComp/>
        <Cards/>
        <TextField/>
        <br/>
        <Buttons/>
        <Checkbox/>
        <CheckBoxComp/>
      </header>
    </div>
    </Wrapper>
    </ThemeProvider>
  );
}
export default App;
