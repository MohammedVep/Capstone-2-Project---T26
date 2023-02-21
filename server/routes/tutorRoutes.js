const router = require("express").Router();
const { Tutor, validateTutor } = require("../models/registeredTutorsModel.js");
const bcrypt = require("bcrypt");


// REGISTER TUTOR
router.post("/signup/tutor", async (req, res) => {
  try {
    const { error } = validateTutor(req.body);
    if (error) {
        console.log(error)
      return res.status(401).send(error.details[0].message);
    }
    const tutor = await Tutor.findOne({ email: req.body.email });
    if (tutor) {
      return res.status(401).send("Tutor already registered.");
    }

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    await new Tutor({ ...req.body, password: hashedPassword }).save();
    res.status(201).send({ message: "Tutor registered successfully." });
  } 
  catch (err) {
    res.status(500).send(err.message);
  }
});


// GET ALL REGISTERED TUTORS
router.get("/tutor/result", async (req, res) => {
  try {
    const data = await Tutor.find();
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ data });
  }
});

router.delete('/tutor/:id', async (req, res) => {
    try {
     const data = await Tutor.findByIdAndDelete(id, function (err, Tutor) {
         if (err) {
             console.log(err);
             res.status(500).send(err.message);
         }
         else {
             console.log("User deleted successfully");
             res.status(201).send("Tutor deleted");
         }
     })
     res.status(201).json(data)
    } catch (error) {
         res.status(500).send(error.message);
    }
 });

module.exports = router;
