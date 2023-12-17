import { FC, useState } from 'react'
import { FetchingComponent } from '../../components/FetchingComponent'
import { CnbData } from '../../helpers/cnbParser/parser'
import { fetchCnbData } from './helpers'
import { CnbDataDisplay } from '../CnbDataDisplay'

export const CnbRates: FC = () => {
  const [cnbData, setCnbData] = useState<CnbData>()

  return (
    <FetchingComponent fetch={fetchCnbData} setData={setCnbData}>
      {cnbData ? <CnbDataDisplay data={cnbData} /> : <></>}
    </FetchingComponent>
  )
}
