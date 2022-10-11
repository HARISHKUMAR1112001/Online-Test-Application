const questionDetails =require('../schema/models/question.js');

const addQuestion = async (req,res) => {
    try{
        const newQuestion = new questionDetails(req.body);
        const questionData = await newQuestion.save();

        if(questionData)
        {
            res.status(201).send('New question created successfully!');
        } else {
            res.status(404).send('New question not created!');
        }

    }catch(err) {
        console.log(err);
        res.status(500).send('Internal Server Error!');
    }
}

module.exports= addQuestion;