const express = require('express')
const router = express.Router()

const Category = require('../models/category')
const Item = require('../models/item')

/* GET users listing. */
router.get('/:item', async (req, res, next) => {
  const item = await Item.findOne({ url: req.params.item }).populate('category')

  console.log(item)
  res.render('item', { item, title: item.name })
})

module.exports = router
