import dotenv from 'dotenv'

dotenv.config()

export const config = {
  port: process.env.PORT,
  webUrl: process.env.WEB_URL,
}
