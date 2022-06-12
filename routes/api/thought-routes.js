// Require express router
const router = require('express').Router();


const {
    getAllThoughts,
    createThoughts,
    updateThought,
    deleteThought,
    getThoughtById,


} = require('../../controllers/thoughts-controller');

//GET all Thoughts, Create Thought (get and post)
//api/thoughts
router.route('/').get(getAllThoughts).post(createThoughts);

//DELETE Thought by ID, EDIT Thought by ID (delete)
//api/thoughts/thoughtId
router.route('/:thoughtId').put(updateThought).delete(deleteThought).get(getThoughtById);

// Export module router
module.exports = router;