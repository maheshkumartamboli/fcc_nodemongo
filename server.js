var express = require('express')
var dotenv = require('dotenv')
var app = express()

dotenv.config(process.cwd(), '.env')
try {
  var moongoose = require('mongoose')
  moongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then((value) => {
    console.log('MongoDb is connected', value)
  }).catch((err) => {
    console.log('mongodb error', err)
  })
} catch (error) {
  console.log(error)
}

app.listen(process.env.PORT || 3000, function () {
  console.log('Server runing on ', process.env.PORT || 3000)
})
