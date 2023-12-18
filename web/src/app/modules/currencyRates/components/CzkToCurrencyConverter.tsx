import { Dispatch, FC, useCallback, useState } from 'react'
import { styled } from 'styled-components'
import { StyledInput, StyledLabel, StyledSelect } from '../../../components/form'
import { fontSize } from '../../../styles/fontSize'
import { palette } from '../../../styles/palette'
import { ExchangeRatesData } from '../../../types/ExchangeRatesData'
import { convertFromCzk } from '../helpers'

type CurrencyToCzkConverterProps = {
  data: ExchangeRatesData
  selectedCurrency: string
  setSelectedCurrency: Dispatch<string>
}

const notSelected = 'notSelected'

export const CzkToCurrencyConverter: FC<CurrencyToCzkConverterProps> = ({
  data,
  selectedCurrency,
  setSelectedCurrency,
}) => {
  const [amount, setAmount] = useState<string>()

  const getValue = useCallback((): string => {
    if (!amount || !selectedCurrency) return ''
    const selectedCurrencyData = data.currencyData[selectedCurrency]
    return selectedCurrencyData
      ? `${convertFromCzk(Number(amount), selectedCurrencyData).toFixed(3)} ${selectedCurrency}`
      : ''
  }, [data, amount, selectedCurrency])

  return (
    <MainContainer>
      <Header>Convert from CZK</Header>
      <Column>
        <StyledLabel>Amount [CZK]</StyledLabel>
        <StyledInput
          type="number"
          value={amount}
          onChange={(v) => setAmount(v.target.value)}
          placeholder={'insert value in CZK'}
        />
        <StyledLabel>To currency</StyledLabel>
        <StyledSelect value={selectedCurrency} onChange={(event) => setSelectedCurrency(event.target.value)}>
          <option key="empty" value={notSelected}>
            ---- Select currency ----
          </option>
          {Object.entries(data.currencyData).map(([key, currencyData]) => (
            <option key={key} value={key}>
              {key} ({currencyData.currency} / {currencyData.country})
            </option>
          ))}
        </StyledSelect>
      </Column>
      <Column>
        <StyledLabel>=</StyledLabel>
        <StyledInput
          placeholder={selectedCurrency === notSelected ? '...select currency first' : `0.000 ${selectedCurrency}`}
          value={getValue()}
          readOnly
        />
      </Column>
    </MainContainer>
  )
}

const Header = styled.div`
  width: 100%;
  padding: 10px 10px 0;
  text-align: left;
  font-size: ${fontSize.subHeader};
  color: ${palette.input.labelTextColor};
`

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #5d6062;
  justify-content: space-between;
  margin: 5px;
  border-radius: 5px;
`

const Column = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 10px 10px 5px;
  box-sizing: border-box;
`
