const db = require('../models');
const School = db.school;

module.exports.index = (name) => {
    let schools = db.school.findAll();
    return schools;
}

module.exports.createSchool = (school) => {
    // console.log('School service' + "================ \n");

    const data = db.school.create(school);

    return data;
}

module.exports.getById = (id) => {
    const data = School.findOne({
        where: {
            id
        }
    })

    return data;
}