import React from "react";
import { Link } from "react-router-dom";
import logoDroidy from '../../assets/img/droidyBlue.png';
import '../../assets/new_css/new-css.css'
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [navBarComponents, setNavBarComponents] = React.useState([
    {nombre: 'Bienvenido',
    href: '#'},
    {nombre: 'Funcionamiento',
      href: '#'},
    {nombre: 'Valores y principios',
      href: '#'},
    {nombre: 'Modelo integrado de cumplimiento',
      href: '#'},
      {nombre: 'Preguntas frecuentes',
        href: '#'}]);

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
       <Container>
          <div className="navbar-translate">
            <NavbarBrand
              target="_blank"
              id="navbar-brand">
              -Nombre empresa-
            </NavbarBrand>
            {/* <UncontrolledTooltip target="#navbar-brand" className="custom-tooltip" >
            <img src={logoDroidy} alt="Ejemplo" style={{ width: '70px', height: 'auto', margin: ''}} />
            </UncontrolledTooltip> */}
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              {navBarComponents.map((item)=>{
                if (item.onClick){
                  return (<NavLink href="#pablo" onClick={(e) => {console.log("clickeo bienvenida")}}>
                  <i className="now-ui-icons arrows-1_cloud-download-93"></i>
                  <p>Bienvenida</p>
                  </NavLink>)
                }else{
                  return (<NavLink href="#pablo" onClick={(e) => {console.log("clickeo bienvenida")}}>
                  <i className="now-ui-icons arrows-1_cloud-download-93"></i>
                  <p>Bienvenida</p>
                  </NavLink>)
                }
              })}
            </Nav>
          </Collapse>
        </Container> 
      </Navbar>
    </>
  );
}

export default IndexNavbar;
