import {ADD_CHAT, DELETE_CHAT} from "./actions";
import {createReducer} from "../createReducer";

const initState = {
    chats: {
        'chat-1': 'Chat1',
        'chat-2': 'Chat2',
    }
}

const reducerEffects = {
    [ADD_CHAT] (state=initState, payload:string) {
        const id = `chats-${Date.now()}`;
        return {
            ...state,
            chats: {
                ...state.chats,
                [id]: payload,
            }
        }
    },
    [DELETE_CHAT] (state=initState, payload:string) {
        const newChats = { ...state.chats };
        delete newChats[payload as keyof typeof newChats];
        return {
            ...state,
            chats: newChats,
        }
    },
}

export const chatsReducer = createReducer(reducerEffects, initState);
