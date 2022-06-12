// Require Thoughts and Users Models
const { Thoughts, Users } = require('../models');

//Thoughts Controller
const thoughtsController = {

  // Create Thought associated with user ID
  createThoughts({ body }, res) {
    Thoughts.create(body)
      .then(dbThoughtData => {
        Users.findOneAndUpdate(
          { _id: body.userId },
          { $push: { thoughts: dbThoughtData._id } },
          { new: true }
        )
          .then(dbUserData => {
            if (!dbUserData) {
              res.status(404).json({ message: 'No thoughts associated with this ID' });
              return;
            }
            res.json(dbUserData);
          })
          .catch(err => res.json(err));
      })
      .catch(err => res.status(400).json(err));
  },

  //Get all Thoughts
  getAllThoughts(req, res) {
    Thoughts.find({})
      .populate({ path: 'reactions', select: '-__v' })
      .select('-__v')
      .then(dbThoughtsData => res.json(dbThoughtsData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // get one thought by it's id
  getThoughtById({ params }, res) {
    Thoughts.findOne({ _id: params.thoughtId })
      .then((dbThoughtData) => {
        // if no thought is found
        if (!dbThoughtData) {
          res.status(404).json({ message: "No thought associated with this ID" });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  //Update Thought by ID
  updateThought({ params, body }, res) {
    Thoughts.findOneAndUpdate({ _id: params.thoughtId }, body, { new: true })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No thought associated with this ID" });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.status(400).json(err));
  },

  // Delete thought by ID
  deleteThought({ params }, res) {
    Thoughts.findOneAndDelete({ _id: params.thoughtId })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No thought associated with this ID" });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.status(400).json(err));
  },



}

module.exports = thoughtsController;