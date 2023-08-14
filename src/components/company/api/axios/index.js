import axios from "axios";

export const companyAxios = axios.create({
    // baseURL: process.env.REACT_APP_COMPANY_API,
    baseURL: "http://127.0.0.1:3000",
    headers: {
        "Content-Type": "application/json",
    },
});