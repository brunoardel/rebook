import React from "react";
import { Row, Col } from 'react-bootstrap'
import Sidebar from "../Sidebar/Sidebar";
import NavAbas from '../NavAbas/NavAbas'
import "../Body/Body.css"

export default function Body () {
    return (
        <div className="mt-3">
            <Row className="mx-2">
                <Col md="auto">
                    <Sidebar />
                </Col>
                <Col md={9}>
                    <NavAbas />
                </Col>
            </Row>
        </div>
    );
}
