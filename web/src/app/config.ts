import { getCnbData } from 'common'

const connectServerUrl = (...args: string[]) => [process.env.REACT_APP_SERVER, ...args].join('/')

export const config = {
  fetchUrls: {
    getCnbData: connectServerUrl(getCnbData),
  },
}
