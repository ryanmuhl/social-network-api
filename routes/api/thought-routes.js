// Require express router
const router = require('express').Router();


const { 
    getAllThoughts, 
    createThoughts
    

} = require('../../controllers/thoughts-controller');


router.route('/').get(getAllThoughts);

router.route('/').post(createThoughts);

// Export module router
module.exports = router;