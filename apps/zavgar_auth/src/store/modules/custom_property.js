export default {
  state: {
    _save: true,
    data: {}
  },
  mutations: {
    SET_ALL_CUSTOM_PROPERTY(state, data) {
      state.data = data
    },
    SET_CUSTOM_PROPERTY(state, data = () => {}) {
      if (typeof data === 'function') {
        state.data = data(state.data)
      }
    },
    REMOVE_ALL_CUSTOM_PROPERTY(state, data = () => {}) {
      if (typeof data === 'function') {
        state.data = data(state.data)
      }
    }
  },
  actions: {}
}
