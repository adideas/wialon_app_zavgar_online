import { getCustomProperty, updateCustomProperty } from '../wialon'

export default (store) => {

  getCustomProperty('zavgar_online').then(res => {
    store.replaceState({ ...store.state, ...JSON.parse(res) })
  })

  store.subscribe((mutation, state) => {
    const saver = {}
    Object.keys(state).forEach(key => {
      if (state[key]._save) {
        saver[key] = state[key]
      }
    })
    updateCustomProperty('zavgar_online', JSON.stringify(saver))
  })
}
