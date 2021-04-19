import express from 'express';

import SignUp from '../models/signup.models.js';

const router = express.Router();

router.post('/signup', (req, res) => {
    //res.status(200).send("YOU HAVE REACHED POST API CALL");
    const signedUpUser = req.body;

    // e.g. of req.body
    // signedUpUser = {
    //     fullName: 'Rutul Shah',
    //     userName: 'rush',
    //     email: 'rutulshah@gmail.com',
    //     password: 'helloWorld'
    //   }

    const saveSignedUpUser = new SignUp(signedUpUser);
    
    saveSignedUpUser.save()
    .then( data => {
        res.status(201).json(data);        
    })
    .catch( error => {
        console.log(error)
    });

});

export default router;