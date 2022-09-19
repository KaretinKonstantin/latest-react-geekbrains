import { Chat } from '../../schema'
import './style.scss'
import { Fragment, useEffect, useRef, useState } from 'react'
import React from 'react'
import { Button, TextField } from '@mui/material'


interface lProps {
    messages: Chat[],
    addMessage: (message: string, author: string, id: string) => void;
}

export const Message: React.FC<lProps> = ({messages, addMessage}) => {
    const inputRef = useRef(null);
    const [message, setMessage] = useState('');
    const [author, setAuthor] = useState('Guest');

    useEffect(() => {
        // @ts-ignore
        inputRef.current.focus();
    }, []);

    const handleMessage = (event: React.BaseSyntheticEvent) => {
        setMessage(event.target.value);
    }

    const handleAuthor = (event: React.BaseSyntheticEvent) => {
        setAuthor(event.target.value);
    }

    const formSubmit = (event: React.BaseSyntheticEvent) => {
        event.preventDefault();
        addMessage(author, message, '1');
        setMessage('');
        // @ts-ignore
        inputRef.current.focus();
    }

    return (
        <>
            <div className="message-window">
                {messages.map(item =>
                    <Fragment key={item.id}>
                        <div>Автор: {item.author}</div>
                        <pre>Сообщение: {item.message}</pre>
                    </Fragment>
                )}
            </div>
            <form onSubmit={formSubmit}>
                <TextField required
                           id="author"
                           label="Author"
                           value={author}
                           onChange={handleAuthor}/>
                <TextField id="message"
                           label="Сообщение"
                           multiline
                           rows={1}
                           variant="outlined"
                           value={message}
                           onChange={handleMessage}
                           inputRef={inputRef}/>
                <Button type="submit"
                        variant="contained">Отправить</Button>
            </form>
        </>
    )
}