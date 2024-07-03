import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function GamingNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand className="font-custom p-2"> 3D Gaming Website</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="home" className='p-2 font-bebas'>Home</Nav.Link>
          <Nav.Link href="about" className='p-2 font-bebas'>About</Nav.Link>
          <Nav.Link href="games" className='p-2 font-bebas'>Games</Nav.Link>
          <Nav.Link href="contact" className='p-2 font-bebas'>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default GamingNavbar;
