const db = require('../models/index');

exports.getAnimals = async (req)=>{
    try{
        console.log("animalData");
        const animalData = await db.sequelize.query(`SELECT * FROM livingentities as s NATURAL JOIN animals as a WHERE s.entityid = a.entityId`, {type: db.Sequelize.QueryTypes.SELECT});
        console.log(animalData);
        return {
            status: 200,
            data: animalData
        }
    } catch{
        return {
            status: 404,
            success: 0,
            message: "Review Not Posted!"
        }
    }
}

exports.getAnimal = async (req)=>{
    try{
        const animalData = await db.sequelize.query(`SELECT * FROM livingentities as s NATURAL JOIN animals as a WHERE s.entityid = a.entityId and a.entityid = '${req.query.animalId}'`, {type: db.Sequelize.QueryTypes.SELECT});
        console.log(animalData);
        return {
            status: 200,
            data: animalData
        }
    } catch{
        return {
            status: 404,
            success: 0,
            message: "Review Not Posted!"
        }
    }
}