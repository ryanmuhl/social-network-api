const { Error } = require('mongoose');
const {Users, Thoughts} = require('../models')

const userController = {
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