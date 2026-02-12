const express = require('express');
const router = express.Router();
const chefController = require('../controllers/chefController');

// CREATE a chef
router.post('/', chefController.createChef);

// GET all chefs
router.get('/', chefController.getAllChefs);

// GET one chef by ID
router.get('/:id', chefController.getChefById);

// UPDATE a chef
router.put('/:id', chefController.updateChef);

// DELETE a chef
router.delete('/:id', chefController.deleteChef);

module.exports = router;
