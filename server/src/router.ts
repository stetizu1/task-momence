import { getCnbData } from 'common'
import { Router } from 'express'
import { config } from './config'
import { fetchCnbDataWithCache } from './helpers/cacheResult'
import { getRoute } from './helpers/getRoute'
import { ErrorCode } from './types/ErrorCode'

export const router = Router()

router.get(getRoute(getCnbData), async (_, res) => {
  try {
    const result = await fetchCnbDataWithCache(config.cacheSeconds)
    res.header('Access-Control-Allow-Origin', config.webUrl)
    res.send(result)
  } catch (e) {
    res.status(ErrorCode.InternalServerError).send('Error while trying to fetch the data')
  }
})
