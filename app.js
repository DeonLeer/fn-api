const fs = require('fs')
const FortniteAPI = require("fortnite-api-io")
const fortniteAPI = new FortniteAPI('98eb76e4-3ed60647-cf507273-a923be8d')

fortniteAPI.getTournaments({region: 'NAE'})
.then(res => {
  let string = JSON.stringify(res)
  fs.writeFile('data', string, function(err) {
    if (err) return console.log('error')
  })
})

//  8a118f519d2f4f8d86fa1a8edef7a10d