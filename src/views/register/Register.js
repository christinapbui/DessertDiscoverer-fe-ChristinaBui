import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { Input } from "reactstrap";
import "./Register.css";

const Register = ({ token }) => {
	const history = useHistory();
	const [error, setError] = useState("");
	const [user, setUser] = useState({});
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		password2: "",
		userRole: "",
	});

	const { displayName, email, password, password2, userRole } = formData;
	// const dispatch = useDispatch();

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log("does this work?");

		if (password !== password2) {
			setError("Passwords do not match");
			// dispatch(alertActions.setAlert("Passwords do not match", "danger"));
		} else {
			const { email, password, displayName, userRole } = formData;
			// Simple POST request with a JSON body using fetch
			const requestOptions = {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					email,
					password,
					displayName,
					userRole,
				}),
			};
			fetch("http://localhost:5000/user", requestOptions)
				.then((response) => response.json())
				.then((data) => {
					console.log(data);
				});
			// dispatch(authActions.register({ name, email, password }));
			history.push("/");
		}
	};

	if (token) {
		return <Redirect to="/" />;
	}

	const fillFakeData = () => {
		console.log("checking");
		setFormData({
			displayName: "Minh",
			email: "minh@cs.vn",
			password: "123",
			password2: "123",
			userRole: "normal",
		});
	};

	return (
		<>
			<div
				className="register-background"
				style={{
					backgroundImage:
						"url(" +
						require("../../assets/img/pie-with-fruit.jpg") +
						")",
				}}
			>
				<Container className="register-form-container">
					<Row className="register-form-row">
						<Col className="register-form-col">
							<h1 style={{ textAlign: "center" }}>
								Create a new account
							</h1>
							<Form onSubmit={onSubmit}>
								<div className="form-group">
									<Input
										type="text"
										placeholder="Display name"
										name="displayName"
										value={displayName}
										onChange={onChange}
									/>
								</div>
								<div className="form-group">
									<Input
										type="email"
										placeholder="Email"
										name="email"
										value={email}
										onChange={onChange}
									/>
								</div>
								<div className="form-group">
									<Input
										type="password"
										placeholder="Password"
										name="password"
										value={password}
										onChange={onChange}
									/>
								</div>
								<div className="form-group">
									<Input
										type="password"
										placeholder="Confirm Password"
										name="password2"
										value={password2}
										onChange={onChange}
									/>
								</div>
								{error && (
									<small className="form-text text-danger">
										{error}
									</small>
								)}
								<hr />
								<h5>I am registering as a:</h5>
								<div className="form-check">
									<label>
										<Input
											type="radio"
											name="userRole"
											value="normal"
											checked={userRole === "normal"}
											onChange={onChange}
										/>
										Normal User
									</label>
								</div>

								<div className="form-check">
									<label>
										<Input
											type="radio"
											name="userRole"
											value="seller"
											checked={userRole === "seller"}
											onChange={onChange}
										/>
										Seller
									</label>
								</div>
								<Input
									type="submit"
									className="btn btn-primary"
									// color="success"
									value="Register"
									style={{ maxWidth: "200px" }}
								/>
								<Button
									type="button"
									className="btn btn-light"
									onClick={fillFakeData}
									style={{ maxWidth: "200px" }}
								>
									Example
								</Button>
							</Form>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

export default Register;
