import { h, Form, Component } from 'preact';
import style from './style.less';

export default class Login extends Component {
	state = {
		count: 0
	};

	// loginAction = (lastName, memberNumber) => {
		
	// };

	componentDidMount() {
	
	}

	componentWillUnmount() {
	}

	render() {
		return (
			<div style={style.login}>
				<h1>Login</h1>
				<Form>
				<input id="lastName">Last Name</input><br />
				<input id="memberNumber">Member Number</input>
				
				<br />
        <button onClick={console.log("You clicked the login button")}>Login</button>
			</Form>
			</div>
		);
	}
}

// mapDispatchToProps(dispatch, state){
   
// }
