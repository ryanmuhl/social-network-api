//Require User and Thoughts model
const { Users } = require('../models')


//User Controller
const userController = {

  // Create User
  createUsers({ body }, res) {
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
  getUsersById({ params }, res) {
    Users.findOne({ _id: params.userId })
      .populate({ path: 'thoughts', select: '-__v' })
      .populate({ path: 'friends', select: '-__v' })
      .select('-__v')
      .then(dbUsersData => {
        if (!dbUsersData) {
          res.status(404).json({ message: 'No ID found' });
          return;
        }
        res.json(dbUsersData)
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err)
      })
  },

  // Update User by their ID
  updateUser({ params, body }, res) {
    Users.findOneAndUpdate({ _id: params.userId }, body, { new: true })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No ID found' });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },

  // Delete User by their ID
  deleteUser({ params }, res) {
    Users.findOneAndDelete({ _id: params.userId })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user associated with this ID' });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },

  //Add Friend to a User by ID
  createFriend({ params }, res) {
    Users.findOneAndUpdate(
      { _id: params.userId },
      { $push: { friends: params.friendId } },
      { new: true, runValidators: true }
    )
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user associated with this ID' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  },

  //Delete Freind from User by ID
  deleteFriend({ params }, res) {
    Users.findOneAndUpdate(
      { _id: params.userId },
      { $pull: { friends: params.friendId } },
      { new: true }
    )
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user associated with this ID' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  }

}

//Export userController
module.exports = userController;