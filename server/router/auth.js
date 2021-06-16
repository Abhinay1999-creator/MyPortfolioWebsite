const express = require("express");
const User = require("../userSchema");
const router = express.Router();

require('../userSchema');
require('../conn');


router.post('/submit', async (req, res) => {
    const { name, phone, email, msg } = req.body;

    if (!name || !phone || !email || !msg) {
        return res.status(422).json("Please fill the data properly...")
    }
    try {
        const userExists = await User.findOne({ email: email })

        if (userExists) {
            return res.status(422).json("Email already exists...")
        }

        const user = new User({ name, phone, email, msg })

        const userData = await user.save();
        if (userData) {
            return res.status(201).json("Successfully Registered...")
        } else {
            return res.status(500).json("UnSuccesfull Registeration...")
        }


    } catch (err) {
        console.log(err);
    }

})



module.exports = router;