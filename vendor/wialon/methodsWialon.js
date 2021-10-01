import { post, getQuery } from './axiosWialon'

export const classes = {
  'avl_time': 1,
  'avl_unit': 2,
  'avl_unit_group': 3,
  'user': 4,
  'avl_resource': 5,
  'avl_route': 6,
  'avl_retranslator': 7,
  'message': 8,
  'token': 9,
}

const cache = {
  // cache
}

export function loginSid() {
  return new Promise(resolve => {
    if (cache['loginSid']) {
      resolve(cache['loginSid'])
    }
    post('core/duplicate', {
      operateAs: getQuery().user,
      continueCurrentSession: true,
      checkService: '',
      restore: 0,
      appName: ''
    }).then(res => {
      cache['loginSid'] = res
      cache['custom_fields'] = res.user.prp
      resolve(cache['loginSid'])
    })
  });
}

export function getToken() {
  return post('token/list', {}).then(res => {
    const time = new Date().getTime()
    return res.filter(token => token.app === 'ZavgarOnline' && ((token.ct + token.dur) * 1000) > time)
  })
}

export function updateCustomProperty(name, value) {
  return loginSid().then(res => {
    return post('item/update_custom_property', {
      itemId: res.user.id,
      name: String(name).split(' ').join('_'),
      value: String(value),
    }).then(res => {
      if (!cache['custom_fields']) {
        cache['custom_fields'] = {}
      }
      cache['custom_fields'][res.n] = res.v
      return res
    })
  })
}

export function getCustomProperty(name) {
  return loginSid().then(res => {
    if (cache['custom_fields'] && cache['custom_fields'][name]) {
      return cache['custom_fields'][name]
    } else {
      return ""
    }
  })
}
