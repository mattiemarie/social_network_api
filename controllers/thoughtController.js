const { Thought, User } = require('../models');

module.exports = {
    //GET all Thought
    getThoughts(req, res) {
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },

    //GET a single Thought
    getSingleThought(req, res) {
        Thought.findOne({_id: req.params.thoughtId})
            .select('-__v')
            .then((thought) =>
            !thought
            ? res.status(404).json({ message: 'No thoughts with that ID' })
            :res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },

    //CREATE a Thought
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => res.json(thought))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },

    //DELETE a Thought
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID' })
                    : User.deleteMany({ _id: { $in: thought.users } })
            )
            .then(() => res.json({ message: 'Thought and Users deleted!' }))
            .catch((err) => res.status(500).json(err));
    },

    //UPDATE a Thought
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
        .catch((err) => res.status(500).json(err));
    },
};