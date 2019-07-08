const ghpages = require('gh-pages')
  
ghpages.publish('public', err => {
  if (err) {
    console.log(err += '💥\n' )
  } else {
    console.log('published ✅\n')
  }
})
