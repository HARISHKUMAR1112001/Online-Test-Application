import { Schema, model } from 'mongoose';

const QuestionSchema = Schema({
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

const QuestionDetails = model("QuestionDetails", QuestionSchema);

export default QuestionDetails;