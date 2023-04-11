import React, {useState} from 'react'
import { Form, Button } from "react-bootstrap";

export default function Register() {
    // Set initial states for email, password, and register.
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(false);

    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();
        // make a popup alert showing the "submitted" text
        alert("Submited");
      }

    return (
        <>
            <h2>Register</h2>
            <Form onSubmit={(e)=>handleSubmit(e)} >
                {/* email */}
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    name = "email"
                    value = {email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                {/* password */}
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                {/* submit button */}
                <Button onClick={(e)=>handleSubmit(e)} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </>
    )
}
