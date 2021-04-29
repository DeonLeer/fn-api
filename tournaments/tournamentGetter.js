const axios = require('axios')
const fs = require('fs')
const regions = ['NAW', 'NAE', 'BR', 'EU', 'ME', 'ASIA', 'OCE']
let urlArray = []
for (let region of regions) {
  let tempString = `https://fortniteapi.io/v1/events/list?lang=en&region=${region}`
  urlArray.push(tempString)
}
const url0 = axios.get(urlArray[0], {headers: {Authorization: '98eb76e4-3ed60647-cf507273-a923be8d'}})
const url1 = axios.get(urlArray[1], {headers: {Authorization: '98eb76e4-3ed60647-cf507273-a923be8d'}})
const url2 = axios.get(urlArray[2], {headers: {Authorization: '98eb76e4-3ed60647-cf507273-a923be8d'}})
const url3 = axios.get(urlArray[3], {headers: {Authorization: '98eb76e4-3ed60647-cf507273-a923be8d'}})
const url4 = axios.get(urlArray[4], {headers: {Authorization: '98eb76e4-3ed60647-cf507273-a923be8d'}})
const url5 = axios.get(urlArray[5], {headers: {Authorization: '98eb76e4-3ed60647-cf507273-a923be8d'}})
const url6 = axios.get(urlArray[6], {headers: {Authorization: '98eb76e4-3ed60647-cf507273-a923be8d'}})
Promise.all([
  Promise.resolve(url0),
  Promise.resolve(url1),
  Promise.resolve(url2),
  Promise.resolve(url3),
  Promise.resolve(url4),
  Promise.resolve(url5),
  Promise.resolve(url6)
])
.then((all) => {
  for (let i = 0; i < 7; i++) {
    fs.writeFile(`tournaments/data${i}`, JSON.stringify(all[i].data, null, 2), function(err) {
      if (err) return console.log('error')
    })
  }
})