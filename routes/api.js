const router = require("express").Router()

const Workout = require("../models/workout");


router.get("/api/workouts", function(req, res){
    Workout.find().then(function(data){
        res.json(data);
    })
})

router.put("/api/workouts/:id", function(req, res){
const id = req.params.id
const body =req.body;
console.log("-->", id, body)
Workout.findByIdAndUpdate(
id,
{$push:{exercises:body}}

).then(function(data){
    res.json(data)
})
})

router.post("/api/workouts", function(req, res){
    Workout.create({}).then(function(data){
        res.json(data);
    })
})

router.get('/api/workouts/range', function(req, res){
    Workout.find().then(function(data){
        res.json(data);
    })
})
module.exports= router