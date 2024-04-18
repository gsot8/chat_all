import { useState } from "react";
import {Navigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Input from 'react-bootstrap/InputGroup';
import { InputGroup } from "react-bootstrap";
import Form from 'react-bootstrap/Form';


export default function Registration(){
    const [login,setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [clicked, setClicked] = useState(false)

    return(
        <div>
            <InputGroup  value={login} onInput={e => setLogin(e.target.value)}>
                <Form.Control  aria-label="login"/>
                </InputGroup>
                <InputGroup  value={password} onInput={e => setPassword(e.target.value)}>
                <Form.Control  aria-label="Password"/>
                </InputGroup>
        <Button onClick= {e => {
            localStorage.setItem('login',login)
            setClicked(true)
            fetch("/reg", 
                {  
                      method: "POST",  
                      body: JSON.stringify({login: login,password : password}),  
                      headers: {'Content-Type': 'application/json'},
            })}} > Registration
            </Button>
            {clicked && <Navigate to='/main' />}
        </div>
    )
}