const bcrypt = require('bcrypt');

const UserDetails = require('../schema/models/user.js');

const signup = async (req, res) => {

    try{
        const userData = new UserDetails({
            UserName : req.body.UserName,
            Email: req.body.Email,
            Password: bcrypt.hashSync(req.body.Password,8)
        });

        const user = await userData.save();

        if(user) {
            console.log('User Registerd Successfully!');
            res.status(201).send('User Registerd Successfully!');
        } else {
            res.status(404).send('User not Registerd, please try again with correct information!');
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error!');
    }
}

module.exports = signup;