import express from 'express';

const router = express.Router();

router.post('/signup', (req, res) => {
    res.status(200).send("YOU HAVE REACHED POST API CALL");

});

export default router;