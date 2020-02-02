import React from "react";
import { Row, Col, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEquals } from '@fortawesome/free-solid-svg-icons';

export default function CardsAbas () {
    return (
        <div className="mt-3 justify-content-between">
            <Row className="mx-2 pb-2 border-bottom">
                <Col>
                    <Card bg="primary" className="text-center p-0 mb-2">
                        <Card.Header className="p-1"><Card.Title className="m-0">Carteira</Card.Title></Card.Header>
                    </Card>
                    <Card bg="light" className="text-center p-0 mb-2">
                        <Card.Header className="p-1"><Card.Title className="m-0">Base de contatos anterior</Card.Title></Card.Header>
                        <Card.Body className="p-1">9.000</Card.Body>
                    </Card>
                    <div bg="" className="text-center p-0 mb-2">
                        <FontAwesomeIcon className="p-1" icon={faPlus} size="3x" color="gray"></FontAwesomeIcon>
                    </div>
                    <Row>
                        <Col>
                            <Card bg="light" className="text-center p-0 mb-2">
                                <Card.Header className="p-1"><Card.Title className="m-0">Indicação</Card.Title></Card.Header>
                                <Card.Body className="p-1 bg-info">300</Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card bg="light" className="text-center p-0 mb-2">
                                <Card.Header className="p-1"><Card.Title className="m-0">Receptivo</Card.Title></Card.Header>
                                <Card.Body className="p-1 bg-info">300</Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card bg="light" className="text-center p-0 mb-2">
                                <Card.Header className="p-1"><Card.Title className="m-0">Ex-alunos</Card.Title></Card.Header>
                                <Card.Body className="p-1 bg-info">350</Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card bg="light" className="text-center p-0 mb-2">
                                <Card.Header className="p-1"><Card.Title className="m-0">Pós-vendas</Card.Title></Card.Header>
                                <Card.Body className="p-1 bg-info">160</Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Card bg="light" className="text-center p-0 mb-2">
                        <Card.Header className="p-1"><Card.Title className="m-0">Não ativados</Card.Title></Card.Header>
                        <Card.Body className="p-1 bg-warning">350</Card.Body>
                    </Card>
                    <div bg="" className="text-center p-0 mb-2">
                        <FontAwesomeIcon className="p-1" icon={faEquals} size="3x" color="gray"></FontAwesomeIcon>
                    </div>
                    <Card bg="light" className="text-center p-0 mb-2">
                        <Card.Header className="p-1"><Card.Title className="m-0">Base de contatos</Card.Title></Card.Header>
                        <Card.Body className="p-1 bg-success">9.760</Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card bg="primary" className="text-center p-0 mb-2">
                        <Card.Header className="p-1"><Card.Title className="m-0">Conversão</Card.Title></Card.Header>
                    </Card>
                    <Card bg="light" className="text-center p-0 mb-2">
                        <Card.Header className="p-1"><Card.Title className="m-0">Contatos distintos realizados</Card.Title></Card.Header>
                        <Card.Body className="p-1">3.950</Card.Body>
                    </Card>
                    <Row>
                        <Col md={9}>
                            <Card bg="light" className="text-center p-0 mb-2">
                                <Card.Header className="p-1"><Card.Title className="m-0">Clientes interessados</Card.Title></Card.Header>
                                <Card.Body className="p-1">1.735</Card.Body>
                            </Card>
                        </Col>
                        <Col md={3} className="mb-2">
                            <Card style={{ height: "100%" }} className="text-center p-0 mb-2 flex-row justify-content-center align-items-center bg-warning">
                                <Card.Body className="p-1">44%</Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={9}>
                            <Card bg="light" className="text-center p-0 mb-2">
                                <Card.Header className="p-1"><Card.Title className="m-0">Visita efetivada</Card.Title></Card.Header>
                                <Card.Body className="p-1">1.050</Card.Body>
                            </Card>
                        </Col>
                        <Col md={2} className="mb-2">
                            <Card style={{ height: "100%" }} className="text-center p-0 mb-2 flex-row justify-content-center align-items-center bg-warning">
                                <Card.Body className="p-1">27%</Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={9}>
                            <Card bg="light" className="text-center p-0 mb-2">
                                <Card.Header className="p-1"><Card.Title className="m-0">Venda efetivada</Card.Title></Card.Header>
                                <Card.Body className="p-1 font-weight-bold">277</Card.Body>
                            </Card>
                        </Col>
                        <Col md={1} className="mb-2">
                            <Card style={{ height: "100%" }} className="text-center p-0 mb-2 flex-row justify-content-center align-items-center bg-warning">
                                <Card.Body className="p-1">7%</Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Card bg="primary" className="text-center p-0 mb-2">
                        <Card.Header className="p-1"><Card.Title className="m-0">Não interesse (Motivos)</Card.Title></Card.Header>
                    </Card>
                    <Row>
                        <Col md={9}>
                            <Card bg="light" className="text-center p-0 mb-2">
                                <Card.Header className="p-1"><Card.Title className="m-0">Total</Card.Title></Card.Header>
                                <Card.Body className="p-1">715</Card.Body>
                            </Card>
                        </Col>
                        <Col md={3} className="mb-2">
                            <Card style={{ height: "100%" }} className="text-center p-0 mb-2 flex-row justify-content-center align-items-center bg-success">
                                <Card.Body className="p-1">18%</Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={9}>
                            <Card bg="light" className="text-center p-0 mb-2">
                                <Card.Header className="p-1"><Card.Title className="m-0">Preço</Card.Title></Card.Header>
                                <Card.Body className="p-1">220</Card.Body>
                            </Card>
                        </Col>
                        <Col md={3} className="mb-2">
                            <Card style={{ height: "100%" }} className="text-center p-0 mb-2 flex-row justify-content-center align-items-center bg-info">
                                <Card.Body className="p-1">31%</Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={9}>
                            <Card bg="light" className="text-center p-0 mb-2">
                                <Card.Header className="p-1"><Card.Title className="m-0">Localidade</Card.Title></Card.Header>
                                <Card.Body className="p-1">175</Card.Body>
                            </Card>
                        </Col>
                        <Col md={2} className="mb-2">
                            <Card style={{ height: "100%" }} className="text-center p-0 mb-2 flex-row justify-content-center align-items-center bg-info">
                                <Card.Body className="p-1">24%</Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={9}>
                            <Card bg="light" className="text-center p-0 mb-2">
                                <Card.Header className="p-1"><Card.Title className="m-0">Disponibilidade Aulas</Card.Title></Card.Header>
                                <Card.Body className="p-1">120</Card.Body>
                            </Card>
                        </Col>
                        <Col md={1} className="mb-2">
                            <Card style={{ height: "100%" }} className="text-center p-0 mb-2 flex-row justify-content-center align-items-center bg-info">
                                <Card.Body className="p-1">17%</Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={9}>
                            <Card bg="light" className="text-center p-0 mb-2">
                                <Card.Header className="p-1"><Card.Title className="m-0">Instalações</Card.Title></Card.Header>
                                <Card.Body className="p-1">75</Card.Body>
                            </Card>
                        </Col>
                        <Col md={1} className="mb-2">
                            <Card style={{ height: "100%" }} className="text-center p-0 mb-2 flex-row justify-content-center align-items-center bg-info">
                                <Card.Body className="p-1">10%</Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={9}>
                            <Card bg="light" className="text-center p-0 mb-2">
                                <Card.Header className="p-1"><Card.Title className="m-0">Outros</Card.Title></Card.Header>
                                <Card.Body className="p-1">125</Card.Body>
                            </Card>
                        </Col>
                        <Col md={2} className="mb-2">
                            <Card style={{ height: "100%" }} className="text-center p-0 mb-2 flex-row justify-content-center align-items-center bg-info">
                                <Card.Body className="p-1">17%</Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Card bg="primary" className="text-center p-0 mb-2">
                        <Card.Header className="p-1"><Card.Title className="m-0">Pós-vendas</Card.Title></Card.Header>
                    </Card>
                    <Card bg="light" className="text-center p-0 mb-2">
                        <Card.Header className="p-1"><Card.Title className="m-0">Matrículas vincendas</Card.Title></Card.Header>
                        <Card.Body className="p-1">150</Card.Body>
                    </Card>
                    <Row>
                        <Col md={9}>
                            <Card bg="light" className="text-center p-0 mb-2">
                                <Card.Header className="p-1"><Card.Title className="m-0">Renovações</Card.Title></Card.Header>
                                <Card.Body className="p-1">127</Card.Body>
                            </Card>
                        </Col>
                        <Col md={3} className="mb-2">
                            <Card style={{ height: "100%" }} className="text-center p-0 mb-2 flex-row justify-content-center align-items-center bg-success">
                                <Card.Body className="p-1">85%</Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Card bg="" className="text-center p-0 mb-2">
                        <Card.Header className="p-1 bg-primary"><Card.Title className="m-0">Alunos Baixa Frequência</Card.Title></Card.Header>
                        <Card.Body className="p-1 bg-light">300</Card.Body>
                    </Card>
                    <Row>
                        <Col md={9}>
                            <Card bg="" className="text-center p-0 mb-2">
                                <Card.Header className="p-1 bg-primary"><Card.Title className="m-0">Reativação</Card.Title></Card.Header>
                                <Card.Body className="p-1 bg-light">150</Card.Body>
                            </Card>
                        </Col>
                        <Col md={3} className="mb-2">
                            <Card style={{ height: "100%" }} className="text-center p-0 mb-2 flex-row justify-content-center align-items-center bg-warning">
                                <Card.Body className="p-1">50%</Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Card bg="" className="text-center p-0 mb-2">
                        <Card.Header className="p-1 bg-success"><Card.Title className="m-0">Alunos Baixa Avaliação</Card.Title></Card.Header>
                        <Card.Body className="p-1 bg-light">320</Card.Body>
                    </Card>
                    <Row>
                        <Col md={9}>
                            <Card bg="" className="text-center p-0 mb-2">
                                <Card.Header className="p-1  bg-success"><Card.Title className="m-0">Esclarecidos</Card.Title></Card.Header>
                                <Card.Body className="p-1 bg-light">80</Card.Body>
                            </Card>
                        </Col>
                        <Col md={3} className="mb-2">
                            <Card style={{ height: "100%" }} className="text-center p-0 mb-2 flex-row justify-content-center align-items-center bg-warning">
                                <Card.Body className="p-1">25%</Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <div className="mt-3 justify-content-between">
                <Row className="mx-2">
                    <Col>
                        <h1 className="text-center">5%</h1>
                        <h5 className="text-center">Produtividade Comercial</h5>
                    </Col>
                    <Col>
                        <h1 className="text-center">11%</h1>
                        <h5 className="text-center">Taxa de Conversão</h5>
                    </Col>
                    <Col>
                        <h1 className="text-center text-success">1,5%</h1>
                        <h5 className="text-center">Churn Rate Renovação</h5>
                    </Col>
                    <Col>
                        <h1 className="text-center">35 dias</h1>
                        <h5 className="text-center">Tempo Médio Ciclo</h5>
                    </Col>
                    <Col>
                        <h1 className="text-center">R$ 6.889</h1>
                        <h5 className="text-center">Ticket Médio</h5>
                    </Col>
                </Row>
            </div>

        </div>
    )
}