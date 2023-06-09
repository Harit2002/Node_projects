const express = require("express");
const MovieModle = require("../model/movie");
const movieRoute = express.Router();


movieRoute.post("/addmovie", async (req, res) => {
  try {
    const movies = new MovieModle(req.body);
    await movies.save();
    res.send({ msg: "User has been registered" });
  } catch (err) {
    res.send({ msg: "cannot get the users", error: err.message });
  }
});

movieRoute.get('/:id', async (req, res) => {
  try{
    const data = await MovieModle.findById({_id:req.params.id});
    res.send({msg:"All movie data sent", data:data})
  }
  catch(err) {
    res.send({msg:"Movie data can't be fetched", error:err.message})
  }
})

movieRoute.get('/', async (req, res) => {
  try{
    const data = await MovieModle.find();
    res.send(data)
  }
  catch(err) {
    res.send({msg:"Movie data can't be fetched", error:err.message})
  }
})

movieRoute.patch('/:id', async (req, res) => {
  const userId = req.params.id;
  const payload = req.body
  try{
    const query = await MovieModle.findByIdAndUpdate({_id:userId}, payload)
    console.log(query)
    res.send({msg:"Movie had been updated succesfully"})
  }
  catch(err) {
    console.log(err);
    res.send({msg:"Movie can't be updated", error:err.message})
  }
});

movieRoute.delete('/:id',async(req, res) => {
  try{
    await MovieModle.deleteOne(req.params.id);
    res.send({msg:"Movie deleted successfully"})
  }
  catch(err) {
    res.send({msg:"Movie can't be deleted", error:err.message})
  }
})

module.exports = movieRoute;
