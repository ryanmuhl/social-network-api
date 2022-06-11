const router = require ('express').Router();

const {
   
    getAllUsers,
    createUsers,
    getUsersById,

} = require ('../../controllers/user-controller');


//get all users and create user api/users (get)
router.route('/').get(getAllUsers).post(createUsers)

router.route('/:id').get(getUsersById);

module.exports = router;