import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const mongoUrl = process.env.MONGO_URL || "mongodb://127.0.0.1/finalproject"
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    trim: true,
  },
  accessToken: {
    type: String,
    required: true,
    default: () => crypto.randomBytes(128).toString('hex'),
  },
})

// User model 
const User = mongoose.model('User', userSchema)

const port = process.env.PORT || 8080
const app = express()

// Add middlewares to enable cors and json body parsing
app.use(cors())
app.use(express.json())

// Start defining your routes here
app.get('/'), (req, res) => {
  res.send('Welcome to JKR')
}

app.get('/my-pages', (req, res) => {
  res.send('Welcome')
})

app.post('/signup', async (req, res) => {
  const { email, password } = req.body

  try {
    const salt = bcrypt.genSaltSync()

    if (password.length < 8) {
			throw 'Password must be at least 8 characters long';
    }

    const newUser = await new User({
      email,
      password: bcrypt.hashSync(password, salt),
    }).save()

    res.status(201).json({
      response: {
        userId: newUser._id,
        email: newUser.email,
        accessToken: newUser.accessToken
      },
      success: true,
    })
  } catch (error) {
    res.status(400).json({ response: error, success: false})
  }
})

// Start the server
app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server running on http://localhost:${port}`)
})
