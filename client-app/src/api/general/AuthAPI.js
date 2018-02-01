import axios from 'axios';
import {hashHistory} from "react-router";

const URL_API = process.env.URL_API;
const AUTH_KEY = {
    grant_type: process.env.GRANT_TYPE,
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET
};

export default {
    loginUser: (loginCredentials) => {
        const requestUrl = `${URL_API}/oauth/token`;
        delete axios.defaults.headers.common['Authorization'];

        return axios.post(requestUrl, {...AUTH_KEY, ...loginCredentials})
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                    // Error meldingen uitlezen en juiste error melding teruggeven.
                    return {error: 'Geen juiste login gegevens ingevuld'};
                }
            );
    },

    refreshToken: () => {
        const request = {
                grant_type: 'refresh_token',
                refresh_token: localStorage.getItem('refresh_token'),
                client_id: process.env.CLIENT_ID,
                client_secret: process.env.CLIENT_SECRET,
        };

        const requestUrl = `${URL_API}/oauth/token`;

        return axios.post(requestUrl, request);
            /*.then(function (response) {
                localStorage.setItem('access_token', response.data.access_token);
                localStorage.setItem('refresh_token', response.data.refresh_token);
            })
            .catch(function (error) {
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');

                hashHistory.push('/loguit');
                }
            );*/
    }
};