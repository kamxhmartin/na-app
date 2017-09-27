import { h, Component } from 'preact';
import style from './style.less';


export default class Login extends Component {
	state = {
		count: 0
	};

	// update the current tim
	loginAction = () => {
		
	};

	componentDidMount() {
	
	}

	componentWillUnmount() {
	}

	render() {
		return (
			<div style={style.login}>
				<h1>Login</h1>
				<span>oh show up dammit</span>
			</div>
		);
	}
}
