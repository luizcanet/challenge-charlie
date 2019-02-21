/* global Worker */
const basePath = '/modules/background-bing'
const service = new Worker(basePath + '/background-bing.service.js')

service.onmessage = function (e) {
  console.log(e)
  service.terminate()
}
