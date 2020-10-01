const { query } = require('express');
const { Sequelize } = require('../models');
const db = require('../models');
const School = db.school;

const Op = Sequelize.Op;

module.exports.index = (name) => {
    let schools = db.school.findAll({ 
        include: [{
            model: db.grade, as: 'grades'
        }] 
    });
    return schools;
}

module.exports.search = query => {
    let data = School.findAll({
        where: {
            fullname: {
                [Op.like]: `%${query}%` 
            }
        }
    })

    return data;
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

module.exports.update = (id, schoolObj) => {
    let data = School.update(schoolObj, {
        where: {
            id
        }
    });

    return data

}