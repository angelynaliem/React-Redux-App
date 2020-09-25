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
    return <div className="loading"></div>
}

return (
    <div className="mainContainer">
        <h1 className="quote">{props.quote}</h1>
        <button className="button" onClick={props.getQuote}>Next Quote</button>
    </div>
)

}

const mapStateToProps = (state) => {
    return { quote: state.quote, isFetching: state.isFetching }
}

const mapDispatchToProps = { getQuote } 

export default connect(mapStateToProps, mapDispatchToProps)(Quote);
