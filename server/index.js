const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()

const server = express()
const PORT = process.env.PORT || 8000
const baseURL = '/api/v1'

// mongoose config
mongoose.connect(process.env.MONGODB_URI)

// Routes
const SubscriptionRoutes = require('./routes/SubscriptionRoutes')

server.use( bodyParser.json() )
server.use( cors() )

server.get( '/', ( request, response ) => {
    response.status( 200 ).send( 'The Stoic Youth Newsletter' )
})

server.use( `${baseURL}/subscribe`, SubscriptionRoutes)

server.listen( PORT, () => {
    console.log(`Server running on port ${PORT}`)
})