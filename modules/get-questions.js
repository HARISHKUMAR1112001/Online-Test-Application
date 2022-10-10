import questionDetails from '../schema/models/question.cjs';

const getQuestions = async (req,res) => {
    try{
        const questions = await questionDetails.find();
        
        if(questions.length !== 0)
        {
            res.json(questions);
        } else {
            res.status(404).send('questions not found!');
        }
    } catch(err) {
        console.log(err);
        res.status(500).send('Internal Server Error!');
    }
}

export default getQuestions;