const mongoose = require('mongoose');

const seriesSchema = mongoose.Schema({
    "series_id": Number,
    "name":  {type:String, required:true},
    "genre": {type:String, required:true},
    "director":{type:String, required:true}
},
{
    versionKey:false
})

const SeriesModel = mongoose.model("series", seriesSchema)

module.exports = SeriesModel