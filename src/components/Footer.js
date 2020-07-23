/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function Footer() {
	return (
		<>
			<footer className="footer" data-background-color="black">
				<Container>
					<nav>
						<ul>
							<li>
								<a href="#" target="_blank">
									About Us
								</a>
							</li>
							<li>
								<a href="#" target="_blank">
									Blog
								</a>
							</li>
						</ul>
					</nav>
					<div className="copyright" id="copyright">
						© {new Date().getFullYear()}, Christina Bui.
					</div>
				</Container>
			</footer>
		</>
	);
}

export default Footer;
