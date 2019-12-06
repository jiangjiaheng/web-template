// 配置API接口地址
const root = ''

// 引入原生Ajax
import { ajax } from './ajax'

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

// 封装Ajax接口

function apiAjax(method, url, params, success, failure) {
    if (params) {
        params = filterNull(params)
    }
    ajax({
            method: method,
            url: url,
            data: method === 'POST' || method === 'PUT' ? params : null,
            params: method === 'GET' || method === 'DELETE' ? params : null,
            baseURL: root,
            withCredentials: false
        })
        .then(function(res) {
            if (success) {
                success(res)
            }
        })
        .catch(function(err) {
            if (failure) {
                failure(err)
            } else {
                throw err;
            }
        })
}

// 返回在vue模板中的调用接口
export default {
    get: function(url, params, success, failure) {
        return apiAjax('GET', url, params, success, failure)
    },
    post: function(url, params, success, failure) {
        return apiAjax('POST', url, params, success, failure)
    },
    put: function(url, params, success, failure) {
        return apiAjax('PUT', url, params, success, failure)
    },
    delete: function(url, params, success, failure) {
        return apiAjax('DELETE', url, params, success, failure)
    }
}