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
								<a
									href="https://www.coderschool.vn"
									target="_blank"
								>
									CoderSchool
								</a>
							</li>
							{/* <li>
								<a href="#" target="_blank">
									Blog
								</a>
							</li> */}
						</ul>
					</nav>
					<div className="copyright" id="copyright">
						© {new Date().getFullYear()}, Christina Bui. This
						website was created as part of a CoderSchool Project.
					</div>
				</Container>
			</footer>
		</>
	);
}

export default Footer;
