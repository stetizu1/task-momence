export const envParseNumber = (value: string, defaultValue?: number) => {
  const parsed = Number(process.env[value])
  if (!parsed && defaultValue) return defaultValue
  if (Number.isNaN(parsed)) {
    throw new Error(`Unable to parse env ${value}`)
  }
  return parsed
}
