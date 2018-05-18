// @flow
import * as React from "react";

import type {aid}                         from "./types";
// import {MapOfAidRequests} from "../../../../ui/components/Map";
import ListImplementation                 from "./implementation/m-antd";
// import ListImplementation from "./implementation/m-onsen";
import AnyoneCanSeeGeneralDataAboutAPlace from ".//implementation/m-onsen";

//todo-2: write component test
export function AnyoneCanSeeListOfOpenAidRequests(aidRequests: Array<aid>) {
	return (
		<>
			{/*{MapOfAidRequests(aidRequests)}*/}
			<ListImplementation data={aidRequests} listItem={AnyoneCanSeeGeneralDataAboutAPlace} />
		</>
	);
}
