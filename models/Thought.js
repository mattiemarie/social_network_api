const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
//Change for this assignment

// Schema to create User model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: 'Text is Required',
      maxlength: 280,
      minlength: 1,
    },
    userCreated: {
      type: Date,
      default: Date.now,
      //Use getter method to format timestamp on query
    },
    username: {
      type: String,
      required: 'Username Created this thought',
    },

    //Array of nested documents created with the reactionSchema
    reactions: [reactionSchema]        
  },
  {
    toJSON: {
      //Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
      virtuals: true,
      getters: true
    },
    id: false
  });

thoughtSchema.virtural('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
