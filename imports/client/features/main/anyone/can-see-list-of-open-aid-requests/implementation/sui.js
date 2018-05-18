// @flow
import * as React from "react";
import {MapYandex} from "../../../../ui/components/Map";
import {Card} from "semantic-ui-react";
import AnyoneCanSeeGeneralDataAboutAPlace from "../../../secondary/anyone/can-see-general-data-about-aid-request/can-see-general-data-about-place-sui";

export type placeProps = {
	_id: string,
	where: {
		address: string,
		coordinates: Array<number>,
		metroName?: string
	},
	// Visit
	logo?: string,
	name?: string,
	rating?: number,
	// MR
	author: {
		name?: string,
		picURL?: string
	},
	title?: string,
	reward?: number,
	description?: string
};

//todo-2: write component test
export default function AnyoneCanSeeListOfPlacesToVisit(placeData: Array<placeProps>) {
	return (
		<>
			{/*{MapYandex(placeData)}*/}
			<Card.Group centered>
				{placeData.map((place) => (
					<AnyoneCanSeeGeneralDataAboutAPlace key={place._id} {...place} />
				))}
			</Card.Group>
		</>
	);
}
