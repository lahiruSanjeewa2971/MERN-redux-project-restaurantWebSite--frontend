import axios from "axios";

const API_URL = 'http://localhost:5001/user/register'
const API_LOGIN = 'http://localhost:5001/user/login'

//register user
const register = async (useData) => {
    const responce = await axios.post(API_URL, useData)

    if(responce.data){
        localStorage.setItem('user', JSON.stringify(responce.data))
    }

    return responce.data
}

//login user
const login = async (useData) => {
    const responce = await axios.post(API_LOGIN, useData)

    if(responce.data){
        localStorage.setItem('user', JSON.stringify(responce.data))
    }

    return responce.data
}

const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    logout,
    login,
}

export default authService