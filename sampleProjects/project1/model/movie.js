const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    "movie_id": Number,
    "name":  {type:String, required:true},
    "genre": {type:String, required:true},
    "director":{type:String, required:true}
},
{
    versionKey:false
})
const MovieModle = mongoose.model("movie", movieSchema)
module.exports = MovieModle