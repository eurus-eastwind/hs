﻿<?php
include("left_sidebar.php");
include("right_sidebar.php");
include("top_bar.php");
include("../partials/footer.php");
?>

<!DOCTYPE html>

    <html lang="en">

    <head>
        <meta charset="utf-8">
        <title>Branches | HappySmile Dental Clinic</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="A fully featured admin theme which can be used to build CRM, CMS, etc." name="description">
        <meta content="Happy Smile" name="Author">
        <!-- App favicon -->
        <link rel="shortcut icon" href="../../../assets/images/favicon.ico">

        <!-- App css -->
        <link href="../../../assets/css/icons.min.css" rel="stylesheet" type="text/css">
        <link href="../../../assets/css/app.min.css" rel="stylesheet" type="text/css" id="light-style">
        <link href="../../../assets/css/app-dark.min.css" rel="stylesheet" type="text/css" id="dark-style">

    </head>

    <body class="loading" data-layout-config='{"leftSideBarTheme":"dark","layoutBoxed":false, "leftSidebarCondensed":false, "leftSidebarScrollable":false,"darkMode":false, "showRightSidebarOnStart": true}'>
        <!-- Begin page -->
        <div class="wrapper">

            <!-- ============================================================== -->
            <!-- Start Page Content here -->
            <!-- ============================================================== -->

                    <!-- Start Content-->
                    <div class="container-fluid">
                        
                        <!-- start page title -->
                        <div class="row">
                            <div class="col-12">
                                <div class="page-title-box">
                                    <div class="page-title-right">
                                        <ol class="breadcrumb m-0">
                                            <li class="breadcrumb-item"><a href="javascript: void(0);">HappySmile</a></li>
                                            <li class="breadcrumb-item"><a href="javascript: void(0);">Admin</a></li>
                                            <li class="breadcrumb-item"><a href="javascript: void(0);">Services</a></li>
                                            <li class="breadcrumb-item active">Services Offered</li>
                                        </ol>
                                    </div>
                                    <h4 class="page-title">SERVICES</h4>
                                </div>
                            </div>
                        </div>     
                        <!-- end page title --> 

                        <div class="row">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-body">

                                        <div class="row">
                                            <div class="col-xl-6">
                                                <div class="mb-3">
                                                    <label for="projectname" class="form-label">Name</label>
                                                    <input type="text" id="projectname" class="form-control" placeholder="Enter project name">
                                                </div>

                                                <div class="mb-3">
                                                    <label for="project-overview" class="form-label">Overview</label>
                                                    <textarea class="form-control" id="project-overview" rows="5" placeholder="Enter some brief about project.."></textarea>
                                                </div>

                                                <!-- Date View -->
                                                <div class="mb-3 position-relative" id="datepicker1">
                                                    <label class="form-label">Start Date</label>
                                                    <input type="text" class="form-control" data-provide="datepicker" data-date-container="#datepicker1" data-date-format="d-M-yyyy" data-date-autoclose="true">
                                                </div>

                                                <div class="mb-3">
                                                    <label for="project-budget" class="form-label">Budget</label>
                                                    <input type="text" id="project-budget" class="form-control" placeholder="Enter project budget">
                                                </div>

                                                <div class="mb-0">
                                                    <label for="project-overview" class="form-label">Team Members</label>
                                                    
                                                    <select class="form-control select2" data-toggle="select2">
                                                        <option>Select</option>
                                                        <option value="AZ">Mary Scott</option>
                                                        <option value="CO">Holly Campbell</option>
                                                        <option value="ID">Beatrice Mills</option>
                                                        <option value="MT">Melinda Gills</option>
                                                        <option value="NE">Linda Garza</option>
                                                        <option value="NM">Randy Ortez</option>
                                                        <option value="ND">Lorene Block</option>
                                                        <option value="UT">Mike Baker</option>
                                                    </select>

                                                    <div class="mt-2" id="tooltip-container">
                                                        <a href="javascript:void(0);" data-bs-container="#tooltip-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Mat Helme" class="d-inline-block">
                                                            <img src="../../../assets/images/users/avatar-6.jpg" class="rounded-circle avatar-xs" alt="friend">
                                                        </a>
                
                                                        <a href="javascript:void(0);" data-bs-container="#tooltip-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Michael Zenaty" class="d-inline-block">
                                                            <img src="../../../assets/images/users/avatar-7.jpg" class="rounded-circle avatar-xs" alt="friend">
                                                        </a>
                
                                                        <a href="javascript:void(0);" data-bs-container="#tooltip-container" data-bs-toggle="tooltip" data-bs-placement="top" title="James Anderson" class="d-inline-block">
                                                            <img src="../../../assets/images/users/avatar-8.jpg" class="rounded-circle avatar-xs" alt="friend">
                                                        </a>
            
                                                        <a href="javascript:void(0);" data-bs-container="#tooltip-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Lorene Block" class="d-inline-block">
                                                            <img src="../../../assets/images/users/avatar-4.jpg" class="rounded-circle avatar-xs" alt="friend">
                                                        </a>
                
                                                        <a href="javascript:void(0);" data-bs-container="#tooltip-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Mike Baker" class="d-inline-block">
                                                            <img src="../../../assets/images/users/avatar-5.jpg" class="rounded-circle avatar-xs" alt="friend">
                                                        </a>
                                                    </div>
        
                                                </div>

                                            </div> <!-- end col-->

                                            <div class="col-xl-6">
                                                <div class="mb-3 mt-3 mt-xl-0">
                                                    <label for="projectname" class="mb-0">Avatar</label>
                                                    <p class="text-muted font-14">Recommended thumbnail size 800x400 (px).</p>

                                                    <form action="/" method="post" class="dropzone" id="myAwesomeDropzone" data-plugin="dropzone" data-previews-container="#file-previews" data-upload-preview-template="#uploadPreviewTemplate">
                                                        <div class="fallback">
                                                            <input name="file" type="file">
                                                        </div>

                                                        <div class="dz-message needsclick">
                                                            <i class="h3 text-muted dripicons-cloud-upload"></i>
                                                            <h4>Drop files here or click to upload.</h4>
                                                        </div>
                                                    </form>

                                                    <!-- Preview -->
                                                    <div class="dropzone-previews mt-3" id="file-previews"></div>

                                                    <!-- file preview template -->
                                                    <div class="d-none" id="uploadPreviewTemplate">
                                                        <div class="card mt-1 mb-0 shadow-none border">
                                                            <div class="p-2">
                                                                <div class="row align-items-center">
                                                                    <div class="col-auto">
                                                                        <img data-dz-thumbnail="" src="#" class="avatar-sm rounded bg-light" alt="">
                                                                    </div>
                                                                    <div class="col ps-0">
                                                                        <a href="javascript:void(0);" class="text-muted fw-bold" data-dz-name=""></a>
                                                                        <p class="mb-0" data-dz-size=""></p>
                                                                    </div>
                                                                    <div class="col-auto">
                                                                        <!-- Button -->
                                                                        <a href="" class="btn btn-link btn-lg text-muted" data-dz-remove="">
                                                                            <i class="dripicons-cross"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- end file preview template -->
                                                </div>

                                                <!-- Date View -->
                                                <div class="mb-3 position-relative" id="datepicker2">
                                                    <label class="form-label">Due Date</label>
                                                    <input type="text" class="form-control" data-provide="datepicker" data-date-container="#datepicker2" data-date-format="d-M-yyyy" data-date-autoclose="true">
                                                </div>
                                            </div> <!-- end col-->
                                        </div>
                                        <!-- end row -->

                                    </div> <!-- end card-body -->
                                </div> <!-- end card-->
                            </div> <!-- end col-->
                        </div>
                        <!-- end row-->
                        
                    </div> <!-- container -->

                </div> <!-- content -->

            </div>

            <!-- ============================================================== -->
            <!-- End Page content -->
            <!-- ============================================================== -->


        </div>
        <!-- END wrapper -->

        <!-- bundle -->
        <script src="../../../assets/js/vendor.min.js"></script>
        <script src="../../../assets/js/app.min.js"></script>

        <!-- plugin js -->
        <script src="../../../assets/js/vendor/dropzone.min.js"></script>
        <!-- init js -->
        <script src="../../../assets/js/ui/component.fileupload.js"></script>

    </body>
</html>
