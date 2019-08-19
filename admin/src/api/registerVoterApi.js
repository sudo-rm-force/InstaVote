const axios = require('axios')
const axiosInstance = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    baseURL: 'http://localhost:8080',
  });

export default function registerVoterApi(voter_id, name, age, constituency_id) {
    return axiosInstance.post('/user', {
        voter_id: voter_id,
        name: name,
        age: age,
        constituency_id: constituency_id
    }).then((response) => {
        const res = JSON.parse(response.request.response)
        return res
    })
}
