import React from "react";
import { Number } from "./number.js";

//create your first component
export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = { counter: 0 };
	}

	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 100);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			counter: this.state.counter + 1
		});
	}

	render() {
		return (
			<div className="flex-container">
				<i className="far fa-clock digit" />
				<Number numero={Math.floor(this.state.counter / 100000) % 10} />
				<Number numero={Math.floor(this.state.counter / 10000) % 10} />
				<Number numero={Math.floor(this.state.counter / 1000) % 10} />
				<Number numero={Math.floor(this.state.counter / 100) % 10} />
				<Number numero={Math.floor(this.state.counter / 10) % 10} />
				<Number numero={this.state.counter % 10} />
			</div>
		);
	}
}
