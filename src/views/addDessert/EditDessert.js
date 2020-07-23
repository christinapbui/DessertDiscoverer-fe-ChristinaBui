import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { BACKEND_URL } from "../../appConstant";

const EditDessert = (props) => {
	const [name, setName] = useState();
	const [pictureUrl, setPictureUrl] = useState("");
	const [price, setPrice] = useState(0);
	const [description, setDescription] = useState("");
	const [rating, setRating] = useState(0); // NEED HELP W/THIS
	const [tags, setTags] = useState([]);
	const [seller, setSeller] = useState("");

	const [details, setDetails] = useState(null);
	let history = useHistory();
	let { id } = useParams();

	useEffect(() => {
		async function fetchData() {
			const data = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}desserts/` + id
			);
			const dataDetails = await data.json();
			console.log("dessert details: ", dataDetails);
			const oneDessertDetails = dataDetails.singleDessert;
			setDetails(oneDessertDetails);
			setName(oneDessertDetails.name);
			setPictureUrl(oneDessertDetails.pictureUrl);
			setPrice(oneDessertDetails.price);
			setDescription(oneDessertDetails.description);
			setTags(oneDessertDetails.tags.map((e) => e.tag));
			// {
			// 	props.dessert.tags.map((item) => (
			// 		<Badge variant="info">{item.tag}</Badge>
			// 	));
			// }
		}
		fetchData();
	}, []);

	const editDessert = async (e) => {
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

		const editingDessert = await fetch(
			`${process.env.REACT_APP_BACKEND_URL}desserts/${id}`,
			{
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + localStorage.getItem("token"),
				},
				body: JSON.stringify(dessertData),
			}
		);
		const response = await editingDessert.json();
		console.log("dessert data: ", response);
		history.push(`/desserts/${response.data._id}`);
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
			<h3>Edit Your Dessert</h3>
			<hr />

			<Form className="container inputForm" onSubmit={editDessert}>
				<Form.Group controlId="title">
					<Form.Label>Name</Form.Label>
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
					<Form.Label>Price (in VND)</Form.Label>
					<Form.Control
						type="number"
						value={price}
						onChange={(e) => setPrice(e.target.value)}
					/>
				</Form.Group>

				<Form.Group controlId="tags">
					<Form.Label>
						Tags: {tags.map((item) => item).join(", ")}
					</Form.Label>
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

export default EditDessert;
