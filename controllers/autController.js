const Users = require('../models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jwt');

const autControl = {
    register: async (req, res) => {
        try {
            
        } catch (err) {
            res.status(500).json({ msg: err.message });
        }
    }
};

module.exports = autControl;
