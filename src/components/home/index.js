import { h, Component } from 'preact';
import style from './style.less';
import { Link } from 'preact-router';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<h1>Home</h1>
				<p>Welcome to the Norwestern Airlines Online Portal</p>
				<span>Please <Link href="/login">click</Link> to log in.</span>
			</div>
		);
	}
}
