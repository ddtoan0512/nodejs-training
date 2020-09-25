const db = require('../models');

module.exports.index = (name) => {
    let schools = db.school.findAll();
    return schools;
}

module.exports.createSchool = (school) => {
    console.log('School service' + "================ \n");

    const data = db.school.create(school);

    return data;
}