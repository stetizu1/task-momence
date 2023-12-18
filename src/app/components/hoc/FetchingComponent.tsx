import { Volcano } from '@mui/icons-material'
import { CircularProgress } from '@mui/material'
import { FC, useCallback, useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { fontSize } from '../../styles/fontSize'
import { palette } from '../../styles/palette'

type FetchingComponentProps<T> = {
  fetch: () => Promise<T | null>
  Content: FC<{ data: T }>
}

export const FetchingComponent = <T,>({ fetch, Content }: FetchingComponentProps<T>) => {
  const [fetchedData, setFetchedData] = useState<T>()
  const [loadState, setLoadState] = useState<'loading' | 'loaded' | 'error'>('loading')

  const callFetch = useCallback(async () => {
    try {
      setLoadState('loading')
      const data = await fetch()
      if (data === null) {
        setLoadState('error')
        return
      }

      setFetchedData(data)
      setLoadState('loaded')
    } catch (e) {
      setLoadState('error')
    }
  }, [])

  useEffect(() => {
    void callFetch()
  }, [])

  if (loadState === 'loading') {
    return (
      <CenterBox>
        <CircularProgress />
      </CenterBox>
    )
  }
  if (loadState === 'error' || !fetchedData) {
    return (
      <ErrorPage>
        <ErrorPageHeader>Error</ErrorPageHeader>
        <ErrorText>Oops! Something went wrong...</ErrorText>
        <Volcano style={{ color: palette.errorText, fontSize: '50px', padding: '10px', alignSelf: 'center' }} />
        <ErrorSmallText>
          We are having some technical difficulties. Please try to refresh the page or come back later.
        </ErrorSmallText>
      </ErrorPage>
    )
  }
  return <Content data={fetchedData} />
}

const CenterBox = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
`

const ErrorPage = styled.div`
  display: flex;
  flex-direction: column;
`

const ErrorPageHeader = styled.div`
  font-size: ${fontSize.subHeader};
  color: ${palette.errorText};
  padding: 10px 0 12px;
  margin-bottom: 8px;
  border-bottom: 1px solid ${palette.errorText};
`

const ErrorText = styled.div`
  color: ${palette.errorText};
`

const ErrorSmallText = styled.div`
  font-size: ${fontSize.label};
  color: ${palette.dimmedText};
`
