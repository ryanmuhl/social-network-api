//Require User and Thoughts model
const {Users, Thoughts} = require('../models')


//User Controller
const userController = {

// Create a new User
  createUsers({body}, res) {
    Users.create(body)
    .then(dbUserData => res.json(dbUserData))
    .catch(err => res.status(400).json(err));
},

//get all users
getAllUsers(req, res) {
    Users.find()
    .select('-__v')
    .then((dbUserData) => {
        res.json(dbUserData);
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err)
    })

}

}

module.exports = userController;