import React, { useState, useEffect, useCallback, useContext, handleChange } from "react";
import { Form, Row, Col, Container, Image } from "react-bootstrap";
import { firebaseApp } from "../../firebase";
import { addDocument } from "../commun/actions";
import map from "../images/mapa.png";
import addNotification from 'react-push-notification';
function Contactanos() {
  //Comentarios,   comentario, correo, date,
 const [error, setError] = useState(null)
  

  const handleComents = useCallback(async (event) => {
    const { email, message} = event.target.elements;
    
    event.preventDefault();
    try {
      await addDocument("Mensajes", {
        comentario: message.value,
        correo: email.value,
        creado: Date(),
      });
      setError(null);
      addNotification({
        title: 'Mensaje enviado',
        subtitle: 'Hemos recibido tu mensaje',
        message: 'Nos comunicaremos con usted a la brevedad posible',
        theme: 'darkblue',
        native: true // when using native, your OS will handle theming.
    });
    } catch (error) {
      setError(error);
    }

  }, []);
 

  return (
    <div
      style={{ width: 1500, height: 1000 }}
      className="position-absolute top-50 start-50 translate-middle shadow  border-dark py-5"
    >
      <div style={{ display: "grid", justifyContent: "center" }} className="">
        <h1 className="text-center p-5 mt-5" >
          Contactanos
        </h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div class="mb-3 mt-5 ">
                <h3 className="text-center p-5" >
                  Direccion:              </h3>
              </div>
            </div>
            <div className="Container row">
              <Image src={map} />
            </div>
          </div>
          <div className="col-md-6">
            <form style={{ justifyContent: "center"}} onSubmit={handleComents}>
              <div class="mb-3 mt-5 ">
                <h3 className="text-center p-5" >
                  Formulario de Contacto
                </h3>
                <label>
                  <h5>Correo:</h5>
                  <input
                    className="form-control"
                    name="email"
                    type="email"
                    placeholder="Email"
                  />
                </label>
              </div>
              <div className="mb-3">
                <label>
                  <h5>Mensaje:</h5>
                  <input
                    className="form-control"
                    name="message"
                    placeholder="Mensaje..."
                    size="50"
                    rows={5}
                    cols={50}
                  />
                </label>
              </div>
              <div className="d-grid gap-2 col-2 mx-auto">
                <button class="btn btn-primary" type="submit">
            Enviar
          </button>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <h4 className="text-center mt-4">Direccion fisica </h4>
        <h5 className="text-center mt-3 mb-5">
        Av, Vicepresidente Pino Suárez 750, Cd Industrial, 58200 Morelia, Mich.  
        </h5>
        </div>
      </div>
    </div>
  );
}

export default Contactanos;
