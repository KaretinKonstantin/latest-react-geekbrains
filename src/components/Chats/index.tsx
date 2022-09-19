import './style.scss';
import {Link, useParams} from "react-router-dom";
import {Fragment, useCallback, useEffect, useState} from "react";
import {ChatList} from "../ChatList";
import {NoChat} from "../NoChat";
import {ChatsL} from '../../schema'
import { Message } from '../MessageList/Message'
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getChatMessages} from "../../store/messages/selectors";
import {addMessage} from "../../store/messages/actions";
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
    const [chats, setChats] = useState(initChats);
    const {chatId} = useParams()
    //TODO отловить где не прилетает парам
    console.log(chatId)

    const addMessage = useCallback((author: string, message: string, id: string) => {
        if (!id && chatId) id = chatId;
        setChats(prevState => ({
            ...prevState,
            [id]: [
                ...prevState[id],
                {
                    id: prevState[id].length + 1,
                    author,
                    message
                }
            ]
        }))
    }, [chatId]);

    const botMessage = useCallback(() => {
        const messages = chatId ? chats[chatId] : '';
        if (!messages) return ;

        if (messages.length > 0
            && messages[messages.length - 1].author !== 'Bot') {
            const timerId = setTimeout(() => {
                addMessage('Bot', 'Сообщение отправлено', chatId ?? 'id');
            }, 1500)
            return () => {
                clearTimeout(timerId);
            }
        }
    }, [chats, chatId, addMessage]);

    useEffect(() => {
        botMessage();
    }, [botMessage, chats]);

    return (
        <Fragment>
            <Link to="/">Home</Link>
            <h1>Chats</h1>
            <div className="chats-container">
                <ChatList chats={chats}/>
                {chatId}
                {(chatId ? chats[chatId] : '') && <Message messages={(chatId ? chats[chatId] : [])} addMessage={addMessage}/>}
                {(chatId ? !chats[chatId] : '') && <NoChat/>}
            </div>
        </Fragment>
    )
}
