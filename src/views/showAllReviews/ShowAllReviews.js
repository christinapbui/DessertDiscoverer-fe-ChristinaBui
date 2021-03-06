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
import ReviewCard from "../../components/ReviewCard";
import { Container, Button } from "react-bootstrap";
import { BACKEND_URL } from "../../appConstant";
// import AddDessert from "../addDessert/AddDessert"

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

const ShowAllReviews = () => {
	// let query = useQuery()
	let [reviewList, setReviewList] = useState([]);
	// let array = []
	// let dispatch = useDispatch()

	const getReviews = async () => {
		let data = await fetch(`${process.env.REACT_APP_BACKEND_URL}reviews`);
		let results = await data.json();
		console.log("this is the review list: ", results);
		setReviewList(results.data);
	};

	useEffect(() => {
		getReviews();
	}, []);

	return (
		<Container style={{ marginTop: "30px", textAlign: "center" }}>
			<h1>List of Reviews</h1>
			{/* <Button>Sort by Newest (newest to oldest)</Button> <br /> */}
			{reviewList.map((item) => (
				<ReviewCard review={item} key={item.id} />
			))}
		</Container>
	);
};

export default ShowAllReviews;
