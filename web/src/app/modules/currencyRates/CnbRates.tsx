import { useQuery } from '@tanstack/react-query'
import { FC, useState } from 'react'
import { styled } from 'styled-components'
import { FetchingComponent } from '../../components/hoc/FetchingComponent'
import { config } from '../../config'
import { palette } from '../../styles/palette'
import { ExchangeRatesData } from '../../types/ExchangeRatesData'
import { CurrencyDataDisplay } from './components/CurrencyDataDisplay'
import { CzkToCurrencyConverter } from './components/CzkToCurrencyConverter'

type CnbRatesComponentProps = {
  data: ExchangeRatesData
  refetch?: ReturnType<typeof useQuery>['refetch']
}

export const notSelected = 'notSelected'
const CnbRatesPage: FC<CnbRatesComponentProps> = ({ data, refetch }) => {
  const [selectedCurrency, setSelectedCurrency] = useState<string>(notSelected)
  return (
    <>
      <CzkToCurrencyConverter
        data={data}
        selectedCurrency={selectedCurrency}
        setSelectedCurrency={setSelectedCurrency}
      />
      <CurrencyDataDisplay
        data={data}
        selectedCurrency={selectedCurrency}
        setSelectedCurrency={setSelectedCurrency}
        refetch={refetch}
      />
      <Footer>
        <div>{data.revision.date}</div>
        <div>(#{data.revision.revisionId})</div>
      </Footer>
    </>
  )
}

export const CnbRates: FC = () => {
  const queryFunction = async () => {
    const result = await fetch(config.fetchUrls.getCnbData)
    return (await result.json()) as ExchangeRatesData
  }
  return (
    <div>
      <Header>Czech National Bank currency exchange rates</Header>
      <FetchingComponent queryFn={queryFunction} queryKey={'data'} Content={CnbRatesPage} />
    </div>
  )
}

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
