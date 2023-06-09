const express = require("express");
const SeriesModel = require("../model/series");
const seriesRoute = express.Router();

seriesRoute.post("/", async (req, res) => {
  try {
    const series = new SeriesModel(req.body);
    await series.save();
    res.send({ msg: "Series saved successfully", res: series });
  } catch (err) {
    res.send({ msg: "Series not saved", error: err });
  }
});

seriesRoute.get("/", async (req, res) => {
  try {
    const data = await SeriesModel.find();
    res.send(data);
  } catch (err) {
    res.send({ msg: "Series data can't be fetched", error: err });
  }
});

seriesRoute.get("/:id", async (req, res) => {
  try {
    const data = await SeriesModel.findById(req.params.id);
    res.send(data);
  } catch (err) {
    res.send({ msg: "Series data can't be fetched", error: err });
  }
});

seriesRoute.patch('/:id', async (req, res) => {
  const payload = req.body
  try{
    await SeriesModel.findByIdAndUpdate({_id:req.params.id}, payload)
    res.send({msg:"Series has beed updated successfully"})
  }
  catch(err){
    console.log(err)
    res.send({msg:"Series can't be updated.",error:err})
  }
})

seriesRoute.delete('/:id', async(req, res) => {
    try {
        const data = await SeriesModel.deleteOne(req.params.id);
        res.send(data);
      } catch (err) {
        res.send({ msg: "Series data can't be fetched", error: err });
      }
})

module.exports = seriesRoute;
