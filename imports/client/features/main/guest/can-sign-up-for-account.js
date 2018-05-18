// @flow
import React from 'react'

//todo-2: write component test
/**
 * @exampleInput: n\a
 * @exampleOutput:
 * @pure: false; side-effects: SubscribeButton sends data to server
 * @hasTests: false
 */
export default function CanSignUpForAccount(): React.Component {
	return (
		<>
			<Inputs/>
			<SubscribeButton onClick={collect_input_data}/>
		</>
	)
}