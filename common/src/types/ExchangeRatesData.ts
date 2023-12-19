type CurrencyCode = string

export type CurrencyData = {
  currency: string
  country: string
  amount: number
  rate: number
}

export type ExchangeRatesData = {
  revision: {
    date: string
    revisionId: string
  }
  currencyData: Record<CurrencyCode, CurrencyData>
}
