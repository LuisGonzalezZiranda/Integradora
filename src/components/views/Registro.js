import React, { Component } from 'react'
import { Form, Row, Col, Image, Button, Nav } from 'react-bootstrap'
import profileIcon from '../images/profileIcon.png'
import { firebaseApp } from '../../firebase'
require('firebase/auth')


export default class Registro extends Component {
    usuario = React.createRef();
    contrasena = React.createRef();

    constructor(props) {
        super(props);
        //Este enlace es necesario para hacer que this funciones en el callback
        this.signup = this.signup.bind(this);
    }

    

    signup(e) {
        e.preventDefault();
        var miusuario = this.usuario.current.value;
        var micontrasena = this.contrasena.current.value;

        firebaseApp
            .auth()
            .createUserWithEmailAndPassword(miusuario, micontrasena)
            .then(u => { 
                window.location.replace("/perfil");
            })
            .catch(function (error) {
                console.log(error);
                alert(error);
            });

        

    }

    render() {
        return (
            <div style={{ width: 480 }} className="position-absolute top-50 start-50 translate-middle shadow border border-dark py-5">
                <div
                    style={{ display: "flex", justifyContent: "center" }}
                    className=""
                >
                    <Col xs={6} md={6}>
                        Bienvenido
                        <Image src={profileIcon} roundedCircle width="180" height="180" />
                    </Col>

                </div>

                <form style={{ justifyContent: "center" }}>
                    Ingresa tu informacion para registrarte
                    <div class="mb-3 mt-5 ">
                        <label>
                            <input name="email" type="email" placeholder="Correo" class="form-control" ref={this.usuario} />
                        </label>
                    </div>
                    <div class="mb-3">
                        <label>
                            <input name="contrasena" type="password" placeholder="Password" class="form-control" ref={this.contrasena} />
                        </label>
                    </div>
                    <div class="d-grid gap-2 col-2 mx-auto">
                        <Button type="submit" onClick={this.signup}  > Registrarme </Button>
                    </div>
                </form>
            </div>
        )
    }
}