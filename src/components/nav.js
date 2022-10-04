import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Navigasi() {
    return(
<Navbar bg="primary" variant="dark">
<Container>
  <Navbar.Brand href="#home">WGS</Navbar.Brand>
  <Nav className="me-auto">
    <Nav.Link href="/day3">Home</Nav.Link>
    <Nav.Link href="/day10">Contact</Nav.Link>
    <Nav.Link href="/day9">About</Nav.Link>
  </Nav>
</Container>
</Navbar>
    )
    
}

