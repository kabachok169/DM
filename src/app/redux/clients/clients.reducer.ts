import {SET_CLIENTS, SET_CLIENTS_CARD} from './clients.constants';

const initialState = {
    columns: [], 
    data: [],
    total: 0,
    clientsCard: {}
};

export default function clients(state = initialState, action) {
    switch (action.type) {
        case SET_CLIENTS:
            return { ...state, ...action.payload };
        case SET_CLIENTS_CARD:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
