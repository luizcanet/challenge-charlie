/* global fetch */
fetch('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR')
  .then(response => {
    console.log(response)
  })
  .catch(err => console.log(err))
