const express = require('express');
const router = express.Router()
const Item = require("../models/itemModels")

// CREATE: Add a new item

router.post('/items', async (req, res) => {
    const {name, description, price } = req.body
    try {
        const newItem = new Item({name,description,price})
        await newItem.save()
        res.status(201).json(newItem)
    } catch (error) {
        res.status(400).json({message:error.message})
    }

});

// READ: Get all items
router.get('/items', async (req,res)=>{
    try {
        const Items = await Item.find()
        res.status(200).json(Items)
    } catch (error) {
        res.status(400).json({message:error.message})
    }

})

// READ: Get a specific item by ID
router.get('/items/:id',async(req , res)=>{
    try {
        const item = await Item.findById(req.params.id)
        if(!item) return res.status(404).json({message:"Item not Found"})
         res.json(item);
    } catch (error) {
        res.status(404).json({message:error.message})
        
    }
})

// UPDATE: Update an existing item by ID
router.put('/items/:id', async (req,res)=>{
    const {name, description, price } = req.body
    try {
        const updateItem = await Item.findByIdAndUpdate(req.params.id,
            {name, description, price },
            {new : true, runValidators:true}
        )
        if(!updateItem) return res.status(404).json({message:"Item not Found"})
            res.json(updateItem);
    } catch (error) {
        res.status(404).json({message:error.message})
    }

})

// DELETE: Delete an item by ID
router.delete('/items/:id', async (req,res)=>{
    try {
        const deleteItem = await Item.findByIdAndDelete(req.params.id)
        if(!deleteItem) return res.status(404).json({message:"Item not Found"})
            res.json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.status(500).json({message:error.message})
    }

})

module.exports = router;