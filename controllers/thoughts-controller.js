// Require Thoughts and Users Models
const {Thoughts, Users} = require('../models');

//Thoughts Controller
const thoughtsController = {

    // Create new thought
    createThoughts({params, body}, res) {
        Thoughts.create(body)
        .then(({_id}) => {
            return Users.findOneAndUpdate({ _id: params.userId}, {$push: {thoughts: _id}}, {new: true});
        })
        .then(dbThoughtsData => {
            if(!dbThoughtsData) {
                res.status(404).json({message: 'No Thoughts associated with this ID'});
                return;
            }
            res.json(dbThoughtsData)
        })
        .catch(err => res.json(err)); 
    },

      // Get all Thoughts
      getAllThoughts(req,res) {
        Thoughts.find({})
        .populate({path: 'reactions', select: '-__v'})
        .select('-__v')
        .then(dbThoughtsData => res.json(dbThoughtsData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    },

}

module.exports = thoughtsController;