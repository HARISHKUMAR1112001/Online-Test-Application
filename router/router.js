import express  from "express";

const router = express.Router();

import addQuestion from '../modules/add-question.js';
import getQuestions  from '../modules/get-questions.js';



router.post('/', addQuestion);
router.get('/questions',getQuestions);

router.get('/js/', (req,res) => {
    res.sendFile('C:/Users/Prajapati.Kishor/Documents/New folder/Online-Test-Application/public/templates/index.html');
  })

export default router;