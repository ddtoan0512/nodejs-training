const { monthsShort } = require('moment');
const db = require('../models');

module.exports.index = async (req, res) => {
    
    try{
        let homeroomClass = await db.homeroomClass.findAll();
        return res.json({
            status: 1,
            homeroom_classes: homeroomClass
        })
    } catch(e){
        console.log('Error', e);
        return res.status(500).json({
            status: 0,
            message: 'Có lỗi xảy ra'
        })
    }
}

module.exports.findById = async (req, res) => {

    let id = req.params.id;
    console.log(id);

    try{
        let homeroomClass = await db.homeroomClass.findOne({
            where: {
                id
            }
        });

        return res.json({
            status: 1,
            homeroom_class: homeroomClass
        })

    } catch(e){
        console.log(e);
        return res.status(500).json({
            status: 0,
            message: "Có lỗi xảy ra"
        })
    }    
}

module.exports.store = async (req, res) => {
    let { school_id, grade_id, code, fullname, sort_index } = req.body;

    let homeroomClassObj = {
        school_id, 
        grade_id, 
        code, 
        fullname, 
        sort_index
    }

    try {
        let homeroomClass = await db.homeroomClass.create(homeroomClassObj);
        
        return res.json({
            status: 1,
            message: "Thêm lớp thành công "
        })
    } catch(e){
        console.log(e);
        return res.status(500).json({
            status: 0,
            message: "Có lỗi xảy ra!"
        })
    }
}

module.exports.delete = async (req, res) => {
    let id = req.params.id;

    try{
        let schoolDeleted = await db.homeroomClass.destroy({
            where: {
                id
            }
        })

        return res.status(200).json({
            status: 0,
            message: "Xóa lớp học thành công!"
        })
    } catch(e) {
        console.log(e);
        return res.status(500).json({
            status: 0,
            message: "Có lỗi xảy ra!"
        })
    }
}

module.exports.update = async (req, res) => {
    const id = req.params.id;

    let { school_id, grade_id, code, fullname, sort_index } = req.body;

    let homeroomClassObj = {
        school_id, 
        grade_id, 
        code, 
        fullname, 
        sort_index
    }

    try {
        let homeroomClassUpdated = await db.homeroomClass.update(homeroomClassObj, {
            where: {
                id
            }
        })

        return res.json({
            status: 1,
            message: "Cập nhật trường học thành công"
        })
    } catch(e){
        console.log(e);
        return res.status(500).json({
            status: 0,
            message: "Lỗi khi cập nhật lớp học"
        })
    }
}