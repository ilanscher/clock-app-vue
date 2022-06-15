// Import function from Time Model
import { getTimes, getTimeByIdentity, insertIdentity, updateTimeByIdentity, deleteTimeById } from "../models/timeModel.js";
 
// Get All Time
export const ShowTimes = (req, res) => {
    getTimes((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Get Single Time 
export const showTimeByIdentity = (req, res) => {
    getTimeByIdentity(req.params.identity_card, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Create New Time
export const createIdentity = (req, res) => {
    const data = req.body;
    insertIdentity(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Update Time
export const updateTime = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    console.log(data,id);
    updateTimeByIdentity(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Delete Time
export const deleteTime = (req, res) => {
    const id = req.params.id;
    console.log('delete',id)
    deleteTimeById (id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}