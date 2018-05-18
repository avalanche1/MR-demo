// @flow
import * as React from "react";

import {Navbar} from "./implementation/m-antd";

//todo-2: write component test
export function AnyoneCanNavigateTheApp(props: Object) {
	return (
		<Navbar sectionNames={["Помочь Друзьям","Попросить помощи"]}>
			{props.children}
		</Navbar>
	);
}
