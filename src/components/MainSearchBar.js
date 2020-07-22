import React, { useState, useEffect } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import { Form, FormControl, Button, Row } from "react-bootstrap";

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
				<Form inline onSubmit={(e) => searchByKeyword(e)}>
					<InputGroup>
						<InputGroupAddon addonType="prepend">
							<InputGroupText>
								<i className="fa fa-search"></i>
							</InputGroupText>
						</InputGroupAddon>
						<Input
							placeholder="Enter a delicious dessert item here"
							type="text"
							onChange={(e) => setKeyword(e.target.value)}
						></Input>
					</InputGroup>
					{/* <span>in</span>
            <Input type="select">
                    <option>District 1</option>
                    <option>District 2</option>
                    <option>District 3</option>
            </Input>{" "} */}
					<br />
					<br />
					<Button variant="outline-info" type="submit">
						Show me the goods!
						{/* <Link to="/search">Show me the goods!</Link> */}
					</Button>
				</Form>
			</Row>
		</>
	);
};

export default MainSearchBar;
