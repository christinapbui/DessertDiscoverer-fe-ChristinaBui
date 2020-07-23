import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import { Card, CardImg, CardBody, CardText } from "reactstrap";
import FeaturedGoodies from "./FeaturedGoodies";
import FeaturedSellers from "./FeaturedSellers";

const LandingBestDesserts = () => {
	return (
		<>
			<div
				// style="background:transparent !important"
				class="jumbotron jumbo-landing-best-desserts"
			>
				<Container
					style={{
						marginTop: "1rem",
						textAlign: "center",
					}}
				>
					<h1>Satisfy your sweet tooth</h1>
					<h2>Best-selling sweets</h2>
					<Row>
						<Col lg={4} style={{ textAlign: "center" }}>
							<Card style={{ width: "18rem" }}>
								<CardImg
									alt="..."
									src="https://joyfoodsunshine.com/wp-content/uploads/2016/01/best-chocolate-chip-cookies-recipe-ever-no-chilling-1-e1549147195343.jpg"
									top
									style={{
										height: "18rem",
										maxWidth: "18rem",
									}}
								></CardImg>
								<CardBody>
									<blockquote className="blockquote blockquote-primary mb-0">
										<CardText>
											<Link to="/search/?q=cookies">
												<h3>Cookies</h3>
											</Link>
										</CardText>
									</blockquote>
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
									<CardText>
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
									src="https://www.daringgourmet.com/wp-content/uploads/2018/09/Rosemary-Bread-1.jpg"
									top
									style={{
										height: "18rem",
										maxWidth: "18rem",
									}}
								></CardImg>
								<CardBody>
									<CardText>
										<Link to="/search/?q=bread">
											<h3>Bread</h3>
										</Link>
									</CardText>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
			{/* <FeaturedGoodies />
			<FeaturedSellers /> */}
		</>
	);
};

export default LandingBestDesserts;