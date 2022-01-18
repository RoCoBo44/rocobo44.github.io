import '../css/style.css';
import { Navbar, Nav, Container } from 'react-bootstrap'; 

function NavBar() {
  return (
    <Navbar bg="light" expand="lg" class="navbar navbar-expand-lg bg-light navbar-light ">
      <Container>
        <Navbar.Brand href="index.html" class="navbar-brand">CV-Digital</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" class="nav-item nav-link active">Home</Nav.Link>
            <Nav.Link href="#about" class="nav-item nav-link">About</Nav.Link>
            <Nav.Link href="#skills" class="nav-item nav-link">Skills</Nav.Link>
            <Nav.Link href="#experience" class="nav-item nav-link">Experience</Nav.Link>
            <Nav.Link href="#portfolio" class="nav-item nav-link">Portfolio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;