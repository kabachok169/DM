import {SET_CLIENTS} from './clients.constants';

const initialState = {
    columns: [], 
    data: [],
    total: 0
};

export default function clients(state = initialState, action) {
    switch (action.type) {
        case SET_CLIENTS:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
