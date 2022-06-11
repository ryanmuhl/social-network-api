//Require User and Thoughts model
const {Users} = require('../models')


//User Controller
const userController = {

// Create User
  createUsers({body}, res) {
    Users.create(body)
    .then(dbUserData => res.json(dbUserData))
    .catch(err => res.status(400).json(err));
},

//Get all Users
getAllUsers(req, res) {
    Users.find()
    .select('-__v')
    .then((dbUserData) => {
        res.json(dbUserData);
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err)
    })

},

    // Get User by ID
    getUsersById({params}, res) {
        Users.findOne({_id: params.id })
        .populate({path: 'thoughts', select: '-__v'})
        .populate({path: 'friends', select: '-__v'})
        .select('-__v')
        .then(dbUsersData => {
            if(!dbUsersData) {
                res.status(404).json({message: 'No User associated with this ID'});
                return; 
            }
            res.json(dbUsersData)
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
    },

}

//Export userController
module.exports = userController;