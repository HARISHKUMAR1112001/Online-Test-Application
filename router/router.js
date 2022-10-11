const express = require("express");

const router = express.Router();

const addQuestion = require('../modules/add-question.js');
const getQuestions = require('../modules/get-questions.js');
const signin = require('../modules/signin');
const signup = require('../modules/signup');

router.post('/', addQuestion);
router.get('/questions',getQuestions);
router.get('/signin',signin);
router.post('/signup',signup);

module.exports = router;