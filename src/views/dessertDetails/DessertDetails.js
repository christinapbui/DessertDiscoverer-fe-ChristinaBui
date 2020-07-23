import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Badge, Card } from "reactstrap";
import AddReviewForm from "../../components/AddReviewForm";
import ReviewCard from "../../components/ReviewCard";
import EditDessert from "../addDessert/EditDessert";
import "./DessertDetails.css";
import NumberFormat from "react-number-format";
import { BACKEND_URL } from "../../appConstant";

const DessertDetails = ({ text, type, placeholder, children, ...props }) => {
	const [details, setDetails] = useState(null);
	const { id } = useParams();
	const history = useHistory();
	console.log("Dessert Detail Page", id);

	useEffect(() => {
		async function fetchData() {
			const data = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}desserts/` + id
			);
			const resData = await data.json();
			console.log("dessert details: ", resData);
			let singleDessert = resData.singleDessert;
			singleDessert.reviews = resData.reviews;
			console.log("Dessert detail", singleDessert);
			setDetails(singleDessert);
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
								<Col
									xl={4}
									className="dessertdetails-picture-col"
								>
									<img
										alt="..."
										src={pictureUrl}
										className="dessertdetails-picture"
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
										<h5>
											Price:{" "}
											<NumberFormat
												value={price}
												displayType={"text"}
												thousandSeparator={true}
											/>{" "}
											VND
										</h5>
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
												<i class="fas fa-tags"></i>{" "}
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
															</Link>
															{"  "}
														</Badge>
													))}
											</td>
											<td>Average Rating: {rating}</td>
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
							<h4 style={{ textAlign: "center" }}>
								Like what you had?
								<br />
								Leave a review:
							</h4>
							<AddReviewForm />
						</Col>
						<Col md={8}>
							<h2 style={{ textAlign: "center" }}>Reviews</h2>
							{reviews &&
								reviews.map((item) => (
									<Col
										sm={8}
										md={6}
										lg={4}
										style={{ textAlign: "center" }}
									>
										<ReviewCard
											review={item}
											key={item._id}
										/>
									</Col>
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
