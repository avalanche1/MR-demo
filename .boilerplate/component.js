// @flow
import * as React from "react";

import foo from "";

/**
 * @pure: true
 * @hasTests: false
 */
export default function bar(arg: string): React.ReactNode {
	return (
		<>
			<div>{arg}</div>
		</>
	);
}
