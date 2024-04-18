import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import Message from './Message';
import Button from 'react-bootstrap/Button';


export default function Main(){
    const [input, setInput] = useState("")
    const [socket, setSocket] = useState(() => io("")); 
    const [isConnected, setIsConnected] = useState(false);
    const [mas, setAllMessage] = useState([])
    // const login = localStorage.getItem("login")
    useEffect(() => { 
        console.log('muont'); 
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
        <Button onClick = {()=>socket.emit('message', [input,""])}>click
        </Button>
        <div>
            <table><tbody>{mas.map((e) => <Message user = {e.login} msg={e.content} time={e.time}/>)}</tbody></table>
        </div>
    </>
}