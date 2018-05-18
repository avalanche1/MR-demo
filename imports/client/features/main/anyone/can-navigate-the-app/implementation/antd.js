// @flow
import React            from "react";
import {Header}         from "../../../../../ui/components/Layout/Layout";
import {HorizontalMenu} from "../../../../../ui/components/Menu/HorizontalMenu";

//todo-2: write component test
export default function AnyoneCanNavigateTheApp() {
	//Pure
	return (
		<Header style={{backgroundColor: "lightblue"}}>
			<HorizontalMenu>
				<HorizontalMenu.Item key="Home">Home</HorizontalMenu.Item>
				<HorizontalMenu.Item key="MyPlaces">My Places (only for Users)</HorizontalMenu.Item>
				<HorizontalMenu.Item key="SignUp">Sign up</HorizontalMenu.Item>
				<HorizontalMenu.Item key="SignIn">Sign in</HorizontalMenu.Item>
			</HorizontalMenu>
		</Header>
	);
}
