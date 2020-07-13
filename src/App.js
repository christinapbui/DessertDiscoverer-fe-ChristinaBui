import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
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
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  // const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoaded(true);
      return;
    }
    const res = await fetch(`http://localhost:5000/users/me`, {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      const data = await res.json();
      setUser(data.data); // .data is user object from backend
    } else {
      localStorage.removeItem("token");
    }

    setLoaded(true);
  };

  if (!loaded) return <h1>Loading...</h1>;

  return (
    <>
      <nav id="navigation">
        <Navbar bg="dark" variant="dark" className="navbar">
          <div className="container">
            <Navbar.Brand href="/">
              <img
                alt=""
                src="/logo.png"
                width="30"
                height="auto"
                className="d-inline-block align-center"
              />{" "}
              <span style={{ paddingLeft: "10px" }}>[SDD Logo]</span>
              <span>Desserts</span>
              <span>Sellers</span>
              <span>Map</span>
              <span>Write a Review</span>
            </Navbar.Brand>
            <Form inline>
              <Button variant="danger" onClick={() => setOpen(!open)}>
                Login
              </Button>
              <Button variant="outline-primary" href="/add">
                Add your baked good
              </Button>
            </Form>
          </div>
        </Navbar>
      </nav>

      <Router>
        <Modal show={open} onHide={() => setOpen(!open)}>
          <Login setUser={setUser} />
        </Modal>

        <Switch>
          <Route path="/" exact>
            <div className="landing">
              <LandingPage />
            </div>
          </Route>

          <Route path="/desserts">DessertsList</Route>

          <Route path="/sellers">SellersList</Route>

          <Route path="/map">Map</Route>

          <Route path="/reviews">ReviewsList</Route>

          <Route path="/me">UserProfile</Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
