import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const Register = ({ token }) => {
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
			setError("Password do not match");
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
			fetch("http://localhost:5000/user/register", requestOptions)
				.then((response) => response.json())
				.then((data) => {
					console.log(data);
				});
			// dispatch(authActions.register({ name, email, password }));
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
			<div>
				<h1>Create a new account</h1>
				<Form onSubmit={onSubmit}>
					<div className="form-group">
						<input
							type="text"
							placeholder="Name"
							name="name"
							value={displayName}
							onChange={onChange}
						/>
					</div>
					<div className="form-group">
						<input
							type="email"
							placeholder="Email Address"
							name="email"
							value={email}
							onChange={onChange}
						/>
					</div>
					<div className="form-group">
						<input
							type="password"
							placeholder="Password"
							name="password"
							value={password}
							onChange={onChange}
						/>
					</div>
					<div className="form-group">
						<input
							type="password"
							placeholder="Confirm Password"
							name="password2"
							value={password2}
							onChange={onChange}
						/>
					</div>
					{error && (
						<small className="form-text text-danger">{error}</small>
					)}
					<div className="form-check">
						<label>
							<input
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
							<input
								type="radio"
								name="userRole"
								value="seller"
								checked={userRole === "seller"}
								onChange={onChange}
							/>
							Seller
						</label>
					</div>
					<input
						type="submit"
						className="btn btn-primary"
						value="Register"
					/>
					<Button
						type="button"
						className="btn btn-light"
						onClick={fillFakeData}
					>
						Example
					</Button>
				</Form>
			</div>
		</>
	);
};

export default Register;
