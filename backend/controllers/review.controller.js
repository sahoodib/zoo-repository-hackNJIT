const db = require('../models/index');

exports.getReviews = async (req)=>{
    const reviewData = [];
    try{
        reviewData = await db.sequelize.query(`SELECT * FROM comments as c NATURAL JOIN sentimentanalysis as s NATURAL JOIN AnimalComments as a WHERE s.sentimentid = c.sentimentId and a.animalid = '${req.query.animalId}'`, {type: db.Sequelize.QueryTypes.SELECT});
        return {
            status: 200,
            data: reviewData
        }
    }catch{
        return {
            status: 404,
            data: []
        }
    }
}


exports.postReviews = async (req)=>{
    try{
        console.log(req.body)
        await db.sequelize['sentimentanalysis'].create({sentimentId: req.body.sentimentId, classificationValue: 0});
        await db.sequelize['comments'].create({sentimentId: req.body.sentimentId, customerId: req.body.customerId, comment: req.body.comment, fileLoc: null});
        await db.sequelize['animalcomments'].create({sentimentId: req.body.sentimentId, animalId: req.body.animalId});
        return {
            status: 200,
            success: 1,
            message: "Review Posted!"
        }
    } catch(err){
        return {
            status: 404,
            success: 0,
            message: "Review Not Posted!",
        }
    }
}

exports.putSentimentAnalysis = async (req)=>{
    try{
        const comment = await db.sequelize['sentimentanalysis'].findOne({where: {sentimentId: req.body.sentimentId}});
        comment.classificationValue = 1;
        comment.save();

        return {
            status: 200,
            success: 1,
            message: "Review Posted!"
        }
    } catch(err){
        return {
            status: 404,
            success: 0,
            message: "Review Not Posted!",
        }
    }
}