import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import Sidebar from "../Sidebar/Sidebar";

export default function Body() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Sidebar />
          </Col>
          <Col>2 of 2</Col>
        </Row>
      </Container>
    </>
  );
}
