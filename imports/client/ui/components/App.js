// @flow
import * as React from "react";
import {render} from "react-dom";

import {ErrorBoundary} from "../../init/misc/react-error-boundary";
import {UserInterface} from "./UserInterface";

//todo-2: write e2e tests

export default function App(): React.Node {
	return (
		<ErrorBoundary>
			<UserInterface />
		</ErrorBoundary>
	);
}

