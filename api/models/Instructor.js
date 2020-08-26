const mongoose = require("mongoose") ;

const {Schema} = mongoose ;

const InstructorSchma = new Schema({
    name : {type : String } ,
    subscriptionDate : {type : Date } ,
    timeTable : {type : String } ,
    numberOfStacks : {type : String } ,
})

module.exports = Instructor = mongoose.model("instructors",InstructorSchma)


