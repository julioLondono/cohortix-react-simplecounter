import React from "react";
import { Number } from "./number.js";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="flex-container">
				<i className="far fa-clock digit" />
				<Number number="6" />
				<Number number="5" />
				<Number number="4" />
				<Number number="3" />
				<Number number="2" />
				<Number number="1" />
			</div>
		);
	}
}
