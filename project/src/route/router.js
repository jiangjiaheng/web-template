import Vue from 'vue'
import Router from 'vue-router'
import pageList from './pageList'

Vue.use(Router)

let routes = [];
let defaultPage = '';
let pageNames = Object.keys(pageList);
let pushRoute = (name, component) => {
    routes.push({
        path: `/${name}`,
        name: name,
        component: component
    })
}

pageNames.forEach((name, index) => {
    let pageName;
    if (pageList[name].subpages) {
        let subpageNames = Object.keys(pageList[name].subpages);
        let subpages = pageList[name].subpages;
        subpageNames.forEach((name, index) => {
            (index === 0) && (pageName = name);
            pushRoute(name, subpages[name].component);
        })
    } else {
        (index === 0) && (pageName = name);
        pushRoute(name, pageList[name].component);
    }
    (index === 0) && (defaultPage = pageName);
})

routes.push({
    path: '/',
    redirect: `/${defaultPage}`
})

console.log(routes);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes
})