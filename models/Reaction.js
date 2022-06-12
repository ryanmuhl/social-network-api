//Require Mongoose
const { Schema, Types } = require('mongoose');



// Reaction Schema
const reactionSchema = new Schema(
    {
        reactionid: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        username: {
            type: String,
            required: true
        },
        reactionBody: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
    },

    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
)

//Export reactionSchema
module.exports = reactionSchema;