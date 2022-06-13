
import { Container, Navbar } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Movimientos from './components/Movimientos/Movimientos';

function App() {
  return (
    
    <div className="App">
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Prisma</Navbar.Brand>
      </Navbar>
      <Container>
        
        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/moves" element={<Movimientos />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
