const bcrypt = require('bcrypt');

const UserDetails = require('../schema/models/user');

const signin = async (req, res) => {
    try{

        const checkUser = await UserDetails.findOne({Email: req.body.Email});
        
        if(!checkUser) {
           console.log('User not found!');
            return res.status(400).send('User not found!');
        }

        const passwordIsValid = bcrypt.compareSync(req.body.Password, checkUser.Password);

        if(!passwordIsValid) {
            console.log('Invalid Password!');
            return res.status(401).send({
                message: 'Invalid Password!'
            })
        }

        res.status(200).send({
            message: 'Valid User!'
        })
    } catch (err) {
        console.log(`Invalid User Details!: ${err}`);
        res.status(401).send('Invalid User Details!');
    }
}

module.exports = signin;