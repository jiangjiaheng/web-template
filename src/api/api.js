// 配置API接口地址
// const root = 'https://cnodejs.org/api/v1'
const root = ''
    // 引用axios
import axios from 'axios'
// 自定义判断元素类型JS
function toType(obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull(params) {
    for (let key in params) {
        if (params[key] === null) {
            delete params[key]
        }
        if (toType(params[key]) === 'string') {
            params[key] = params[key].trim()
        } else if (toType(params[key]) === 'object') {
            params[key] = filterNull(params[key])
        } else if (toType(params[key]) === 'array') {
            params[key] = filterNull(params[key])
        }
    }
    return params
}

function apiAxios(method, url, params, success, failure) {
    if (params) {
        params = filterNull(params)
    }
    axios({
            method: method,
            url: url,
            data: method === 'POST' || method === 'PUT' ? params : null,
            params: method === 'GET' || method === 'DELETE' ? params : null,
            baseURL: root,
            withCredentials: false
        })
        .then(function(res) {
            if (res.status === 200) {
                if (success) {
                    success(res.data)
                }
            } else {
                if (failure) {
                    failure(res)
                } else {
                    window.alert('error: ' + JSON.stringify(res.data))
                }
            }
        })
        .catch(function(err) {
            let res = err.response
            if (err) {
                window.alert('api error, HTTP CODE: ' + res.status)
            }
        })
}

// 返回在vue模板中的调用接口
export default {
    get: function(url, params, success, failure) {
        return apiAxios('GET', url, params, success, failure)
    },
    post: function(url, params, success, failure) {
        return apiAxios('POST', url, params, success, failure)
    },
    put: function(url, params, success, failure) {
        return apiAxios('PUT', url, params, success, failure)
    },
    delete: function(url, params, success, failure) {
        return apiAxios('DELETE', url, params, success, failure)
    }
}