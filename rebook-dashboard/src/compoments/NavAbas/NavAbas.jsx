import React from "react";
import { Nav } from "react-bootstrap";

export default function NavBar () {
    return (
        <Nav justify variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link eventKey="link-1">Painel Gerencial</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Análise Pipeline</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-3">Análise Esforço</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-4">Painel Indicadores</Nav.Link>
            </Nav.Item>
           
        </Nav>
    );
}
