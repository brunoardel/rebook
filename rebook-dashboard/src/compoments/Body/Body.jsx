import React from "react";
import { Row, Col } from 'react-bootstrap'
import Sidebar from "../Sidebar/Sidebar";
import NavAbas from '../NavAbas/NavAbas'

export default function Body () {
    return (
        <div className="mt-3">
            <Row>
                <Col md={4} className="">
                    <Sidebar />
                </Col>
                <Col md={8}>
                    <NavAbas />
                </Col>
            </Row>
        </div>
    );
}
