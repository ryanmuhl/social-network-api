//Require Mongoose
const {Schema, model} = require('mongoose');

//Schema for User
const UsersSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            unique: true,
            required: true,
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
        },
        
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'Thoughts'
        }],

        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'Users'
        }]

    }, 

    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false
    }
)

//Create virtual called friendCount that retrieves the length of 
//the user's friends array field on query
UsersSchema.virtual('friendCount').get(function() {
    return this.friends.length;
})

// create the Users model
const Users = model('Users', UsersSchema);

// Export Users module
module.exports = Users;

