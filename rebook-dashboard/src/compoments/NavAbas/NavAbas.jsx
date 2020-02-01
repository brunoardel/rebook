import React from "react";
import { Nav, Tab } from "react-bootstrap";

export default function NavAbas () {
    return (
        <>
            <Tab.Container id="abas" defaultActiveKey="link-1">
                <Nav justify variant="tabs">
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
            </Tab.Container>


            <Tab.Content>
                <Tab.Pane eventKey="link-1">
                    <h4>link-1</h4>
                </Tab.Pane>
                <Tab.Pane eventKey="link-2">
                    <h4>link-2</h4>
                </Tab.Pane>
                <Tab.Pane eventKey="link-3">
                    <h4>link-3</h4>
                </Tab.Pane>
                <Tab.Pane eventKey="link-4">
                    <h4>link-4</h4>
                </Tab.Pane>
            </Tab.Content>
        </>
    );
}
