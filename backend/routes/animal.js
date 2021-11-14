var express = require('express');
var router = express.Router();
var animalController = require('../controllers/animal.controller');

router.get('/animal', async (req,res)=>{
    const results = await animalController.getAnimals(req);
    res.status(results.status).send(results);
});


module.exports = router;
