import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import { Card, CardImg, CardBody, CardText } from "reactstrap";

const LandingBestDesserts = () => {
	return (
		<>
			<Container
				style={{
					marginTop: "60px",
					marginBottom: "50px",
					textAlign: "center",
				}}
				fluid
			>
				<h1 style={{ paddingBottom: "20px" }}>
					Satisfy your sweet tooth
				</h1>
				{/* <h2>Bestsellers in the city</h2> */}
				<Row>
					<Col lg={4} style={{ textAlign: "center" }}>
						<Card style={{ width: "18rem" }}>
							<CardImg
								alt="..."
								src="https://www.missjones.co/wp-content/uploads/2018/06/Edited1-9851-squarewb.jpg"
								top
								style={{
									height: "18rem",
									maxWidth: "18rem",
								}}
							></CardImg>
							<CardBody>
								{/* <blockquote className="blockquote blockquote-primary mb-0"> */}
								<CardText style={{ marginBottom: "-15px" }}>
									<Link to="/search/?q=tart">
										<h3>Tarts</h3>
									</Link>
								</CardText>
								{/* </blockquote> */}
							</CardBody>
						</Card>
					</Col>
					<Col lg={4} style={{ textAlign: "center" }}>
						<Card style={{ width: "18rem" }}>
							<CardImg
								alt="..."
								src="https://cdn11.bigcommerce.com/s-6rm7xo1w/images/stencil/1280x1280/products/1865/3588/GGB-8520__28696.1570105172.jpg?c=2&imbypass=on"
								top
								style={{
									height: "18rem",
									maxWidth: "18rem",
								}}
							></CardImg>
							<CardBody>
								<CardText style={{ marginBottom: "-15px" }}>
									<Link to="/search/?q=cake">
										<h3>Cakes</h3>
									</Link>
								</CardText>
							</CardBody>
						</Card>
					</Col>
					<Col lg={4} style={{ textAlign: "center" }}>
						<Card style={{ width: "18rem" }}>
							<CardImg
								alt="..."
								src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2006/8/4/0/gl0605_mousse1.jpg.rend.hgtvcom.826.620.suffix/1580237750820.jpeg"
								top
								style={{
									height: "18rem",
									maxWidth: "18rem",
								}}
							></CardImg>
							<CardBody>
								<CardText style={{ marginBottom: "-15px" }}>
									<Link to="/search/?q=mousse">
										<h3>Mousse</h3>
									</Link>
								</CardText>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default LandingBestDesserts;
