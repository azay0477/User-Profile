import React from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory, useNavigate } from 'react-router-dom';
import { Redirect } from 'react-router';

function HomePage(props) {
    const navigate = useNavigate();
    const goToSignup = () => {
        navigate('signup')
    }
    const goToLogin = () => {
        navigate('login')
    }
    return (
        <>
            <Card>
                <img src='Screenshot (4).png' width={300} height={180} style={{ 'align-self': "center" }} />,
                <Button width={30} variant="info" type="submit" onClick={goToSignup} >
                    Sign Up
                </Button>
                <br />
                <Button variant="info" type="submit" onClick={goToLogin}>
                    Login
                </Button></Card>
        </>
    )
}
export default HomePage;