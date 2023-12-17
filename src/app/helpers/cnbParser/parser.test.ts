import { CnbData, parseCnbDataString } from './parser'

const exampleDataString = `15 Dec 2023 #242
Country|Currency|Amount|Code|Rate
Australia|dollar|1|AUD|15.004
Brazil|real|1|BRL|4.528
Bulgaria|lev|1|BGN|12.516
Canada|dollar|1|CAD|16.710
China|renminbi|1|CNY|3.147
Denmark|krone|1|DKK|3.283
EMU|euro|1|EUR|24.480
Hongkong|dollar|1|HKD|2.865
Hungary|forint|100|HUF|6.401
Iceland|krona|100|ISK|16.266
IMF|SDR|1|XDR|29.936
India|rupee|100|INR|26.925
Indonesia|rupiah|1000|IDR|1.444
Israel|new shekel|1|ILS|6.096
Japan|yen|100|JPY|15.787
Malaysia|ringgit|1|MYR|4.788
Mexico|peso|1|MXN|1.294
New Zealand|dollar|1|NZD|13.906
Norway|krone|1|NOK|2.139
Philippines|peso|100|PHP|40.177
Poland|zloty|1|PLN|5.682
Romania|leu|1|RON|4.925
Singapore|dollar|1|SGD|16.818
South Africa|rand|1|ZAR|1.226
South Korea|won|100|KRW|1.720
Sweden|krona|1|SEK|2.183
Switzerland|franc|1|CHF|25.801
Thailand|baht|100|THB|64.215
Turkey|lira|1|TRY|0.770
United Kingdom|pound|1|GBP|28.522
USA|dollar|1|USD|22.364
`

const result = {
  revision: { date: new Date('15 Dec 2023'), revisionId: '242' },
  currencyData: {
    AUD: { currency: 'dollar', country: 'Australia', amount: 1, rate: 15.004 },
    BRL: { currency: 'real', country: 'Brazil', amount: 1, rate: 4.528 },
    BGN: { currency: 'lev', country: 'Bulgaria', amount: 1, rate: 12.516 },
    CAD: { currency: 'dollar', country: 'Canada', amount: 1, rate: 16.71 },
    CNY: { currency: 'renminbi', country: 'China', amount: 1, rate: 3.147 },
    DKK: { currency: 'krone', country: 'Denmark', amount: 1, rate: 3.283 },
    EUR: { currency: 'euro', country: 'EMU', amount: 1, rate: 24.48 },
    HKD: { currency: 'dollar', country: 'Hongkong', amount: 1, rate: 2.865 },
    HUF: { currency: 'forint', country: 'Hungary', amount: 100, rate: 6.401 },
    ISK: { currency: 'krona', country: 'Iceland', amount: 100, rate: 16.266 },
    XDR: { currency: 'SDR', country: 'IMF', amount: 1, rate: 29.936 },
    INR: { currency: 'rupee', country: 'India', amount: 100, rate: 26.925 },
    IDR: { currency: 'rupiah', country: 'Indonesia', amount: 1000, rate: 1.444 },
    ILS: { currency: 'new shekel', country: 'Israel', amount: 1, rate: 6.096 },
    JPY: { currency: 'yen', country: 'Japan', amount: 100, rate: 15.787 },
    MYR: { currency: 'ringgit', country: 'Malaysia', amount: 1, rate: 4.788 },
    MXN: { currency: 'peso', country: 'Mexico', amount: 1, rate: 1.294 },
    NZD: { currency: 'dollar', country: 'New Zealand', amount: 1, rate: 13.906 },
    NOK: { currency: 'krone', country: 'Norway', amount: 1, rate: 2.139 },
    PHP: { currency: 'peso', country: 'Philippines', amount: 100, rate: 40.177 },
    PLN: { currency: 'zloty', country: 'Poland', amount: 1, rate: 5.682 },
    RON: { currency: 'leu', country: 'Romania', amount: 1, rate: 4.925 },
    SGD: { currency: 'dollar', country: 'Singapore', amount: 1, rate: 16.818 },
    ZAR: { currency: 'rand', country: 'South Africa', amount: 1, rate: 1.226 },
    KRW: { currency: 'won', country: 'South Korea', amount: 100, rate: 1.72 },
    SEK: { currency: 'krona', country: 'Sweden', amount: 1, rate: 2.183 },
    CHF: { currency: 'franc', country: 'Switzerland', amount: 1, rate: 25.801 },
    THB: { currency: 'baht', country: 'Thailand', amount: 100, rate: 64.215 },
    TRY: { currency: 'lira', country: 'Turkey', amount: 1, rate: 0.77 },
    GBP: { currency: 'pound', country: 'United Kingdom', amount: 1, rate: 28.522 },
    USD: { currency: 'dollar', country: 'USA', amount: 1, rate: 22.364 },
  },
} satisfies CnbData

describe('Parser', () => {
  it('should parse correctly', () => {
    expect(parseCnbDataString(exampleDataString)).toEqual(result)
  })
})
