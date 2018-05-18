//@flow
import {devprint} from "../../api/helpers";
import * as AppInitAPI from "./app-init-api";

//todo-2:test with mocks?
export function prepare_user_interface(): string {
	// Impure: calls other impure functions
	devprint("Preparing UI..");
	AppInitAPI.init_user_interface();
	AppInitAPI.add_layout();
	return devprint("UI konstructed");
}

//todo-2:test with mocks?
export function initialize_the_App(): string {
	// Impure: calls other impure functions
	devprint("Initializing..");
	AppInitAPI.add_routing_capability();
	AppInitAPI.render_App();
	AppInitAPI.run_startup_protocol();
	return devprint("App is live!");
}
