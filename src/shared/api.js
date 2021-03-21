import axios from "axios"

const baseURL = 'http://localhost:8080/api/'

export const getEvents = () => {
    let config = {

    }

    return axios.get(`${baseURL}events`, config).then(res => res.data)
}

export const getEventById = (eventID) => {
    const token = localStorage.getItem('token')
    let headers = {
        token: `Bearer ${token}`
    }

    return axios.get(`${baseURL}event/${eventID}`, headers).then(res => res.data)
}

export const login = ({ email, password }) => {

    let config = {
        email,
        password
    }

    return axios.post(`${baseURL}login`, config).then(res => res.data)
}

export const getProfile = ({ token, userID }) => {

    let headers = {
        Authorized: `Bearer ${token}`
    }

    return axios.get(`${baseURL}user/${userID}`, headers).then(res => res.data)
}