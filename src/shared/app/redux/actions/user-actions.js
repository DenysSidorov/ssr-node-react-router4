import { Types } from '../constants/user-types';
import axios from 'axios';

export function getName(id) {
    return async function (dispatch, getState) {
        let {data} = await getUserFromAPI(id);
        dispatch({ type: Types.UPDATE_NAME, payload: data });
    }
}
function getUserFromAPI(id) {
    return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
}