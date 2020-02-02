import React from "react";
import { Nav, Card } from "react-bootstrap";
import CardGestor from "../CardGestor/CardGestor";
import CardGrafico from "../CardGrafico/CardGrafico"

export default function Sidebar () {
    return (
        <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Item>
                <CardGestor />
            </Nav.Item>
            <div className="card">
                <Nav.Item>
                    <Card.Title className="text-center mt-4 mb-0">Meta Faturamento</Card.Title>
                    <CardGrafico />
                </Nav.Item>
                <Nav.Item>
                    <Card.Title className="text-center mt-4 mb-0">Taxa de Conversão</Card.Title>
                    <CardGrafico />
                </Nav.Item>
                <Nav.Item>
                    <Card.Title className="text-center mt-4 mb-0">Taxa de Conversão</Card.Title>
                    <CardGrafico />
                </Nav.Item>

            </div>
        </Nav>
    );
}
