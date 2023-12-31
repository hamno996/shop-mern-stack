import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjY1MTg3YmZmMmEwNjAwNTVhMzY3OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTMyMjYzMiwiZXhwIjoxNjQxNTgxODMyfQ.Yd3P8dJlugIJDoUz_OMgcsXRVNwUIit_mfFHO4KzaQ8";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});