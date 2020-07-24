import React, { useState } from "react";
// import { loginWithEmail } from "../redux/actions/userActions";
import { Container, Col, Button } from "react-bootstrap";
import { Input } from "reactstrap";
import { Link } from "react-router-dom";

const LoginPage = (props) => {
	const [credentials, setCredentials] = useState({ email: "", password: "" });

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
			document.location.reload();
		} else {
			console.log(res);
		}
	};

	return (
		<Container
			style={{
				textAlign: "center",
				marginTop: "30px",
				marginBottom: "30vh",
				maxWidth: "400px",
			}}
		>
			<Col sm={12} md={12} lg={12}>
				<h1 className="loginpage-login">Login</h1>
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
				<p>
					<small>
						Don't have an account yet?{" "}
						<Link to="/register">Register here.</Link>
					</small>
				</p>
			</Col>
		</Container>
	);
};

export default LoginPage;
