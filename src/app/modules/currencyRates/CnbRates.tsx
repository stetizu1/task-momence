import { FC, useState } from 'react'
import { FetchingComponent } from '../../components/FetchingComponent'
import { ExchangeRatesData } from '../../types/ExchangeRatesData'
import { CurrencyDataDisplay } from './components/CurrencyDataDisplay'
import { CurrencyToCzkConverter } from './components/CurrencyToCzkConverter'
import { fetchCnbData } from './helpers'

type CnbRatesComponentProps = {
  data: ExchangeRatesData
}
const CnbRatesComponent: FC<CnbRatesComponentProps> = ({ data }) => (
  <>
    Czech National Bank currency exchange rates
    <CurrencyToCzkConverter data={data} />
    <hr />
    <CurrencyDataDisplay data={data} />
  </>
)

export const CnbRates: FC = () => {
  const [cnbData, setCnbData] = useState<ExchangeRatesData>()

  return (
    <FetchingComponent fetch={fetchCnbData} setData={setCnbData}>
      {cnbData ? <CnbRatesComponent data={cnbData} /> : null}
    </FetchingComponent>
  )
}
