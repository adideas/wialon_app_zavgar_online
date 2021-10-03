const query = Object.fromEntries((new URLSearchParams(window.location.search)).entries())

const frame = {
  source: `${query.baseUrl}/wialon/post.html`,
  post: null,
  id: 0,
  connect: false
}

const buffer = {
  // buffer message
}

const output = (data) => {
  if (data.id >= 0 && buffer[data.id]) {
    buffer[data.id](data)
  }
}

const registerFrame = () => {
  const response = {
    id: frame.id++,
    source: frame.source,
    chunkedPrefix: 'posthtml1',
    enableChunkedResult: false
  }

  buffer[response.id] = (res) => {
    if (res && res.text) {
      if (res.text.error && res.text.error > 0) {
        frame.connect = false
      } else{
        frame.connect = true
      }
    } else {
      frame.connect = false
    }
  }

  frame.post.postMessage(JSON.stringify(response), query.baseUrl)
}

window.addEventListener('message', (event) => {
  if (!frame.post) {
    const component = document.getElementById('wialon_post')
    component.onload = () => {
      frame.post = component.contentWindow
      setTimeout(() => {
        registerFrame()
      }, 100)
    }
    component.src = frame.source
  } else {
    output(JSON.parse(event.data))
  }
}, false)

export function post(svc, params = {}) {
  if (frame.connect) {
    return new Promise((resolve, reject) => {
      if ((!query.sid) || (!query.baseUrl)) {
        reject()
      }
      if (!params) {
        params = {}
      }
      const request = { params: params, sid: query.sid }

      const response = {
        id: frame.id++,
        url: `/wialon/ajax.html?svc=${svc}&sid=${query.sid}`,
        params: Object.keys(request).map(key => key + '=' + (typeof request[key] === 'object' ? encodeURIComponent(JSON.stringify(request[key])) : request[key])).join('&'),
        source: frame.source
      }

      buffer[response.id] = (res) => {
        if (res && res.text) {
          if (res.text.error && res.text.error > 0) {
            reject()
          } else {
            resolve(res.text)
          }
        } else {
          reject()
        }
      }

      frame.post.postMessage(JSON.stringify(response), query.baseUrl)
    })
  } else {
    return new Promise((resolve, reject) => {
      const interval = setInterval(() => {
        if (frame.connect) {
          clearInterval(interval)
          post(svc, params).then(res => resolve(res)).catch(err => reject(err))
        }
      }, 100)
      setTimeout(() => {
        if (!frame.connect) {
          clearInterval(interval)
          reject()
        }
      }, 5000)
    })
  }
}

export function getQuery() {
  return query
}
