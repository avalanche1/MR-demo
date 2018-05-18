// @flow
import * as React                                   from "react";

import "./UserInterface.css";
// import {ActiveFeatures}                from '../../features/features'
import {AnyoneCanNavigateTheApp}                    from "../../features/main/anyone/can-navigate-the-app/outline";
import {AnyoneCanSeeListOfOpenAidRequests}          from "../../features/main/anyone/can-see-list-of-open-aid-requests/outline";
import {forIndividualRequests as aidRequests}         from "../../../fixtures/aid-requests";

// const featureList = [
// 	'<Features.VisitorCanSignIn key={VisitorCanSignIn}/>',
// 	'<Features.VisitorCanSignUp key={VisitorCanSignUp}/>',
// 	'<Features.AnyoneCanSeeListOfOpenAidRequests key={AnyoneCanSeeListOfOpenAidRequests}/>',
// 	'<Features.AnyoneCanSendFeedback key={AnyoneCanSendFeedback}/>',
// ]

//todo-2: write component tests
// Impure?:
export function UserInterface() {
	return (
		<div className="UserInterface">
			<AnyoneCanNavigateTheApp>
				{/*{ActiveFeatures({featureList: featureList})}*/}
				{AnyoneCanSeeListOfOpenAidRequests(aidRequests)}
				<div>New Aid Request</div>
				<div>My account</div>
				<div>User Settings</div>
			</AnyoneCanNavigateTheApp>
			{/*<Footer>Footer</Footer>*/}
		</div>
	);
}
