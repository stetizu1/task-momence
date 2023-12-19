import { Volcano } from '@mui/icons-material'
import { CircularProgress } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import { styled } from 'styled-components'
import { fontSize } from '../../styles/fontSize'
import { palette } from '../../styles/palette'

type FetchingComponentProps<T> = {
  queryKey: string
  queryFn: () => Promise<T | null>
  Content: FC<{ data: T; refetch?: ReturnType<typeof useQuery>['refetch'] }>
}

export const FetchingComponent = <T,>({ queryKey, queryFn, Content }: FetchingComponentProps<T>) => {
  const { isLoading, isRefetching, error, data, refetch } = useQuery({
    queryKey: [queryKey],
    queryFn,
  })

  if (isLoading || isRefetching) {
    return (
      <CenterBox>
        <CircularProgress />
      </CenterBox>
    )
  }
  if (error || !data) {
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
  return <Content data={data} refetch={refetch} />
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
