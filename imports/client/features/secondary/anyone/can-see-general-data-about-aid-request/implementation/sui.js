// @flow
import * as React from "react";
import {Card, Icon, Image} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import type {placeProps} from "../../main/anyone/can-see-list-of-open-aid-requests";

//todo-2: write component tests
export default function AnyoneCanSeeGeneralDataAboutAPlace(aid: placeProps) {
	// Impure: ?
	return (
		<Card onClick={() => alert(aid.description)} style={{width: "16em"}}>
			<Image
				src={aid.author.picURL}
				style={{
					maxHeight: "16em",
					objectFit: "contain",
					height: "12em"
				}}
			/>
			<Card.Content>
				<Card.Header>{aid.author.name}</Card.Header>
				{/*<Card.Meta>*/}
				{/*<span className='date'>*/}
				{/*Joined in 2015*/}
				{/*</span>*/}
				{/*</Card.Meta>*/}
				<Card.Description>{aid.title}</Card.Description>
			</Card.Content>
			<Card.Content
				extra
				style={{
					justifyContent: "space-between",
					display: "flex"
				}}
			>
				<div style={{fontSize: "12px"}}>
					{aid.where.metroName ? "м. " + aid.where.metroName : ""}
				</div>
				<div style={{marginLeft: "auto"}}>
					<Icon name="user" />
					{aid.reward}
				</div>
			</Card.Content>
		</Card>
	);
}

/*
<Card

	// loading
	hoverable
	// title={place.name}
	cover={<img style={{maxHeight: '15em'}} src={place.author.picURL}/>}
	actions={[(place.where.metroName ? 'м. ' + place.where.metroName : undefined), (place.reward + ' меритов')]}
	style={cardStyle}
>
	<Card.Meta
		title={place.title}
	/>
	{place.where.metroName ? 'м. ' + place.where.metroName: undefined}
</Card>
)
}
*/
