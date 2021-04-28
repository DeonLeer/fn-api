const FortniteAPI = require("fortnite-api-io")
const fortniteAPI = new FortniteAPI('98eb76e4-3ed60647-cf507273-a923be8d')

fortniteAPI.getTournaments()
.then(res => {
  console.log(res.events.length)
})