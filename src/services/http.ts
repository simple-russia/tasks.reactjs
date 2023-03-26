import axios, { AxiosHeaders } from 'axios';

function getCookie(name: string): string | undefined {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        return parts.pop()?.split(';').shift();
    }
    return undefined;
}

const http = axios.create();

http.interceptors.request.use(config => {
    // set csrf token
    const csrfToken = getCookie('csrftoken');
    config.headers = config.headers as AxiosHeaders;

    if (csrfToken) {
        config.headers.set('X-CSRFToken', csrfToken);
    }

    return config;
});

http.interceptors.response.use((response) => {
    if (response.data === '') {
        response.data = null;
    }

    return response;
},
(response) => {
    if (response.data === '') {
        response.data = null;
    }

    return response;
},);

export { http };
