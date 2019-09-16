const ajax = function({
    method = 'GET',
    url = '',
    data = null,
    params = null,
    baseURL = '',
    withCredentials = false
} = {}) {
    const promise = new Promise(function(resolve, reject) {
        // api url
        let apiUrl = baseURL + url;
        if (params) {
            let urlParams = [];
            for (let key in params) {
                urlParams.push(`${key}=${params[key]}`)
            }
            apiUrl += `?${urlParams.join('&&')}`;
        }
        // access
        const accessHandler = function() {
            if (this.readyState !== 4) {
                return;
            }
            if (this.status === 200) {
                resolve(JSON.parse(this.response));
            } else {
                reject(new Error(this.statusText));
            }
        };
        // error
        const errorHandler = function() {
            console.error(this.statusText);
        };
        // timeout
        const timeoutHandler = function() {
            console.error(`The request for ${apiUrl} timed out.`);
        };
        // client
        const client = new XMLHttpRequest();
        client.open(method, apiUrl, true);
        // status
        client.onreadystatechange = accessHandler;
        client.ontimeout = timeoutHandler;
        client.onerror = errorHandler;
        // config
        client.responseType = "json";
        client.timeout = 10 * 1000;
        client.withCredentials = withCredentials;
        client.setRequestHeader("Accept", "application/json");
        // send
        client.send(data);

    });

    return promise;
};

export { ajax }