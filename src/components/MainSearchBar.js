import React, { useState, useEffect } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	Input,
	Button,
} from "reactstrap";
import { Form, FormControl, Row, Col } from "react-bootstrap";

const QUERYSTR_PREFIX = "q";

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

const MainSearchBar = () => {
	let query = useQuery();
	let [keyword, setKeyword] = useState(query.get(QUERYSTR_PREFIX));
	// let [keyword, setKeyword] = useState(null)
	let [searchList, setSearchList] = useState([]);
	let [originalList, setOriginalList] = useState([]);
	let history = useHistory();
	let tempArray = [];

	const searchByKeyword = (e) => {
		if (e) {
			e.preventDefault();
			history.push(`/search/?${QUERYSTR_PREFIX}=${keyword}`);
		}

		// // if (temp array is null) then use originalList
		// if (tempArray.length === 0) {
		// 	tempArray = originalList;
		// }
		// let filteredList = tempArray; // this is the first time we load the page

		// if (keyword) {
		// 	filteredList = tempArray.filter(
		// 		(item) =>
		// 			item.name.includes(keyword) ||
		// 			item.description.includes(keyword)
		// 	); // how we're going to filter the data. // "find" gives exact value (in this case, the Object type) => switch to "filter"
		// }
		// setSearchList(filteredList);
	};

	return (
		<>
			<Row>
				<Col float="center">
					<Form
						inline
						style={{
							verticalAlign: "middle",
							justifyContent: "center",
						}}
						onSubmit={(e) => searchByKeyword(e)}
					>
						<InputGroup style={{ marginRight: "10px" }}>
							<InputGroupAddon addonType="prepend">
								<InputGroupText style={{ width: "50px" }}>
									<i className="fa fa-search"></i>
								</InputGroupText>
							</InputGroupAddon>
							<Input
								className="main-search-bar"
								placeholder="Enter a delicious dessert item here"
								type="text"
								style={{
									backgroundColor: "white",
									width: "300px",
								}}
								onChange={(e) => setKeyword(e.target.value)}
							></Input>
						</InputGroup>
						{/* <span>in</span>
            <Input type="select">
                    <option>District 1</option>
                    <option>District 2</option>
                    <option>District 3</option>
            </Input>{" "} */}
						<Button
							color="info"
							type="submit"
							className="main-search-bar-submit"
							style={{
								margin: "0",
								position: "relative",
								top: "-5px",
								borderRadius: "20px",
							}}
						>
							Show me the goods!
							{/* <Link to="/search">Show me the goods!</Link> */}
						</Button>
					</Form>
				</Col>
			</Row>
		</>
	);
};

export default MainSearchBar;
