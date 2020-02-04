const axios = require('axios')
const axiosInstance = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    baseURL: 'http://localhost:8080',
  });

export default function registerVoterApi(candidate_id, name, party, constituency_id) {
    return axiosInstance.post('/candidate', {
        candidate_id: candidate_id,
        name: name,
        party: party,
        constituency_id: constituency_id
    }).then((response) => {
        const res = JSON.parse(response.request.response)
        return res
    })
}
