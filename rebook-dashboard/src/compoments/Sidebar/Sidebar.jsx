import React from "react";
import { Nav } from "react-bootstrap";
import CardGestor from "../CardGestor/CardGestor";
import CardGrafico from "../CardGrafico/CardGrafico"

export default function Sidebar () {
  return (
    <Nav defaultActiveKey="/home" className="flex-column mt-3">
      <Nav.Item>
        <CardGestor />
      </Nav.Item>
      <Nav.Item>
        <CardGrafico />
      </Nav.Item>
      <Nav.Item>
        <CardGrafico />
      </Nav.Item>
      <Nav.Item>
        <CardGrafico />
      </Nav.Item>
    </Nav>
  );
}
