import React from "react";
import { Nav } from "react-bootstrap";
import CardGestor from "../CardGestor/CardGestor";
import CardGrafico from "../CardGrafico/CardGrafico"

export default function Sidebar () {
    return (
        <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Item>
                <CardGestor />
            </Nav.Item>
            <div className="card">
                <h5 className="text-center mt-1">Meta Faturamento</h5>
                <Nav.Item>
                    <CardGrafico />
                </Nav.Item>
                <Nav.Item>
                    <CardGrafico />
                </Nav.Item>
                <Nav.Item>
                    <CardGrafico />
                </Nav.Item>

            </div>
        </Nav>
    );
}
