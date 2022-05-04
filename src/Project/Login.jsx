import React, { useState } from 'react';
import { Button, Card, Col, Form } from 'react-bootstrap'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitLogin = (e) => {
        e.preventDefault();

        let emailLs = localStorage.getItem("email");
        let passwordLs = localStorage.getItem("password");

        if (email === emailLs && password === passwordLs) {
            setTimeout(() => {
                navigate("/profile");
            }, 2000);
            toast('You Have Successesfully Logged in');
        }
        else {
            toast('Invalid credentials, please provide valid credentials');
        };
        console.log(email);
        console.log(password);
    }
    return (
        <>
            <div style={{ 'text-align-last': 'left', 'text-align': '-webkit-center' }}>
                <h1 style={{ 'text-align-last': 'center' }}>Log In</h1>
                <Card style={{ width: '28rem', }}>
                    <Card.Body>
                        <div>
                            <Form onSubmit={submitLogin} >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />

                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />

                                <div className="Login"><Button variant="primary" type="submit" style={{ "margin-top": '20px' }} >
                                    Login
                                </Button></div>
                            </Form>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}
export default Login;
