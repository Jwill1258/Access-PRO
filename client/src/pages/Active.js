import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";

class Active extends Component {

  render() {
    return (
      <Container fluid>

        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Active</h1>
            </article>
            <div class="test">
               <iframe width="560" height="315" src="https://www.youtube.com/embed/c6t3bW7kx6E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </Col>
        </Row>
      
      </Container>
    );
  }
  
}

export default Active;