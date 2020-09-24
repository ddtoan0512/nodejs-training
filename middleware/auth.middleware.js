const jwt = require('jsonwebtoken');
const db = require('../models');

module.exports.isAuth = async (req, res, next) => {
    let token = req.header('authorization').replace('Bearer ', '');
    // console.log("=====Middleware======");
    // console.log(token);

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