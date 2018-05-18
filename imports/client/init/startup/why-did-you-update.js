//@flow
import React from "react";
import Env from "../../../api/env";

/**
 * @description: Prints to console when unnecessary re-renders happen; dev-mode only
 * @exampleInput: n\a
 * @exampleOutput: n\a
 * @pure: false: prints to console
 * @hasTests: false
 */
export function watch_unnec_rerenders_and_print_to_console(): void {
	if (Env.isDev) {
		//$FlowFixMe
		const {whyDidYouUpdate} = require("why-did-you-update");
		whyDidYouUpdate(React);
	}
	return void 0
}
