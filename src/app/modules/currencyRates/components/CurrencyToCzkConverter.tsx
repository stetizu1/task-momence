import { FC, useCallback, useState } from 'react'
import { ExchangeRatesData } from '../../../types/ExchangeRatesData'
import { convertFromCurrency } from '../helpers'

type CurrencyToCzkConverterProps = {
  data: ExchangeRatesData
}

const notSelected = 'notSelected'

export const CurrencyToCzkConverter: FC<CurrencyToCzkConverterProps> = ({ data }) => {
  const [amount, setAmount] = useState<string>()
  const [selectedCurrency, setSelectedCurrency] = useState<string>(notSelected)

  const getCzkValue = useCallback((): string => {
    if (!amount || !selectedCurrency) return ''
    const selectedCurrencyData = data.currencyData[selectedCurrency]
    return selectedCurrencyData ? convertFromCurrency(Number(amount), selectedCurrencyData).toFixed(3) : ''
  }, [data, amount, selectedCurrency])

  return (
    <div>
      <input type="number" value={amount} onChange={(v) => setAmount(v.target.value)} placeholder={'Amount'} /> CZK
      <select defaultValue={selectedCurrency} onChange={(event) => setSelectedCurrency(event.target.value)}>
        <option key="empty" value={notSelected}>
          ----Choose currency ----
        </option>
        {Object.entries(data.currencyData).map(([key, currencyData]) => (
          <option key={key} value={key}>
            {key} ({currencyData.currency} / {currencyData.country})
          </option>
        ))}
      </select>
      <input value={getCzkValue()} readOnly />
    </div>
  )
}
