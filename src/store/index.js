import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: () => ({
    post: [],
    page: 4
  }),
  getters: {

  },
  mutations: {
    mutPost (state, post) {
      state.post = post
    },

    mutPage (state, num, actions) {
      state.page = num
    }
  },
  actions: {
    async loadFull ({ state, commit }) {
      try {
        const response = await axios.get(process.env.VUE_APP_URL, {
          params: {
            client_id: process.env.VUE_APP_ACCESS_KEY,
            page: state.page
          }
        })
        commit('mutPost', [...response.data])
      } catch (err) {
        console.log(err)
      }
    }
  },
  modules: {
  }
})
