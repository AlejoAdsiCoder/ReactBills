import React, { useState } from 'react';
import { FormGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useHistory } from 'react-router-dom'

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    // function validateForm() {
    //     return email.length > 0 && password.length > 0;
    // }

    function handleSubmit(event) {
        event.preventDefault();

        if(!email.trim() || !password.trim()) {
          console.log('Datos vacíos email!');
        } else {
          navigate('/moves', {replace: true})
        }
    }

  return (
    <div className="Login">

    <Form onSubmit={handleSubmit}>

      <Form.Group size="lg" className="mb-3">

        <Form.Label>Email</Form.Label>

        <Form.Control

          autoFocus

          type="email"

          value={email}

          onChange={(e) => setEmail(e.target.value)}

        />

      </Form.Group>

      <Form.Group size="lg" className="mb-3">

        <Form.Label>Password</Form.Label>

        <Form.Control

          type="password"

          value={password}

          onChange={(e) => setPassword(e.target.value)}

        />

      </Form.Group>

      <Button type="submit">

        Login

      </Button>

    </Form>

  </div>
  )
}
