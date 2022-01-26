const mongoose = require("mongoose")
const products = require('./data/products.json')

const productSchema = new mongoose.Schema ({
  productName: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  condition: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  img: {
    type: String,
    required: true
  }
})

//Product model
const Product = mongoose.model("Product", productSchema)

//Seed the database with data of products
if (process.env.RESET_DB) {
  const seedDatabase = async () => {
    await Product.deleteMany({})

    products.forEach(product => {
      new Product(product).save()
    })
  }
  seedDatabase()
}

app.get("/products", async (req, res) => {

  try {
    const products = await Product.find()
    res.json({products, success: true})
  } catch (error) {
    res.status(400).json({ response: error, success: false})
  }
})

module.exports = Product