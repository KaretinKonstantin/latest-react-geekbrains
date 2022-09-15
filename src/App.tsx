import './App.css'
import {Routing} from "./components/Routing";
import {Provider} from "react-redux";
import {store} from "./store";

function App() {

    return (
        <Provider store={store}>
            <Routing/>
        </Provider>
    )
}

export default App