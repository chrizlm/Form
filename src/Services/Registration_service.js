import http from "./http-common"



const create = data => {
    return http.post("clients/save", data);
};

const getAll = () => {
    return http.get("clients/list");
};


/*const get = parkinglocation => {
    return http.get(`/parkingLot/get/${parkinglocation}`);
};

const updateAlt = (id, data) => {
    return http.put(`/parkingLot/update/${id}`, data);
};*/

/*const update = (data) => {
    return http.put(`/parkingLot/update`, data);
};

const remove = id => {
    return http.delete(`/parkingLot/${id}`);
};

const removeAll = () => {
    return http.delete(`/parkingLot/all`);
};

const findByLocation = location => {
    return http.get(`/parkingLot/get/${location}`);
};*/

export default {
    create,
    getAll,
};

