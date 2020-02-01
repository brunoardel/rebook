import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import Sidebar from "../Sidebar/Sidebar";
import NavAbas from '../NavAbas/NavAbas'

export default function Body () {
    return (
        <>
            <Container className="mt-3">
                <Row>
                    <Col>
                        <Sidebar />
                    </Col>
                    <Col>
                        <NavAbas />
                    </Col>
                </Row>
            </Container>
        </>
    );
}
