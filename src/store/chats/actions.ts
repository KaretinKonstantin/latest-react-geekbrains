export const ADD_CHAT = "CHATS::ADD_CHAT";
export const DELETE_CHAT = "CHATS::DELETE_CHAT";

export const addChat = (name:string) => ({
    type: ADD_CHAT,
    payload: name,
});

export const deleteChat = (id:number) => ({
    type: DELETE_CHAT,
    payload: id,
});
