const router = require ('express').Router();

const {
   
    getAllUsers,
    createUsers,
    getUsersById,

} = require ('../../controllers/user-controller');


//get all users and create user api/users (get and post)
//api/user
router.route('/').get(getAllUsers).post(createUsers)

//get user by id (get)
//api/user/id
router.route('/:id').get(getUsersById);

module.exports = router;