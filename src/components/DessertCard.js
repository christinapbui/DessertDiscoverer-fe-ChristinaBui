import React from "react";
import {
	Container,
	Row,
	Col,
	Badge,
	Card,
	Button,
	CardDeck,
} from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
// import "../App.css";
import "../App.css";

const DessertCard = (props) => {
	let history = useHistory();

	const dessertDetails = () => {
		history.push(`/desserts/${props.dessert._id}`);
		// console.log("finding seller id", props.dessert.seller._id);
	};

	const sellerDetails = () => {
		history.push(`sellers/${props.dessert.seller._id}`);
	};

	return (
		<>
			{/* <CardDeck> */}
			<Card
				style={{
					width: "20rem",
					minHeight: "40rem",
					maxHeight: "50rem",
				}}
			>
				<div className="imgBox">
					<Card.Img
						variant="top"
						src={props.dessert.pictureUrl}
						style={{
							height: "15rem",
							maxWidth: "20rem",
							objectFit: "cover",
							objectPosition: "50 50",
						}}
						onClick={() => dessertDetails()}
						className="cardImg"
					/>
				</div>
				<Card.Body className="dessertcard-cardbody">
					<Card.Title className="dessertcard-cardtitle">
						<Link onClick={() => dessertDetails()}>
							<h4 className="dessertcard-name">
								{props.dessert.name}
							</h4>
						</Link>
					</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">
						<Link
							onClick={() => sellerDetails()}
							className="dessertcard-seller"
						>
							{props.dessert.seller.displayName}
						</Link>
					</Card.Subtitle>
					<hr />
					<Card.Text>
						<p className="dessertcard-description">
							{props.dessert.description}
						</p>
						<br />
						<h6>Price: {props.dessert.price} VND</h6>
						<br />
						{props.dessert.tags.map((item) => (
							<Badge variant="info">{item.tag}</Badge>
						))}
					</Card.Text>
					<Button variant="primary" onClick={() => dessertDetails()}>
						Details please!
					</Button>
				</Card.Body>
			</Card>
			{/* </CardDeck> */}
		</>
	);
};

export default DessertCard;
