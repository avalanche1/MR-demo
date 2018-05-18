// @flow
import * as React from "react";

import type {aid} from "../types";
//$FlowFixMe
import {LazyList} from "react-onsenui";

//todo-2: write component test
export default function ListOfOpenAidRequests({data, listItem}: {data: Array<aid>, listItem: (aid: aid)=>React.Node}): React.Node {
	return (
		<LazyList
			length={data.length}
			calculateItemHeight={() => 44} //doesnt seem to influence anything; but is required
			renderRow={(i) => listItem(data[i])}
		/>
	);
}
/*export default function ListOfOpenAidRequests(data: Array<aid>, listItemComp: (aid: aid)=>React.Node): React.Node {
	return (
		<LazyList
			length={data.length}
			calculateItemHeight={() => 44} //doesnt seem to influence anything; but is required
			renderRow={(i) => listItemComp(data[i])}
		/>
	);
}*/
