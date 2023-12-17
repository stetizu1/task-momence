import { compactMap, fromEntries } from '../utility'

type CurrencyCode = string
type CurrencyData = {
  currency: string
  country: string
  amount: number
  rate: number
}

export type CnbData = {
  revision: {
    date: Date
    revisionId: string
  }
  currencyData: Record<CurrencyCode, CurrencyData>
}

export const parseCnbDataString = (dataString: string): CnbData | null => {
  const rows = dataString.trim().split('\n')
  const [revisionRow, descriptionRow, ...currencyRows] = rows
  if (!revisionRow || !descriptionRow) return null

  const revisionValues = revisionRow.split('#')
  if (!revisionValues[0] || !revisionValues[1]) return null

  const currencyData = fromEntries(compactMap(currencyRows, (row) => {
    const [country, currency, amountString, code, rateString] = row.split('|')
    if (!country || !currency || !amountString || !code || !rateString) return null

    const amount = Number(amountString)
    const rate = Number(rateString)
    if (Number.isNaN(amount) || Number.isNaN(rate)) return null

    return [code, { currency, country, amount, rate }] satisfies [string, CurrencyData]
  }))

  return {
    revision: {
      date: new Date(revisionValues[0]),
      revisionId: revisionValues[1],
    },
    currencyData,
  }
}
