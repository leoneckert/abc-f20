const express = require('express')
const app = express()
const port = 3000

// for any incoming request, express will check if a correspinding file can be found in "public"
// e.g.
// request is: localhost:3000/
// ---> express check if a "index.html" file is in "public" (because "/" asks for the root folder and if no particular file is being asked for, the default is ALWAYS index.html)
// request is: localhost:3000/summer/beach.jpg
// ---> express check if there is a folder called "summer" inside "public" and if in that folder there is a "beach.jpg" file
app.use(express.static('public'))

// what is the "req" object?
app.get('/house', (req, res) => {
  console.log(req.query);
  let time = req.query.time;
  if(time == "day"){
    res.sendFile(__dirname + "/house-day/index.html")
  }else if(time == "night"){
    res.sendFile(__dirname + "/house-night/index.html")
  }
})


app.get("/secret", (req, res) => {
  console.log(req.query)
  if(req.query.secret == "teaspoon"){
    res.sendFile(__dirname + "/public/correct/index.html")
  }else{
    res.sendFile(__dirname + "/public/wrong/index.html")
  }
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
