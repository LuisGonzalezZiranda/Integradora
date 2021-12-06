import React, { useEffect, useState, } from 'react';
import { Container, Form, Button, Accordion } from 'react-bootstrap';
import { getCollection, updateDocument, deleteDocument } from '../commun/actions';
import { size, isEmpty } from 'lodash';
import { firebaseApp } from '../../firebase';


function MiPresupuesto() {
    const [presupuesto, setpresupuestos] = useState([])
    const [navegacion, setPresupuesto] = useState([])
    const [encabezado, setPresupuesto2] = useState([])
    const [body, setPresupuesto3] = useState([])
    const [footer, setPresupuesto4] = useState([])
    const [baseDeDatos, setPresupuesto5] = useState([])
    const [framework, setPresupuesto6] = useState([])
    const [hosting, setPresupuesto7] = useState([])
    const [identificar, setPresupuesto8] = useState([])
    const [error, setError] = useState(null)

    const usuario = firebaseApp.auth().currentUser;
    const navegacionN = Number(navegacion)
    const encabezadoN = Number(encabezado)
    const bodyN = Number(body)
    const footerN = Number(footer)
    const datosN = Number(baseDeDatos)
    const frameworkN = Number(framework)
    const hostingN = Number(hosting)
    const total = navegacionN + encabezadoN + bodyN + footerN + datosN + frameworkN + hostingN;

    const saveTask = async (e) => {
    
        e.preventDefault()
        if (isEmpty(presupuesto)) {
          console.log("Task vacío")
          return
        }

        const result = await updateDocument("presupuesto", presupuesto.id, { basedatos: datosN, body: bodyN, correo: usuario.email, creado: Date(), encabezado: encabezadoN, footer: footerN, framework: frameworkN, hosting: hostingN, navegacion: navegacionN, nombre: usuario.displayName, total: total })
        console.log('llego aqui');
        if (!result.statusResponse) {
          setError(result.error)
          return
        }

        console.log('llego aqui');
    
      }
    

    const deleteTask = async (id) => {
        const result = await deleteDocument("presupuesto", id)
        if (!result.statusResponse) {
            setError(result.error)
            return
        }
        const filteredTasks = presupuesto.filter(task => task.id !== id)
        setpresupuestos(filteredTasks)
    }

    useEffect(() => {
        (async () => {
            const result = await getCollection("presupuesto")
            const usuario = firebaseApp.auth().currentUser;

            for (var i = 0; i < result.data.length; i++) {
                const personal = result.data[i].correo;
                if (personal === usuario.email) {
                    const total = result.data[i].total;
                    const correo = result.data[i].correo;
                    const BD = result.data[i].basedatos;
                    const body = result.data[i].body;
                    const creado = result.data[i].creado;
                    const encabezado = result.data[i].encabezado;
                    const footer = result.data[i].footer;
                    const framework = result.data[i].framework;
                    const hosting = result.data[i].hosting;
                    const navegacion = result.data[i].navegacion;
                    const uid = result.data[i].id;
                    presupuesto.push({ total: total, correo: correo, id: uid, basedatos: BD, body: body, encabezado: encabezado, footer: footer, framework: framework, hosting: hosting, navegacion: navegacion, fecha: creado })
                    setpresupuestos([...presupuesto,])
                    console.log(creado);
                }
            }

            if (result.statusResponse) {

            }
        })()
    }, [])

    return (
        <>
            <div>
                <h3> presupuestos </h3>
                <Container bg='dark' className="mt-3 p-5">
                    <div className="col-auto p-5 text-center">
                        <h4 className="text-center">Presupuestos</h4>
                        {
                            size(presupuesto) === 0 ? (
                                <h5 className="text-center">Aun no tienes presupuestos</h5>
                            ) : (
                                <table className="table">
                                    {
                                        presupuesto.map((task) => (
                                            <tr key={task.id}>
                                                <Accordion defaultActiveKey={task.id}>
                                                    <Accordion.Item eventKey={task.id}>
                                                        <Accordion.Header> Autor: {task.correo} ------------------------------------------------ Fecha:{task.fecha}</Accordion.Header>
                                                        <Accordion.Body>
                                                            <Form onSubmit={saveTask} >
                                                                <Form.Group controlId="Navbar" onChange={(text) => setPresupuesto(text.target.value)} >
                                                                    <h5> Precio actual de la barra de navegacion: {task.navegacion} </h5>

                                                                    <div key={`inline-radio`} className="mb-3 d-flex justify-content-between">
                                                                        <Form.Check inline label="Modo obscuro" name="group1" type='radio' id={`inline--1`} value="600" />
                                                                        <Form.Check inline label="Barra de busqueda" name="group1" type='radio' id={`inline--2`} value="400" />
                                                                        <Form.Check inline label="Logo empresa" name="group1" type='radio' id={`inline--3`} value="300" />
                                                                        <Form.Check inline label="Login" name="group1" type='radio' id={`inline--4`} value="450" />
                                                                    </div>
                                                                </Form.Group>

                                                                <Form.Group controlId="encabezado" onChange={(text) => setPresupuesto2(text.target.value)} >
                                                                    <h5> Precio actual de los elementos del encabezado: {task.encabezado} </h5>

                                                                    <div key={`inline-radio`} className="mb-3 d-flex justify-content-between" >
                                                                        <Form.Check inline label="Banner" name="group2" type='radio' id={`inline--1`} value="700" />
                                                                        <Form.Check inline label="Slider" name="group2" type='radio' id={`inline--2`} value="400" />
                                                                        <Form.Check inline label="Descripcion" name="group2" type='radio' id={`inline--3`} value="200" />
                                                                        <Form.Check inline label="Call action" name="group2" type='radio' id={`inline--4`} value="340" />
                                                                    </div>

                                                                </Form.Group>

                                                                <Form.Group controlId="Cuerpo" onChange={(text) => setPresupuesto3(text.target.value)} >
                                                                    <h5> Precio actual de los elementos del Body: {task.body} </h5>
                                                                    <div key={`inline-radio`} className="mb-3 d-flex justify-content-between">
                                                                        <Form.Check inline label="Formulario" name="group3" type='radio' id={`inline--1`} value="600" />
                                                                        <Form.Check inline label="Carrusel de imagenes" name="group3" type='radio' id={`inline--2`} value="250" />
                                                                        <Form.Check inline label="Cards" name="group3" type='radio' id={`inline--3`} value="150" />
                                                                        <Form.Check inline label="ScrollSpy" name="group3" type='radio' id={`inline--4`} value="80" />
                                                                    </div>
                                                                </Form.Group>

                                                                <Form.Group controlId="Footer" onChange={(text) => setPresupuesto4(text.target.value)} >
                                                                    <h5>Precio actual de los elementos del Footer: {task.footer}</h5>
                                                                    <div key={`inline-radio`} className="mb-3 d-flex justify-content-between">
                                                                        <Form.Check inline label="Redes Sociales" name="group4" type='radio' id={`inline--1`} value="130" />
                                                                        <Form.Check inline label="Enlaces" name="group4" type='radio' id={`inline--2`} value="50" />
                                                                        <Form.Check inline label="Mapa" name="group4" type='radio' id={`inline--3`} value="120" />
                                                                        <Form.Check inline label="Politicas de Privacidad" name="group4" type='radio' id={`inline--4`} value="140" />
                                                                    </div>
                                                                </Form.Group>

                                                                <Form.Group controlId="BD" onChange={(text) => setPresupuesto5(text.target.value)} >
                                                                    <h5> Precio actual de la Base de datos: {task.BD}</h5>
                                                                    <div key={`inline-radio`} className="mb-3 d-flex justify-content-between">
                                                                        <Form.Check inline label="MondoDB" name="group5" type='radio' id={`inline--1`} value="400" />
                                                                        <Form.Check inline label="MySQL" name="group5" type='radio' id={`inline--2`} value="350" />
                                                                        <Form.Check inline label="Firebase" name="group5" type='radio' id={`inline--3`} value="400" />
                                                                        <Form.Check inline label="SQLite" name="group5" type='radio' id={`inline--4`} value="350" />
                                                                    </div>
                                                                </Form.Group>

                                                                <Form.Group controlId="Framework" onChange={(text) => setPresupuesto6(text.target.value)} >
                                                                    <h5>Precio actual del Framework a utilizar: {task.framework}</h5>
                                                                    <div key={`inline-radio`} className="mb-3 d-flex justify-content-between">
                                                                        <Form.Check inline label="Laravel" name="group6" type='radio' id={`inline--1`} value={500} />
                                                                        <Form.Check inline label="React" name="group6" type='radio' id={`inline--2`} value={650} />
                                                                        <Form.Check inline label="Symfony" name="group6" type='radio' id={`inline--3`} value={500} />
                                                                        <Form.Check inline label="Python" name="group6" type='radio' id={`inline--4`} value={700} />
                                                                    </div>
                                                                </Form.Group>

                                                                <Form.Group controlId="BDplace" onChange={(text) => setPresupuesto7(text.target.value)} >
                                                                    <h5>Precio actual del Hosting de base de datos: {task.hosting} </h5>
                                                                    <div key={`inline-radio`} className="mb-3 d-flex justify-content-between">
                                                                        <Form.Check inline label="Hostinger" name="group7" type='radio' id={`inline--1`} value={20} />
                                                                        <Form.Check inline label="GoDaddy" name="group7" type='radio' id={`inline--2`} value={30} />
                                                                        <Form.Check inline label="Goodle Cloud" name="group7" type='radio' id={`inline--3`} value={40} />
                                                                    </div>
                                                                </Form.Group>

                                                                <div className="d-flex justify-content-around">
                                                                    <Button type='submit' > Modificar presupuesto </Button>
                                                                    <h4> Total: {task.total} </h4>
                                                                    <Button onClick={() => deleteTask(task.id)}
                                                                    >Eliminar </Button>
                                                                </div>

                                                            </Form>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                </Accordion>
                                            </tr>
                                        ))
                                    }
                                </table>
                            )}
                    </div>
                </Container>
            </div>
        </>
    );
}

export default MiPresupuesto;