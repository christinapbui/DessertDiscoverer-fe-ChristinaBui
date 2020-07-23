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
import DessertCard from "../../components/DessertCard";
import { Container, Button } from "react-bootstrap";
import AddDessert from "../addDessert/AddDessert";
import MainSearchBar from "../../components/MainSearchBar";
import { BACKEND_URL } from "../../appConstant";

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

const ShowAllSellers = (props) => {
	let query = useQuery();
	let [dessertList, setDessertList] = useState([]);
	let array = [];
	let dispatch = useDispatch();

	const getDesserts = async () => {
		let data = await fetch(`${process.env.REACT_APP_BACKEND_URL}desserts`);
		let results = await data.json();

		setDessertList(results.data);
		// console.log()
	};

	useEffect(() => {
		getDesserts();
	}, []);

	return (
		<>
			<Container>
				<h1>Show All Sellers Here!!!!</h1>
				<br />
				{dessertList &&
					dessertList.map((item) => (
						<DessertCard dessert={item} key={item.id} />
					))}
			</Container>
		</>
	);
};

export default ShowAllSellers;
