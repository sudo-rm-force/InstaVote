import axios from 'axios'
const config = require('../config/config.json')

export default class Response {
    // constructor({ id, userId, query }) {
    constructor() {
        // this.id = id
        // this.userId = userId
        // this.query = query
        // if(!this.userId){
        //     this.getURL = config.API.baseURL + 'responses/' + this.id + this.query
        // }
        // else{
        //     this.getURL = config.API.baseURL + 'responses/' + this.id + '/user?username=' + this.userId
        //     this.postURL = config.API.baseURL + 'responses/' + this.id + '/user?username=' + this.userId
        // }
        this.postURL = config.API.baseURL + 'user'
    }

    // fetchQuizResponse(){
    //     return axios.get(this.getURL)
    //     .then((res) => {
    //         const error = res.data.error
    //         if (error) throw error
    //         return res
    //     })
    //     .catch((err) => {
    //         return err
    //     })
    // }

    // fetchQuizResponseForUser(){
    //     return axios.get(this.getURL)
    //     .then(res => {
    //         const body = res.data
    //         const error = body.error
    //         if (error) throw error
    //         // Auth.validateAuth(body, this.URL)
    //         return body
    //     }).catch(err => {
    //         return err
    //     })
    // }

    // updateMarks(update) {
    //     return axios.post(this.postURL, { update })
    //     .then(res => {
    //         const body = res.data
    //         const error = body.error
    //         if (error) throw error
    //         // Auth.validateAuth(body, this.URL)
    //         return body
    //     }).catch(err => {
    //         return err
    //     })
    // }

    addUser(userData) {
        return axios.post(this.postURL, { userData })
        .then(res => {
            const body = res.data
            const error = body.error
            const msg = "registered successfully"
            if (error) throw error
            return msg
        }).catch(err => {
            const errmsg = "register failed"
            return errmsg
        })
    }
}
