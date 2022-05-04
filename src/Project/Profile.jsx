import React from "react";
import { Button, Card, Col, Form } from 'react-bootstrap'
function Profile() {
    let fName = localStorage.getItem("firstName");
    let lName = localStorage.getItem("lastName");
    let email = localStorage.getItem("email");
    let pNumber = localStorage.getItem("phoneNumber");
    let password = localStorage.getItem("password");

    return (
        <>
            {['Info'].map((variant) => (
                <Card
                    bg={variant.toLowerCase()}
                    key={variant}
                    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{ width: '98rem' }}
                    className="mb-2"
                >
                    <Card.Header><h1>Sublime Data Systems</h1></Card.Header>
                    <Card.Body>
                        <Card.Title><h2>First Name : {fName} {lName}</h2></Card.Title>
                        <Card.Text><h4>E-Mail : {email}</h4></Card.Text>
                        <Card.Text><h4>Phone Number : {pNumber}</h4></Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </>
    );
}
export default Profile;
