//Require Mongoose
const { Schema, model } = require('mongoose');

//require reaction Schema
const ReactionsSchema = require('./Reaction')

// Schema for Thoughts
const ThoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // get: timestamp => dateFormat (timestamp)
        },
        username: {
            type: String,
            required: true
        },
        // Array of nested documents
        reactions: [ReactionsSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
)

//Create virtual called reactionCount that retrieves the length of the thoughts
//reactions array field on query
ThoughtsSchema.virtual('reactionCount').get(function () {
    return this.reactions.length
})

//Create Thoughts model
const Thoughts = model('Thoughts', ThoughtsSchema);

//exprot Thoughts Model
module.exports = Thoughts;