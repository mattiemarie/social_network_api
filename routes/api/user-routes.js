const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    updateUser,
    createUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('../../controllers'); //Might need to add userControllers

//GET all users
//POST a new user
router.route('/api/users').get(getUsers).post(createUser);

//GET a single user by its _id and populated thought and friend data
//PUT to update a user by its _id
//DELETE to remove user by its _id
router
    .route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

//POST to add a new friend to users friend list
router.route('/api/users/:userId/friends/:friendId').post(addFriend);

//DELETE to remove a friend from a user's friend list
router.route('/api/users/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;