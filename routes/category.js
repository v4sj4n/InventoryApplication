const express = require('express')
const router = express.Router()

const Category = require('../models/category')
const Item = require('../models/item')

/* GET users listing. */
router.get('/:category', async (req, res, next) => {
  const category = await Category.findOne({ url: req.params.category })
  const items = await Item.find({ category: category._id }).populate('category')

  console.log(req.params.category)
  console.log(category)

  console.log(items)
  res.render('category', { title: category.name, category, items })
})

module.exports = router
