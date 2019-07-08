const ghpages = require('gh-pages')
  
ghpages.publish('public', err => {
  console.log('\n')
  if (err) {
    console.log(err += '💥\n' )
  } else {
    console.log('published ✅\n')
  }
})
