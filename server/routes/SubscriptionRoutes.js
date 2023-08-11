const express = require('express')
const router = express.Router()
const Subscription = require('../models/SubscriptionModel')

router.get( '/', ( request, response ) => {
    Subscription.find().then( dbResponse => {
        response.status( 200 ).send( { subscriptions: dbResponse } )
    } )
})

router.post( '/', ( request, response ) => {
    const { email } = request.body

    if ( email ) {
        const newSubscription = new Subscription({ email })

        newSubscription
            .save()
            .then( () => {
                response.status(201).send({ message: 'subscribed!' })
            })

    } else {
        response.status( 400 ).send({ error: 'Email is required' })
    }
})

module.exports = router