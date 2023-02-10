const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    updateThought,
    createThought,
    deleteThought,
    addReaction,
    removeReaction,
} = require('../../controllers'); //Might need to add userControllers


//GET to get all thoughts
//POST to create a new thought (push created thought's _id to the assoiciated user's thoughts array field)
router.route('/').get(getThoughts).post(createThought);

//GET to get a single thought by its _id
//PUT to update a thought by its _id
//DELETE to remove a thought by its _id
router
    .route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

//POST to create a reaction stored in a single thought's reactions array field
router.route('/api/thoughts/:thoughtId/reactions').post(addReaction);

//DELETE to pull and remove a reaction by the reaction's reactionId value
router.route('/api/thoughts/:thoughtId/reactions').delete(removeReaction);

module.exports = router;