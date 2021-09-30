import Vue from 'vue'

const lang_browser = (window.navigator
  ? (window.navigator.language || window.navigator.systemLanguage || window.navigator.userLanguage)
  : 'en'
).substr(0, 2).toLowerCase()

const files = require.context('../lang', true, /.*\/*.js/).keys()
const langs = {}

window.TRANSLATIONS = {}

for (let i = 0; i < files.length; i++) {
  const file_name = files[i].replace('./', '')
  const lang_name = file_name.split('.')[0]
  require('../lang/' + file_name)
  langs[lang_name] = window.TRANSLATIONS
  if (i === files.length - 1) {
    window.TRANSLATIONS = langs
  }
}

Vue.prototype.$t = function(key, lang = null) {
  if (!lang) {
    lang = lang_browser
  }
  if (window.TRANSLATIONS[lang] && window.TRANSLATIONS[lang][key]) {
    return window.TRANSLATIONS[lang][key]
  }
  if (window.TRANSLATIONS['en'] && window.TRANSLATIONS['en'][key]) {
    return window.TRANSLATIONS['en'][key]
  }
  return key
}
