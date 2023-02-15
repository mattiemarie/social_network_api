const { Schema, model } = require('mongoose');
// const assignmentSchema = require('./Assignment');
//Change for this assignment

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      trim: true,
      required: 'Usesrname is Required',
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/]
    },
    thought: [
      {
      type: Schema.Types.ObjectId,
      ref: 'Thought'
      }
    ],
    friends: [
      {
       type: Schema.Types.ObjectId,
       ref: 'User'
      }
    ],
  },
    {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false,
  
  });
//Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  });

const User = model('user', userSchema);

module.exports = User;
