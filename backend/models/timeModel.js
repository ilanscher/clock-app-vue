// import connection
import db from "../config/database.js";
 
// Get All Times
export const getTimes = (result) => {
    db.query("SELECT * FROM identity_card ORDER BY identity_card", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Get Single Time
export const getTimeByIdentity = (identity_card, result) => {
    db.query("SELECT * FROM identity_card WHERE identity_card = ?", [identity_card], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert Time to Database
export const insertIdentity = (data, result) => {
    db.query("INSERT INTO identity_card SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Time to Database
export const updateTimeByIdentity = (data, id, result) => {
    db.query("UPDATE identity_card SET identity_time_start = ?, identity_time_end = ? WHERE identity_id = ?", [data.identity_time_start, data.identity_time_end, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            console.log("update sucsses!");
            result(null, results);
        }
    });   
}
 
// Delete Time to Database
export const deleteTimeById = (id, result) => {
    db.query("DELETE FROM identity_card WHERE identity_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}