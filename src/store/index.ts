import {createStore, combineReducers} from "redux";
import {profileReducer} from "./profile/reducer";
import {messagesReducer} from "./messages/reducer";
import {chatsReducer} from "./chats/reducer";

export const store = createStore(
    combineReducers({
        profile: profileReducer,
        messages: messagesReducer,
        chats: chatsReducer,
    }),
);

export type RootState = ReturnType<typeof profileReducer>

