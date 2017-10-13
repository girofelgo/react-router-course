import _ from 'lodash';
import { FETCH_POSTS } from "../actions/index";

export default function() {
    switch (action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
            console.log(action.payload.data);
        default:
            return state
    }
}