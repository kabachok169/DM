import { SET_CLIENTS, SET_CLIENTS_CARD } from "./clients.constants";

export function setClients(data, columns, total) {
    return {
        type: SET_CLIENTS,
        payload: {
            data: data, 
            columns: columns,
            total: total}
    };
}

export function getClients(currentPage, pageSize) {
    return async (dispatch) => {
        const columns = [{
            title: 'Name',
            dataIndex: 'name',
          }, {
            title: 'E-mail',
            dataIndex: 'email',
          }, {
            title: 'Telephone number',
            dataIndex: 'number',
          }];
          
        let data = [];
        for (let i = 0; i < pageSize; i++) {
            data.push({
                key: i,
                name: `Egor ${currentPage} + ${i}`,
                email: `example${i}@govgoogle.com`,
                number: `8-123-123-12-12`,
            });
        }

        console.log('action: ', data);

        return dispatch(setClients(data, columns, 50));
    };
}

export function setClientsCard(data) {
    return {
        type: SET_CLIENTS_CARD,
        payload: {
            clientsCard: data
        }
    };
}

export function getClientsCard(key, data) {
    return async (dispatch) => {
        console.log('key in action: ', key);
        let data = {
            name: `Egor${key}`,
            email: `example${key}@govgoogle.com`,
            number: `8-123-123-12-12`
        };

        return dispatch(setClientsCard(data));
    };
}
