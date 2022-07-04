'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Invoices extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      this.belongsTo(models.Appointments, {
        foreignKey : 'invoices_appointments'
      });
      // Association to Users table
      // One to Many
      this.belongsTo(models.Users, {
        foreignKey : 'invoices_issued_to',
        otherKey: "invoices_created_by",
      });
      this.hasMany(models.Invoices_services, {
        as: "dump_invoice",
        foreignKey: "inser_invoice_id"
      });
    }
  }
  Invoices.init({
    invoices_id: {
      type : DataTypes.UUID,
      primaryKey : true, 
      defaultValue : DataTypes.UUIDV4
    },
    // Create an invoice only for those patients
    // that has a successful appointment
    invoices_appointments: {
    type: DataTypes.UUID,
    allowNull: false,
    },
    invoices_issued_to: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    invoices_description: {
      type : DataTypes.TEXT,
      allowNull: true,
    },
    invoices_discount: {
      type : DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isInt:{msg: 'Must be a Number'},
      }
    },
    total_after_discount: {
      type : DataTypes.DECIMAL,
      allowNull: false,
    },
    grand_total: {
      type : DataTypes.DECIMAL,
      allowNull: false,
    },
    invoices_status :{
      type : DataTypes.STRING,
      allowNull : false,
      validate: {
        isIn :{
          args :[["Unpaid", "Paid", "Deleted"]], // for dropdown 
        },
        notNull:{msg: 'Please choose from provided choices'},
        notEmpty:{msg: 'This field is required'}
      },
    },
  }, 
  {
    sequelize,
    timestamp: true,
    createdAt: "invoices_created_at",
    updatedAt: "invoices_updated_at",
    modelName: 'Invoices',
  });
    return Invoices;
  };