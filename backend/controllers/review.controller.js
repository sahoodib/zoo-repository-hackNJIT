const db = require('../models/index');

exports.getReviews = async (req)=>{
    const reviewData = [];
    try{
        reviewData = await db.sequelize.query(`SELECT * FROM comments as c NATURAL JOIN sentimentanalysis as s NATURAL JOIN AnimalComments as a WHERE s.sentimentid = c.sentimentId and a.animalid = '7291abd8-4459-490a-8e22-8e22c38c2e4c'`, {type: db.Sequelize.QueryTypes.SELECT});
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
        await db.sequelize['sentimentanalysis'].create({sentimentId: req.sentimentId, classificationValue: 0});
        await db.sequelize['comments'].create({sentimentId: req.sentimentId, customerId: req.customerId, comment: req.comment, fileLoc: (req.comment)?req.comment:null});
        await db.sequelize['animalcomments'].create({sentimentId: req.sentimentId, animalId: req.animalId});
        return {
            status: 200,
            success: 1,
            message: "Review Posted!"
        }
    } catch{
        return {
            status: 404,
            success: 0,
            message: "Review Not Posted!"
        }
    }
}

exports.useSentimentAnalysis = async (req)=>{
    try{
        const comment = await db.sequelize['sentimentanalysis'].findOne({where: {sentimentId: req.sentimentId}});
        comment.classificationValue = 1;
        comment.save();

        return {
            status: 200,
            success: 1,
            message: "Review Posted!"
        }
    } catch{
        return {
            status: 404,
            success: 0,
            message: "Review Not Posted!"
        }
    }
}