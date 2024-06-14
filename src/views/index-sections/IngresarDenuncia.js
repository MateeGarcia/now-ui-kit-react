import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

function IngresarDenuncia() {
    return (
        <Container>
            <Row>
                <Col>
                    <p> Actividades </p>

                    <Button
                        className="btn-neutral btn-round"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="lg"
                    >
                        Ingresar una denuncia
                    </Button>

                    <Col>
                    <Button
                        className="btn-neutral btn-round"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="lg"
                    >
                        Ingresar una consulta
                    </Button>
                    </Col>

                </Col>
            </Row>

        </Container>
    );
}

export default IngresarDenuncia;
