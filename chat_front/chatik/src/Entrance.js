import { useState } from "react";
import {Navigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Input from 'react-bootstrap/InputGroup';
import { InputGroup } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

export default function Entrance(){
    const [login,setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [clicked, setClicked] = useState(false)

    return(
        <div>
            <InputGroup  value={login} onInput={e => setLogin(e.target.value)}>
                <Form.Control  aria-label="Text input with radio button"/>
                </InputGroup>
        <Button onClick= {e => {
            localStorage.setItem('login',login)
            setClicked(true)
            }} > click 
            </Button>

            {clicked && <Navigate to='/main' />}
        </div>
    )
    
}