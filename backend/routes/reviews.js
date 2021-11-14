var express = require('express');
var router = express.Router();
var reviewController = require('../controllers/review.controller');

router.post('/review', async (req,res)=>{
    const results = await reviewController.postReviews(req);
    res.status(results.status).send(results);
});
router.get('/review', async (req,res)=>{
    const results = await reviewController.getReviews(req);
    res.status(results.status).send(results);
});


module.exports = router;
