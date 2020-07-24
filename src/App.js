import React, { useState, useEffect } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Redirect,
	Route,
	Link,
	useHistory,
} from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import LoginPage from "./views/LoginPage";
import Register from "./views/register/Register";
import LandingPage from "./components/LandingPage";
import SearchPageResults from "./views/searchPageResults/SearchPageResults";
import AddDessert from "./views/addDessert/AddDessert";
import EditDessert from "./views/addDessert/EditDessert";
import DessertDetails from "./views/dessertDetails/DessertDetails";
import ShowAllDesserts from "./views/ShowAllDesserts";
import ShowAllReviews from "./views/showAllReviews/ShowAllReviews";
import ShowAllSellers from "./views/ShowAllSellers";
import SingleSellerProfile from "./views/SingleSellerProfile";
import FourOhFourPage from "./views/FourOhFourPage";
import { useSelector, useDispatch } from "react-redux";
import logo from "./assets/img/sdd-logo.png";
import Footer from "./components/Footer";

import { Modal, Button, Navbar, Nav, NavDropdown, Form } from "react-bootstrap";

function App() {
	const history = useHistory();
	const [open, setOpen] = useState(false);
	const [user, setUser] = useState(null);
	const [profileName, setProfileName] = useState(null);
	// const [credentials, setCredentials] = useState({ email: "", password: "" });
	const [loaded, setLoaded] = useState(false);
	const user2 = useSelector((state) => state.user);
	let dispatch = useDispatch();
	// const getDisplayName = localStorage.getItem("user");

	useEffect(() => {
		fetchUser();
	}, []);

	const fetchUser = async () => {
		// const token = localStorage.getItem("token");
		// if (!token) {
		// 	setLoaded(true);
		// 	return;
		// }
		// const res = await fetch(`${BACKEND_URL}users/me`, {
		// 	headers: {
		// 		authorization: `Bearer ${token}`,
		// 		"Content-Type": "application/json",
		// 	},
		// });
		// if (res.ok) {
		// 	const data = await res.json();
		// 	setUser(data.data); // .data is user object from backend
		// } else {
		// 	// TODO: just because we dont have /user/me yet
		// 	// localStorage.removeItem("token");
		// }

		setLoaded(true);
	};

	const ProtectedRoute = (props) => {
		const token = localStorage.getItem("token");
		if (!token) {
			return <Redirect to="/login" />;
		} else {
			return <Route {...props} />;
		}
	};

	const logout = async () => {
		const token = localStorage.getItem("token");
		const res = await fetch(
			`${process.env.REACT_APP_BACKEND_URL}users/logout`,
			{
				method: "GET",
				headers: {
					"content-type": "application/json",
					authorization: `Bearer ${token}`,
				},
			}
		);

		if (res.ok) {
			setUser(null);
			localStorage.removeItem("user");
			localStorage.removeItem("token");
			// history.push("/");
			document.location.reload();
		} else {
			console.log(res);
		}
	};

	const findUser = () => {
		console.log("finding displayName: ", user);
	};

	if (!loaded) return <h1>Loading...</h1>;
	// if (getDisplayName) return;

	return (
		<>
			<nav id="navigation">
				<Navbar
					bg="light"
					className="navbar"
					expand="lg"
					style={{ color: "black" }}
				>
					{/* <div className="container"> */}
					<Navbar.Brand>
						<Link to="/">
							<img
								alt=""
								src={logo}
								width="100"
								height="auto"
								className="d-inline-block align-center"
							/>
						</Link>
					</Navbar.Brand>{" "}
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Link
								to="/"
								className="navbar-link"
								style={{ color: "black" }}
							>
								Home
							</Link>
							<Link
								to="/desserts"
								className="navbar-link"
								style={{ color: "black" }}
							>
								Desserts
							</Link>
							<Link
								to="/sellers"
								className="navbar-link"
								style={{ color: "black" }}
							>
								Sellers
							</Link>
							<Link
								to="/reviews"
								className="navbar-link"
								style={{ color: "black" }}
							>
								Reviews
							</Link>
						</Nav>
						<Form inline>
							{localStorage.getItem("user") ? (
								<>
									<Button
										variant="secondary"
										onClick={() => logout()}
									>
										Logout
									</Button>
									{/* <NavDropdown
										title={
											localStorage.getItem("user")
												.displayName
										}
										id="basic-nav-dropdown"
										style={{ color: "black" }}
									>
										<NavDropdown.Item>
											<Link
												// to="/profile"
												onClick={() => findUser()}
												style={{ color: "black" }}
											>
												Profile
											</Link>
										</NavDropdown.Item>
										<NavDropdown.Item
											onClick={() => logout()}
											style={{ color: "black" }}
										>
											Logout
										</NavDropdown.Item>
									</NavDropdown> */}
								</>
							) : (
								<>
									<Button
										variant="success"
										onClick={() => setOpen(!open)}
									>
										Login
									</Button>
									<Button variant="warning">
										<Link to="/register">Register</Link>
									</Button>
								</>
							)}

							<Button
								variant="danger"
								style={{ textDecoration: "none" }}
							>
								<Link to="/add-dessert">Add your dessert</Link>
							</Button>
						</Form>
					</Navbar.Collapse>
					{/* </div> */}
				</Navbar>
			</nav>

			<Modal show={open} onHide={() => setOpen(!open)}>
				<Login setUser={setUser} setOpenProps={setOpen} />
			</Modal>

			<Switch>
				<Route path="/" exact>
					<div className="landing">
						<LandingPage />
					</div>
				</Route>

				<Route path="/login" exact>
					<LoginPage />
				</Route>

				<Route path="/register" exact>
					<Register />
				</Route>

				<Route path="/search">
					<SearchPageResults />
				</Route>

				<Route exact path="/desserts">
					<ShowAllDesserts />
				</Route>

				<ProtectedRoute
					exact
					path="/add-dessert"
					component={AddDessert}
				>
					<AddDessert />
				</ProtectedRoute>

				<Route exact path="/desserts/:id" component={DessertDetails} />

				<ProtectedRoute
					exact
					path="/desserts/:id/edit"
					component={EditDessert}
				/>

				<ProtectedRoute exact path="/profile">
					<SingleSellerProfile />
				</ProtectedRoute>

				<Route exact path="/sellers">
					<ShowAllSellers />
				</Route>

				<Route
					exact
					path="/sellers/:id"
					component={SingleSellerProfile}
				/>

				<ProtectedRoute path="/map">Map</ProtectedRoute>

				<Route path="/reviews">
					<ShowAllReviews />
				</Route>

				{/* <Route exact path="/desserts/:id/add-review" component={AddReview}>
					<AddReview />
				</Route> */}

				<Route path="/me">UserProfile</Route>
				<Route path="*" component={FourOhFourPage} />
			</Switch>
			<Footer />
		</>
	);
}

export default App;

///test
