import { OneOf } from 'common'

export const ErrorCode = {
  InternalServerError: 500,
} as const
export type ErrorCode = OneOf<typeof ErrorCode>
