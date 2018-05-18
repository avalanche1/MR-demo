// @flow
import {devprint} from "../api/helpers";
import {initialize_the_App, prepare_user_interface} from "./init/app-init";
import {add_Feature_to_the_App} from "./features/features-api";
// import Features                                     from './features/features'

//todo-2:test with mocks?
prepare_user_interface();
// devprint("Adding Features..");
// add_Feature_to_the_App(`Features.AnyoneCanNavigateTheApp`);
// add_Feature_to_the_App(`Features.VisitorCanSignIn`);
// add_Feature_to_the_App(`Features.AnyoneCanSeeListOfPlacesToVisit`);
// add_Feature_to_the_App(`Features.VisitorCanSignUp`);
// add_Feature_to_the_App(`Features.AnyoneCanSendFeedback`);
// devprint('App konstructed')
initialize_the_App();

/*
konstruct_the_App_according_to(instructions)

export const instructions = [
	Kreator.initialize_the_App,
	Kreator.add_tf_Features_to_the_App,
]

export const FeatureList =[
	'AnyoneCanNavigateTheApp'
]

export function konstruct_the_App_according_to() {
}
*/
