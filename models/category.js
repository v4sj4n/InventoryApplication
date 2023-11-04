const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
  },
  { collection: 'category' }
)

module.exports = mongoose.model('Category', CategorySchema)
