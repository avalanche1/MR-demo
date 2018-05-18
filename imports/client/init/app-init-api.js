/* eslint-disable fp/no-nil */
// @flow
import {devprint} from "../../api/helpers";
// import remove_click_delays_on_mobile_browsers from './startup/fastclick'
import {watch_unnec_rerenders_and_print_to_console} from "./startup/why-did-you-update";

//todo-2: write e2e tests?
export function init_user_interface() {
	// Impure?
	// devprint("UI initialized", 1);
}

//todo-2: write e2e tests?
export function add_layout() {
	// Impure?
	// devprint("Layout added", 1);
}

//todo-2: write e2e tests?
export function add_routing_capability() {
	// Impure?
	// devprint("Routing added", 1);
}
//todo-2: write e2e tests?
export function render_App(): string {
	// Impure: executes a module with side effects
	require("./platform-specific/meteor-init");
	return devprint("Rendering complete", 1);
}
//todo-2: write e2e tests?
// Impure?
export function run_startup_protocol(): string {
	// Not needed due to https://developers.google.com/web/updates/2013/12/300ms-tap-delay-gone-away
	// remove_click_delays_on_mobile_browsers();
	watch_unnec_rerenders_and_print_to_console();
	devprint(`${watch_unnec_rerenders_and_print_to_console.name}`, 2);
	return devprint("Startup protocol executed", 1);
}
