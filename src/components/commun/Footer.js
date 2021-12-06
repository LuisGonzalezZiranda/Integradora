import React from "react";
import { Navbar, Container } from "react-bootstrap";
export default function Footer() {

    return (
        <div>
            <Navbar bg="dark">
                <Container style={{ display: 'flex', justifyContent: 'center' }}>
                    <Navbar.Brand>
                        <h5 className='text-light' > Copyright © 2021 AutoDesign </h5>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
}