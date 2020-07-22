import React from "react";
// import { Container, Row, Col, Badge, Card, Button, CardDeck } from "react-bootstrap";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import {
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardText,
	CardLink,
} from "reactstrap";
import { useHistory } from "react-router-dom";

const ReviewCard = (props) => {
	let history = useHistory();

	const reviewDetails = () => {
		history.push(`/reviews/${props.review._id}`); // look at this code again
	};

	console.log("find user", props.review);

	return (
		<>
			<Card style={{ width: "20rem" }}>
				<CardBody>
					<CardTitle tag="h4">{props.review.title}</CardTitle>
					<CardSubtitle className="mb-2 text-muted">
						Name of user who wrote review: {props.review.user}
					</CardSubtitle>
					<hr />
					<CardText>
						<h5>{props.review.body}</h5>
						<br />
						<hr />
						<h6>Rating: {props.review.rating}</h6>
					</CardText>
					<Button variant="primary" onClick={() => reviewDetails()}>
						Read full review!
					</Button>
				</CardBody>
			</Card>
			{""}
		</>
	);
};

export default ReviewCard;
