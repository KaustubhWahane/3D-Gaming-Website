import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ThreeCube from './ThreeCube'; 

function GamingNavbar() {
  return (
    <Navbar className="bg-gradient-to-r from-deepRed via-saddleBrown to-oldGold" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand className="font-custom d-flex align-items-center">
        <span className='text-yellow-200'>3D Gaming Website</span>
        <ThreeCube />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="home" className='p-2 text-3xl font-bebas'>Home</Nav.Link>
          <Nav.Link href="about" className='p-2 text-3xl font-bebas'>About</Nav.Link>
          <Nav.Link href="games" className='p-2 text-3xl font-bebas'>Games</Nav.Link>
          <Nav.Link href="contact" className='p-2 text-3xl font-bebas'>Categories</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default GamingNavbar;
