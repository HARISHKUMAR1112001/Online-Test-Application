const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema({
    question: {
    type: String,
    require: true,
    trim: true
  },
  a: {
    type: String,
    require: true,
  },
  b: {
    type: String,
    require: true,
  },
  c: {
    type: String,
    require: true,
  },
  d: {
    type: String,
    require: true,
  },
  correct: {
    type: String,
    require: true,
  },
}, {timestamps: true});

const QuestionDetails =  mongoose.model("QuestionDetails", QuestionSchema);

module.exports = QuestionDetails;