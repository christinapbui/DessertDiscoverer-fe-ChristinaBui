import React, { useState } from "react";
import { Col } from "react-bootstrap";

const SearchPageResults = (props) => {
	const [keyword, setKeyword] = useState([]);

	return (
		<>
			<div>
				This is where the results of the search bar will be mapped.
			</div>
			<h1>Search Results</h1>
			{/* {props.tvList.map(item => {return(
            <Col md="3"><TVCard tv={item} genresFromTvList={props.genresFromApp}></TVCard></Col>
        )})} */}
		</>
	);
};

export default SearchPageResults;
