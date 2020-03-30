const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  hourlyRate: {
    type: Number,
    required: true
  }
});

const InventorySchema = new Schema({
  itemName: {
    type: String,
    required: true
  },
  modelNumber: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  quantiy: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});
module.exports = mongoose.model('Employee',EmployeeSchema);
module.exports = mongoose.model("Inventory", InventorySchema);