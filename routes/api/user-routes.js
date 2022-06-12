const router = require ('express').Router();

const {
   
    getAllUsers,
    createUsers,
    getUsersById,
    updateUser,
    deleteUser,
    createFriend,
    deleteFriend,

} = require ('../../controllers/user-controller');


//GET all Users and Create User api/users (GET POST)
//api/user
router.route('/').get(getAllUsers).post(createUsers)

//Get User by ID, Edit User by ID, Delete User by ID(GET PUT DELETE)
//api/user/userid
router.route('/:userId').get(getUsersById).put(updateUser).delete(deleteUser);

//Post Freind to User by ID, Delete Friend from User by ID (POST DELETE)
//api/user/userId/friends/freindId
router.route('/:userId/friends/:friendId').post(createFriend).delete(deleteFriend);

module.exports = router;