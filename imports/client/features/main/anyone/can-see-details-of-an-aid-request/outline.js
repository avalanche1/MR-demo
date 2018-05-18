// @flow
import * as React from "react";

import type {aidDetails} from "./types";
import DetailsPage from "./implementation/m-antd";

//todo-2: write component test
export function AnyoneCanSeeDetailsOfAnAidRequest(aidRequest: aidDetails) {
	return (
		<DetailsPage aidRequest={aidRequest} />
	);
}
