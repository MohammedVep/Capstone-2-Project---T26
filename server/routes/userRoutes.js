const router = require("express").Router();
const { User, validateUser } = require("../models/registeredUsersModel.js");
const bcrypt = require("bcrypt");


// REGISTER User
router.post("/signup/user", async (req, res) => {

  try {
    console.log('signup user ===', req.body)
    const { error } = validateUser(req.body);
    if (error) {
      return res.status(401).send(error.details[0].message);
    }


    const user = await User.findOne({ email: req.body.email });
    if (user) {
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
router.get("/user/result", async (req, res) => {
  try {
    const data = await User.find();
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ data });
  }
});


router.post("/update", async (req, res) => {
  try {
    const filter= {email: req.body.email}
    console.log('filter', filter)
    const update = {
      ...req.body,
    }
    const doc = await User.findOneAndUpdate(filter, update);
    console.log('data', doc)

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    await doc.update({password: hashedPassword});

    res.status(201).json(doc);
  } catch (error) {
    res.status(500).json({ data });
  }
})

router.delete('/user/:id', async (req, res) => {
   try {
    const data = await User.findByIdAndDelete(id, function (err, User) {
        if (err) {
            console.log(err);
            res.status(500).send(err.message);
        }
        else {
            console.log("User deleted successfully");
            res.status(201).send("User deleted");
        }
    })
    res.status(201).json(data);
   } catch (error) {
        res.status(500).send(error.message);
   }
});

module.exports = router;
