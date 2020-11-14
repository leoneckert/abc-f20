// from: https://expressjs.com/en/starter/hello-world.html
const express = require('express')  // get the express code from node_modules (wo where it was installed)
const app = express()
const port = 3000

console.log(__dirname)
// define routers behaviour, what to return on which request

// "/" route
app.get('/', (req, res) => {
  console.log(__dirname)
  console.log("someone requested /");
  // res.sendFile('leon/index.html')
  res.sendFile(__dirname + '/leon/index.html');

})


// "/leon" route
app.get('/leon', (req, res) => {
  console.log("someone requested /leon");
  res.send('Hi Leon!')

})




// at last we start the server, listening on a specific port

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
