
# Initialize Sequelize
 $ sequelize init

# Express
npm install express --save

# Sequelize
 $ npm install --save sequelize

# Sequelize-cli
 $ npm install -g sequelize-cli

# MySQL Driver
 $ npm install --save mysql2

# Nodemon
 $ npm i -D nodemon

# Dotenv
 $ npm install dotenv

# brcypt
 $ npm install bcrypt

# jsonwebtoken
 $ npm install jsonwebtoken


# Edit config.json in config folder
{
  "development": {
    ...
    "database": "YOUR DATABASE NAME",
    ...
  },
  ...
}

# Run app by development
$ npm run start

# To create database
$ sequelize db:create

# To drop database
$ sequelize db:drop

# To create model
$ sequelize model:generate --name Model_Name --attributes column:string

$ sequelize model:generate --name Services --attributes services_id:string
$ sequelize model:generate --name Invoices_services --attributes inser_id:string
$ sequelize model:generate --name Invoices --attributes invoices_id:string
$ sequelize model:generate --name Dentists --attributes dentists_id:string
$ sequelize model:generate --name Dentists_schedules --attributes schedule_id:string
$ sequelize model:generate --name Branches --attributes branches_id:string
$ sequelize model:generate --name Appointments --attributes appointments_id:string