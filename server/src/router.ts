import { Router } from 'express'
import fetch from 'node-fetch-commonjs'
import { config } from './config'
import { cnbDailyUrl } from './const'
import { parseCnbDataString } from './helpers/cnbParser/parser'
import { ErrorCode } from './types/ErrorCode'
import { getRoute } from './helpers/getRoute'
import { getCnbData } from 'common/build'

export const router = Router()

router.get(getRoute(getCnbData), async (_, res) => {
  try {
    const result = await fetch(cnbDailyUrl)
    const textResult = await result.text()
    const parsed = parseCnbDataString(textResult)
    res.header('Access-Control-Allow-Origin', config.webUrl)
    res.send(parsed)
  } catch (e) {
    res.status(ErrorCode.InternalServerError).send('Error while trying to fetch the data')
  }
})
