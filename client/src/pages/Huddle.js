import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";

class Huddle extends Component {
  
  render() {
    return (
      <Container fluid>

        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Huddle</h1>
            </article>
          </Col>
        </Row>
      
      </Container>
    );
  }
  
}

export default Huddle;