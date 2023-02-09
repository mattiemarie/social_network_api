const { Schema, model } = require('mongoose');
// const assignmentSchema = require('./Assignment');
//Change for this assignment

// Schema to create User model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      //Use getter method to format timestamp on query
    },
    username: {
      type: String,
      required: true,
    },
    reactions: {
        //Array of nested documents created with the reactionSchema
        },
  },
  {
    toJSON: {
      //Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
    },
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
