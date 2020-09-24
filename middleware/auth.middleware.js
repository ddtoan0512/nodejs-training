const jwt = require('jsonwebtoken');
const db = require('../models');

module.exports.isAuth = async (req, res, next) => {
    let token = req.headers.authorization;

    if(!token){
        res.status(401).send({
            message: 'Token not found!'
        })
    };

    try{
        const data = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
        const user = await db.user.findOne({ where: { id: data.id } })
        
        if(!user){
            return res.status(401).send({
                message: "Unauthorized"    
            });
        }

        next();
    } catch(e){
        return res.status(401).send({
            message: e.message 
         });
    }   
    
}