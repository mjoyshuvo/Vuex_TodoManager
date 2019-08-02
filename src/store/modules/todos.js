import axios from "axios";

const state = {
    todos: []
};

const getters = {
    allTodos: state => state.todos
};

const actions = {
    async fetchTodos({ commit }) {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/todos"
        );
        commit("setTodos", response.data);
    },
    async addTodo({ commit }, title) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', 
        {title, completed: false});
        commit('newTodo', response.data);
    }
};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, newtodo) => state.todos.unshift(newtodo)
};

export default {
    state,
    getters,
    actions,
    mutations
};
