import React, { Component } from 'react';
import Gauge from 'react-svg-gauge';
import { Card, Image } from 'react-bootstrap';
import Grafico from '../../assets/img/Grafico.jpg'

/* export default function CardGrafico () {
    return (
        <Card className="text-center border-0">
            <Card.Body>
                <Image src={Grafico} height="105" width="auto" />
            </Card.Body>
        </Card>
    )
} */




export default class CardGrafico extends Component {
	render() {
		return (
			<div className="mt-0 pt-0 mb-4 d-flex flex-column justify-content-center align-items-center">
				<Gauge value={73} width={105} height={115} label="" color="green"/>
			</div>
            
		);
	}
}

