const axios = require('axios')
const axiosInstance = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    baseURL: 'http://localhost:8080',
  });

export default function registerAdminApi(admin_id,mail) {
    return axiosInstance.post('/addAdmin', {
        admin_id: admin_id,
        mail: mail
    }).then((response) => {
        const res = JSON.parse(response.request.response)
        return res
    })
}
