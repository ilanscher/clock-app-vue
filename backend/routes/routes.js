// import express
import express from "express";
 
// import function from controller
import { ShowTimes, showTimeByIdentity, createIdentity, updateTime, deleteTime } from "../controllers/time.js";
 
// init express router
const router = express.Router();
 
// Get All Time
router.get('/times', ShowTimes);
 
// Get Single Time
router.get('/times/:identity_card', showTimeByIdentity);
 
// Create New Time
router.post('/times', createIdentity);
 
// // Update Time
router.put('/times/:id', updateTime);
 
// Delete Time
router.delete('/times/:id', deleteTime);
 
// export default router
export default router;