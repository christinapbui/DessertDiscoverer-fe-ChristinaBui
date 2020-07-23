import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "reactstrap";
import { useParams, useHistory } from "react-router-dom";
import "../App.css";
import { BACKEND_URL } from "../appConstant";

const AddReview = () => {
	const [reviewOfDessert, setReviewOfDessert] = useState(""); //NEED HELP W/THIS
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [rating, setRating] = useState(0); // NEED HELP W/THIS
	const [user, setUser] = useState("");
	const { id } = useParams();
	let history = useHistory();

	const createReview = async (e) => {
		e.preventDefault();

		const reviewData = {
			reviewOfDessert: id,
			title,
			body,
			rating,
			user,
		};

		const newReview = await fetch(
			`${process.env.REACT_APP_BACKEND_URL}desserts/${id}/reviews/`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + localStorage.getItem("token"),
				},
				body: JSON.stringify(reviewData),
			}
		);
		const response = await newReview.json();
		console.log("review data: ", response);
		// history.push(`/reviews/${response._id}`);
		document.location.reload();
		// alert("Your dessert has been added!");
		// setName("");
		// setPictureUrl("");
		// setPrice(0);
		// setDescription("");
		// setRating(0);
		// setTags([]);
		// setSeller("");
	};

	return (
		<>
			{/* <div style={{ height: "50px" }}></div>
			<br />
			<h3>Write a new review!!!!</h3>
			<hr /> */}

			<Form
				className="container inputForm"
				onSubmit={createReview}
				// style={{ maxWidth: "100px" }}
			>
				<Form.Group controlId="title">
					<Form.Label>Title</Form.Label>
					<Form.Control
						type="text"
						value={title}
						placeholder="Give your review a title"
						className="inputForm-title"
						// style={{ width: "315px" }}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</Form.Group>

				<Form.Group controlId="description">
					<Form.Label>Body</Form.Label>
					<Form.Control
						as="textarea"
						rows="3"
						value={body}
						placeholder="What do you want to say about this item?"
						// style={{ width: "315px" }}
						onChange={(e) => setBody(e.target.value)}
					/>
				</Form.Group>

				<Form.Group controlId="price">
					<Form.Label>Rating (1-5)</Form.Label>
					<Form.Control
						type="number"
						value={rating}
						// style={{ width: "315px" }}
						onChange={(e) => setRating(e.target.value)}
					/>
				</Form.Group>

				<Button color="success" type="submit">
					Submit
				</Button>
			</Form>
		</>
	);
};

export default AddReview;
