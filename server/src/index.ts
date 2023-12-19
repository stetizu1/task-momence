import express from 'express'
import { config } from './config'
import { router } from './router'

const app = express()

app.use(router)


app.listen(config.port, () => {
  console.log(`[server]: Server is running at port ${config.port}`)
})
