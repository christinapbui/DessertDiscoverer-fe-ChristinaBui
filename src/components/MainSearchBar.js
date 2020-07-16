import React, { useState } from 'react'
import { useHistory, useLocation, Link } from 'react-router-dom'
import {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input
} from "reactstrap";
import {Form,FormControl,Button} from 'react-bootstrap'

const QUERYSTR_PREFIX = "q";

function useQuery() {
    return new URLSearchParams(useLocation().search)
}

const MainSearchBar = () => {
    // let [keyword, setKeyword] = useState(query.get(QUERYSTR_PREFIX)) 
    let [keyword, setKeyword] = useState(null)
    let [searchList, setSearchList] = useState(null)
    let history = useHistory()
    // let query = useQuery()
    let filteredList = []

    // const searchKeyword = (keyword) => {
    //     if(keyword === ''){
    //         setSearchList()//)
    //     }
    // }

    const searchByKeyword = (e) => {
        e.preventDefault();
        history.push(`/search/?${QUERYSTR_PREFIX}=${keyword}`)

        // if(keyword){
        //     filteredList = // finish this part
        // }
        setSearchList(filteredList)
    }




    return (
        <>
        <Form inline onSubmit={(e)=>searchByKeyword(e)}>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                <InputGroupText>
                    <i className="fa fa-search"></i>
                </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Enter a delicious dessert item here" type="text"></Input>
            </InputGroup>
            <span>in</span>
            <Input type="select">
                    <option>District 1</option>
                    <option>District 2</option>
                    <option>District 3</option>
            </Input>{" "}
            <Button>
                <Link to="/search">Show me the goods!</Link>
            </Button>
        </Form>
        </>
    )
}

export default MainSearchBar
