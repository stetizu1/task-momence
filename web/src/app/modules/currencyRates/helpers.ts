import { CurrencyData } from '../../types/ExchangeRatesData'

export const convertFromCzk = (amount: number, currencyData: CurrencyData) =>
  (amount / currencyData.rate) * currencyData.amount
