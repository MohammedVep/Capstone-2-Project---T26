const router = require("express").Router();
const { User, validateUser } = require("../models/registeredUsersModels.js");
const bcrypt = require("bcrypt");


// REGISTER User
router.post("/signup/User", async (req, res) => {
  try {
    const { error } = validateUser(req.body);
    if (error) {
      return res.status(401).send(error.details[0].message);
    }
    const User = await User.findOne({ email: req.body.email });
    if (User) {
      return res.status(401).send("User already registered.");
    }

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    await new User({ ...req.body, password: hashedPassword }).save();
    res.status(201).send({ message: "User registered successfully." });
  } 
  catch (err) {
    res.status(500).send(err.message);
  }
});


// GET ALL REGISTERED UserS
router.get("/User/result", async (req, res) => {
  try {
    const data = await User.find();
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ data });
  }
});

module.exports = router;
