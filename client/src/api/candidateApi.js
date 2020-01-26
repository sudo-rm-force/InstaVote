const axios = require('axios')
const axiosInstance = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    baseURL: 'http://localhost:8080',
  });

export default function candidateApi(candidate_id) {
    return axiosInstance.post('/getCandidate', {
        candidate_id: candidate_id,
    }).then((response) => {
        // const res = JSON.parse(response.request.response)
        return response.data
    })
}
