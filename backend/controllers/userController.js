const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({ username, email, password: hashedPassword });

    try {
        await newUser.save();
        res.send("User created successfully");
    } catch (error) {
        console.error("Error adding user:", error);
        res.status(500).send("Internal Server Error");
    }
};


const loginUser = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });

    if (user) {
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            res.send(`Login for ${username} successful`);
        } else {
            res.status(401).send("Wrong password");
        }
    } else {
        res.status(401).send("User doesn't exist");
    }
};

module.exports = { registerUser, loginUser };