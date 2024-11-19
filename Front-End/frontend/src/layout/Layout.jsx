import { Outlet } from "react-router-dom";
import { Container, Navbar, NavbarBrand,Nav } from "react-bootstrap";
export default function Layout() {
  return (
    <div className="layout-container">
  
      <main className="content">
        <Navbar bg="light" expand="lg">
          <Container>
            <NavbarBrand href="/">Lecture Management</NavbarBrand>
            <Navbar.Toggle aria-aria-controls="basic-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">user</Nav.Link>
                <Nav.Link href="/lectures">Lecture</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Outlet></Outlet>
      </main>
    </div>
  );
}
