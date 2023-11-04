require('./db')

const { default: mongoose } = require('mongoose')
const Category = require('./models/category')
const Item = require('./models/item')

const lolo = async () => {
  const categories = await Category.findOne({ name: 'Tech' })
  console.log(categories)

  const items = await Item.find({ category: categories._id }).populate(
    'category'
  )
  console.log(items)
}

lolo()
