import React, { useState, useEffect } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import { Container, Col, Row, Button } from "react-bootstrap";
import DessertCard from "../../components/DessertCard";
import "./SearchPageResults.css";
import MainSearchBar from "../../components/MainSearchBar";

const QUERYSTR_PREFIX = "q";

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

const SearchPageResults = (props) => {
	let query = useQuery();

	// console.log(query.get('q'))
	let history = useHistory();
	const [keyword, setKeyword] = useState("");
	let [originalList, setOriginalList] = useState([]);
	let [filteredList, setFilteredList] = useState([]);

	const getDesserts = async () => {
		let data = await fetch(`http://localhost:5000/desserts`);
		let results = await data.json();
		console.log("Keyword", keyword);
		const tempList = results.data.filter(
			(item) =>
				item.name.toLowerCase().includes(keyword) ||
				item.description.toLowerCase().includes(keyword)
		);
		setFilteredList(tempList);
		console.log("check results: ", results.data);
	};

	useEffect(() => {
		setKeyword(query.get("q"));
		if (keyword) {
			getDesserts();
		}
		//
		// setFilteredList(tempList)
	}, [keyword]);

	const sortByPriceHighLow = () => {
		let tempList = [...filteredList];
		const sortedHighLow = tempList.sort((a, b) => b.price - a.price);
		setFilteredList(sortedHighLow);
	};

	const sortByPriceLowHigh = () => {
		let tempList = [...filteredList];
		const sortedLowHigh = tempList.sort((a, b) => a.price - b.price);
		setFilteredList(sortedLowHigh);
	};

	return (
		<Container>
			<h1 className="search-results-header">Search Results</h1>
			<MainSearchBar />
			<Button onClick={sortByPriceLowHigh}>
				Sort by Price (low to high)
			</Button>{" "}
			<Button onClick={sortByPriceHighLow}>
				Sort by Price (high to low)
			</Button>
			<br />
			<Row className="justify-content-center">
				{filteredList &&
					filteredList.map((item) => (
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
	);
};

export default SearchPageResults;
