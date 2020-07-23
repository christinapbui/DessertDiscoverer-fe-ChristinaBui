import React, { useState, useEffect } from "react";
import {
	Switch,
	Route,
	Redirect,
	useHistory,
	useLocation,
	Link,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DessertCard from "../components/DessertCard";
import { Container, Button, Row, Col } from "react-bootstrap";
import AddDessert from "./addDessert/AddDessert";
import MainSearchBar from "../components/MainSearchBar";
import { BACKEND_URL } from "../appConstant";

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

const ShowAllDesserts = (props) => {
	let query = useQuery();
	let [dessertList, setDessertList] = useState([]);

	let dispatch = useDispatch();
	let [page, setPage] = useState(1);
	let [totalResult, setTotalResult] = useState(0);

	const getDesserts = async () => {
		let data = await fetch(`${BACKEND_URL}desserts`);
		let results = await data.json();
		console.log("this is the dessert list", results);
		setDessertList(results.data);
	};

	useEffect(() => {
		getDesserts();
	}, []);

	const sortByPriceHighLow = () => {
		let tempList = [...dessertList];
		const sortedHighLow = tempList.sort((a, b) => b.price - a.price);
		setDessertList(sortedHighLow);
	};

	const sortByPriceLowHigh = () => {
		let tempList = [...dessertList];
		const sortedLowHigh = tempList.sort((a, b) => a.price - b.price);
		setDessertList(sortedLowHigh);
	};

	return (
		<>
			<Container
				className="showalldesserts-container"
				style={{ textAlign: "center" }}
			>
				<h1>All Desserts</h1>
				<MainSearchBar />
				<Row
					style={{
						justifyContent: "center",
						marginTop: "10px",
						marginBottom: "10px",
					}}
				>
					<Button onClick={sortByPriceLowHigh}>
						Sort by Price (low to high)
					</Button>{" "}
					<Button onClick={sortByPriceHighLow}>
						Sort by Price (high to low)
					</Button>
				</Row>
				<br />
				<Row className="justify-content-center">
					{dessertList &&
						dessertList.map((item) => (
							<Col
								sm={8}
								md={6}
								lg={4}
								style={{ textAlign: "center" }}
							>
								<DessertCard dessert={item} key={item.id} />
							</Col>
						))}
				</Row>
			</Container>
		</>
	);
};

export default ShowAllDesserts;
