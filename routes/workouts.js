const express=require('express')
//const Workout=require('../models/Workouts')


const {createWorkout,getWorkouts,getaWorkout, deleteWorkout, updateWorkout}=require('../controllers/WorkoutController')
const router=express.Router()
router.get('/',getWorkouts)

router.get('/:id',getaWorkout)
router.post('/',createWorkout)
router.get('/',(req,res)=>{
    res.json({mssg:'get all workouts'})

})
//delete
router.delete('/:id',deleteWorkout)

//Update
router.patch('/:id',updateWorkout)


module.exports=router