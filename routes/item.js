const express = require('express')
const router = express.Router()

const Category = require('../models/category')
const Item = require('../models/item')
const { Mongoose } = require('mongoose')
const category = require('../models/category')

router.get('/:item', async (req, res, next) => {
  const item = await Item.findOne({ url: req.params.item }).populate('category')

  console.log(item)
  res.render('item', { item, title: item.name })
})

router.post('/', async (req, res, next) => {
  console.log(req.body.title)
  const category = await Category.findOne({ url: req.body.category })
  console.log(category)
  await Item.create({
    name: req.body.title,
    description: req.body.description,
    price: Number(req.body.price),
    quantity: Number(req.body.quantity),
    url: req.body.title.toLowerCase().replace(/[ \-]/g, ''),
    category: category._id,
  })
  console.log('loqe')
  res.redirect('/')
})

module.exports = router
