import express from 'express';

import SignUp from '../models/signup.models.js';

//used for excrypting password
import bcrypt from 'bcrypt';

const router = express.Router();

router.post('/signup', async (req, res) => {
    
    //encrypting password we get from frontEnd
    const saltPassword = await bcrypt.genSalt(5);
    const securePassword = await bcrypt.hash(req.body.password, saltPassword);
    
    const signedUpUser = req.body;

    // e.g. of req.body (password will be changed with securePassword)
    // signedUpUser = {
    //     fullName: 'Rutul Shah',
    //     userName: 'rush',
    //     email: 'rutulshah@gmail.com',
    //     password: 'helloWorld'
    //   }

    const saveSignedUpUser = new SignUp({
        ...signedUpUser, 
        password: securePassword
    });
    
    await saveSignedUpUser.save()
    .then( data => {
        res.status(201).json(data);        
    })
    .catch( error => {
        console.log(error)
    });

});

export default router;