import { FC } from 'react'
import { CnbData } from '../helpers/cnbParser/parser'

export const CnbDataDisplay: FC<{ data: CnbData }> = ({ data }) => {
  return (
    <>
      {data.revision.date} || #{data.revision.revisionId}
      {Object.entries(data.currencyData).map(([key, value]) => {
        return (
          <div key={key}>
            {key} ({value.currency}) -- {value.country} || {value.rate}/{value.amount}
          </div>
        )
      })}
    </>
  )
}
