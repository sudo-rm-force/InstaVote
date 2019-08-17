import axios from 'axios'
const config = require('../config/config.json')

export default class Response {
    constructor() {
        this.postURL = config.baseURL
    }


    addUser(blob) {
        console.log(blob)
        return axios.post(this.postURL, { blob })
        .then(res => {
            const body = res.data
            const error = body.error
            if (error) throw error
            return body
        }).catch(err => {
            return err
        })
    }
}
