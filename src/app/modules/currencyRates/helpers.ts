// TODO

import { parseCnbDataString } from '../../helpers/cnbParser/parser'
import { CurrencyData } from '../../types/ExchangeRatesData'

export const fetchCnbData = async () => {
  return parseCnbDataString(`15 Dec 2023 #242
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
`)
}

export const convertFromCurrency = (amount: number, currencyData: CurrencyData) =>
  (currencyData.amount * amount) / currencyData.rate
