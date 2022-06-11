// Require express router
const router = require('express').Router();


const { 
    getAllThoughts, 
    createThoughts,
    deleteThought
    

} = require('../../controllers/thoughts-controller');

//get all thoughts and create thoughts (get and post)
//api/thoughts
router.route('/').get(getAllThoughts).post(createThoughts);

//delete thought by id (delete)
//api/thoughts/id
router.route('/:id').delete(deleteThought);

// Export module router
module.exports = router;