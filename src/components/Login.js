import React, { useState } from "react";
// import FacebookLogin from "react-facebook-login";
import { Container, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Input } from "reactstrap";

const Login = (props) => {
	const history = useHistory();
	const [credentials, setCredentials] = useState({ email: "", password: "" });

	// const loginWithFacebook = async (data) => {
	// 	if (data && data.accessToken) {
	// 		console.log(data.accessToken);
	// 		const res = await fetch(
	// 			`${BACKEND_URL}auth/login/facebook?token=${data.accessToken}`
	// 		);
	// 		if (res.ok) {
	// 			const data2 = await res.json();
	// 			console.log(data2);
	// 			const user = data2.data;
	// 			const token = data2.token;
	// 			props.setUser(user);
	// 			localStorage.setItem("token", data2.token);
	// 		} else {
	// 			console.log(res);
	// 		}
	// 	}
	// };

	const loginWithEmail = async () => {
		if (!credentials.email || !credentials.password) {
			console.log("Need email and password");
			return;
		}
		const res = await fetch(
			`${process.env.REACT_APP_BACKEND_URL}users/login`,
			{
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify(credentials),
			}
		);

		if (res.ok) {
			const data2 = await res.json();
			console.log(data2);
			const user = data2.data.user;
			const token = data2.data.token;
			props.setUser(user);
			localStorage.setItem("token", token);
			// history.push("/");
			props.setOpenProps(false);
			localStorage.setItem("user", JSON.stringify(user));
			// console.log("user object is: ", user.displayName);
			document.location.reload();
		} else {
			console.log(res);
		}
	};

	// const fillSample = () => {
	// 	setCredentials({
	// 		email: "christina2@gmail.com",
	// 		password: "123123",
	// 	});
	// };

	return (
		<Container>
			<Button
				variant="default"
				onClick={() => props.setOpenProps(false)}
				size="sm"
			>
				Close
			</Button>
			<h1 className="login-modal">Login</h1>
			{/* <br /> */}
			<hr />
			<div>
				Email:{" "}
				<Input
					value={credentials.email}
					type="text"
					placeholder="Enter your e-mail address here"
					onChange={(event) =>
						setCredentials({
							email: event.target.value,
							password: credentials.password,
						})
					}
				/>
			</div>
			<br />
			<div>
				Password:{" "}
				<Input
					value={credentials.password}
					type="password"
					placeholder="Enter your password here"
					onChange={(event) =>
						setCredentials({
							email: credentials.email,
							password: event.target.value,
						})
					}
				/>
			</div>
			<Button variant="primary" onClick={loginWithEmail}>
				Log in!
			</Button>
			{/* <Button variant="primary" onClick={fillSample}>
				Example
			</Button> */}

			<br />
			{/* <FacebookLogin
				appId="279947303122440"
				autoLoad={false}
				fields="name,email,picture"
				callback={loginWithFacebook}
			/> */}
		</Container>
	);
};

export default Login;
