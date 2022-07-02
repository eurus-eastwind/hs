const db = require("../../models");
const Branches = db.Branches;
const { dataResponse, emptyDataResponse, checkAuthorization, errResponse } = require('../../helpers/helper.controller');


//create and save new branch
exports.createBranches = (req, res) => {

   req.body.services_created_by = req.user.users_id;
   // Check users-type if valid
   checkAuthorization(req, res, "Admin");

   Branches
       .findOne({ where: { branches_name: req.body.branches_name}})
       .then(result => {
           if(result) emptyDataResponse(res, "")
           else {
               // Set id
               req.body.branches_id = req.branches_id
               
               // Create Branch
               Branches
                   .create(req.body)
                   .then((data) => dataResponse(res, data, "A new record has been added", "Record is not added"))
                   .catch((err) => errResponse(res, err)); 
           }
       })
       .catch(err => errResponse(res, err));
};
// Update Branches
exports.updateBranch = (req, res) => {

    // Check if user-status is valid
    // note: always check authorization using users_type
    checkAuthorization(req, res, "Admin")

    Services
        .update(req.body, {
            where: {
               branches_id: req.params.branches_id
            }
        })
        .then(data => dataResponse(res, data, "Updated Successfully", "No updates happened"))
        .catch(err => errResponse(res, err))
}
// Get all Branches
exports.getAllBranches = (req, res, next) => {
    
    // Check authorization first
    checkAuthorization(req, res, "Admin")

    Branches
        .findAll({ where: { branches_status: "Open"}})
        .then(data => dataResponse(res, data, "Branches Retrieved Successfully", "No Branch has been retrieved"))
        .catch(err => errResponse(res, err));
}
// Deactivate Branch in order to be not seen on frontend

exports.deleteBranch = (req, res) => {
    const body = { branches_status: "Close" };
    // Check authorization first
    checkAuthorization(req, res, "Admin");

    Services
        .update(body, { where: { branches_id: req.params.branches_id }})
        .then(result => {
            if(result) emptyDataResponse(res, "Service Successfully Deactivated")
        })
        .catch(err => errResponse(res, err));
}