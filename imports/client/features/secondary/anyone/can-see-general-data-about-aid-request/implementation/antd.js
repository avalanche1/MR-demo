// @flow
import * as React        from "react";
//$FlowFixMe
import Card              from "antd/lib/card";
//$FlowFixMe
import "antd/lib/card/style/css";
import Rating            from "../../../../../ui/components/Rating/Rating";
import type {placeProps} from "../../main/anyone/can-see-list-of-open-aid-requests";

const App = "MR";

const cardStyle = {
	height: "36vw",
	"max-height": "25em",
	width: "25%",
	"max-width": "18em",
	margin: "1em"
};

//todo-2: write component tests
export default function AnyoneCanSeeGeneralDataAboutAPlace(place: placeProps) {
	// Impure: ?
	if (App === "Visit") {
		return (
			<Card
				key={place._id}
				// loading
				hoverable
				// title={place.name}
				cover={<img src={place.logo} />}
				style={cardStyle}
			>
				<Card.Meta title={place.name} />
				<Rating disabled defaultValue={place.rating} />
				{place.where.address}
			</Card>
		);
	} else {
		return (
			<Card
				key={place._id}
				// loading
				hoverable
				// title={place.name}
				cover={<img style={{maxHeight: "15em"}} src={place.author.picURL} />}
				actions={[
					place.where.metroName ? "м. " + place.where.metroName : undefined,
					place.reward + " меритов"
				]}
				style={cardStyle}
			>
				<Card.Meta title={place.title} />
				{/*{place.where.metroName ? 'м. ' + place.where.metroName: undefined}*/}
			</Card>
		);
	}
}
