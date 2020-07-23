import React, { useState } from "react";
import MainSearchBar from "./MainSearchBar";
import LocationDropdown from "./LocationDropdown";
import SearchPageResults from "../views/searchPageResults/SearchPageResults";
import { Button, Container } from "reactstrap";
import { Link } from "react-router-dom";

// core components

function LandingPageHeader() {
	const [searchResults, setSearchResults] = useState(null);
	let pageHeader = React.createRef();

	React.useEffect(() => {
		if (window.innerWidth > 991) {
			const updateScroll = () => {
				let windowScrollTop = window.pageYOffset / 3;
				pageHeader.current.style.transform =
					"translate3d(0," + windowScrollTop + "px,0)";
			};
			window.addEventListener("scroll", updateScroll);
			return function cleanup() {
				window.removeEventListener("scroll", updateScroll);
			};
		}
	});
	return (
		<>
			<div className="page-header page-header-small">
				<div
					className="page-header-image"
					style={{
						backgroundImage:
							"url(" +
							require("../assets/img/muesli-yogurt.jpg") +
							")",
						// paddingTop: "-20px",
					}}
					ref={pageHeader}
				></div>
				<div className="content-center">
					<Container>
						<h1 className="title">Saigon Dessert Discoverer</h1>
						<h3 className="text-center">What are you craving?</h3>
						<div>
							I'm looking for
							<MainSearchBar />
						</div>
						{/* <div>in <LocationDropdown />{" "}
              <Button>
                <Link to="/search">Show me the goods!</Link>
              </Button>
            </div> */}
						{/* <div className="text-center">
							<Button
								className="btn-icon btn-round"
								color="info"
								href="#pablo"
								onClick={(e) => e.preventDefault()}
							>
								<i className="fab fa-facebook-square"></i>
							</Button>
							<Button
								className="btn-icon btn-round"
								color="info"
								href="#pablo"
								onClick={(e) => e.preventDefault()}
							>
								<i className="fab fa-twitter"></i>
							</Button>
							<Button
								className="btn-icon btn-round"
								color="info"
								href="#pablo"
								onClick={(e) => e.preventDefault()}
							>
								<i className="fab fa-google-plus"></i>
							</Button>
						</div> */}
					</Container>
				</div>
			</div>
		</>
	);
}

export default LandingPageHeader;
