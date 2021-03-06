const express = require("express") ;

const Instructor = require('../models/Instructor')

const router = express.Router()


router.get("/" , (req,res) => {
    Instructor.find()
    .then(instructors => {
        res.status(200).json(instructors)
    })
    .catch(err => {
        console.log(err)
    })
})

router.post("/newInstructor" , (req,res) => {
    const newInstructor = new Instructor({
        name : req.body.name ,
        subscriptionDate : req.body.subscriptionDate,
        timeTable : req.body.timeTable ,
        numberOfStacks : req.body.numberOfStacks,
        photo : req.body.photo
    })
    newInstructor.save()
    .then(instructor => {
        res.status(200).json(instructor)
    })
    .catch(err => console.log(err))
})

router.post("/editInstructor/:id" , (req,res) => {
    Instructor.findByIdAndUpdate({_id : req.params.id} ,{
        name : req.body.name ,
        subscriptionDate : req.body.subscriptionDate,
        timeTable : req.body.timeTable ,
        numberOfStacks : req.body.numberOfStacks,
        photo : req.body.photo
    })
    .then(instructor => {
        if(instructor) {
            res.status(200).json({success : true})
        } else {
            res.status(404).json({error : "instructor not found"})
        }
    })
    .catch(err => console.log(err))
})

router.delete("/deleteInstructor/:id" , (req,res) => {
    Instructor.findByIdAndDelete({_id : req.params.id})
    .then(() => {
        res.status(200).json({success : true})
    })
    .catch(err => {
        console.log(err)
    })
})

router.get("/:id" , (req,res) => {
    Instructor.findById({_id : req.params.id})
    .then(instructor => {
        if(instructor) {
            res.status(200).json(instructor)
        } else {
            res.status(404).json({error : "instructor not found"})
        }
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = router

