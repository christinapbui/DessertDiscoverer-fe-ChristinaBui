import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./AddDessert.css";

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

		const newDessert = await fetch("http://localhost:5000/desserts/add", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + localStorage.getItem("token"),
			},
			body: JSON.stringify(dessertData),
		});
		const response = await newDessert.json();
		console.log("dessert data: ", response);
		history.push(`/desserts/${response._id}`);
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
			{/* <div style={{ height: "30px" }}></div> */}
			<div
				className="adddessert-background"
				style={{
					backgroundImage:
						"url(" +
						require("../../assets/img/many-yogurt-glasses.jpg") +
						")",
					// height: "30px",
				}}
			>
				<Container className="adddessert-form-container">
					<Row className="adddessert-form-row">
						<Col className="adddessert-form-col">
							<h1 style={{ textAlign: "center" }}>
								Add a new dessert
							</h1>
							<hr />

							<Form
								className="container inputForm"
								onSubmit={createDessert}
							>
								<Form.Group controlId="title">
									<Form.Label>Name</Form.Label>
									<Form.Control
										type="text"
										value={name}
										onChange={(e) =>
											setName(e.target.value)
										}
									/>
								</Form.Group>

								<Form.Group controlId="description">
									<Form.Label>Description</Form.Label>
									<Form.Control
										as="textarea"
										rows="3"
										value={description}
										onChange={(e) =>
											setDescription(e.target.value)
										}
									/>
								</Form.Group>

								<Form.Group controlId="price">
									<Form.Label>Price (in VND)</Form.Label>
									<Form.Control
										type="number"
										value={price}
										onChange={(e) =>
											setPrice(e.target.value)
										}
									/>
								</Form.Group>

								<Form.Group controlId="tags">
									<Form.Label>Tags</Form.Label>
									<Form.Control
										type="text"
										value={tags}
										onChange={(e) =>
											setTags(e.target.value.split(","))
										}
									/>
								</Form.Group>

								<Form.Group controlId="pictureUrl">
									<Form.Label>Picture URL</Form.Label>
									<Form.Control
										type="text"
										value={pictureUrl}
										onChange={(e) =>
											setPictureUrl(e.target.value)
										}
									/>
								</Form.Group>

								<Button variant="primary" type="submit">
									Submit
								</Button>
							</Form>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

export default AddDessert;
