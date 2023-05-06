import axios from "axios";

export const authService = () => {
    const registration = (userData) => {
        return axios.post("https://whispering-river-87788.herokuapp.com/api/register", userData);
    };

    return{
        registration,
    };
};