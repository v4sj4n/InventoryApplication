const express = require('express')
const Category = require('../models/category')
const Item = require('../models/item')

const router = express.Router()

/* GET home page. */
router.get('/', async (req, res, next) => {
  const categories = await Category.find()
  const items = await Item.find().populate('category')
  console.log(categories)
  console.log(items)
  res.render('index', {
    title: 'Inventory',
    desc: 'Inventory Application',
    categories,
    items,
  })
})

module.exports = router
