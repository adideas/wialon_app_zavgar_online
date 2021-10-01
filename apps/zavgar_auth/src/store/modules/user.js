import { getQuery } from 'wialon/axiosWialon'

export default {
  state: {
    b: getQuery().b || '',
    baseUrl: getQuery().baseUrl || '',
    hostUrl: getQuery().hostUrl || '',
    lang: getQuery().lang || 'en',
    sid: getQuery().sid || '',
    authHash: getQuery().authHash || '',
    user: getQuery().user || '',
    v: getQuery().v || ''
  },
  mutations: {},
  actions: {}
}
