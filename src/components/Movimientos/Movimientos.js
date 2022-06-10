

import React, { useEffect, useState } from 'react'
import { Table, Modal, Form, Button } from 'react-bootstrap';

export default function Movimientos() {
    const [items, setItems] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [description, setDescription] = useState("");
    const [valor, setValor] = useState("");
    const [radio, setRadio] = useState('false');

    /**
    const handleSubmit = (e) => {
        e.preventDefault();
        const movimiento = { description, valor, radio};

        fetch('https://prismatest.prismadigdev.repl.co/users/cramirez/bills', {
            method: 'POST',
            header: {"Content-Type": "application/json"},
            body: JSON.stringify(movimiento);
        }).then(())
    } */

    
    
    useEffect(() => {
        fetch (
        `https://PrismaTest.prismadigdev.repl.co/users/cramirez/bills`
        )
        .then(response => response.json())
        .then(data => setItems(data));

    }, []);

        return (
        <div className="app-container">
            
            <section class="table">
                <Table>
                    <thead>
                        <tr>
                            <thead>
                                Movimientos
                            </thead>
                        </tr>
                        
                    </thead>
                    <tbody>
                        {items.map(item => (
                        <tr>
                            <>
                                <td>{item.date_bill}</td>
                                <td>{item.value}</td>
                                <td>{item.type}</td>
                                <td>{item.observation}</td>
                            </>
                        </tr>    
                        ))}
                        
                    </tbody>
                </Table>
                <button variant="primary" onClick={() => setModalShow(true)}>
                    Add
                </button>
                <Modal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    dialogClassName="modal-90w"
                    size="lg"
                    centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                            Registro de Movimiento 
                            </Modal.Title>
                            
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Label>Descripción</Form.Label>
                                <Form.Group>
                                    <Form.Control
                                        autoFocus
                                        as="textarea"
                                        name="description"
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Label>Tipo de Movimiento</Form.Label>
                                <Form.Group>
                                <Form.Check
                                    label="Ingreso"
                                    name="move"
                                    value="Ingreso"
                                    type="radio"
                                    onChange={(e) => setRadio(e.target.value)}
                                />
                                <Form.Check
                                    label="Gasto"
                                    name="move"
                                    value="Gasto"
                                    type="radio"
                                    onChange={(e) => setRadio(e.target.value)}
                                />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Valor</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="valor"
                                        onChange={(e) => setValor(e.target.value)}
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit">Registrar</Button>
                                <Button variant="secondary" type="submit">Cancelar</Button>
                            </Form>
                        </Modal.Body>

                    </Modal>
            
            </section>
        </div>
        )
    
}

