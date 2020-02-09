const router = require("express").Router()

const Workout = require("../models/workout");


router.get("/api/workouts", function(req, res){
    Workout.find().then(function(err,data){
        if(err)throw err;
        
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

).then(function(err,data){
    if(err)throw err;

    res.json(data)
})
})

router.post("/api/workouts", function(req, res){
    Workout.create({}).then(function(err,data){
        if(err) throw err;

        res.json(data);
    })
})

router.get('/api/workouts/range', function(req, res){
    Workout.find().then(function(err,data){
        if(err) throw err;
        
        res.json(data);
    })
})
module.exports= router