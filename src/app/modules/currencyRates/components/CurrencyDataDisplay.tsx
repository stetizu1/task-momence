import { Dispatch, FC } from 'react'
import { styled } from 'styled-components'
import { fontSize } from '../../../styles/fontSize'
import { palette } from '../../../styles/palette'
import { ExchangeRatesData } from '../../../types/ExchangeRatesData'

type CurrencyDataDisplayProps = {
  data: ExchangeRatesData
  selectedCurrency: string
  setSelectedCurrency: Dispatch<string>
}

const selectedClassName = 'selected'

export const CurrencyDataDisplay: FC<CurrencyDataDisplayProps> = ({ data, selectedCurrency, setSelectedCurrency }) => {
  return (
    <List>
      <ListHeader>Overview</ListHeader>
      {Object.entries(data.currencyData).map(([key, value]) => {
        return (
          <Item
            key={key}
            onClick={() => setSelectedCurrency(key)}
            className={selectedCurrency === key ? selectedClassName : ''}
          >
            <div>
              <FirstLine>{key}</FirstLine>
              <SecondLine>{`${value.currency} (${value.country})`}</SecondLine>
            </div>
            <div>
              <FirstLine>{`${value.rate} CZK`}</FirstLine>
              <SecondLine>
                / {value.amount} {key}
              </SecondLine>
            </div>
          </Item>
        )
      })}
    </List>
  )
}

const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`

const ListHeader = styled.div`
  font-size: ${fontSize.subHeader};
  padding: 5px 0;
  border-bottom: 1px solid ${palette.border};
  margin-bottom: 5px;
`

const Item = styled.div`
  background-color: ${palette.input.backgroundColor};
  padding: 10px 5px;
  margin: 2px 0;
  border-radius: 7px;
  display: flex;
  justify-content: space-between;
  & div {
    padding: 0 5px;
  }
  &.${selectedClassName} {
    background-color: ${palette.selectedBackground};
  }
  & *:last-child {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`

const FirstLine = styled.div`
  font-size: 0.9em;
  color: ${palette.input.labelTextColor};
  margin-bottom: 4px;
`

const SecondLine = styled.div`
  font-size: 0.8em;
  color: ${palette.dimmedText};
`
