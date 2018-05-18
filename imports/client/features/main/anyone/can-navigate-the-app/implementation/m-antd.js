// @flow
import * as React from "react";

import Tabs from "antd-mobile/lib/tabs";
import "antd-mobile/lib/tabs/style/css";

//todo-2: write component test
export function Navbar(props: Object) {
	// debugger
	const tabs = props.sectionNames.map((name)=>({title: <div>{name}</div>}))
	return (
		<Tabs animated={false} 
			tabs={tabs}>
			{props.children}
		</Tabs>
	)
}