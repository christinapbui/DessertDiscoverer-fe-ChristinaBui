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
import SellerCard from "../components/SellerCard";
import { Container, Button } from "react-bootstrap";
import MainSearchBar from "../components/MainSearchBar";

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

const ShowAllSellers = (props) => {
	let query = useQuery();
	let [sellerList, setSellerList] = useState([]);
	let array = [];
	let dispatch = useDispatch();

	const getSellers = async () => {
		let data = await fetch(`${process.env.REACT_APP_BACKEND_URL}users`);
		let results = await data.json();
		setSellerList(results.sellerList);
		console.log("this is the sellers list: ", results.sellerList);
	};

	useEffect(() => {
		getSellers();
	}, []);

	return (
		<>
			<Container style={{ marginTop: "30px", textAlign: "center" }}>
				<h1>List of Sellers</h1>
				<br />
				{sellerList &&
					sellerList.map((item) => (
						<SellerCard seller={item} key={item.id} />
					))}
			</Container>
		</>
	);
};

export default ShowAllSellers;
