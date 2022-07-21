import app from './app.js'
import { config } from 'dotenv'

config()

const PORT = process.env.PORT || 3333

app.listen(PORT, () => {
  console.log(`BeeGames 🐝 Express server is flying on port ${PORT}`)
})