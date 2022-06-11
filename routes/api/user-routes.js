const router = require ('express').Router();

const {
   
    getAllUsers,
    createUsers,

} = require ('../../controllers/user-controller');

//get all users and create user api/users (get)
router.route('/').get(getAllUsers)

//get all users and create user api/users (post)
router.route('/').post(createUsers);

module.exports = router;