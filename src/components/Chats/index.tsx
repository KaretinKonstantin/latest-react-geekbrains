import './style.scss';
import {Link, useParams} from "react-router-dom";
import {Fragment, useCallback, useEffect, useState} from "react";
import {ChatList} from "../ChatList";
import {NoChat} from "../NoChat";
import {ChatsL} from '../../schema'
import { Message } from '../MessageList/Message'
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getChatMessages} from "../../store/messages/selectors";
import { addMessageWithReply} from "../../store/messages/actions";
import {addChat, deleteChat} from "../../store/chats/actions";
import {getChats} from "../../store/chats/selectors";

const initChats: ChatsL = {
    chat1: [
        {
            id: 1,
            author: 'Human',
            message: 'Message1'
        },
        {
            id: 2,
            author: 'Human',
            message: 'Message2'
        },
        {
            id: 3,
            author: 'Human',
            message: 'Message3'
        }
    ],
    chat2: [
        {
            id: 1,
            author: 'Human',
            message: 'Message2'
        }
    ]
}

export const Chats = () => {
    const {chatId} = useParams();
    const dispatch = useDispatch();
    const chats = useSelector(getChats);
    const getMessages = useMemo(() => getChatMessages(chatId), [chatId]);
    const messages = useSelector(getMessages, shallowEqual);

    const sendMessage = useCallback(
        (author, message) => {
            dispatch(addMessageWithReply(chatId, message, author));
        }, [dispatch, chatId]
    )

    const handleDeleteChat = (id) => {
        dispatch(deleteChat(id));
    }

    const handleAddChat = (name) => {
        dispatch(addChat(name))
    }

    return (
        <Fragment>
            <Link to="/">Home</Link>
            <h1>Chats</h1>
            <div className="chats-container">
                <ChatList chats={chats}
                          onDeleteChat={handleDeleteChat}
                          onAddChat={handleAddChat}/>
                {chats[chatId] ?
                    <Message messages={messages}
                                 addMessage={sendMessage}/>
                    : <NoChat/>}
            </div>
        </Fragment>
    )
}
