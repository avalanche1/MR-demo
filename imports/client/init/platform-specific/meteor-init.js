// @flow
// $FlowFixMe
import {Meteor} from "meteor/meteor";
// import {Tracker} from 'meteor/tracker'

import React from "react";
import {render} from "react-dom";

import App from "../../ui/components/App";

// const t = console.time()
//todo-2: write browser tests
// eslint-disable-next-line fp/no-nil
Meteor.startup(() => {
	const appNode: Element = document.querySelector("main");
	render(<App />, appNode);
});
// console.timeEnd(t)
