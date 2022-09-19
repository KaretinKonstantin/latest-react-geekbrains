import {ADD_MESSAGE, DELETE_MESSAGE} from "./actions";
import {DELETE_CHAT} from "../chats/actions";
import {createReducer} from "../createReducer";

const initState = {
    messages: {},
}

const actions = {
    [ADD_MESSAGE] (state = initState, {chatId, text, author}) {
       return {
           ...state,
           messages: {
               ...state.messages,
               [chatId]: [
                   ...(state.messages[chatId] || []),
                   {
                       id: `message-${Date.now()}`,
                       text,
                       author
                   },
               ],
           },
       }
   },
    [DELETE_MESSAGE] (state= initState, payload:[chatId:string, id:number]) {
       const newChatMessages = state.messages[payload.chatId as keyof typeof newChatMessages].filter(
           ({mesId}) => mesId === payload.id
       )
       return {
           ...state,
           messages: {
               ...state.messages,
               [chatId]: newChatMessages,
           }
       }
   },
    [DELETE_CHAT] (state= initState, payload) {
        const newChatMessages = {...state };
        delete newChatMessages.messages[payload];
        return newChatMessages;
    }
}

export const messagesReducer = createReducer(actions, initState);

