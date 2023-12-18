import { FC, useState } from 'react'
import { styled } from 'styled-components'
import { FetchingComponent } from '../../components/hoc/FetchingComponent'
import { palette } from '../../styles/palette'
import { ExchangeRatesData } from '../../types/ExchangeRatesData'
import { CurrencyDataDisplay } from './components/CurrencyDataDisplay'
import { CzkToCurrencyConverter } from './components/CzkToCurrencyConverter'
import { fetchCnbData } from './helpers'

type CnbRatesComponentProps = {
  data: ExchangeRatesData
}

export const notSelected = 'notSelected'
const CnbRatesPage: FC<CnbRatesComponentProps> = ({ data }) => {
  const [selectedCurrency, setSelectedCurrency] = useState<string>(notSelected)
  return (
    <>
      <CzkToCurrencyConverter
        data={data}
        selectedCurrency={selectedCurrency}
        setSelectedCurrency={setSelectedCurrency}
      />
      <CurrencyDataDisplay data={data} selectedCurrency={selectedCurrency} setSelectedCurrency={setSelectedCurrency} />
      <Footer>
        <div>{data.revision.date}</div>
        <div>(#{data.revision.revisionId})</div>
      </Footer>
    </>
  )
}

export const CnbRates: FC = () => (
  <div>
    <Header>Czech National Bank currency exchange rates</Header>
    <FetchingComponent fetch={fetchCnbData} Content={CnbRatesPage} />
  </div>
)

const Header = styled.div`
  font-size: 2em;
  padding: 7px 5px;
  border-bottom: 1px solid ${palette.border};
  margin: 5px;
`

const Footer = styled.div`
  font-size: 0.8em;
  padding: 2px 5px;
  color: ${palette.dimmedText};
  display: flex;
  justify-content: flex-end;
  & div {
    padding-left: 5px;
  }
`
