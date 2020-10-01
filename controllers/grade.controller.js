const db = require('../models');

const Grade = db.grade;

module.exports.index = async (req, res) => {
    try{
        let grades = await Grade.findAll({
            include: [{
                model: db.school,
                as: 'schools'
            }]
        });

        return res.status(200).json({
            status: 1,
            grades
        })
    } catch(e){
        return res.status(500).json({
            status: 0,
            message: "Lỗi " + e.message
        })
    }
}

module.exports.getById = async (req, res) => {

    let id = req.params.id;

    if(!id){
        return res.json({
            status: 0,
            message: "Id is not empty"
        })
    }

    try{
        
        let grade = await Grade.findOne({
            where: {
                id
            }
        })

        if(!grade){
            return res.status({
                status: 0,
                message: "Grade not found"
            })
        }

        return res.status(200).json({
            status: 1,
            grade
        })
    } catch(e){
        return res.status(500).json({
            status: 0,
            message: "Lỗi " + e.message
        })
    }
}

module.exports.createGrade = async (req, res) => {
    let { code, fullname, sort_index } = req.body;

    let gradeModel = {
        code, fullname, sort_index
    }

    try{
        let school = await Grade.create(gradeModel);

        return res.status(200).send({
            status: 1,
            message: 'Tạo khối thành công',
            data: school
        })
    } catch(e){
        return res.status(500).send({
            status: 0,
            message: "Lỗi khi tạo khối",
            errors: e.errors
        })
    }
}

module.exports.delete = async (req, res) => {
    let id = req.params.id;
    
    try {

        let grade = await Grade.findOne({
            where: {
                id
            }
        })

        if(!grade){
            return res.status(400).json({
                status: 0,
                message: "Khối không tồn tại"
            })
        }

        await grade.destroy();

        return res.status(200).json({
            status: 1,
            message: "Xoá khối thành công"
        })
    } catch(e){
        return res.status(400).json({
            status: 0,
            message: "Lỗi khi xoá khối",
            error: e.message
        })
    }
}

module.exports.update = async (req, res) => {
    let id = req.params.id;

    let {code, fullname, sort_index} = req.body;
    console.log(code, fullname, sort_index);

    try{

        let grade = await Grade.findOne({
            where: {
                id
            }
        })

        if(!grade){
            return res.status(400).send({
                status: 0, 
                message: "Không tồn tại khối"
            })
        }

        grade.code = code;
        grade.fullname = fullname;
        grade.sort_index = sort_index;
        grade.save();

        return res.status(200).json({
            status: 1,
            message: "Cập nhật thành công",
            data: grade
        })

    } catch(e){
        return res.status(400).json({
            status: 0,
            message: "Lỗi khi cập nhật khối",
            error: e.message
        });
    }
}