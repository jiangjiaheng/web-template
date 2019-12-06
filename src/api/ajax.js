const ajax = function({
    // 定义接口参数
    method = 'GET', // 请求方式：get, post, put, delete 
    url = '', // 请求连接
    data = null, // post data
    params = null, // get params
    baseURL = '', // domain URL
    withCredentials = false // api验证请求
} = {}) {
    const promise = new Promise(function(resolve, reject) {
        // api url
        let apiUrl = baseURL + url;
        // create get params
        if (params) {
            let urlParams = [];
            for (let key in params) {
                urlParams.push(`${key}=${params[key]}`)
            }
            apiUrl += `?${urlParams.join('&&')}`;
        }
        // access
        const accessHandler = function() {
            // readState === 4, 表示api接口请求完成
            if (this.readyState !== 4) {
                return;
            }
            // 根据status状态码进行相关操作
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
        const client = new XMLHttpRequest(); // 生成XMLHttpRequest实例对象
        client.open(method, apiUrl, true); // 配置client参数
        // status
        client.onreadystatechange = accessHandler; // 请求成功
        client.ontimeout = timeoutHandler; // 请求超时 
        client.onerror = errorHandler; // 请求错误
        // config
        client.responseType = "json"; // 返回值：json
        client.timeout = 10 * 1000; // 超时时间：10s
        client.withCredentials = withCredentials; // 设置验证
        client.setRequestHeader("Accept", "application/json"); // 设置请求头
        // send
        client.send(data); // 发生请求

    });

    return promise; // 输出promise对象
};

export { ajax }