const express = require('express')
const path = require('path')

const app = express()

const PORT = 3005

const pathClient = path.join(__dirname, '../client')
app.use(express.static(pathClient))

app.listen(PORT)
console.log(`Dude PORT ${PORT} is listening.... be scare.....`)