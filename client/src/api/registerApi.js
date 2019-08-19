const axios = require('axios')
const axiosInstance = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    baseURL: 'http://localhost:8080',
  });

export default function registerApi(voter_id, gender, mobile_no) {
    return axiosInstance.post('/userUpdate', {
        voter_id: voter_id,
        gender: gender,
        mobile_no: mobile_no
    }).then((response) => {
        const res = JSON.parse(response.request.response)
        return res
    })
}
