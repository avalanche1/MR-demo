// @flow
const attachFastClick = require('fastclick') //https://github.com/ftlabs/fastclick

//todo-1: write browser tests
export default function remove_click_delays_on_mobile_browsers() { // Impure: modifies dom
	attachFastClick(document.body)
}