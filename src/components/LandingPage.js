import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
// import cupcake from "../assets/img/cupcakes-1-big.jpg";
import FeaturedGoodies from "./FeaturedGoodies";
import FeaturedSellers from "./FeaturedSellers";
import LandingBestDesserts from "./LandingBestDesserts";
import LandingPageHeader from "./LandingPageHeader";
import Footer from "./Footer";
// import LandingBestDesserts from "./components/LandingBestDesserts";

const LandingPage = () => {
	return (
		<>
			<div>
				<LandingPageHeader />
				<LandingBestDesserts />
				<Jumbotron fluid className="jumbo">
					<Container style={{ marginTop: "10rem" }}>
						{/* <img src={cupcake} className="jumbo-img" alt="cupcakes" /> */}
						<div
							style={{
								textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)",
							}}
						>
							<h1 className="jumbo-main-text">
								Saigon Dessert Discoverer - Second Landing Page
								component
							</h1>
							<p style={{ maxWidth: "30rem" }}>
								What are you craving? - Second Landing Page
								component
							</p>
						</div>
					</Container>
				</Jumbotron>
			</div>
			<FeaturedGoodies />
			<FeaturedSellers />
			<Footer />
		</>
	);
};

export default LandingPage;
