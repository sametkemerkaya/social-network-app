const Users = require('../models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const autControl = {
    register: async (req, res) => {
        try {
            const { fullname, username, email, password, gender } = req.body;

            // Usernamedeki boşluk ve büyük harf düzeltmesi.
            let newUserName = username.toLowerCase().replace(/ /g, '');

            // Username sorgulama
            const user_name = await Users.findOne({ username: newUserName });
            if (user_name) return res.status(400).json({ msg: 'This user name already exits.' });

            // Email sorgulama
            const user_email = await Users.findOne({ email: email });
            if (user_email) return res.status(400).json({ msg: 'This email already exits.' });

            // Şifre kontrol
            if (password.length < 6)
                return res.status(400).json({ msg: 'Password must be at least 6 characters.' });

            const passwordHash = await bcrypt.hash(password, 12);

            const newUser = new Users({
                fullname,
                username: newUserName,
                email,
                password: passwordHash,
                gender
            });

            const access_token = createAccessToken({ id: newUser._id });
            const reflesh_token = createRefleshToken({ id: newUser._id });

            res.cookie('refleshtoken', reflesh_token, {
                httpOnly: true,
                path: '/api/reflesh_token',
                maxAge: 30 * 24 * 60 * 60 * 1000
            });

            await newUser.save();

            res.json({
                msg: 'Register Success !',
                access_token,
                user: {
                    ...newUser._doc,
                    password: ''
                }
            });
        } catch (err) {
            res.status(500).json({ msg: err.message });
        }
    },
    login: async (req, res) => {
        try {
        } catch (err) {
            res.status(500).json({ msg: err.message });
        }
    },
    logout: async (req, res) => {
        try {
        } catch (err) {
            res.status(500).json({ msg: err.message });
        }
    },
    generateAccessToken: async (req, res) => {
        try {
        } catch (err) {
            res.status(500).json({ msg: err.message });
        }
    }
};

const createAccessToken = (payload) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' });
};

const createRefleshToken = (payload) => {
    return jwt.sign(payload, process.env.REFLESH_TOKEN_SECRET, { expiresIn: '30d' });
};

module.exports = autControl;
