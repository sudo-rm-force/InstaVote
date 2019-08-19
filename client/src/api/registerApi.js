const axios = require('axios')
const axiosInstance = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    baseURL: 'http://localhost:8080',
  });

export default function registerApi(voter_id, gender, mobile_no, face_id) {
    return axiosInstance.post('/userUpdate', {
        voter_id: voter_id,
        gender: gender,
        mobile_no: mobile_no,
        face_id: face_id
    }).then((response) => {
        const res = JSON.parse(response.request.response)
        return res
    })
}
