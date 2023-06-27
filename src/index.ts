import express from 'express'
import 'express-async-errors'
import { AppDataSource } from './data-source'
import { router } from './routes'

const app = express()
app.use(express.json())
app.use(router)

app.listen(process.env.PORT)

AppDataSource.initialize().then(() => {
  console.log('Server is running')
})

app.get('/', (request, response) => {
  return response.json({ message: 'Hello Worldxcv' })
})
