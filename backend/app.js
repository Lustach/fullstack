const express = require('express')
const morgan = require('morgan')
const path = require('path')
const app = express()
const cors = require('cors')
const bodyParser = require("body-parser")
const InitiateMongoServer = require("./particles/db.js")
InitiateMongoServer()
const corsOptions = {
	origin: 'http://localhost:8081/',
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(bodyParser.json())
app.get('/', cors(corsOptions), function (req, res) {
	res.json({ msg: `This is CORS-enabled for only  ${corsOptions.origin}` })
})

/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */

app.listen(3000, () => console.log('Server has been started on port 3000....'))

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use('/api/records', require('./models/Record'))
app.use("/user", require("./routes/user/signup"))
app.use("/user", require("./routes/user/login"))
app.use('/', express.static(path.join(__dirname, '../dist')))
