const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ItemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: false },
    url: { type: String, required: true },
  },
  { collection: 'item' }
)

module.exports = mongoose.model('Item', ItemSchema)
