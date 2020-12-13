const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.static('public'))
app.use(express.json({limit: '1mb'}))
app.use(cors())

const connectDB = require('./database/mainDB')

connectDB()

const PORT = process.env.PORT || 5000;
// TODO: Redo the way the Routes are
const currentDay = require('./routes/history')
const search = require('./routes/search')
const register = require('./routes/auth/register')
const login = require('./routes/auth/signin')
const profile = require('./routes/profile/profile')

// app.get('/', (req, res) => res.send('API Running'));

//login and register
app.use('/api/login', login)
app.use('/api/register', register)

//Profile
app.use('api/profile', profile)


app.use(currentDay)
app.use(search)

app.listen(PORT, () => console.log(`> Server Started On: http://localhost:${PORT}`));