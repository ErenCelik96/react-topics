// import EventBind from './components/eventBinding/EventBind'
// import MouseEvents from './components/mouseEvents/MouseEvents'
// import KeyboardEvents from './components/keyboardEvents/KeyboardEvents'
import {setInput} from './helpers/inputHelpers'
import Form from './components/form/Form'
import './App.css'

const App = () => {
    return (
        <div className="App">
            {/* <h1>Events in React</h1>
            <EventBind /> */}
            {/* <MouseEvents />*/}
            {/* <KeyboardEvents />  */}
            <Form />
            <setInput/>
        </div>
    )
}

export default App