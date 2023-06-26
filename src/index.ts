import express from 'express'
import { AppDataSource } from './database/data-source'
import { router } from './routes'

const app = express()
app.use(express.json())

app.use(router)

AppDataSource.initialize().then(() => {
  app.listen(process.env.PORT)
})
