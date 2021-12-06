import React from "react";
import { Container, Card, Row, Col, Nav } from 'react-bootstrap';
import team1 from '../images/team1.jpg'
import pagina1 from '../images/pagina1.png'
import pagina2 from '../images/pagina2.png'
import pagina3 from '../images/pagina3.png'
import pagina4 from '../images/pagina4.png'

export default function home() {
    return (
        <section className="mt-5 pt-5" id="about">
            <Container>
                <h1 >
                    Bienvenido! Somos autodesign.
                </h1>
                <>
                    <Card>
                        <Card.Img variant="top" src={team1} />
                        <Card.Body>
                            <Card.Text>
                                Somos autodesign, una gran empresa confia en nosotros, pondremos tu empresa donde pertenece
                                confia en nosotros
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </>
                <hr />
                <h2> Paginas Web </h2>
                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <Card>
                            
                            <Nav.Link href="/">
                                <Card.Img variant="top" src={pagina4} />
                            </Nav.Link>
                            <Card.Body>
                                <Card.Title>Web con APIS externas</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col>
                        <Card>
                        <Nav.Link href="/">
                            <Card.Img variant="top" src={pagina1} />
                        </Nav.Link>
                            <Card.Body>
                                <Card.Title>Web para citas</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                        <Nav.Link href="/">
                            <Card.Img variant="top" src={pagina2} />
                        </Nav.Link>
                            <Card.Body>
                                <Card.Title>Web para tareas</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                        <Nav.Link href="https://hopeful-archimedes-9328ea.netlify.app/">
                            <Card.Img variant="top" src={pagina3} />
                        </Nav.Link>
                            <Card.Body>
                                <Card.Title>Web de Presupuestos </Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br />
                <br />
                <br />
                <br />
            </Container>
        </section>
    );
}