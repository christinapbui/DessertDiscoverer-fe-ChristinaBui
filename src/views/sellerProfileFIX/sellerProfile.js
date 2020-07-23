import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const AddDessert = () => {
	const [name, setName] = useState("");
	const [pictureUrl, setPictureUrl] = useState("");
	const [price, setPrice] = useState(0);
	const [description, setDescription] = useState("");
	const [rating, setRating] = useState(0); // NEED HELP W/THIS
	const [tags, setTags] = useState([]);
	const [seller, setSeller] = useState("");

	let history = useHistory();
	const createDessert = async (e) => {
		e.preventDefault();
		const dessertData = {
			name,
			pictureUrl,
			price,
			description,
			rating,
			tags,
			seller,
		};

		const newDessert = await fetch("${BACKEND_URL}desserts", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + localStorage.getItem("token"),
			},
			body: JSON.stringify(dessertData),
		});
		const response = await newDessert.json();
		console.log("dessert data: ", response);
		history.push(`/dessert/${response._id}`);
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
			<div style={{ height: "50px" }}></div>
			<br />
			<h3>Edit Your Store Page</h3>
			<hr />

			<Form className="container inputForm" onSubmit={createDessert}>
				<Form.Group controlId="title">
					<Form.Label>Name of Store/Bakery/Seller</Form.Label>
					<Form.Control
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</Form.Group>

				<Form.Group controlId="description">
					<Form.Label>Description</Form.Label>
					<Form.Control
						as="textarea"
						rows="3"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</Form.Group>

				<Form.Group controlId="price">
					<Form.Label>Price (in .000 VND)</Form.Label>
					<Form.Control
						type="number"
						value={price}
						onChange={(e) => setPrice(e.target.value)}
					/>
				</Form.Group>

				<Form.Group controlId="tags">
					<Form.Label>Tags</Form.Label>
					<Form.Control
						type="text"
						value={tags}
						onChange={(e) => setTags(e.target.value.split(","))}
					/>
				</Form.Group>

				<Form.Group controlId="pictureUrl">
					<Form.Label>Picture URL</Form.Label>
					<Form.Control
						type="text"
						value={pictureUrl}
						onChange={(e) => setPictureUrl(e.target.value)}
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</>
	);
};

export default AddDessert;
