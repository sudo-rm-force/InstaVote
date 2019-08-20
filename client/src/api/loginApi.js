const axios = require('axios')
const axiosInstance = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    baseURL: 'http://localhost:8080',
  });

export default function loginApi(voter_id, face_id, face_name) {
    return axiosInstance.post('/login', {
        voter_id: voter_id,
        face_id: face_id,
        face_name: face_name
    }).then((response) => {
        const res = JSON.parse(response.request.response)
        return res
    })
}
