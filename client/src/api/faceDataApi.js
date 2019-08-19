const axios = require('axios')
const axiosInstance = axios.create({
    headers: {
        'Content-Type': 'application/octet-stream',
        'Accept': 'application/octet-stream',
    },
    baseURL: 'http://localhost:8080',
  });

export default function loginApi(image) {
    return axiosInstance.post('/image', {
        image: image
    }).then((response) => {
        const res = JSON.parse(response.request.response)
        return res
    })
}
