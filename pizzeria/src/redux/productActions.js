import axios from 'axios';

function getProducts() {
    return (dispatch) => {
        return axios.get('https://isko88.github.io/apipizza.json')
            .then(
                ({ data }) => dispatch({ type: "GET_PRODUCTS", payload: data })
            );
    };
}

export {
    getProducts
}