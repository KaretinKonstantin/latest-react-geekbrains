import './App.css'
import {Routing} from "./components/Routing";
import {Provider} from "react-redux";
import {persistor, store} from "./store";
import {PersistGate} from "redux-persist/integration/react";

function App() {

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Routing/>
            </PersistGate>
        </Provider>
    )
}

export default App