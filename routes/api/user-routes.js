const router = require ('express').Router();

const {
   
    getAllUsers,
    createUsers,
    getUsersById,
    updateUser,
    deleteUser,

} = require ('../../controllers/user-controller');


//GET all Users and Create User api/users (GET POST)
//api/user
router.route('/').get(getAllUsers).post(createUsers)

//Get User by ID, Edit User by ID, Delete User by ID(GET PUT DELETE)
//api/user/id
router.route('/:id').get(getUsersById).put(updateUser).delete(deleteUser);

module.exports = router;