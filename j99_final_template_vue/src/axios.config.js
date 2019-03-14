import axios from "axios";
import auth from "./utils/auth";
import store from "./store/store";

axios.defaults.baseURL = "http://localhost:9999/api"; // le port de votre serveur

const displayAppMessage = appMessage => {
  store.commit("appEvents/setCurrentMessage", {
    text: appMessage.text,
    level: appMessage.level
  });
};

// LES REQUETES VERS LE BACKEND SONT TOUTES CAPTUREES ICI !!!
axios.interceptors.request.use(
  config => {
    // Do something before request is sent...
    // les bodys des reqHTTP partent au format json ...
    const localAuthToken = auth.getLocalToken();
    // on essaie de récupérer le token d'auth
    config.headers["Content-Type"] = "application/json";
    // si le token existe, on l'envoie dans l'entête de chaque reqHTTP
    if (localAuthToken) config.headers["Authorization"] = localAuthToken;
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// LES REPONSES DU BACKEND SONT TOUTES CAPTUREES ICI !!!
axios.interceptors.response.use(
  function catchResponse(response) {
    const appMessage = response.data.appMessage; // message de succès
    if (response.data.appMessage) {
      displayAppMessage(appMessage);
    }
    return response;
  },
  function catchErrors(error) {
    /* si besoin, checker logs ci-dessous... */
    // console.log("text de l'erreur =>\n", error);
    // console.log("objet de l'erreur =>\n", error.response);
    const appMessage = error.response.data.appMessage; // message d'erreur
    if (appMessage) {
      displayAppMessage(appMessage);
    }
    return Promise.reject(error);
  }
);

export default axios.defaults;
