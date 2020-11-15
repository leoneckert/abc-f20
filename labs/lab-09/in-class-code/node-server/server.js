// from: https://expressjs.com/en/starter/hello-world.html
const express = require('express')  // get the express code from node_modules (wo where it was installed)
const app = express()
const port = 3000

console.log(__dirname)
// define routers behaviour, what to return on which request
app.use(express.static('public'))


let leoncount = 0;

// "/" route
app.get('/leon', (req, res) => {
  leoncount = leoncount + 1;
  console.log(leoncount, " people asked for leon")
  
  console.log(__dirname)
  console.log("someone requested /leon");
  // res.sendFile('leon/index.html')
  res.sendFile(__dirname + '/leon/index.html');

})



// at last we start the server, listening on a specific port

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
