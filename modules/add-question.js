import questionDetails from '../schema/models/question.cjs';

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

export default addQuestion;