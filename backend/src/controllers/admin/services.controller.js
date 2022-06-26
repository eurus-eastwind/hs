/**
 * 
 * CONTROLLER SERVICE FOR ADMIN
 */
 const db = require('../../models');
 const Services = db.Services;
 const Users = db.Users;
 
 //create and save new Service
 exports.createService = (req, res) => {

    req.body.services_created_by = req.users.users_id;
    // Check users-type if valid
    checkAuthorization(req, res, "Admin");
 
    Services
        .findOne({ where: { services_id: req.body.services_id}})
        .then(result => {
            if(result) emptyDataResponse(res, "")
            else {
                // Set id
                req.body.services_id = req.services_id
                
                // Create featured dentist
                Services
                    .create(req.body)
                    .then((data) => dataResponse(res, data, "A new record has been added", "Record is not added"))
                    .catch((err) => errResponse(res, err)); 
            }
        })
        .catch(err => errResponse(res, err));
 };
 // Update Services
 exports.updateService = (req, res) => {
 
     // Check if user-status is valid
     // note: always check authorization using users_type
     checkAuthorization(req, res, "Admin")
 
     Services
         .update(req.body, {
             where: {
                 dentist_id: req.params.dentist_id
             }
         })
         .then(data => dataResponse(res, data, "Updated Successfully", "No updates happened"))
         .catch(err => errResponse(res, err))
 }
 // Get all Services
 exports.getAllService = (req, res, next) => {
     
     // Check authorization first
     checkAuthorization(req, res, "Admin")
 
     Services
         .findAll({ where: { dentists_id: req.dentists_id }})
         .then(data => dataResponse(res, data, "Featured Dentist Retrieved Successfully", "No featured dentist has been retrieved"))
         .catch(err => errResponse(res, err));
 }
 // Deactivate Service in order to be not seen on frontend

 exports.deleteService = (req, res) => {
     const body = { services_status: "Inactive" };
     // Check authorization first
     checkAuthorization(req, res, "Admin");
 
     Services
         .update(body, { where: { services_id: req.params.services_id }})
         .then(result => {
             if(result) emptyDataResponse(res, "Featured Dentist Successfully Deactivated")
         })
         .catch(err => errResponse(res, err));
 }