/* eslint-disable fp/no-class,fp/no-this,fp/no-mutation,immutable/no-mutation */
//@flow
import * as React from "react";

export class ErrorBoundary extends React.Component {
// eslint-disable-next-line fp/no-nil
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
		return void 0
  }

  // noinspection FunctionWithMultipleReturnPointsJS
	render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong with React tree</h1>;
    }
    return this.props.children;
  }
}