const color = require('./color_console')
const fs = require('fs');
const path = require('path');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const config_add_apps = {
  name: null,
  create_app: null,
  title: null
}

console.log(color.FgRed, '█████████████████████████')
console.log(color.FgRed, '█ CREATE NEW WIALON APP █')
console.log(color.FgRed, '█████████████████████████')
console.log(color.FgCyan);


readline.question('Enter name wialon apps (Введите имя wialon apps): ', (name) => {
  if (name === null) {
    readline.close()
  }
  readline.question('Enter title wialon apps (Введите название wialon apps): ', (title) => {
    if (title === null) {
      title = name
    }
    readline.question('Create wialon apps (Создать wialon apps)? [ Y - yes | N - no ]: ', (create_app) => {
      if (create_app === null) {
        readline.close()
      }
      config_add_apps.name = name.split(' ').join('_')
      config_add_apps.title = title
      config_add_apps.create_app = ['Y','y','Д','д'].indexOf(create_app) >= 0

      createFiles();
      readline.close()
    });
  });
});
/*******************************************************/
/*******************************************************/
const index_js = `import Vue from 'vue'
import router from './router'
import '@/[root_folder]/src/lang'
import App from '@/[root_folder]/src/app.vue'
import 'wialonjs'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
`;
/*******************************************************/
/*******************************************************/
const app_vue = `<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>

</style>
`;
/*******************************************************/
/*******************************************************/
const lang_js = `import Vue from 'vue'

const lang_browser = (window.navigator
  ? (window.navigator.language || window.navigator.systemLanguage || window.navigator.userLanguage)
  : 'en'
).substr(0, 2).toLowerCase()

const files = require.context('../lang', true, /.*\\/*.js/).keys()
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
`;
/*******************************************************/
/*******************************************************/
const index_html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="renderer" content="webkit">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <title></title>
</head>
<body>
<div id="app"></div>
<!-- built files will be auto injected -->
</body>
</html>
`
/*******************************************************/
/*******************************************************/
const hello_word_vue = `<template>
  <div>
    {{ $t('hello_word') }}
  </div>
</template>

<script>
export default {
  name: 'HelloWord'
}
</script>

<style scoped>

</style>`
/*******************************************************/
/*******************************************************/
const router_index_js = `import Vue from 'vue'
import Router from 'vue-router'
import HelloWord from '@/[root_folder]/src/views/HelloWord.vue'

Vue.use(Router)

const routes = [
  {
    name: 'HelloWord',
    path: '/',
    component: HelloWord
  }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
})
`
/*******************************************************/
/*******************************************************/

function createFolder(file) {
  let dir = path.join(__dirname, '../apps/' + config_add_apps.name + '/' + file)
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
  }
}

function createFile(file, data) {
  let dir = path.join(__dirname, '../apps/' + config_add_apps.name + '/' + file)
  fs.writeFileSync(dir, data);
}

const createFiles = () => {
  const files = {
    src: {
      'App.vue': app_vue,
      'lang.js': lang_js,
      'views': {
        'HelloWord.vue': hello_word_vue
      }
    },
    router: {
      'index.js': router_index_js.split('[root_folder]').join(config_add_apps.name)
    },
    app: {
      'app.json': JSON.stringify({
        "name": config_add_apps.name,
        "url_name": config_add_apps.name,
        "title": config_add_apps.title,
        "description": "",
        "author": {
          "name": "",
          "url": ""
        },
        "licenses": [
          {
            "type": " LGPL",
            "url": "http://www.gnu.org/licenses/lgpl.html"
          }
        ],
        "dependencies": {"jquery": "1.8.3"},
        "modules": ["sdk"],
        "params": [],
        "docs": [],
        "links": {"github": ""},
        "language": [],
        "build_date": (new Date()).toISOString().slice(0, 10),
        "release_date": (new Date()).toISOString().slice(0, 10),
        "version": "0.0.1",
        "keywords": ["wialon", "wialon-apps"],
        "browser": {
          "ie": "9+",
          "opera": "10+",
          "safari": "10+",
          "chrome": "20+",
          "firefox": "15+"
        },
        "logo": "logo.png",
        "images_path": "images",
        "desc_path": "desc"
      }),
      'logo.png': '',
      'logo.svg': '',
      'images': {},
      'desc': {
        'en.html': '<p>Description app</p>'
      }
    },
    lang: {
      'en.js': 'TRANSLATIONS = {\n\t"hello_word": "Hello Word"\n}'
    },
    'index.html': index_html,
    'index.js': index_js.split('[root_folder]').join(config_add_apps.name),
  }

  const recursive = function (name, cursor, path = null) {
    if (name.indexOf('.') >= 0) {
      // create_file
      createFile(path ? path +'/'+ name : name, cursor)
    } else {
      // create_folder
      createFolder(path ? path +'/'+ name : name)
      Object.keys(cursor).forEach(file => {
        recursive(file, cursor[file], path ? path +'/'+ name : name)
      })
    }
  }

  Object.keys(files).forEach(file => {
    recursive(file, files[file])
  })
}






//
