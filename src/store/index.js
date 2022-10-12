import { createStore } from "vuex";

const mapArray = (state, element, action) => {
    switch (action) {
        case 'plus':
            return state.map(item => {
                if (item.id === element.id && item.size === element.size && item.type === element.type) {
                    return { ...item, count: item.count + 1, totalOnePrice: item.price + item.totalOnePrice }
                } else {
                    return item
                }
            })
        case 'minus':
            return state.map(item => {
                if (item.id === element.id && item.size === element.size && item.type === element.type) {
                    return { ...item, count: item.count - 1, totalOnePrice: item.totalOnePrice - item.price }
                } else {
                    return item
                }
            }).filter(item => item.count != 0)
        case 'clear':
            return state.map(item => {
                if (item.id === element.id && item.size === element.size && item.type === element.type) {
                    return { ...item, count: 0, totalOnePrice: item.totalOnePrice - item.price }
                } else {
                    return item
                }
            }).filter(item => item.count != 0)
    }
}

export default createStore({
    state: {
        categories: ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'],
        types: ['Тонкое', 'Традиционное'],
        sorts: ['популярности', 'цене', 'алфавиту'],
        cart: [],
        search: '',
        pizzas: null,
        loading: true,
        totalPrice: 0,
        totalPizzas: 0,
    },
    getters: {
        categories: s => s.categories,
        pizzas: s => s.pizzas,
        loading: s => s.loading,
        types: s => s.types,
        sorts: s => s.sorts,
        search: s => s.search,
        cart: s => s.cart,
        totalPrice: s => s.totalPrice,
        totalPizzas: s => s.totalPizzas
    },
    mutations: {
        setPizzas(state, pizzas) {
            state.pizzas = pizzas
        },
        setLoading(state) {
            state.loading = false
        },
        setSearch(state, search) {
            state.search = search
        },
        setCart(state, pizza) {

            const foundProduct = state.cart.find(item => item.id === pizza.id && item.size === pizza.size && item.type === pizza.type)

            if (foundProduct) {
                state.cart = mapArray(state.cart, pizza, 'plus')
            } else {
                state.cart.push({ ...pizza, count: 1, totalOnePrice: pizza.price })
            }

            state.totalPrice += pizza.price
            state.totalPizzas++
        },
        plusCart(state, pizza) {
            state.cart = mapArray(state.cart, pizza, 'plus')
            state.totalPrice += pizza.price
            state.totalPizzas++
        },
        minusCart(state, pizza) {
            state.cart = mapArray(state.cart, pizza, 'minus')
            state.totalPrice -= pizza.price
            state.totalPizzas--
        },
        clearCart(state) {
            state.cart = [],
                state.totalPizzas = 0,
                state.totalPrice = 0
        },
        deletePizza(state, pizza) {
            state.cart = mapArray(state.cart, pizza, 'clear')
            state.totalPizzas -= pizza.count
            state.totalPrice -= pizza.totalOnePrice
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
})