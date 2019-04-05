import React, { Component } from "react";
import { TimeTrackingTable } from "./components/timeTrackingTable";
import { Segment, Header } from "semantic-ui-react";
import LandingPage from "./components/landingPage";
import Navbar from "./components/navbar";
import LoginForm from "./components/loginForm";
import Footer from "./components/footer";
import { login } from "../src/modules/kimaiService";

class App extends Component {
	constructor(props) {
		super(props);
		const userName = localStorage.getItem("Name")
		const userPassword = localStorage.getItem("Password")

		this.state = {
			renderLoginForm: false,
			authorizedUser: userName && userPassword,
			userName: userName,
			userPassword: userPassword,
			message: userName && userPassword ? `Welcome, ${userName}!` : ""
		};
	}

	componentDidMount() {
		this.checkIfUser();
	}

	checkIfUser() {
		if (this.state.userName != null && this.state.userPassword != null) {
			this.setState({
				authorizedUser: true
			});
		} else {
			this.setState({
				authorizedUser: false
			});
		}
	}

	authorizeUser(userName, userPassword) {
		login(userName, userPassword).then(response => {
			if (response.message === "Successfull") {
				localStorage.setItem("Name", userName);
				localStorage.setItem("Password", userPassword);
				this.setState({
					authorizedUser: true,
					userName: userName,
					userPassword: userPassword,
					message: `Welcome, ${userName}!`
				});
			} else {
				alert(response.message);
			}
		});
	}

	renderLoginForm() {
		this.setState({
			renderLoginForm: true
		});
	}

	render() {
		let renderComponent;

		if (this.state.authorizedUser) {
			renderComponent = (
				<Segment name="timetracking">
					<Header as="h1" textAlign="center">
						Time Tracking
					</Header>
					<TimeTrackingTable />
				</Segment>
			);
		} else if (this.state.renderLoginForm) {
			renderComponent = <LoginForm onLogin={this.authorizeUser.bind(this)} />;
		} else {
			renderComponent = (
				<LandingPage renderLoginForm={this.renderLoginForm.bind(this)} />
			);
		}

		return (
			<div className="App">
				<Navbar isLoggedIn={this.state.authorizedUser} message={this.state.message} renderLoginForm={this.renderLoginForm.bind(this)} />
				{renderComponent}
				<Footer />
			</div>
		);
	}
}

export default App;
