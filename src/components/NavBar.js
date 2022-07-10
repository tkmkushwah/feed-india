import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import image from '../components/assets/peacock.png'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
function NavBar() {
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand}  expand={expand}   style={{backgroundColor:"red",
        width:'100%',
        zIndex:'100'
      }}>
          <Container fluid style={{backgroundColor:"red"}}>
            <div className='logo'>
              <img style={{height:"80px",width:'80px'}} src={image} alt="alt" /> FEED INDIA
            </div>
             
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            >
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 ps-5">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
               
                <Button className="ms-5"  variant="outline-success">Donate</Button>
              
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;