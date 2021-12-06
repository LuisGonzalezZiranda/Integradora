import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Presupuesto from "./components/views/Presupuesto";
import Home from "./components/views/Home";
import Contactanos from "./components/views/Contactanos";
import Login from "./components/views/Login";
import NavBar from "./components/commun/NavBar";
import Footer from "./components/commun/Footer";
import Registro from "./components/views/Registro";
import Perfil from "./components/views/Perfil";
import MiPresupuesto from './components/views/MiPresupuesto';
import { AuthProvider } from "./Auth";
import { Notifications } from 'react-push-notification';

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <NavBar></NavBar>
          <Notifications />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/presupuesto" element={<Presupuesto />} />
            <Route path="/contacto" element={<Contactanos />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/presupuesto/mio" element={<MiPresupuesto />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
