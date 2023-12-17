import { Dispatch, ReactNode, useCallback, useEffect, useState } from 'react'

type FetchingComponentProps<T> = {
  fetch: () => Promise<T | null>
  setData: Dispatch<T>
  children: ReactNode
}

export const FetchingComponent = <T,>({ fetch, setData, children }: FetchingComponentProps<T>) => {
  const [loadState, setLoadState] = useState<'loading' | 'loaded' | 'error'>('loading')

  const callFetch = useCallback(async () => {
    try {
      setLoadState('loading')
      const data = await fetch()
      if (data === null) {
        setLoadState('error')
        return
      }

      setData(data)
      setLoadState('loaded')
    } catch (e) {
      setLoadState('error')
    }
  }, [])

  useEffect(() => {
    void callFetch()
  }, [])

  if (loadState === 'loading') {
    return <div>Loading...</div>
  }
  if (loadState === 'error') {
    return <div>Internal server error</div>
  }
  return <>{children}</>
}
