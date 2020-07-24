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
// import { useHistory } from "react-router-dom";
import "../App.css";
import moment from "moment";

const ReviewCard = (props) => {
	// let history = useHistory();

	// const reviewDetails = () => {
	// 	history.push(`/reviews/${props.review._id}`); // look at this code again
	// };

	console.log("find dessert", props.review);

	return (
		<>
			{/* <Col> */}
			<Card
				style={{
					// width: "40rem",
					textAlign: "left",
					marginTop: "-10px",
				}}
				className="reviewcard-card noshadow"
			>
				<CardBody>
					<CardTitle className="reviewcard-title">
						<h4>
							<strong>{props.review.title}</strong>
						</h4>
					</CardTitle>
					<CardSubtitle className="mb-2 text-muted">
						<i class="fas fa-user"></i>{" "}
						<strong>
							{props.review.user
								? props.review.user.displayName
								: "unknown"}
						</strong>{" "}
						on {moment(props.review.createdAt).format("LLL")}
					</CardSubtitle>
					<CardText>
						<p style={{ fontSize: "14px" }}>{props.review.body}</p>
						<br />
						<h6
						// style={{
						// 	border: "1px solid black",
						// 	padding: "10px",
						// 	width: "100px",
						// 	backgroundColor: "blue",
						// 	borderRadius: "20px",
						// }}
						>
							Rating: {props.review.rating}
						</h6>
					</CardText>
				</CardBody>
			</Card>
			{/* </Col> */}
			{""}
		</>
	);
};

export default ReviewCard;
