//Require Mongoose
const {Schema, model} = require('mongoose');


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
            //getter method ?????
        }
    }
)