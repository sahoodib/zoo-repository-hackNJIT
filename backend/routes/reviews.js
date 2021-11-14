var express = require('express');
var router = express.Router();
var reviewController = require('../controllers/review.controller');

router.post('/reviews', async (req,res)=>{
    const results = await reviewController.postReviews(req);
    res.status(results.status).send(results);
});
router.get('/reviews', async (req,res)=>{
    const results = await reviewController.getReviews(req);
    res.status(results.status).send(results);
});
router.put('/sentiment', async (req,res)=>{
    const results = await reviewController.putSentimentAnalysis(req);
    res.status(results.status).send(results);
});


module.exports = router;
