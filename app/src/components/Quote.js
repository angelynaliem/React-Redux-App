import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuote } from "../actions";

const Quote = (props) => {

const dispatch = useDispatch();

useEffect(() => {
    dispatch(getQuote());

    const quotes = useSelector( state => state.data.verse.details.text )

}, [getQuote])

if (props.isFetching) {
    return <p>Loading...</p>
}

return (
    <div>
        <h1>{quotes}</h1>
        <button onClick={getQuote}>Get a new quote</button>
    </div>
)

}

export default Quote
