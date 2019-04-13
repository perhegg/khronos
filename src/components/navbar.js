import React, { Component } from "react";
import logo from "../img/image.png";
import { Image, Icon, Menu, Message, Popup } from "semantic-ui-react";
import moment from "moment-timezone";

class Navbar extends Component {
	state = {
		isPlay: false,
		time: 0
	}
	
	start = () => {
		const begin = moment()
			.tz("Europe/Stockholm")
			.format("YYYY-MM-DD HH:mm");
		localStorage.setItem("begin", begin);
		this.setState({isPlay: true})
		this.timer(true)
		alert("Started recording");
	};

	timer = condition => {
		condition
			?	setInterval(() => this.setState({ time: this.state.time + 1}), 1000)
			:	setInterval(() => this.setState({ time: 0 }))
	};

	stop = () => {
		const begin = localStorage.getItem("begin");
		const end = moment()
			.tz("Europe/Stockholm")
			.format("YYYY-MM-DD HH:mm");
		this.props.onStop({ begin: begin, end: end });
		this.setState({isPlay: false})
		this.timer(false)
		alert("Stopped recording.\nPlease add work details before submission.");
	};

	logout = () => {
		localStorage.removeItem("Name");
		localStorage.removeItem("Password");
		alert("Logged out");
		window.location.reload();
	};

	render() {
		if (this.props.renderedTimes) {
			return (
				<Menu>
					<Menu.Item link name="logo" onClick={() => this.props.dashboard()}>
						<Image src={logo} id="logo" size="small" />
					</Menu.Item>
					
					<Menu.Item>
						<Popup
							trigger={
								<Icon
									link
									inverted
									color="white"
									name="sign-out"
									size="big"
									onClick={() => this.logout()}
								/>
							}
							content="Log Out"
							style={{ height: "50px" }}
						/>
					</Menu.Item>

					{!this.state.isPlay ? <Menu.Item>
						<Popup
							trigger={
								<Icon
									link
									inverted
									color="white"
									name="play"
									id="play"
									size="big"
									onClick={() => this.start()}
								/>
							}
							content="Start Tracking"
							style={{ height: "50px" }}
						/>
					</Menu.Item>
					
					:
					<Menu.Item>
						<Popup
							trigger={
								<Icon
									link
									inverted
									color="white"
									name="stop"
									id="stop"
									size="big"
									onClick={() => this.stop()}
								/>
							}
							content="Stop Tracking"
							style={{ height: "50px" }}
						/>
					</Menu.Item>}
					<Menu.Item>
						<Message>
							{this.state.time}
						</Message>
					</Menu.Item>
					<Message background="green" size="big">
						{this.props.message}
					</Message>
				</Menu>)
		} else if (this.props.isLoggedIn) {
				return (
					<Menu>
						<Menu.Item link name='logo' onClick={ () => this.props.dashboard()} >
							<Image src={logo} id='logo' size='small' />
						</Menu.Item>
						<Menu.Item >
							<Icon link inverted color='white' name='sign-out' size='big' onClick={() => this.logout()} />
						</Menu.Item>
						<Message background='green' size='big'>{this.props.message}</Message>
					</Menu>)
		} else {
			return (
				<Menu>
					<Menu.Item link name="logo">
						<Image src={logo} id="logo" size="small" />
					</Menu.Item>
					<Menu.Item>
						<Popup
							trigger={
								<Icon
									link
									inverted
									color="white"
									name="sign-in"
									size="big"
									onClick={() => this.props.renderLoginForm()}
								/>
							}
							content="Log In"
							style={{ height: "50px" }}
						/>
					</Menu.Item>
				</Menu>
			);
		}
	}
}

export default Navbar;
