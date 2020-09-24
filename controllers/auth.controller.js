const md5 = require('md5');
const db = require('../models');
const jwt = require('jsonwebtoken');
const { use, options } = require('../routes/auth.route');


module.exports.login = async (req, res) => {

    const { username, password} = req.body;
    let hashedPassword = md5(password);
    
    let user = await db.user.findOne({ where: { username }});

    if(!user || hashedPassword !== user.password){
        return res.status(401).send({
            message: "Tên đăng nhập hoặc mật khẩu không chính xác"
        })
    }

    let payload = { 
        id: user.id, 
        fullname: user.fullname
    };

    let token = jwt.sign(payload, process.env.JWT_TOKEN_SECRET, { algorithm: "HS256", expiresIn: process.env.JWT_TOKEN_LIFETIME });

    return res.status(200).send({
        user: payload,
        token: token
    })
}