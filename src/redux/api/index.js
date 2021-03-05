import axios from "axios";

//***************************API FOR MOVIES************************//
const baseURL = "http://www.omdbapi.com?apiKey=f3692617";

export const apiCall = (url, data, headers, method) =>
    axios({
        method,
        url: baseURL + url,
        data,
        headers,
    });

//***************************API FOR MOVIES************************//
//*****************************************************************//

//***************************API FOR REGISTER AND LOGIN************************//
const server_URL = "http://localhost:8000/api/";

//Register 
export const register = (fullname, email, password) => {
    return axios.post(server_URL + "register", {
        fullname,
        email,
        password,
    });
};

//Login sin completar 
export const login = (email, password) => {
    
};

//Logout todavia no se seteo el tema del localstorage
export const loguot = () => {
    localStorage.removeItem('user') //es el generado por la mongodb
}

//***************************API FOR REGISTER AND LOGIN*************************//
