const db = require('../models/index');

exports.getAnimals = async (req)=>{
    try{
        const animalData = await db.sequelize.query(`SELECT * FROM livingentities as s NATURAL JOIN animals as a WHERE s.entityid = a.entityId and a.entityid = '${req.animalId}'`, {type: db.Sequelize.QueryTypes.SELECT});
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

