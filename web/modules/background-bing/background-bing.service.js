/* global fetch, postMessage */
let msg = {}

fetch('/background-image')
  .then(response => {
    if (response.ok) {
      response.json().then(data => {
        let bingDomain = 'https://www.bing.com'
        msg.status = 'dataLoaded'
        msg.imageUrl = bingDomain + data.images.shift().url
        postMessage(msg)
      })
    } else {
      throw new Error(response.statusText)
    }
  })
  .catch(err => {
    msg.status = 'serviceError'
    msg.errorMessage = err.message
    postMessage(msg)
  })
