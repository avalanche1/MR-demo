// @flow strict
import * as React from "react";

//$FlowFixMe
import List from "antd-mobile/lib/list";
//$FlowFixMe
import "antd-mobile/lib/list/style/css";
import "./m-antd.css";

//todo-2: write component tests
// Impure: has onClick callback
export default function AnyoneCanSeeGeneralDataAboutAidRequest(
	key: string,
	thumbURL: string,
	mainText: string,
	auxText: string,
	rightEl: string,
	detailedDescription?: string
): React.Node {
	return (
		<List.Item 
			multipleLine
			key={key}
			platform="android" // Adds ripple effect on tap
			onClick={
				() => alert(detailedDescription) 
			}
			thumb={thumbURL}
			extra={rightEl}
		>
			{mainText}
			<List.Item.Brief>{auxText}</List.Item.Brief>
		</List.Item>
	);
}
