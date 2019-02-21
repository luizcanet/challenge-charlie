/* global self */
const bingURL = 'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR'

self.addEventListener('fetch', function (event) {
  if (event.request.url === bingURL) {
    console.log(event.request.url)
  }
})
