const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const crypto = require("crypto")

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
    default: () => crypto.randomBytes(128).toString("hex"),
  },
})

// User model 
const User = mongoose.model("User", userSchema)

//Sign up

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body

  try {
    const salt = bcrypt.genSaltSync()

    if (password.length < 8) {
			throw 'Password must be at least 8 characters long'
    }

    const newUser = await new User({
      name,
      email,
      password: bcrypt.hashSync(password, salt),
    }).save()
    res.status(201).json({
      response: {
        userId: newUser._id,
        name: newUser.name,
        email: newUser.email,
        accessToken: newUser.accessToken
      },
      success: true,
    })
  } catch (error) {
    res.status(400).json({ response: error, success: false})
  }
})

//Sign in

app.post("/signin", async (req, res) => {
	const { email, password } = req.body

	try {
		const user = await User.findOne({ email })

		if (user && bcrypt.compareSync(password, user.password)) {
			res.status(200).json({ 
				response: {
					userId: user._id,
					email: user.email,
					accessToken: user.accessToken,
				},
				success: true,
			})
		} else {
			res.status(404).json({
				response: "Invalid e-mail or password",
				success: false,
			})
		}
	} catch (error) {
		res.status(400).json({ response: error, success: false })
	}
});

//My pages

app.get("/my-pages", authenticateUser)
app.get("/my-pages", (req, res) => {
  const { name } = req.body
  res.send(`Welcome ${name}`)
})

module.exports = User