// @flow
import * as React from "react";
import styled from "styled-components";

//$FlowFixMe
import {ListItem} from "react-onsenui";
import type {aid} from "../../../../main/anyone/can-see-list-of-open-aid-requests/types";

const StyledImage = styled.img`
	width: 4em;
	height: 4em;
	object-fit: contain;
`;

//todo-2: write component tests
// Impure: ?
export default function AnyoneCanSeeGeneralDataAboutAPlace(aid: aid): React.Node {
	return (
		//<ListItem key={aid._id} onClick={() => alert(aid.title)}>
		<ListItem key={aid._id} modifier="chevron, longdivider" tappable tapBackgroundColor="lightblue">
			<div className="left">
				<StyledImage src={aid.author.picURL} />
			</div>
			<div className="center">
				<div>{aid.author.name}</div>
				<br />
				<div>{aid.title}</div>
			</div>
			<div className="right">M {aid.reward}</div>
		</ListItem>
	);
}
