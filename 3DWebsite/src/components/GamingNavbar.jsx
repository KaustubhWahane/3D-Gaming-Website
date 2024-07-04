import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ThreeCube from './ThreeCube'; 

function GamingNavbar() {
  return (
    <Navbar className="bg-gradient-to-r from-violet via-electricBlue to-black" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand className="font-custom p-2">
        3D Gaming Website  
      </Navbar.Brand>
      <ThreeCube />
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
