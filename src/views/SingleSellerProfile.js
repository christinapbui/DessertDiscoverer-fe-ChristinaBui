import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import AddReviewForm from "../components/AddReviewForm";
import ReviewCard from "../components/ReviewCard";

const SellerProfile = ({ text, type, placeholder, children, ...props }) => {
	const [details, setDetails] = useState(null);
	// const [id, setId] = useState("");
	const { id } = useParams();
	console.log("Seller Profile Page", id);

	useEffect(() => {
		// setId(props.params.id);

		async function fetchData() {
			const data = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}users/` + id
			);
			const details = await data.json();
			console.log(details);
			setDetails(details);
		}
		fetchData();
	}, []);

	return (
		<>
			<div style={{ height: "30px" }}></div>
			<br />
			<h3>Seller Profile</h3> <Button variant="secondary">Edit</Button>
			<SellerDetails {...details} />
		</>
	);
};

const SellerDetails = ({
	_id,
	storeName,
	pictureUrl,
	streetAddress,
	district,
	website,
	phone,
	services,
	hours,
	description,
	desserts,
}) => {
	console.log(_id);
	return (
		<div>
			<section
				style={{
					backgroundColor: "black",
					color: "white",
					paddingBottom: "30px",
				}}
			>
				<div className="container infoPage">
					<Container>
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
								<h3>{storeName}</h3>
								<h4 style={{ paddingBottom: "10px" }}>
									Address: {streetAddress}, {district}
								</h4>
								<p>Website: {website}</p>
								<p>Services: {services}</p>
								<p>Hours: {hours}</p>
								<h5>Description:</h5>
								<p>{description}</p>
								{/* {desserts &&
									desserts.map((item) => (
										<Badge variant="sucess">
											<Link to={`/?tag=${e._id}`}>
												{e.tag}
											</Link>{" "}
										</Badge>
									))} */}
							</Col>
						</Row>
						<Row sm="2" xs="1" style={{ marginTop: "20px" }}>
							<Col md={4}>
								<div className="justify-content-center">
									<Badge variant="light">Price: VND</Badge>
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
											<i class="far fa-star"></i>
										</td>
										<td style={{ width: "33%" }}>
											<i class="fas fa-comment"></i>
										</td>
										{/* <td style={{ width: "33%" }}>
											<i class="far fa-comment"></i>
										</td> */}
									</tr>
									<tr style={{ color: "#777777" }}>
										<td>Rating:</td>
										<td>Reviews:</td>
									</tr>
									<tr>
										{/* <td>{rating}</td> */}
										{/* <td>{reviews}</td> */}
									</tr>
								</table>
							</Col>
						</Row>
					</Container>
				</div>
			</section>
			<section className="container whatToBring">
				<Container style={{ marginTop: "30px", marginBottom: "30px" }}>
					<Row sm="2" xs="1">
						<Col md={4}>
							<h4>Like what you had? Leave a review:</h4>
							<AddReviewForm />
						</Col>
						{/* <Col md={8}>
							<h4>Other Users' Reviews</h4>
							{reviews &&
								reviews.map((item) => (
									<ReviewCard review={item} key={item.id} />
								))}
						</Col> */}
					</Row>
				</Container>
			</section>
		</div>
	);
};

export default SellerProfile;
