/* global self, fetch */
const BING_URL = 'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR'

self.addEventListener('fetch', function (event) {
  if (event.request.url === BING_URL) {
    fetch(event.request.url, { mode: 'no-cors' })
      .then(response => {
        console.log(response)
      })
      .catch(err => console.log(err))
  }
})
