/*eslint-disable*/
import React from "react";

// reactstrap components
import { Col, Row, Container } from "reactstrap";
import EstadoDenuncia from "views/index-sections/EstadoDenuncia";
import IngresarDenuncia from "views/index-sections/IngresarDenuncia";
// core components

import '../../assets/css/IndexHeader.css'

function IndexHeader() {

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <Container className="main-container-header"
            // style={{
            // backgroundColor: 'rgba(0, 123, 255, 0.5)', // Fondo azul semi-transparente
            // border: '2px solid #007bff', // Borde azul
            // padding: '20px',
            // borderRadius: '8px'}}
          >
          {/* <Row>
            asd
          </Row> */}
          <Row style={{ height: '10vh' }}></Row>
          <Row style={{ height: '15vh' }}>
            <Col>
              <h1 className="h1-seo">Canal de denuncias</h1>
            </Col>
          </Row> 

          <Row>
            <Col className="columna-texto">
            <p> 
            Estimados:
            En busca de velar por la integridad y potenciar nuestros valores Mowi Chile, hemos creado este sistema orientado a promover el correcto accionar de todos nuestros colaboradores siguiendo los lineamientos de nuestros valores éticos.
            </p>
            <p>
            El objetivo de esta plataforma es poner en conocimiento, de forma anónima, las conductas que podrían estar fuera del marco legal y reglamentario de acuerdo a nuestro Código de Conducta Mowi Chile. Garantizando la confidencialidad de la información, la instauración de procedimientos para el control y verificación de las denuncias recibidas y por ende, la implementación de los mecanismos necesarios y pertinentes para darles solución de manera óptima.
            </p>
            <p> 
            Invitamos a todos los colaboradores a hacer uso responsable de esta plataforma tecnológica y así,  promover los valores organizacionales y el desarrollo de un grato clima laboral.
            </p>
            
            </Col>
            <Col>
              <EstadoDenuncia/>
              <Row style={{ height: '3vh' }}></Row>
              <IngresarDenuncia/>
            </Col>
          </Row>

        </Container>
        

      </div>
    </>
  );
}

export default IndexHeader;
