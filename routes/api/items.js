const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../modules/Item');

// @route   GET api/items
// @desc    GET All Items
// @access  Public
router.get('/', (req, res) =>{
  Item.find()
    .sort({ counter: -1 })
    .limit(10)
    .then(items => res.json(items))
});

// @route   POST api/items
// @desc    Create an Item
// @access  Public
router.post('/', (req, res) =>{
  Item.findOneAndDelete({name: req.body.name})
    .then(result => (
        new Item({
          name: req.body.name,
          counter: result ? result.counter + 1 : 1
        })
      ))
    .then(newItem => {
        newItem.save().then(result => res.json(result))
    });
});

module.exports = router;