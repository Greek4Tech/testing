import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export default function Register() {
    // Set initial states for email, password, and register.
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(false);

    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();
        // set configutations
        const configuration = {
            method: "post",
            url: "http://localhost:4000/register",
            data: {
                email,
                password
            }
        }
        // make the API call
        axios(configuration)
            .then((result) => {
                setRegister(true);
            })
            .catch((error) => {
                error = new Error();
            });

    }

    return (
        <>
            <h2>Register</h2>
            <Form onSubmit={(e) => handleSubmit(e)} >
                {/* email */}
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={email}
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
                <Button onClick={(e) => handleSubmit(e)} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {/* display success message */}
            {register ? (
                <p className="text-success">You Are Registered Successfully</p>
            ) : (
                <p className="text-danger">You Are Not Registered</p>
            )}
        </>
    )
}
