import React, {  useCallback, useContext } from "react";
import { Col, Image, Nav } from "react-bootstrap";
import profileIcon from "../images/profileIcon.png";
import { AuthContext } from "../../Auth.js";
import { Navigate } from "react-router";
import { firebaseApp } from "../../firebase";
require("firebase/auth");

const Login = () => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebaseApp
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
          window.location.replace("/perfil");
      } catch (error) {
        alert(error); 
      }
    },
    []
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Navigate to="/perfil" />;
  }

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

      <form style={{ justifyContent: "center" }} onSubmit={handleLogin}>
      Ingresa tu informacion 
        <div class="mb-3 mt-5 ">
          <label>
            <input
              class="form-control"
              name="email"
              type="email"
              placeholder="Email"
            />
          </label>
        </div>
        <div class="mb-3">
          <label>
            <input
              class="form-control"
              name="password"
              type="password"
              placeholder="Password"
            />
          </label>
        </div>
        <div class="d-grid gap-2 col-2 mx-auto">
          <button class="btn btn-primary" type="submit">
            Enviar
          </button>
        </div>
      </form>
      <Nav.Link href='/registro'> No tienes cuenta, registrate </Nav.Link>
    </div>
  );
};

export default Login;
