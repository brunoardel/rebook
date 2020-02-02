import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import CardsAbas from '../CardsAbas/CardsAbas'

class NavAbas extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            key: 'painelIndicadores',
        };
    }

    render () {
        return (
            <Tabs
                justify
                id="controlled-tab-example"
                activeKey={this.state.key}
                onSelect={key => this.setState({ key })}
            >
                <Tab eventKey="painelGerencial" title="Painel Gerencial">
                    Painel Gerencial
				</Tab>
                <Tab eventKey="analisePipeline" title="Análise Pipeline">
                    Análise Pipeline
				</Tab>
                <Tab eventKey="analiseEsforco" title="Análise Esforço">
                    Análise Esforço
				</Tab>
                <Tab eventKey="painelIndicadores" title="Painel Indicadores">
                    <CardsAbas />
				</Tab>
            </Tabs>
        );
    }
}

export default () => (<div><NavAbas /></div>)
