const { Schema, model } = require('mongoose');
// const assignmentSchema = require('./Assignment');
//Change for this assignment

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      //Unique
      required: true,
      //Trimmed
    },
    email: {
      type: String,
      required: true,
      //Unique
      //mongoose match validation
    },
    thoughts: {
    //Array of _id values referencing the Thought model
    },
    friends: {
        //Array of _id values referencing the User model (self-reference)
        },
    assignments: [assignmentSchema],
  },
  {
    toJSON: {
      //Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
    },
  }
);

const Student = model('student', studentSchema);

module.exports = Student;
