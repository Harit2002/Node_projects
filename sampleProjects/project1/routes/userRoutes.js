const express = require("express");
const userRouter = express.Router();
const UserModel = require("../model/user");
const jwt = require("jsonwebtoken");

userRouter.post("/register", async (req, res) => {
  const userData = req.body;
  try {
    const user = new UserModel(userData);
    await user.save();
    res.send({ msg: "User registered successfully", user: user });
  } catch (err) {
    console.log(err);
    res.send({ error: err });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const token = jwt.sign({ organisation: "flyboard" }, "haritkhushwas");

  try {
    const user = await UserModel.find({ email, password });
    if (user.length > 1) res.send({ msg: "Login successful", token: token });
    else res.send({ msg: "Wrong credentails" });
  } catch (err) {
    console.log(err);
    res.send({ error: err });
  }
});

userRouter.get("/data", async(req, res) => {
    const user = req.body;
    const token = req.headers.authorization;

    jwt.verify(token,"haritkhushwas", (err, decode) => {
        if(decode) res.send({data:"This is sample data"})
        else res.send({msg:"Req can't be fullfiled due to some error", error:err})
    })
})

module.exports = userRouter;
