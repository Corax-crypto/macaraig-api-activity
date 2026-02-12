const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
    min: [0, 'Price must be positive'],
    max: [1000, 'Price seems too high'],
  },
  category: {
    type: String,
    enum: {
      values: ['Starters', 'Main', 'Dessert', 'Drinks'],
      message: '{VALUE} is not a valid category'
    },
    required: true,
  },
  isVegetarian: {
    type: Boolean,
    default: false,
  },
  reviews: [
    {
      user: String,
      rating: { type: Number, min: 1, max: 5 },
      comment: String
    }
  ],
  // Add this field
chef: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Chef' // Pointing to the Chef model
}
});

module.exports = mongoose.model('Dish', dishSchema);
