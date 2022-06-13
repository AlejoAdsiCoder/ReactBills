

import React, { useEffect, useState } from 'react'
import { Table, Modal, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Movimientos() {
    const [items, setItems] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [description, setDescription] = useState("");
    const [valor, setValor] = useState("");
    const [radio, setRadio] = useState('false');
    const navigate = useNavigate();

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

    function handleSubmit(event) {
        event.preventDefault();

        fetch('https://prismatest.prismadigdev.repl.co/users/cramirez/bills', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                "observation": event.target.description.value,
                "type": event.target.move.value,
                "value": event.target.valor.value
            })
        });

        setModalShow(false);
    }
    
    useEffect(() => {
        fetch (
        `https://PrismaTest.prismadigdev.repl.co/users/cramirez/bills/`
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
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    Agregar
                </Button>
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
                            <Form onSubmit={handleSubmit}>
                                <Form.Label>Descripción</Form.Label>
                                <Form.Group>
                                    <Form.Control
                                        autoFocus
                                        as="textarea"
                                        name="description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Label>Tipo de Movimiento</Form.Label>
                                <Form.Group>
                                <Form.Check
                                    label="Ingreso"
                                    name="move"
                                    checked={radio==='1'}
                                    value="1"
                                    type="radio"
                                    onChange={(e) => setRadio(e.target.value)}
                                />
                                <Form.Check
                                    label="Gasto"
                                    name="move"
                                    checked={radio==='2'}
                                    value="2"
                                    type="radio"
                                    onChange={(e) => setRadio(e.target.value)}
                                />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Valor</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="valor"
                                        value={valor}
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

