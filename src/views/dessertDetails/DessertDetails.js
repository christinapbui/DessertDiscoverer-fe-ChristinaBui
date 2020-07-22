import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Badge, Card } from "reactstrap";
import AddReviewForm from "../../components/AddReviewForm";
import ReviewCard from "../../components/ReviewCard";
import EditDessert from "../addDessert/EditDessert";
import "./DessertDetails.css";

const DessertDetails = ({ text, type, placeholder, children, ...props }) => {
	const [details, setDetails] = useState(null);
	const { id } = useParams();
	const history = useHistory();
	console.log("Dessert Detail Page", id);

	useEffect(() => {
		async function fetchData() {
			const data = await fetch("http://localhost:5000/desserts/" + id);
			const details = await data.json();
			console.log("dessert details: ", details);
			setDetails(details);
		}
		fetchData();
	}, []);

	const editDessert = () => {
		history.push(`/desserts/${id}/edit`);
		// console.log("finding seller id", props.dessert.seller._id);
	};

	return (
		<>
			<div
				className="dessertdetails-background"
				style={{ height: "30px" }}
			></div>
			<br />
			{/* <h1>Details of Dessert </h1>{" "} */}
			<Button variant="secondary" onClick={() => editDessert()}>
				Edit
			</Button>
			<SingleDessert {...details} />
		</>
	);
};

const SingleDessert = ({
	_id,
	reviews,
	name,
	pictureUrl,
	price,
	rating,
	description,
	tags,
	seller,
}) => {
	console.log(seller);

	return (
		<>
			<div>
				<section
					className="dessertdetails-section1"
					// style={{
					// 	backgroundColor: "black",
					// 	color: "white",
					// 	paddingBottom: "30px",
					// }}
				>
					<div className="container infoPage">
						<Container className="dessertdetails-container">
							<h1 className="dessertdetails-name">{name}</h1>
							<Row xl="2" lg="2" md="1" sm="1" xs="1">
								<Col xl={4}>
									<img
										alt="..."
										src={pictureUrl}
										style={{
											height: "18rem",
											maxWidth: "18rem",
											objectFit: "cover",
											objectPosition: "50 50",
										}}
									/>
								</Col>
								<Col xl={8}>
									<h4 style={{ paddingBottom: "10px" }}>
										Seller:{" "}
										<Link
											to="/"
											className="dessertdetails-seller"
										>
											{seller && seller.displayName}
										</Link>
									</h4>
									<h5>Description:</h5>
									<p>{description}</p>
									{/* {tags &&
										tags.map((e) => (
											<Badge color="info">
												<Link
													to={`/?tag=${e._id}`}
													className="dessertdetails-tag"
												>
													{e.tag}
												</Link>{" "}
											</Badge>
										))} */}
								</Col>
							</Row>
							<Row sm="2" xs="1" style={{ marginTop: "20px" }}>
								<Col md={4}>
									<div className="justify-content-center">
										<h5>Price: {price} VND</h5>
									</div>
								</Col>
								<Col md={8}>
									<table
										className="infoTable"
										style={{
											width: "100%",
											tableLayout: "fixed",
										}}
									>
										<tr style={{ color: "#777777" }}>
											<td style={{ width: "33%" }}>
												<i class="far fa-comment"></i>{" "}
											</td>
											<td style={{ width: "33%" }}>
												<i class="far fa-star"></i>{" "}
											</td>
											{/* <td style={{ width: "33%" }}>
											<i class="far fa-comment"></i>
										</td> */}
										</tr>
										<tr style={{ color: "#777777" }}>
											<td>
												Tags:{" "}
												{tags &&
													tags.map((e) => (
														<Badge color="info">
															<Link
																to={`/?tag=${e._id}`}
																className="dessertdetails-tag"
															>
																{e.tag}
															</Link>{" "}
														</Badge>
													))}
											</td>
											<td>Rating: {rating}</td>
										</tr>
									</table>
								</Col>
							</Row>
						</Container>
					</div>
				</section>
			</div>
			<hr />
			<section className="container dessertdetails-reviewssection">
				<Container style={{ marginTop: "30px", marginBottom: "30px" }}>
					<Row sm="2" xs="1">
						<Col md={4} className="dessertdetails-reviewform">
							<h4>Like what you had? Leave a review:</h4>
							<AddReviewForm />
						</Col>
						<Col md={8}>
							<h4>Other Users' Reviews</h4>
							{reviews &&
								reviews.map((item) => (
									<ReviewCard review={item} key={item.id} />
								))}
						</Col>
					</Row>
				</Container>
			</section>
			{/* </div> */}
		</>
	);
};

export default DessertDetails;
