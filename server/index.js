const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()

const server = express()
const PORT = 8000
const baseURL = 'api/v1'

server.use( bodyParser.json() )
server.use( cors() )

server.get( '/', ( request, response ) => {
    response.status( 200 ).send( 'The Stoic Youth Newsletter' )
})

server.listen( PORT, () => {
    console.log(`Server running on port ${PORT}`)
})