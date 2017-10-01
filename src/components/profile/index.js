import { h, Component } from 'preact';
import style from './style.less';

// This will be the area where where all the user information will be displayed.
export default class Profile extends Component {
	state = {
		count: 0
	};

	// update the current time
	updateTime = () => {
		let time = new Date().toLocaleString();
		this.setState({ time });
	};

	// gets called when this route is navigated to
	componentDidMount() {
		// start a timer for the clock:
		this.timer = setInterval(this.updateTime, 1000);
		this.updateTime();

		// every time we get remounted, increment a counter:
		this.setState({ count: this.state.count+1 });
	}

	// gets called just before navigating away from the route
	componentWillUnmount() {
		clearInterval(this.timer);
	}
	
	renderProfile( { user }, { time, count }) {
		return (
			<div class={style.profile}>
				<h1>Profile: {user}</h1>
				<p>This is the user profile for a user named {user}.</p>

				<div>Current time: {time}</div>
				<div>Profile route mounted {count} times.</div>
			</div>
		);
	}
	renderPrompt() {
		return (
			<div class={style.profile}>
			You are not currently logged in.
			</div>
		);
	}

	// Note: `user` comes from the URL, courtesy of our router
	render() {
		let loggedIn = false;
		return (
			<div>
				{ loggedIn ? this.renderProfile : this.renderPrompt }
			</div>
		);
	}
}
