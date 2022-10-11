import { createStore } from "vuex";

export default createStore({
    state: {
        categories: ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'],
        pizzas: null,
        loading: true,
    },
    getters: {
        categories: s => s.categories,
        pizzas: s => s.pizzas
    },
    mutations: {
        setPizzas(state, pizzas) {
            state.pizzas = pizzas
        },
        setLoading(state) {
            state.loading = false
        }
    },
    actions: {
        fetchPizzas({ commit }) {
            fetch('pizzas.json')
                .then(res => res.json())
                .then((data) => {
                    setTimeout(async () => {
                        const piz = await JSON.stringify(data)
                        await commit('setPizzas', JSON.parse(piz))
                        commit('setLoading')
                    }, 2000)
                })
        }
    },
    modules: {}
})