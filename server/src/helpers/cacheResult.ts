import { ExchangeRatesData } from 'common/build'
import { addSeconds, isAfter } from 'date-fns'
import fetch from 'node-fetch-commonjs'
import { cnbDailyUrl } from '../const'
import { parseCnbDataString } from './cnbParser/parser'

type CacheResult = {
  createdAt: Date
  data: ExchangeRatesData | null
}
let cacheResult: CacheResult | null = null

export const fetchCnbDataWithCache = async (seconds: number) => {
  if (!cacheResult || isAfter(new Date(), addSeconds(cacheResult.createdAt, seconds)) || cacheResult.data === null) {
    console.log('Request new data from CNB')
    const newCreatedAt = new Date()
    const result = await fetch(cnbDailyUrl)
    const textResult = await result.text()
    const parsed = parseCnbDataString(textResult)
    cacheResult = {
      createdAt: newCreatedAt,
      data: parsed,
    }
  }
  return cacheResult.data
}
