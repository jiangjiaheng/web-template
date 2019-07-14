const A = {
    namespaced: true,
    state: {
        count: 3
    },
    mutations: {
        add(state) {
            state.count++;
        },
        sub(state) {
            state.count--;
        }
    },
    actions: {
        subAsyn({
            state,
            commit
        }) {
            setTimeout(() => {
                commit('sub')
            })
        }
    },
    getters: {
        getCount: state => state.count
    }
}

export default A