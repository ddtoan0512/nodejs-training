const db = require('../models');

module.exports.index = async (req, res) => {
    try {
        let students = await db.student.findAll();

        // console.log(students);

        return res.status(200).json({
            status: 1,
            students
        })

    } catch( e){
        console.log(e);
        return res.json({
            status: 0,
            message: "Có lỗi xảy ra!"
        })
    }
}

module.exports.getById = async (req, res) => {
    let id = req.params.id;

    try {
        let student = await db.student.findOne({
            where: {
                id
            }
        })

        return res.json({
            status: 1,
            student
        })
    } catch(e){
        console.log(e);
        return res.status(500).json({
            status: 0,
            message: "Có lỗi xảy ra!"
        })
    }
}

module.exports.store = async (req, res) => {
    let { school_id, grade_id, homeroom_class_id, firstname, lastname, moet_code, dob, gender} = req.body;

    let studentObj = {
        school_id, 
        grade_id, 
        homeroom_class_id, 
        firstname, 
        lastname, 
        moet_code, 
        dob, 
        gender
    }

    try {
        let student = await db.student.create(studentObj);
        
        return res.json({
            status: 1,
            message: "Thêm học sinh thành công"
        })

    } catch(e){
        return res.status(500).json({
            status: 0,
            message: "Có lỗi xảy ra"
        })
    }

}

module.exports.delete = async (req, res) => {
    let id = req.params.id;

    try{
        let studentDeleted = await db.student.destroy({
            where: {
                id
            }
        });

        return res.status(200).json({
            status: 1,
            message: "Xóa học sinh thành công"
        })
    } catch(e){
        console.log(e);
        return res.status(500).json({
            status: 0,
            message: "Có lỗi xảy ra!"
        })
    } 
}

module.exports.update = async (req, res) => {
    let id = req.params.id;

    let { school_id, grade_id, homeroom_class_id, firstname, lastname, moet_code, dob, gender} = req.body;

    let studentObj = {
        school_id, 
        grade_id, 
        homeroom_class_id, 
        firstname, 
        lastname, 
        moet_code, 
        dob, 
        gender
    }

    try {
        let studentUpdated = await db.student.update(studentObj, {
            where: {
                id
            }
        })
    } catch(e){
        console.log(e);
        return res.status(500).json({
            status: 0,
            message: "Có lỗi xảy ra!"
        })
    }
}