const B = {
    namespaced: true,
    state: {
        count: 2
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
            // state,
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

export default B