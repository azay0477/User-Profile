import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Card, Image, Form } from 'react-bootstrap'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

function Signup(props) {
    const navigate = useNavigate();
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [pNumber, setPNumber] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState(undefined);

        const submitSignupForm = (e) => {
        e.preventDefault();

        localStorage.setItem("firstName", fName);
        localStorage.setItem("lastName", lName);
        localStorage.setItem("email", email);
        localStorage.setItem("phoneNumber", pNumber);
        localStorage.setItem("password", password);

        toast('Congratulations You Have Successesfully Signed Up')
        setTimeout(() => {
            navigate('/login')
        }, 3000);
    }
    return (
        <React.Fragment>
            <div style={{ 'textAlignLast': 'left', 'textAlign': '-webkit-center' }}>
                <h1 style={{ 'textAlignLast': 'center' }}>Sign Up</h1>

                <Card style={{ width: '28rem', display: 'flex', justifyContent: 'center' }}>
                    <Card.Body >
                        <div>
                            <Form onSubmit={submitSignupForm} >
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control type="Text" placeholder="First name" onChange={e => setFName(e.target.value)} required />

                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control type="Text" placeholder="Last name" onChange={e => setLName(e.target.value)} required />

                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} required />

                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="Number" placeholder="Phone Number" onChange={e => setPNumber(e.target.value)} required />

                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required />

                                    <Form.Label>Profile Picture</Form.Label>
                                    <Form.Control type="file"  />

                                    <Image src={image} />
                                </Form.Group>

                                <Button variant="primary" type="submit"  >
                                    SIGN UP
                                </Button>

                            </Form>
                        </div>
                    </Card.Body>

                </Card>
            </div>
        </React.Fragment>
    );
}

export default Signup;
