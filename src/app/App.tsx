import { FC } from 'react'
import { styled } from 'styled-components'
import { CnbRates } from './modules/currencyRates/CnbRates'
import { palette } from './styles/palette'

export const App: FC = () => (
  <Page>
    <CnbRates />
  </Page>
)

const Page = styled.div`
  background-color: ${palette.background};
  margin: 0;
  padding: 8px;
  min-height: 100vh;
  color: ${palette.text};
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  & div {
    max-width: 760px;
  }
`
