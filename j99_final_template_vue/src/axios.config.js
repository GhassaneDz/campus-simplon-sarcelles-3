import axios from "axios";
import auth from "./utils/auth";

console.log(auth);

axios.defaults.baseURL = "http://localhost:8080/api/"; // le port de votre serveur
/*

axios.interceptors.request.use(config => {
    // Do something before request is sent...
    // les bodys des reqHTTP partent au format json ...
    const localAuthToken = auth.getLocalToken();
    // on essaie de récupérer le token d'auth
    config.headers["Content-Type"] = "application/json";
    // si le token existe, on l'envoie dans l'entête de chaque reqHTTP
    if (localAuthToken) config.headers["x-authenticate"] = localAuthToken;
    return config;

}, error => {
    // Do something with request error
    return Promise.reject(error);
});

export default axios.defaults;

*/