const userService = require('../services/school.service');

module.exports.index = async (req, res) => {
    let schools = await userService.getAllUser();

    return res.status(200).json({
        data: schools
    });
}