import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Home } from '../Home'
import { Profiles } from '../Profiles'
import { Chats } from '../Chats'

export const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                {/*<Route path="/chats" element={<Chats/>}></Route>*/}
                <Route path="/chats/chat1" element={<Chats/>}></Route>
                <Route path="/profile" element={<Profiles/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
