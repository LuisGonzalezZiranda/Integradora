import React, {useContext} from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import icono from "../images/icono.png";
import { AuthContext } from "../../Auth.js";

function NavBar() {
  const { currentUser } = useContext(AuthContext);

  if(currentUser){
    return (
      <Navbar className="fixed-top" bg="dark" variant="dark">
      <Container>
        <Nav.Link href="/">
        <img
          src={icono}
          width="230"
          height="46"
          class="d-inline-block align-top"
          alt="icono"
        />
        </Nav.Link>
        <Nav className="mx-auto">
          <Nav.Link className="fs-5" href="/"> Inicio </Nav.Link>
          <Nav.Link className="fs-5" href="/presupuesto"> Presupuesto</Nav.Link>
          <Nav.Link className="fs-5" href="/contacto"> Contacto </Nav.Link>
        </Nav>
         <Nav.Link className="fs-5" href="/perfil"> Perfil </Nav.Link>
      </Container>
    </Navbar>
    )
  }else{
    return(
      <Navbar className="fixed-top" bg="dark" variant="dark">
      <Container>
        <Nav.Link href="/">
        <img
          src={icono}
          width="230"
          height="46"
          class="d-inline-block align-top"
          alt="icono"
        />
        </Nav.Link>
        <Nav className="mx-auto">
          <Nav.Link className="fs-5" href="/"> Inicio </Nav.Link>
          <Nav.Link className="fs-5" href="/presupuesto"> Presupuesto</Nav.Link>
          <Nav.Link className="fs-5" href="/contacto"> Contacto </Nav.Link>
        </Nav>
        <div>
         <Nav.Link className="fs-5" href="/login"> Login </Nav.Link>
        </div>
      </Container>
    </Navbar>
    )   
  }
}

export default NavBar;
