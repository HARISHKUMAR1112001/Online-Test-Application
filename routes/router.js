import express  from "express";

const router = express.Router();

import addQuestion from '../modules/addQuestion.js';
import getQuestions  from '../modules/getQuestions.js';



router.post('/', addQuestion);
router.get('/questions',getQuestions);

router.get('/js/', (req,res) => {
    res.sendFile('C:/Users/Saket.Acharya/Desktop/Online Quiz App/Online-Test-Application/templates/index.html');
  })

export default router;