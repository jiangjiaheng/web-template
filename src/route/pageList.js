// page list config
import Home from '@/pages/Home'
import Information from '@/pages/Information'
import About from '@/pages/About'
import Setting from '@/pages/Setting'
import Other from '@/pages/Other'

const pageList = {
    home: {
        title: '首页',
        name: 'home',
        component: Home
    },
    information: {
        title: '详情',
        name: 'information',
        component: Information
    },
    about: {
        title: '关于',
        name: 'about',
        component: About
    },
    more: {
        title: '更多',
        name: 'more',
        subpages: {
            setting: {
                title: '设置',
                name: 'setting',
                component: Setting
            },
            other: {
                title: '其他',
                name: 'other',
                component: Other
            },
        }
    }
};

export default pageList;