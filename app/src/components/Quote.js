import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { getQuote } from "../actions";

const Quote = (props) => {

// const dispatch = useDispatch();
// const quotes = useSelector( state => state.data )

useEffect(() => {
   props.getQuote();

}, [props.getQuote])

if (props.isFetching) {
    return <p>Loading...</p>
}

return (
    <div>
        <h1>{props.quote}</h1>
        <button onClick={props.getQuote}>Get a new quote</button>
    </div>
)

}

const mapStateToProps = (state) => {
    return { quote: state.quote, isFetching: state.isFetching }
}

const mapDispatchToProps = { getQuote } 

export default connect(mapStateToProps, mapDispatchToProps)(Quote);
