const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    updateUser,
    createUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('../../controllers/userController'); //Might need to add userControllers

//GET all users
//POST a new user
router
.route('/')
.get(getUsers)
.post(createUser);

//GET a single user by its _id and populated thought and friend data
//PUT to update a user by its _id
//DELETE to remove user by its _id
router
.route('/:id')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);

//POST to add a new friend to users friend list
//DELETE to remove a friend from a user's friend list

router.route(':userId/friends/:friendId')
.post(addFriend)
.delete(removeFriend)

module.exports = router;