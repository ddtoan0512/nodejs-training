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

    let school = await schoolService.createSchool(schoolModel);

    console.log(school);
}