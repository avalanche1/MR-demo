// @flow strict
import * as React from "react";

import Tabs           from "antd-mobile/lib/tabs";
import "antd-mobile/lib/tabs/style/css";
import SwipeableViews from "react-swipeable-views";
import type {aid}     from "../types";
import List           from "antd-mobile/lib/list";
import "antd-mobile/lib/list/style/css";

//todo-2: write component test
export function AidRequestList({header, data, listItemComp}: {
	header: string,
	data: Array<aid>,
	listItemComp: (
		key: string,
		thumbURL: string,
		mainText: string,
		auxText: string,
		rightEl: string
	) => React.Node
}): React.Node | void {
// eslint-disable-next-line fp/no-nil
	if (data.length < 1) {return null;}
	return (
		<List renderHeader={_ => header}>
			{data.map((aid) => {
				const key = aid._id;
				const thumbURL = aid.author.picURL;
				const mainText = aid.author.name;
				const auxText = aid.title;
				const rightElText = "M " + aid.reward;
				const detailedDescription = aid.description;
				return listItemComp(key, thumbURL, mainText, auxText, rightElText, detailedDescription);
			})}
		</List>
	);
}

// Antd
export function Navbar(props: Object): React.Node {
	return (
		<Tabs
			animated={true}
			tabs={[
				{title: "Помощь"},
				{title: "🔥Срочно"},
				{title: "Мия"}
			]}
		>
			{props.children}
		</Tabs>
	);
}

// react-swipeable-views
/*
export class Navbar extends React.Component {
	render() {
	return (
		<SwipeableViews enableMouseEvents
		>
			{this.props.children}
		</SwipeableViews>
	);
	}
}
*/
