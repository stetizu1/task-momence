import { FC } from 'react'
import { ExchangeRatesData } from '../../../types/ExchangeRatesData'

type CurrencyDataDisplayProps = { data: ExchangeRatesData }
export const CurrencyDataDisplay: FC<CurrencyDataDisplayProps> = ({ data }) => {
  return (
    <>
      {data.revision.date} || #{data.revision.revisionId}
      {Object.entries(data.currencyData).map(([key, value]) => {
        return (
          <div key={key}>
            {key} ({value.currency}) -- {value.country} || {value.rate / value.amount} CZK {key}
          </div>
        )
      })}
    </>
  )
}
