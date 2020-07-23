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
import Register from "./views/register/Register";
import LandingPage from "./components/LandingPage";
import SearchPageResults from "./views/searchPageResults/SearchPageResults";
import AddDessert from "./views/addDessert/AddDessert";
import EditDessert from "./views/addDessert/EditDessert";
import DessertDetails from "./views/dessertDetails/DessertDetails";
import AddReview from "./components/AddReviewForm";
import ProtectedRoute from "./utils/ProtectedRoute";
import ShowAllDesserts from "./views/ShowAllDesserts";
import ShowAllReviews from "./views/showAllReviews/ShowAllReviews";
import ShowAllSellers from "./views/showAllSellers/ShowAllSellers";
import SingleSellerProfile from "./views/singleSellerProfile/SingleSellerProfile";
import FourOhFourPage from "./views/FourOhFourPage";
import { useSelector, useDispatch } from "react-redux";
import { BACKEND_URL } from "./appConstant";
import logo from "./assets/img/dessert-logo-1.png";

import {
	Modal,
	//   Card,
	Button,
	Navbar,
	//   Row,
	//   Container,
	//   Col,
	Form,
	// FormControl,
	//   Jumbotron,
} from "react-bootstrap";
// import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
	const history = useHistory();
	const [open, setOpen] = useState(false);
	const [user, setUser] = useState(null);
	// const [credentials, setCredentials] = useState({ email: "", password: "" });
	const [loaded, setLoaded] = useState(false);
	const user2 = useSelector((state) => state.user);
	let dispatch = useDispatch();

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
		if (user.isAuthenticated === true) {
			return <Route {...props} />;
		} else {
			return <Redirect to="/login" />;
		}
	};

	// const logout = () => {
	// 	dispatch({ type: "logout" });
	// };

	const logout = async () => {
		const token = localStorage.getItem("token");
		const res = await fetch(
			`${process.env.REACT_APP_BACKEND_URL}user/logout`,
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

	if (!loaded) return <h1>Loading...</h1>;

	return (
		<>
			<nav id="navigation">
				<Navbar bg="dark" variant="dark" className="navbar">
					<div className="container">
						<Navbar.Brand>
							<Link to="/">
								<img
									alt=""
									src={logo}
									width="30"
									height="auto"
									className="d-inline-block align-center"
								/>
							</Link>{" "}
							<span style={{ paddingLeft: "10px" }}>
								<Link to="/">Home</Link>
							</span>
							<span className="navbar-link">
								<Link to="/desserts">Desserts</Link>
							</span>
							<span className="navbar-link">
								<Link to="/sellers">Sellers</Link>
							</span>
							<span className="navbar-link">
								<Link to="/reviews">Reviews</Link>
							</span>
							{/* <span className="navbar-link">
								<Link to="/map">Map</Link>
							</span> */}
							{/* <span className="navbar-link"><Link to="/add-review">Write a Review</Link></span> */}
							{/* <span className="navbar-link">
								<Link to="/add-dessert">Add a Dessert</Link>
							</span> */}
						</Navbar.Brand>
						<Form inline>
							{localStorage.getItem("user") ? (
								<Button
									variant="secondary"
									onClick={() => logout()}
								>
									Logout
								</Button>
							) : (
								<>
									<Button
										variant="danger"
										onClick={() => setOpen(!open)}
									>
										Login
									</Button>
									<Button variant="warning">
										<Link to="/register">Register</Link>
									</Button>
								</>
							)}

							<Button variant="outline-primary">
								<Link to="/add-dessert">
									Add your baked good
								</Link>
							</Button>
						</Form>
					</div>
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

				<Route path="/register" exact>
					<Register />
				</Route>

				<Route path="/search">
					<SearchPageResults />
				</Route>

				<Route exact path="/desserts">
					<ShowAllDesserts />
				</Route>

				<Route exact path="/add-dessert" component={AddDessert}>
					<AddDessert />
				</Route>

				<Route exact path="/desserts/:id" component={DessertDetails} />

				<Route
					exact
					path="/desserts/:id/edit"
					component={EditDessert}
				/>

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
		</>
	);
}

export default App;

///test
