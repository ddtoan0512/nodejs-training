const schoolService = require('../services/school.service');

module.exports.index = async (req, res) => {
    let schools = await schoolService.index();

    return res.status(200).json({
        data: schools
    });
}

module.exports.createSchool = async (req, res) => {
    let { code, fullname } = req.body;
    
    let schoolModel = {
        code,
        fullname
    };

    try{
        let school = await schoolService.createSchool(schoolModel);

        return res.status(200).send({
            status: 1,
            message: 'Tạo trường học thành công',
            data: school
        })
    }
    catch(e){
        return res.status(500).send({
            status: 0,
            message: e.message || "Lỗi khi tạo trường học"
        })
    }

}

module.exports.getById = async (req, res) => {
    const id = req.params.id;
    
    try {
        let data = await schoolService.getById(id);

        return res.status(200).json({
            status: 1,
            school: data
        });
    } catch(e){
        return res.status(500).send({
            status: 0,
            message: e.message || "Lỗi khi tìm kiếm trường học"
        })
    }
}

