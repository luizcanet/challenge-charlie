/* global Worker */
let basePath = '/modules/background-bing'
let service = new Worker(basePath + '/background-bing.service.js')

service.addEventListener('message', msg => {
  if (msg.data.status === 'dataLoaded') {
    document.body.style.backgroundImage = `url("${msg.data.imageUrl}")`
  }

  if (msg.data.status === 'serviceError') {
    document.body.style.backgroundImage = 'url("/images/background.jpg")'
  }

  service.terminate()
})
