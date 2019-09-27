import axios from "axios";

export default function getUsers(nationalities, batchSize) {
    return axios
        .get(`https://randomuser.me/api/?nat=${nationalities.join(",")}&results=${batchSize}`)
        .then(respond => respond.data.results);
}