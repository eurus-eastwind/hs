/**
* Admin Routes
*/
// To import Router from Request
var router = require("express").Router();
const multer = require("multer");
const path = require("path");
const helpers = require("../helpers/image.helper");

// This part is for image users profile picture
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/users_profile_pic"));
  },

  // By default, multer removes file extensions so let's add them back
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const uploadImage = (req, res, next) => {
  let upload = multer({
    storage: storage,
    fileFilter: helpers.imageFilter,
  }).single("users_profile_pic");

  upload(req, res, function (err) {
    // req.file contains information of uploaded file
    // req.body contains information of text fields, if there were any

    if (req.fileValidationError) {
      return res.status(500).send({
        error: true,
        data: [],
        message: [req.fileValidationError],
      });
    } else if (!req.file) {
      return res.status(500).send({
        error: true,
        data: [],
        message: ["Please select an image to upload"],
      });
    } else if (err instanceof multer.MulterError) {
      return res.status(500).send({
        error: true,
        data: [],
        message: [err],
      });
    } else if (err) {
      return res.status(500).send({
        error: true,
        data: [],
        message: [err],
      });
    }
    next();
  });
};

// This part is for features dentist
const storageService = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "../public/services"));
    },
  
    // By default, multer removes file extensions so let's add them back
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  
const uploadImageService = (req, res, next) => {
let upload = multer({
    storage: storageService,
    fileFilter: helpers.imageFilter,
}).single("services_image");

upload(req, res, function (err) {
    // req.file contains information of uploaded file
    // req.body contains information of text fields, if there were any

    if (req.fileValidationError) {
    return res.status(500).send({
        error: true,
        data: [],
        message: [req.fileValidationError],
    });
    } else if (!req.file) {
    return res.status(500).send({
        error: true,
        data: [],
        message: ["Please select an image to upload"],
    });
    } else if (err instanceof multer.MulterError) {
    return res.status(500).send({
        error: true,
        data: [],
        message: [err],
    });
    } else if (err) {
    return res.status(500).send({
        error: true,
        data: [],
        message: [err],
    });
    }
    next();
});
};

// This part is for Featured Dentists
const storageDentist = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "../public/featured_dentist"));
    },
  
    // By default, multer removes file extensions so let's add them back
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
});
  
const uploadImageDentist = (req, res, next) => {
let upload = multer({
    storage: storageDentist,
    fileFilter: helpers.imageFilter,
}).single("dentists_image");

upload(req, res, function (err) {
    // req.file contains information of uploaded file
    // req.body contains information of text fields, if there were any

    if (req.fileValidationError) {
    return res.status(500).send({
        error: true,
        data: [],
        message: [req.fileValidationError],
    });
    } else if (!req.file) {
    return res.status(500).send({
        error: true,
        data: [],
        message: ["Please select an image to upload"],
    });
    } else if (err instanceof multer.MulterError) {
    return res.status(500).send({
        error: true,
        data: [],
        message: [err],
    });
    } else if (err) {
    return res.status(500).send({
        error: true,
        data: [],
        message: [err],
    });
    }
    next();
});
};


// For Dashboard
// Counter
const adminInfoController = require("../controllers/admin/admin_info.controller");
router.get('/get-info' , adminInfoController.getAdminInfo);
router.put("/:update-info" , adminInfoController.updateAdminInfo); 

/** For Registered Users CRUD */ 
 const usersController = require("../controllers/admin/users.controller");

router.post("/add-users", uploadImage, usersController.createAccount); // insert
router.put("/:users_id", uploadImage,usersController.updateAccount); // update
router.get("/retrieve-users", usersController.getAllAccounts);
router.delete("/:users_id", usersController.deleteAccount); // deactivate user

/** For Featured Dentist CRUD */ 
const dentistController = require("../controllers/admin/dentists.controller");

router.post("/add-featured-dentist",uploadImageDentist, dentistController.createDentist); // insert
router.put("/:dentist_id", uploadImageDentist, dentistController.updateDentist); // update
router.get("/retrieved-featured-dentist", dentistController.getAll);
router.delete("/:dentist_id", dentistController.deleteDentist);

/** For Services CRUD */ 
const serviceController = require("../controllers/admin/services.controller");
router.post("/add-service",uploadImageService, serviceController.createService); // insert
router.put("/:service_id", uploadImageService, serviceController.updateService); // update
router.get("/get-all-services", serviceController.getAllService);
router.delete("/:service_id", serviceController.deleteService); // destroy


/** For Branches CRUD */ 
const branchesController = require("../controllers/admin/branches.controller");
router.post("/add-branch",branchesController.createBranches); // insert
router.put("/:branch_id", branchesController.updateBranches); // update
router.get("/get-all-branches", branchesController.getAllBranches);
router.delete("/:branches_id", branchesController.deleteBranch); // destroy

// /** Appointments LISTS */
// const appointmentController = require("../controllers/admin/appointments.controller");
// router.post("/add-appointment", appointmentController.createAppointment); // insert
// router.put("/:appointment_id", appointmentController.updateAppointment); // update // Can approve appointment
// router.get("/get-all-appointment", appointmentController.findAllAppointment);
// router.delete("/:appointment_id", appointmentController.deleteAppointment); // deactivate appointment

/** Schedules of Dentists */
const scheduleController = require("../controllers/admin/sched.controller");
router.post("/schedule", scheduleController.createSchedule); // insert
router.put("/:schedule_id", scheduleController.updateSchedule); // update
router.get("/get-all-schedule", scheduleController.findAllSchedule);
router.delete("/:schedule_id", scheduleController.deleteSchedule); // delete as in delete

module.exports = router;