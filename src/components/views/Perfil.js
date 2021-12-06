import React, { Component } from "react";
import { Form, Row, Col, Image, Button, Container } from 'react-bootstrap';
import profileIcon from '../images/profileIcon.png';
import { Navigate } from "react-router";
import { firebaseApp } from "../../firebase";
require('firebase/auth')

export default class Perfil extends Component {

    usuario = firebaseApp.auth().currentUser;

    user() {
        firebaseApp.auth().onAuthStateChanged((user) => {
            if (user) {
                var uid = user.uid;
                console.log(uid);
            } else {
                console.log("No hay nadie")
            }
        });
    }

    logout() {
        firebaseApp.auth().signOut().then(() => {
            window.location.replace("/login");
        }).catch((error) => {
            console.log(error)
        })
    }




    render() {

        return (
            <div style={{ width: 480 }} className="position-absolute top-50 start-50 translate-middle shadow border border-dark py-5">
                <div
                    style={{ display: "flex", justifyContent: "center" }}
                    className=""
                >
                    <Col xs={6} md={6}>
                        <h1> <strong> Bienvenido </strong> </h1>
                        <Image src={profileIcon} roundedCircle width="250" height="250" />
                    </Col>

                </div>

                <div>
                    Es un gusto tenerte de vuelta <br />
                    <strong> {this.usuario.email} </strong> <br />
                    <Button variant="secondary" onClick={this.logout} > Cerrar Sesion </Button>
                </div>


            </div>
        );
    }
}