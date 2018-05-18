// @flow
import * as React from "react";
import styled from "styled-components";

import type {aidDetails} from "../types";
import Card from "antd-mobile/lib/card";
import "antd-mobile/lib/card/style/css";
import WhiteSpace from "antd-mobile/lib/white-space";
import "antd-mobile/lib/white-space/style/css";
import WingBlank from "antd-mobile/lib/wing-blank";
import "antd-mobile/lib/wing-blank/style/css";
import Button from "antd-mobile/lib/button";
import "antd-mobile/lib/button/style/css";
import "./m-antd.css";

const UrgentStyled = styled.div`
	font-weight: bold;
	color: lightcoral;
	margin-bottom: 1em;
`;
const DescriptionStyled = styled.div`
	//font-weight: bold;
`;

//todo-2: write component test
export default function AidRequestDetailsPage({aidRequest}: {aidRequest: aidDetails}): React.Node {
	const thumb: string = aidRequest.author.picURL;
	// const Title: React.Node = (
	// 	<div>
	// 		<p>{aidRequest.author.name}</p>
	// 		<p>{aidRequest.title}</p>
	// 	</div>
	// );
	const name: string = aidRequest.author.name
	const Title: React.Node = <div >{aidRequest.title}</div>
	const reward: string = "M " + aidRequest.reward;
	// 		<p>{aidRequest.title}</p>
	const Urgent: React.Node | void = aidRequest.urgent ? (
		<UrgentStyled>!! Срочно !!</UrgentStyled>
	) : (
		void 0
	);
	const metroText: string | void = aidRequest.where.metroName
		? "м." + aidRequest.where.metroName
		: void 0;
	const Description: React.Node = <DescriptionStyled>{aidRequest.description}</DescriptionStyled>;
	const Location: React.Node = (
		<>
			<span>{metroText}</span>
			<br />
			<span>{aidRequest.where.address}</span>
		</>
	);
	const When: React.Node = (
		<>
			<span>Когда: </span>
			<br />
			<span>{aidRequest.when}</span>
		</>
	);
	return (
		<>
			<Card full>
				<Card.Header thumb={thumb} title={name} extra={reward} />
				<Card.Body className='am-card-body-title'>
					{Title}
				</Card.Body>
				<Card.Body>
					{Urgent}
					{Description}
				</Card.Body>
				<WhiteSpace />

				<Card.Footer content={Location} extra={When} />
			</Card>
			<WhiteSpace size="lg" />

			<WingBlank size="sm">
				<Button type="primary" onClick={'afd'}>Помочь!</Button>
			</WingBlank>
		</>
	);
}
