const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../modules/Item');

// @route   GET api/items
// @desc    GET All Items
// @access  Public
router.get('/', (req, res) =>{
    Item.find()
        .then(items => res.json(items))
});

// @route   POST api/items
// @desc    Create an Item
// @access  Public
router.post('/', (req, res) =>{
    const newItem = new Item({
        name: req.body.name,
    });
    newItem.save().then(item => res.json(item));
});

// @route   POST api/items/update
// @desc    Create an Item
// @access  Public
router.put('/update', (req, res) =>{
  Item.findByIdAndUpdate(req.body.id, req.body.update)
    .then(item => res.json(item));
});

// @route   DELETE api/items/:id
// @desc    Delete an Item
// @access  Public
router.delete('/:id', (req, res) =>{
    Item.findById(req.params.id)                                         // TODO: Improve!
        .then(item => item.remove().then(() => res.json({success : true})))
        .catch(err => res.status(404).json({success : false}));
});


module.exports = router;