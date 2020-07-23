import React, { useState, useEffect } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import { Container, Col, Row, Button } from "react-bootstrap";
import DessertCard from "../../components/DessertCard";
import "./SearchPageResults.css";
import MainSearchBar from "../../components/MainSearchBar";
import PaginationLink from "../../components/PaginationLink";
// const QUERYSTR_PREFIX = "q";

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

const SearchPageResults = (props) => {
	let query = useQuery();
	let history = useHistory();
	const [keyword, setKeyword] = useState("");
	let [originalList, setOriginalList] = useState([]);
	let [filteredList, setFilteredList] = useState([]);
	const [pageNum, setPageNum] = useState(1);
	const [maxPageNum, setMaxPageNum] = useState(1);

	const getDesserts = async () => {
		let data = await fetch(`${process.env.REACT_APP_BACKEND_URL}desserts`);
		let results = await data.json();
		console.log("Keyword", keyword);
		const tempList = results.data.filter(
			(item) =>
				item.name.toLowerCase().includes(keyword) ||
				item.description.toLowerCase().includes(keyword)
		);
		setFilteredList(tempList);
		setMaxPageNum(parseInt(filteredList.maxPageNum));
		console.log("check results: ", results.data);
	};

	useEffect(() => {
		setKeyword(query.get("q"));
		if (keyword) {
			getDesserts();
		}
		//
		// setFilteredList(tempList)
	}, [keyword, pageNum]);

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

	const goNextPage = () => {
		setPageNum(pageNum + 1);
	};

	const goPrevPage = () => {
		setPageNum(pageNum - 1);
	};

	return (
		<Container>
			<h1 className="search-results-header">Search Results</h1>
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
			<section style={{ marginBottom: "50px", marginTop: "50px" }}>
				<table style={{ width: "100%" }}>
					<tr>
						<td style={{ textAlign: "center", width: "300px" }}>
							<PaginationLink
								disabled={pageNum === 1}
								handleClick={goPrevPage}
							>
								Previous Page
							</PaginationLink>
						</td>
						<td style={{ textAlign: "center", width: "300px" }}>
							<PaginationLink
								disabled={pageNum === maxPageNum}
								handleClick={goNextPage}
							>
								Next Page
							</PaginationLink>
						</td>
					</tr>
				</table>
			</section>
		</Container>
	);
};

export default SearchPageResults;
