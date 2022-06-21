'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(Users, {
        foreignKey: "users_created_by",
        onDelete: "Restrict"
      });

      this.belongsTo(Users, {
        foreignKey: "users_updated_by",
        onDelete: "Restrict"
      });

      // for staff
      this.hasOne(models.Branches, {
        foreignKey : "users_branches",
        onDelete: "Restrict"
      })
    }
  }

  Users.init({
    id: {
      type : DataTypes.UUID,
      field: 'users_id',
      primaryKey : true, 
      defaultValue : DataTypes.UUIDV4
    },
    // users_branches: {
    //   type : DataTypes.UUID,
    //   allowNull: true,
    //   references: {
    //     model : sequelize.Branches,
    //     key: "branches_id"
    //   }
    // },
    users_fname: {
      type : DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull:{msg: 'Please enter your first name'},
        notEmpty:{msg: 'This field is required'}
      }
    },
    users_mname: {
      type : DataTypes.STRING,
      allowNull: true,
    },
    users_lname: {
      type : DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull:{msg: 'Please enter your last name'},
        notEmpty:{ msg: 'This field is required'}
      }
    },
    users_full_name :{
      type : DataTypes.STRING,
      set(value){
        this.setDataValue("full_name", 
        this.users_fname+ " "+ this.users_mname+ " "+ this.users_lname);
      },
    },
    users_birthdate: {
      type : DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        notNull:{msg: 'Please enter your birth date'},
        notEmpty:{msg: 'This field is required' }
      }
    },
    users_gender :{
      type : DataTypes.STRING,
      allowNull : false,
      validate :{
        isIn :{
          args :[["Male", "Female", "Other", "Prefer not to say"]], 
          msg : "Gender should be Male, Female, Other, Prefer not to say",
        },
        notNull:{msg: 'Please choose from provided choices'},
        notEmpty:{msg: 'This field is required'}
      },
    },
    users_civil_status :{
      type : DataTypes.STRING,
      allowNull : false,
      validate :{
        isIn :{
          args :[["Single", "Married", "Divorced", "Widowed"]], // for dropdown
          msg : "Civil status should be Single, Married, Divorce, or Widowed"
        },
        notNull:{msg: 'Please choose from provided choices'},
        notEmpty:{msg: 'This field is required'}
      },
    },
    users_phone_number : {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { args: true, msg: "You must enter Phone Number" },
        len: { args: [11,11], msg: 'Phone Number is invalid should be 11 numbers' },
        isInt: { args: true, msg: "You must enter Phone Number" },
      }
    },
    users_email :{
      type : DataTypes.STRING,
      allowNull : false,
      validate :{
        isEmail : {args: true, msg: "Please enter a valid email"},
        notNull: { args: true, msg: "You must enter a valid email" },
      },
      unique : "email",
    },
    users_password :{
      type : DataTypes.STRING,
      allowNull : false,
      validate: {
        notNull: { args: true, msg: "You must enter password" },
        len: { args: [8,60], msg: 'Password should atleast have 8 characters' },
     },
    },
    users_type :{
      type : DataTypes.STRING,
      allowNull : false,
      validate: {
        isIn :{
          args :[["Admin", "Staff", "Dentist", "Patient"]], // for dropdown or radio button
        },
        notNull:{msg: 'Please choose from provided choices'},
        notEmpty:{msg: 'This field is required'}
      },
    },
    // users_profile_pic :{
    //   type : DataTypes.STRING,
    //   allowNull: false,
    // },
    users_status :{
      type : DataTypes.STRING,
      allowNull: false,
      defaultValue : 'Active',
    },
    users_created_by: {
      type: DataTypes.UUID,
      references: {
        model: Users,
        key: "users_id",
      },
    },
    users_updated_by: {
      type: DataTypes.UUID,
      references: {
        model: Users,
        key: "users_id",
      },
    },
},
  {
    sequelize,
    timestamp: true,
    createdAt: "users_created_at",
    updatedAt: "users_updated_at",
    modelName: 'Users',
  });

  return Users;
};