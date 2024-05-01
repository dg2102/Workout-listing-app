const Workouts = require('../models/Workouts')
const Workout=require('../models/Workouts')
const mongoose=require('mongoose')
//get all workouts



const getWorkouts=async (req,res)=>{
    const workout=await Workout.find({}).sort({createdAt:-1})
    res.status(200).json(workout)
}
//get a single workout

const getaWorkout=async (req,res)=>{
    const{id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"no such workouts"})
    }
    const workout=await Workout.findById(id)
    if(!workout){
        return res.status(404).json({error:'no such workout'})
    }
    res.status(200).json(workout)}
//create a new workout
const createWorkout=async (req,res)=>{
    const{title,load,reps}=req.body
    let emptyFields = []

  if (!title) {
    emptyFields.push('title')
  }
  if (!load) {
    emptyFields.push('load')
  }
  if (!reps) {
    emptyFields.push('reps')
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
  }

  // add to the database
    try{

        const workout= await Workout.create({title,load,reps})
       return res.status(200).json(workout)
       
    }catch(error){
       express.response.status(400).json({error:error.message})
    }
}
//delete a workout
const deleteWorkout=async(req,res)=>{
    const{id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such workout exist'})
    }
    const workout=await Workout.findOneAndDelete({_id:id})
    if(!workout){
        return res.status(400).json({error:'no workouts to delete'})
    }
    return res.status(200).json({mssg:"all fine"})
}


//update a workout

const updateWorkout=async(req,res)=>{
    const{id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such workout exist'})
    }
const workout=await Workout.findOneAndUpdate({_id:id},{
    ...req.body
})
if(!workout){
    return res.status(400).json({error:'no workouts to delete'})
}
return res.status(100).json({mssg:"all fine"})
}
module.exports={
    getWorkouts,
    getaWorkout,
  deleteWorkout,
  updateWorkout,
    createWorkout
}