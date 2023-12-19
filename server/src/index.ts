import dotenv from 'dotenv'
import express, { Router } from 'express'
import fetch from 'node-fetch-commonjs'
import { ErrorCode } from './types/ErrorCode'

dotenv.config()

const app = express()
const port = process.env.PORT

const router = Router()

router.get('/getCnbData', async (_, res) => {
  const url =
    'https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt'
  try {
    const result = await fetch(url)
    const textResult = await result.text()
    res.send(textResult)
  } catch (e) {
    res.status(ErrorCode.InternalServerError).send('Error while trying to fetch the data')
  }
})

app.use(router)

app.listen(port, () => {
  console.log(`[server]: Server is running at port ${port}`)
})
