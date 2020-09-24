const db = require('../models');

module.exports.index = (name) => {

}
module.exports.getAllUser = () => {
    let schools = db.school.findAll();
    return schools;
}