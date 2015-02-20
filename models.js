
var Mongoose = require('mongoose');


var ProjectSchema = new Mongoose.Schema({
  // fields are defined here
  "titile": String,
  "image": String,
  "summary": String,
  "date":Date
});

exports.Project = Mongoose.model('Project', ProjectSchema);


