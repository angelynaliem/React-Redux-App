import axios from 'axios';

export const QUOTE_FETCHING = "QUOTE_FETCHING";
export const QUOTE_FETCHED = "QUOTE_FETCHED";
export const QUOTE_ERROR = "QUOTE_ERROR";


const headers = {
    Accept: "application/json"
}

const proxyurl = "https://cors-anywhere.herokuapp.com/";

export const getQuote = () => (dispatch) => {

    console.log("getQuote action")

    dispatch({ type: QUOTE_FETCHING })

    axios
    .get(proxyurl + "http://www.ourmanna.com/verses/api/get?format=text&order=random", 
    // { headers: headers }
    )
    .then((res) => {
        dispatch({ 
            type: QUOTE_FETCHED, 
            payload: res.data
        })
        console.log("API response: ", res)
    })
    .catch((err) => {
        dispatch({
            type: QUOTE_ERROR,
            payload: err
        })
        console.log(err)
    })

}
