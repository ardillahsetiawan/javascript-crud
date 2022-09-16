import React from "react";
import { Navbar, NavbarToggler, NavbarBrand, Container } from "reactstrap";

const NavbarComponents = () => {
  return (
    <div>
      <Navbar color="dark" dark className="">
        <Container>
          <Container>
            <NavbarBrand href="#home">
              <strong>React CRUD | Ardillah Setiawan</strong>
            </NavbarBrand>
          </Container>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponents;
