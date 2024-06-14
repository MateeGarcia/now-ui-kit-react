/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/now-logo.png")}
            ></img>
            <h1 className="h1-seo">Canal de denuncias</h1>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
