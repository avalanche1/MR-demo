// @flow
import * as React from "react";

import type {aid} from "./types";
// import {MapOfAidRequests}                 from "../../../../ui/components/Map";
import {AidRequestList, Navbar} from "./implementation/m-antd";
// import AidRequestList from "./implementation/m-onsen";
import AnyoneCanSeeGeneralDataAboutAidRequest from "../../../secondary/anyone/can-see-general-data-about-aid-request/implementation/m-antd";

//todo-2: write component test
export function AnyoneCanSeeListOfOpenAidRequests(aidRequests: Array<aid>) {
	const MiasRequests = aidRequests.filter(aidRequest => aidRequest.fromMia);
	const urgentRequests = aidRequests.filter(aidRequest => aidRequest.urgent);
	const standardRequests = aidRequests.filter(
		aidRequest => !aidRequest.fromMia && !aidRequest.urgent
	);
	return (
		//	{/*{ShowMapButton}*/}
		//	{/*{if ShowMapButton is pressed then show MapOfAidRequests}*/}
		<Navbar>
			<AidRequestList
				key={"normal"}
				header="Помочь Друзьям"
				data={standardRequests}
				listItemComp={AnyoneCanSeeGeneralDataAboutAidRequest}
			/>
			<AidRequestList
				key={"urgent"}
				header="Срочные запросы о помощи"
				data={urgentRequests}
				listItemComp={AnyoneCanSeeGeneralDataAboutAidRequest}
			/>
			<AidRequestList
				key={"mia"}
				header="Сделать Мою Республику лучше"
				data={MiasRequests}
				listItemComp={AnyoneCanSeeGeneralDataAboutAidRequest}
			/>
		</Navbar>
	);
}
