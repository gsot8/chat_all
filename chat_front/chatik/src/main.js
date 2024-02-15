import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import Message from './Message';

const socket = io("http://127.0.0.1:5000");
export default function Main(){
    const [input, setInput] = useState("")
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [mas, setAllMessage] = useState([])
    useEffect(() => {    
        socket.on('connect', () => console.log('Подключен '));
        socket.on('all_message', (mas) => setAllMessage(mas)
        );
        socket.on('add_message', (msg) => setAllMessage(mas => [...mas, msg])
        );
        socket.on('disconnect', () => console.log('Отключен '));
        if (!isConnected)
            socket.connect()
        return () => {
            socket.off('add_message');
            socket.off('all_message');
            socket.disconnect();
        } 
    }, []);
    return <>
		<input value={input} onInput={e => setInput(e.target.value)}/>
        <button onClick = {()=>socket.emit('message', input)}>click
        </button>
        <div>
            <table><tbody>{mas.map((e) => <Message msg={e.msg} time={e.time}/>)}</tbody></table>
        </div>
    </>
}
