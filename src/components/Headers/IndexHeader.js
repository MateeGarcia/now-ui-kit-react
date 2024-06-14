/*eslint-disable*/
import React from "react";

// reactstrap components
import { Col, Row, Container } from "reactstrap";
import SignUp from "views/index-sections/SignUp";
// core components




function IndexHeader() {

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <Container
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
            <Col style={{ height: '10vh' }}></Col>
            <Col>
              <SignUp/>
            </Col>
          </Row>
        </Container>
        
      </div>
    </>
  );
}

export default IndexHeader;
